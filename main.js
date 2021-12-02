import Map from './charts/Map.js';
import LineChart from './charts/LineChart.js';

d3.csv("data/bcdemographics.csv", d3.autoType).then(demographics => {
    d3.csv("data/bcschools.csv", d3.autoType).then(schools => {
        d3.csv("data/bcStudentsbyState.csv", d3.autoType).then(states => {
            d3.json("data/us-states.json", d3.autoType).then(statemap => {

                //console.log(demographics)
                //console.log(schools)
                //console.log(states)

                // Line Chart 
                const demoLine = LineChart(demographics)

                // Fix labels
                var labels = document.getElementsByClassName("vega-bind-name")
                for (const label of labels) {
                    if (label.innerHTML == "Yr_Year") {
                        label.innerHTML = "Select Year:"
                    }
                }

                let line = true
                let button = document.getElementById("button")         
                d3.select("#button").on('click', () => {
                    line = !line
                    if (line) {
                        // Switch to line chart
                        button.innerText = "Show Percentage Breakdown"
                    }
                    else {
                        // Switch to stacked area
                        button.innerText = "Show Enrollment Numbers"
                    }
                })

                // Maps
                var filtered = states.filter(d => d.Year == 1976 || d.Year == 2020)
                var domain = d3.extent(filtered, d => d.Value)

                const map1976 = Map(".map-1976", states, statemap, 1976, domain)
                map1976.on_events(states)
                const map2020 = Map(".map-2020", states, statemap, 2020, domain)
                map2020.on_events(states)

                map1976.on("click", (clicked) => {
                    let filtered = states.filter(d => d.Location == clicked)
                    let values = filtered.map(d => d.Value)

                    document.getElementById("state-name").innerHTML = clicked

                    document.getElementById("state-info").innerHTML = `1976: ${values[9]} students<br>
                        1980: ${values[8]} students<br>
                        1985: ${values[7]} students<br>
                        1990: ${values[6]} students<br>
                        1995: ${values[5]} students<br>
                        2000: ${values[4]} students<br>
                        2005: ${values[3]} students<br>
                        2010: ${values[2]} students<br>
                        2015: ${values[1]} students<br>
                        2020: ${values[0]} students`
                })

                map2020.on("click", (clicked) => {
                    let filtered = states.filter(d => d.Location == clicked)
                    let values = filtered.map(d => d.Value)

                    document.getElementById("state-name").innerHTML = clicked

                    document.getElementById("state-info").innerHTML = `1976: ${values[9]} students<br>
                        1980: ${values[8]} students<br>
                        1985: ${values[7]} students<br>
                        1990: ${values[6]} students<br>
                        1995: ${values[5]} students<br>
                        2000: ${values[4]} students<br>
                        2005: ${values[3]} students<br>
                        2010: ${values[2]} students<br>
                        2015: ${values[1]} students<br>
                        2020: ${values[0]} students`
                })
            })
        })
    })
})