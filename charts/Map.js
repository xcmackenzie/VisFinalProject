
export default function Map(container, data, statemap, year, domain) {

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
        .domain(domain)
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

    // Zoom
    const zoom = d3.zoom()
        .scaleExtent([1, 8])
        .translateExtent([[0, 0], [width, height]])
        .on("zoom", (event, d) => zoomed(event))

    function zoomed(event) {
        svg.selectAll("path")
            .attr("transform", event.transform)

        svg.selectAll("rect")
            .attr("transform", event.transform)
    }

    //svg.call(zoom)

    // Update coloring

    year = parseInt(year)

    var filtered = data.filter(d => d.Year == year)

    for (const feat of statemap.features) {
        var state = feat.properties.name
        for (const object of filtered) {
            var data_state = object.Location
            if (state == data_state) {
                feat.properties.Value = object.Value
            }
        }
    }

    map.transition()
        .attr("fill", d => colorScale(d.properties.Value))
        .style("stroke", "midnightblue")
        .style("stroke-width", "0.5px")

    function on_events(data) {

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
                        Number of Students: N/A <br>`
                    }
                    else {
                        return `State: ${d.properties.name} <br>
                        Number of Students: ${d3.format(",")(d.properties.Value)} <br>
                        Percent of Students:  ${d3.format("%")(d.properties.Percent)} `
                        
                    }
                })
                
            d3.select('#map-tooltip').classed("hidden", false)
                
            })
            .on("mouseleave", (event, d) => {

                filtered = data.filter(d => d.Year == this.year)

                for (const feat of statemap.features) {
                    var state = feat.properties.name
                    for (const object of filtered) {
                        var data_state = object.Location
                        if (state == data_state) {
                            feat.properties.Value = object.Value
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

    // Click listener and click function
    const listeners = {"click": null}

    function clicked(d) {
        listeners["click"](d.properties.name)
    }

    function on(event, listener) {
        listeners[event] = listener
    }
    
    return {
        on_events,
        on,
        year
    }
}