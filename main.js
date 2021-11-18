import Map from './charts/Map.js';

d3.csv("data/bcdemographics.csv", d3.autoType).then(demographics => {
    d3.csv("data/bcschools.csv", d3.autoType).then(schools => {
        d3.csv("data/bcStudentsbyState.csv", d3.autoType).then(states => {
            d3.json("data/us-states.json", d3.autoType).then(statemap => {
                //console.log(demographics)
                //console.log(schools)
                console.log(states)

                const label = document.getElementsByTagName("span")[0]
                label.innerHTML = "Select Year"

                const map1976 = Map(".map-1976", states, statemap, 1976)
                const map2020 = Map(".map-2020", states, statemap, 2020)

                map1976.on("click", (clicked) => {
                    let filtered = states.filter(d => d.Location == clicked)
                    let values = filtered.map(d => d.Value)

                    document.getElementById("state-name").innerHTML = clicked

                    document.getElementById("state-info").innerHTML = `1976: ${values[9]}<br>
                        1980: ${values[8]}<br>
                        1985: ${values[7]}<br>
                        1990: ${values[6]}<br>
                        1995: ${values[5]}<br>
                        2000: ${values[4]}<br>
                        2005: ${values[3]}<br>
                        2010: ${values[2]}<br>
                        2015: ${values[1]}<br>
                        2020: ${values[0]}`
                })

                map2020.on("click", (clicked) => {
                    let filtered = states.filter(d => d.Location == clicked)
                    let values = filtered.map(d => d.Value)

                    document.getElementById("state-name").innerHTML = clicked

                    document.getElementById("state-info").innerHTML = `1976: ${values[9]}<br>
                        1980: ${values[8]}<br>
                        1985: ${values[7]}<br>
                        1990: ${values[6]}<br>
                        1995: ${values[5]}<br>
                        2000: ${values[4]}<br>
                        2005: ${values[3]}<br>
                        2010: ${values[2]}<br>
                        2015: ${values[1]}<br>
                        2020: ${values[0]}`
                })
            })
        })
    })
})