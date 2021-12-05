
export default function GenderChart(data) {

    let format = d3.format(",")
    
    console.log(data);

    function position(d) {
        const t = d3.select(this);
        switch (d.side) {
        case "top":
            t.attr("text-anchor", "middle").attr("dy", "-0.7em");
            break;
        case "right":
            t.attr("dx", "0.5em")
            .attr("dy", "0.32em")
            .attr("text-anchor", "start");
            break;
        case "bottom":
            t.attr("text-anchor", "middle").attr("dy", "1.4em");
            break;
        case "left":
            t.attr("dx", "-0.5em")
            .attr("dy", "0.32em")
            .attr("text-anchor", "end");
            break;
        }
    }

    function halo(text) {
        text
        .select(function() {
            return this.parentNode.insertBefore(this.cloneNode(true), this);
        })
        .attr("fill", "none")
        .attr("stroke", "b")
        .attr("stroke-width", 4)
        .attr("stroke-linejoin", "round");
    }
 
    const margin = ({top: 40, right: 100, bottom: 50, left: 50});
    const width = 620 - margin.left - margin.right;
    const height = 350 - margin.top - margin.bottom;

    var svg = d3.selectAll('.line-chart')
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + ","+ margin.top + ")");

    var years = data.map(d => d.Year)

    var xScaleLine = d3.scaleLinear()
        .domain(d3.extent(data, d=>d.Year))
        .nice()
        .range([0,width])
    
    var xScaleBar = d3.scaleBand()
        .domain(years)
        .range([0,width])
        .padding([0.2])
    
    var yScale = d3.scaleLinear()
        .range([height,0])
        
    var xAxis = d3.axisBottom()
        .scale(xScaleLine)
        .tickFormat(d3.format("d"))

    var yAxis = d3.axisLeft()
        .scale(yScale)
        .ticks(null, ",.0f");

    var xAxisGroup = svg.append("g")
        .attr('class', 'axis x-axis')
        .call(xAxis)
        .attr("transform", `translate(0, ${height})`)

    var yAxisGroup = svg.append('g')
        .call(yAxis)
        .attr('class', 'axis y-axis')
        
    yAxisGroup.append("text")
        .attr('x', -20)
        .attr('y', -15)
        .attr('text-anchor', 'start')
        .attr('font-size',12)
        .attr('fill', 'black')
        .attr('font-weight', 'bold')
        .text("Number of Students")
        .call(halo)
    ;

    xAxisGroup.append("text")
        .attr('x', width / 2)
        .attr('y', 40)
        .attr('text-anchor', 'end')
        .attr('font-size', 12)
        .attr('font-weight', 'bold')
        .attr('fill', 'black')
        .text("Year")
        .call(halo)
    ;

    svg.append("circle")
        .attr("cx", 490)
        .attr("cy", 15)
        .attr("r", 4)
        .style("fill", "pink")

    svg.append("circle")
        .attr("cx", 490)
        .attr("cy", 30)
        .attr("r", 4)
        .style("fill", "lightskyblue")

    svg.append("text")
        .attr("x", 500)
        .attr("y", 16)
        .text("Female")
        .style("font-size", "11px")
        .attr("alignment-baseline", "middle")

    svg.append("text")
        .attr("x", 500)
        .attr("y", 31)
        .text("Male")
        .style("font-size", "11px")
        .attr("alignment-baseline", "middle")

    function updateLine(data) {

        svg.selectAll("rect").remove()
        svg.selectAll(".grid").remove()

        let male = data.map(d => d.Male)
        let female = data.map(d => d.Female)
        let all = male.concat(female)

        yScale.domain(d3.extent(all))
            .nice()

        xAxis.scale(xScaleLine)

        xAxisGroup.transition()
            .call(xAxis)

        yAxisGroup.transition()
            .call(yAxis)

        xAxisGroup.call(g => g.select(".domain").remove())
            .selectAll(".tick line")
            .clone()
            .attr('class', 'grid')
            .attr("y1", -height)
            .attr('y2', 0)
            .attr("stroke-opacity", 0.1);

        yAxisGroup.call(g => g.select(".domain").remove())
            .selectAll(".tick line")
            .clone()
            .attr('class', 'grid')
            .attr("x2", width)
            .attr("stroke-opacity", 0.1);

        const line = d3.line()
            .curve(d3.curveCatmullRom)
            .x(d => xScaleLine(d.Year))
            .y(d => yScale(d.Male));

        const line2 = d3.line()
            .curve(d3.curveCatmullRom)
            .x(d => xScaleLine(d.Year))
            .y(d => yScale(d.Female));
            
        function length(path) {
            return d3.create("svg:path").attr("d", path).node().getTotalLength();
        }

        const l = length(line(data));

        const l2 = length(line2(data));

        var path = svg.append("path")
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', 'lightskyblue')
            .attr('stroke-width', 3)
            .attr("d", line)
            .attr("stroke-dasharray", `0,${l}`)
            .transition()
            .duration(5000)
            .ease(d3.easeLinear)
            .attr("stroke-dasharray", `${l},${l}`);

        var path = svg.append("path")
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', 'pink')
            .attr('stroke-width', 3)
            .attr("d", line2)
            .attr("stroke-dasharray", `0,${l2}`)
            .transition()
            .duration(5000)
            .ease(d3.easeLinear)
            .attr("stroke-dasharray", `${l2},${l2}`);
            
        var circle = svg.selectAll('circle1')
            .data(data)
            .join('circle')
            .attr("class", "circles")
            .transition()
            .attr('cx', d=>xScaleLine(d.Year))
            .attr('cy', d=>yScale(d.Male))
            .attr('r', 4)
            .attr('stroke', 'white')
            .attr('fill', 'lightskyblue');

        var circle2 = svg.selectAll('circle2')
            .data(data)
            .join('circle')
            .attr("class", "circles")
            .transition()
            .attr('cx', d=>xScaleLine(d.Year))
            .attr('cy', d=>yScale(d.Female))
            .attr('r', 4)
            .attr('stroke', 'white')
            .attr('fill', 'pink');
            
        var labels1 = svg.selectAll(".text")
            .data(data)
            .enter()
            .append("text")
            .attr('x', d=>xScaleLine(d.Year) - 10)
            .attr('y', d=>yScale(d.Male) - 10)
            .attr('class', 'labels')
            .text(d=>format(d.Male))
            .attr('font-size', 12)
            .each(position)
            .attr('fill', 'none')
            .call(halo); 
            
        labels1.attr("fill", 'none');
        labels1.transition()
            .delay((d, i) => length(line(data.slice(0, i + 1))) / l * (5000))
            .attr("opacity", 1)
            .attr("fill", 'black');

        var labels2 = svg.selectAll(".text")
            .data(data)
            .enter()
            .append("text")
            .attr('x', d=>xScaleLine(d.Year) - 10)
            .attr('y', d=>yScale(d.Female) + 20)
            .attr('class', 'labels')
            .text(d=>format(d.Female))
            .attr('font-size', 12)
            .each(position)
            .attr('fill', 'none')
            .call(halo); 

        labels2.attr("fill", 'none');
        labels2.transition()
            .delay((d, i) => length(line(data.slice(0, i + 1))) / l * (5000))
            .attr("opacity", 1)
            .attr("fill", 'black');
    }

    function updateBar(data) {
        svg.selectAll("path").remove()
        svg.selectAll(".circles").remove()
        svg.selectAll(".labels").remove()
        svg.selectAll(".grid").remove()

        var subgroups = data.columns.slice(1).slice(1, 3)
        var totals = data.map(d => d.Male + d.Female)

        yScale.domain([0, d3.max(totals)])
            .nice()

        xAxis.scale(xScaleBar)

        xAxisGroup.transition()
            .call(xAxis)

        yAxisGroup.transition()
            .call(yAxis)

        yAxisGroup.call(g => g.select(".domain").remove())
            .selectAll(".tick line")
            .clone()
            .attr('class', 'grid')
            .attr("x2", width)
            .attr("stroke-opacity", 0.1);

        var color = d3.scaleOrdinal()
            .domain(subgroups)
            .range(['lightskyblue', 'pink'])

        var stackedData = d3.stack()
            .keys(subgroups)
            (data)

        svg.append("g")
            .selectAll("g")
            .data(stackedData)
            .enter()
            .append("g")
            .attr("fill", d => color(d.key))
            .selectAll("rect")
            .data(d => d)
            .enter()
            .append("rect")
            .transition()
            .attr("x", d => xScaleBar(d.data.Year))
            .attr("y", d => yScale(d[1]))
            .attr("height", d => yScale(d[0]) - yScale(d[1]))
            .attr("width", xScaleBar.bandwidth())

        let bars = svg.selectAll("rect")
        
        bars.on("mouseenter", (event, d) => {

            let pos = d3.pointer(event, window)

            d3.select("#map-tooltip")
                .style('left', pos[0] + "px")
                .style('top', pos[1] + "px")
                .html(() => {
                    var male_percent = (d.data.Male / (d.data)['Total Enrollment']) * 100
                    return `
                    Year: ${d.data.Year} <br>
                    Male (Percent): ${male_percent.toFixed(2)}% <br>
                    Female (Percent): ${(100 - male_percent).toFixed(2)}%`
                })

                d3.select('#map-tooltip').classed("hidden", false)

            })
            .on("mouseleave", (event, d) => {
                d3.select("#map-tooltip").classed("hidden", true)
            })
    }

    return {
        updateLine,
        updateBar
    }
};

