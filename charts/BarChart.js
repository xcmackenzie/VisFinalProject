/* global d3 */
let margin = { top: 40, right: 20, bottom: 40, left: 90 },
  width =
    document.querySelector("#chart-area").clientWidth -
    margin.left -
    margin.right,
  height = 400 - margin.top - margin.bottom;

width = width > 600 ? 600 : width;

let svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// AXIS

let x = d3
  .scaleBand()
  .range([0, width])
  .paddingInner(0.1);

let y = d3.scaleLinear().range([height, 0]);

let xAxis = d3
  .axisBottom()
  .scale(x)
  .tickFormat(function(d) {
    return shortenString(d, 20);
  });
let selected=null, xDomain, data; 
const typeScale = d3.scaleOrdinal()
    .range(d3.schemeTableau10);
let yAxis = d3.axisLeft().scale(y);

let xAxisGroup = svg.append("g").attr("class", "x-axis axis");

let yAxisGroup = svg.append("g").attr("class", "y-axis axis");

function renderBarChart(data) {
  
    var keys = selected? [selected] : data.columns.slice(1); //first value is the date
    var stack = d3.stack()
        .keys(keys)
        .order(d3.stackOrderNone)
        .offset(d3.stackOffsetNone);

    var series = stack(data);
      typeScale.domain(keys);

  x.domain(
    data.map(function(d) {
      return d.Location;
    })
  );
  y.domain([
    0,
    d3.max(data, function(d) {
      return d.Visitors;
    })
  ]);

  let bars = svg
    .selectAll(".bar")
    .remove()
    .exit()
    .data(data);

  bars
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", function(d) {
      return x(d.Location);
    })
    .attr("y", function(d) {
      return y(d.Visitors);
    })
    .attr("height", function(d) {
      return height - y(d.Visitors);
    })
    .attr("width", x.bandwidth())
    .on("mouseover", function(event, d) {
      let xPosition =
        margin.left +
        width / 2 +
        parseFloat(d3.select(this).attr("x")) +
        x.bandwidth() / 2;
      let yPosition =
        margin.top + parseFloat(d3.select(this).attr("y")) / 2 + height;
      d3.select("#tooltip")
        .style("left", xPosition + "px")
        .style("top", yPosition + "px")
        .select("#value")
        .text(d.Visitors);

      d3.select("#tooltip").classed("hidden", false);
    })
    .on("mouseout", function(d) {
      d3.select("#tooltip").classed("hidden", true);
    });
  


  xAxisGroup = svg
    .select(".x-axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  yAxisGroup = svg.select(".y-axis").call(yAxis);

  svg.select("text.axis-title").remove();
  svg
    .append("text")
    .attr("class", "axis-title")
    .attr("x", -5)
    .attr("y", -15)
    .attr("dy", ".1em")
    .style("text-anchor", "end")
    .text("Number of Students");
}


function shortenString(content, maxLength) {
  let trimmedString = content.substr(0, maxLength);
  trimmedString = trimmedString.substr(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
  );

  return trimmedString;
}


