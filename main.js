import Map from './charts/Map.js';
//import LineChart from './charts/LineChart.js';
import USMap from './charts/USMap.js';
import GenderChart from './charts/GenderChart.js';

d3.csv("data/bcdemographics.csv", d3.autoType).then(demographics => {
    d3.csv("data/bcschools.csv", d3.autoType).then(schools => {
        d3.csv("data/bcStudentsbyState.csv", d3.autoType).then(states => {
            d3.json("data/us-states.json", d3.autoType).then(statemap => {
                d3.csv("data/statepopulation.csv", d3.autoType).then(population => {
                    d3.csv("data/1980USpop.csv", d3.autoType).then(pop => {   
                //console.log(demographics)
                //console.log(schools)
                //console.log(states)

                // Line Chart 
                const genderChart = GenderChart(demographics)
                genderChart.updateLine(demographics)
                let line = true

                let button = document.getElementById("button")         
                d3.select("#button").on('click', () => {
                    line = !line
                    if (line) {
                        button.innerText = "Show Percentage Breakdown"
                        genderChart.updateLine(demographics)
                    }
                    else {
                        button.innerText = "Show Enrollment Numbers"
                        genderChart.updateBar(demographics)
                    }
                })

                // Fix labels
                var labels = document.getElementsByClassName("vega-bind-name")
                for (const label of labels) {
                    if (label.innerHTML == "Yr_Year") {
                        label.innerHTML = "Select Year:"
                    }
                }

                // Maps
                var filtered = states.filter(d => d.Year == 1980 || d.Year == 2020)
                var domain = d3.extent(filtered, d => d.Value)

                const mapUS = USMap(".map-us", population, statemap)
                mapUS.on_events()
                const map1980 = Map(".map-1980", states, statemap, 1980, domain)
                map1980.on_events(states)
                const map2020 = Map(".map-2020", states, statemap, 2020, domain)
                map2020.on_events(states)

                map1980.on("click", (clicked) => {
                    let filtered = states.filter(d => d.Location == clicked)
                    let filter2020 = filtered.filter(d => d.Year == 1980)
                    let values = filtered.map(d => d.Value)
                    let bcPercent = filter2020.map(d => d.Percent) *100

                    let usfilter = population.filter(d => d.State == clicked)
                    let usPercent = usfilter.map(d => d.Percent) *100

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
                    
                    document.getElementById("map-comp").innerHTML = 
                        `In 1980 ${usPercent}% of the US population is from ${clicked} compared to ${(bcPercent)}% of the BC student body`
                        
                })


                map2020.on("click", (clicked) => {
                    let filtered = states.filter(d => d.Location == clicked)
                    let filter2020 = filtered.filter(d => d.Year == 2020)
                    let values = filtered.map(d => d.Value)
                    let bcPercent = filter2020.map(d => d.Percent) *100

                    let usfilter = population.filter(d => d.State == clicked)
                    let usPercent = usfilter.map(d => d.Percent) *100
                    
                    
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
                        
                        document.getElementById("map-comp").innerHTML = 
                        `In 2020 ${usPercent}% of the US population is from ${clicked} compared to ${(bcPercent)}% of the BC student body`
                        
                        })
                    })
                })
            })
        })
    })
})