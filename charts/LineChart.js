
export default function LineChart(data) {
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
 
    const margin = ({top: 20, right: 20, bottom: 40, left: 50});
    const w = 600 - margin.left - margin.right;
    const h = 350 - margin.top - margin.bottom;

    let male = data.map(d => d.Male)
    let female = data.map(d => d.Female)
    let all = male.concat(female)


    var svg = d3.selectAll('.line-chart')
    .append("svg")
        .attr("width", w + margin.left + margin.right)
        .attr("height", h + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + ","+ margin.top + ")");

    var xScale = d3.scaleLinear()
        .domain(d3.extent(data, d=>d.Year))
        .nice()
        .range([0,w])
    
    var yScale = d3.scaleLinear()
        .domain(d3.extent(all))
        .nice()
        .range([h,0])
        
    var xAxis = d3.axisBottom()
        .scale(xScale)
        .tickFormat(d3.format("d"))

    var yAxis = d3.axisLeft()
        .scale(yScale)
        .ticks(null, ".0f");

    var xAxisGroup = svg.append("g")
        .attr('class', 'axis x-axis')
        .attr("transform", `translate(0, ${h})`)
        .call(xAxis)
        .call(g => g.select(".domain").remove())
        .selectAll(".tick line")
        .clone()
        .attr("y1", -h)
        .attr('y2', 0)
        .attr("stroke-opacity", 0.1);

    var yAxisGroup = svg.append('g')
        .attr('class', 'axis y-axis')
        .call(yAxis)
        .call(g => g.select(".domain").remove())
        .selectAll(".tick line")
        .clone()
        .attr("x2", w)
        .attr("stroke-opacity", 0.1);
        

    yAxisGroup.call(g=>
    g.append("text")
        .attr('x', 0)
        .attr('y', 5)
        .attr('text-anchor', 'start')
        .attr('font-size',14)
        .attr('fill', 'black')
        .text("Number of Students")
        .call(halo)
    );

    xAxisGroup.call(g=>
    g.append("text")
        .attr('x', w)
        .attr('y', -5)
        .attr('text-anchor', 'end')
        .attr('font-size',14)
        .attr('fill', 'black')
        .text("Year")
         .call(halo)
    );

    const line = d3.line()
        .curve(d3.curveCatmullRom)
        .x(d => xScale(d.Year))
        .y(d => yScale(d.Male));
  
    const line2 = d3.line()
        .curve(d3.curveCatmullRom)
        .x(d => xScale(d.Year))
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
        
    var circle = svg.selectAll('circle')
        .data(data)
        .join('circle')
        .attr("class", "circles")
        .attr('cx', d=>xScale(d.Year))
        .attr('cy', d=>yScale(d.Male))
        .attr('r', 4)
        .attr('stroke', 'white')
        .attr('fill', 'lightskyblue');
  
    var circle2 = svg.selectAll('circle2')
        .data(data)
        .join('circle')
        .attr("class", "circles")
        .attr('cx', d=>xScale(d.Year))
        .attr('cy', d=>yScale(d.Female))
        .attr('r', 4)
        .attr('stroke', 'white')
        .attr('fill', 'pink');
        
    var labels1 = svg.selectAll(".text")
        .data(data)
        .enter()
        .append("text")
        .attr('x', d=>xScale(d.Year) - 10)
        .attr('y', d=>yScale(d.Male) - 10)
        .text(d=>d.Male)
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
        .attr('x', d=>xScale(d.Year) - 10)
        .attr('y', d=>yScale(d.Female) + 20)
        .text(d=>d.Female)
        .attr('font-size', 12)
        .each(position)
        .attr('fill', 'none')
        .call(halo); 

    labels2.attr("fill", 'none');
    labels2.transition()
        .delay((d, i) => length(line(data.slice(0, i + 1))) / l * (5000))
        .attr("opacity", 1)
        .attr("fill", 'black');

};

