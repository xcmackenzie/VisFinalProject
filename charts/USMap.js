
export default function USMap(container, data, statemap) {

    // Create SVG
    let outerWidth = 400
    let outerHeight = 300
    let margin = {top: 10, bottom: 10, left: 10, right: 10}
    let width = outerWidth - margin.left - margin.right
    let height = outerHeight - margin.top - margin.bottom

    const svg = d3.select(container)
        .append("svg")
        .attr("class", "svg-map")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("transform", `translate(${margin.left}, ${margin.right})`)

    let colorScale = d3.scaleSqrt()
        .domain(d3.extent(data, d => d.Population))
        .range(["white", "#1f77b4"])

    // Draw Map
    const projection = d3.geoAlbersUsa()
        .fitExtent([[0, 0], [width, height]], statemap)
    
    const path = d3.geoPath()
        .projection(projection)

    const map = svg.selectAll("path")
        .append("g")
        .data(statemap.features)
        .enter()
        .append("path")
        .attr("d", path)

    // Update coloring

    for (const feat of statemap.features) {
        var state = feat.properties.name
        for (const object of data) {
            var data_state = object.State
            if (state == data_state) {
                feat.properties.Value = object.Population
            }
        }
    }

    map.transition()
        .attr("fill", d => colorScale(d.properties.Value))
        .style("stroke", "midnightblue")
        .style("stroke-width", "0.5px")

    function on_events() {

        map.on("mouseenter", (event, d) => {

            d3.select(event.currentTarget)
                    .transition()
                    .duration(100)
                    .attr("fill", "midnightblue")
        
            let pos = d3.pointer(event, window)
    
            d3.select("#map-tooltip")
                .style('left', pos[0] + "px")
                .style('top', pos[1] + "px")
                .html(() => {
                    if (d.properties.Value === null) {
                        return `State: ${d.properties.name} <br>
                        Population: N/A <br>`
                    }
                    else {
                        return `State: ${d.properties.name} <br>
                        Population: ${d3.format(",")(d.properties.Value)} <br>`
                    }
                })
                
            d3.select('#map-tooltip').classed("hidden", false)
                
            })
            .on("mouseleave", (event, d) => {

                for (const feat of statemap.features) {
                    var state = feat.properties.name
                    for (const object of data) {
                        var data_state = object.State
                        if (state == data_state) {
                            feat.properties.Value = object.Population
                        }
                    }
                }

                d3.select(event.currentTarget)
                    .transition()
                    .duration(100)
                    .attr("fill", d => colorScale(d.properties.Value))

                d3.select("#map-tooltip").classed("hidden", true)
            })
            .on("click", (event, d) => clicked(d))    
    }
    
    return {
        on_events
    }
}