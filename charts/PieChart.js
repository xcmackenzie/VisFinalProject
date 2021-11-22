
export default function PieChart() {

    let all = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "data": {
          "url": "https://raw.githubusercontent.com/xcmackenzie/VisFinalProject/master/data/bcschools.csv",
          "format": {
            "parse": {
              "Year": "number",
              "Value": "number"
            }
          }},
        "hconcat": [
          {
            "title": "1985",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"All\""},
              {"filter": "datum.Year == 1985"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "1990",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"All\""},
              {"filter": "datum.Year == 1990"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "1995",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"All\""},
              {"filter": "datum.Year == 1995"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2000",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"All\""},
              {"filter": "datum.Year == 2000"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2005",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"All\""},
              {"filter": "datum.Year == 2005"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2010",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"All\""},
              {"filter": "datum.Year == 2010"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2015",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"All\""},
              {"filter": "datum.Year == 2015"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2020",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"All\""},
              {"filter": "datum.Year == 2020"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          }
        ]
      }
      
      let lynch = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "data": {
          "url": "https://raw.githubusercontent.com/xcmackenzie/VisFinalProject/master/data/bcschools.csv",
          "format": {
            "parse": {
              "Year": "number",
              "Value": "number"
            }
          }},
        "hconcat": [
          {
            "title": "1985",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Lynch\""},
              {"filter": "datum.Year == 1985"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "1990",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Lynch\""},
              {"filter": "datum.Year == 1990"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "1995",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Lynch\""},
              {"filter": "datum.Year == 1995"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2000",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Lynch\""},
              {"filter": "datum.Year == 2000"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2005",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Lynch\""},
              {"filter": "datum.Year == 2005"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2010",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Lynch\""},
              {"filter": "datum.Year == 2010"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2015",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Lynch\""},
              {"filter": "datum.Year == 2015"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2020",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Lynch\""},
              {"filter": "datum.Year == 2020"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          }
        ]
      }

    let csom = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "data": {
          "url": "https://raw.githubusercontent.com/xcmackenzie/VisFinalProject/master/data/bcschools.csv",
          "format": {
            "parse": {
              "Year": "number",
              "Value": "number"
            }
          }},
        "hconcat": [
          {
            "title": "1985",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"CSOM\""},
              {"filter": "datum.Year == 1985"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "1990",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"CSOM\""},
              {"filter": "datum.Year == 1990"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "1995",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"CSOM\""},
              {"filter": "datum.Year == 1995"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2000",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"CSOM\""},
              {"filter": "datum.Year == 2000"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2005",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"CSOM\""},
              {"filter": "datum.Year == 2005"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2010",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"CSOM\""},
              {"filter": "datum.Year == 2010"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2015",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"CSOM\""},
              {"filter": "datum.Year == 2015"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2020",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"CSOM\""},
              {"filter": "datum.Year == 2020"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          }
        ]
      }

    let nursing = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "data": {
          "url": "https://raw.githubusercontent.com/xcmackenzie/VisFinalProject/master/data/bcschools.csv",
          "format": {
            "parse": {
              "Year": "number",
              "Value": "number"
            }
          }},
        "hconcat": [
          {
            "title": "1985",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Nursing\""},
              {"filter": "datum.Year == 1985"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "1990",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Nursing\""},
              {"filter": "datum.Year == 1990"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "1995",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Nursing\""},
              {"filter": "datum.Year == 1995"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2000",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Nursing\""},
              {"filter": "datum.Year == 2000"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2005",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Nursing\""},
              {"filter": "datum.Year == 2005"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2010",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Nursing\""},
              {"filter": "datum.Year == 2010"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2015",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Nursing\""},
              {"filter": "datum.Year == 2015"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2020",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Nursing\""},
              {"filter": "datum.Year == 2020"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          }
        ]
      }

    let woods = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "data": {
          "url": "https://raw.githubusercontent.com/xcmackenzie/VisFinalProject/master/data/bcschools.csv",
          "format": {
            "parse": {
              "Year": "number",
              "Value": "number"
            }
          }},
        "hconcat": [
          {
            "title": "1985",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Woods\""},
              {"filter": "datum.Year == 1985"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "1990",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Woods\""},
              {"filter": "datum.Year == 1990"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "1995",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Woods\""},
              {"filter": "datum.Year == 1995"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2000",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Woods\""},
              {"filter": "datum.Year == 2000"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2005",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Woods\""},
              {"filter": "datum.Year == 2005"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2010",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Woods\""},
              {"filter": "datum.Year == 2010"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2015",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Woods\""},
              {"filter": "datum.Year == 2015"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2020",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"Woods\""},
              {"filter": "datum.Year == 2020"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          }
        ]
      }

      let mcas = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "data": {
          "url": "https://raw.githubusercontent.com/xcmackenzie/VisFinalProject/master/data/bcschools.csv",
          "format": {
            "parse": {
              "Year": "number",
              "Value": "number"
            }
          }},
        "hconcat": [
          {
            "title": "1985",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"MCAS\""},
              {"filter": "datum.Year == 1985"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "1990",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"MCAS\""},
              {"filter": "datum.Year == 1990"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "1995",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"MCAS\""},
              {"filter": "datum.Year == 1995"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2000",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"MCAS\""},
              {"filter": "datum.Year == 2000"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2005",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"MCAS\""},
              {"filter": "datum.Year == 2005"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2010",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"MCAS\""},
              {"filter": "datum.Year == 2010"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2015",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"MCAS\""},
              {"filter": "datum.Year == 2015"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          },
          {
            "title": "2020",
            "width": 75,
            "height": 75,
            "transform": [
              {"filter": "datum.School == \"MCAS\""},
              {"filter": "datum.Year == 2020"},
              {"filter": "datum.Type != \"Total\""}
            ],
            "mark": {"type": "arc", "tooltip": true},
            "encoding": {
              "theta": {
                "field": "Value",
                "type": "quantitative"
              },
              "color": {
                "field": "Type",
                "type": "nominal",
                "scale": {
                  "domain": ["Female", "Male"],
                  "range": ["pink", "lightskyblue"]
                }
              }
            }
          }
        ]
      }

    function update(container, school) {
        if (school == "all") {
            vegaEmbed(container, all)
        }
        else if (school == "mcas") {
            vegaEmbed(container, mcas)
        }
        else if (school == "lynch") {
            vegaEmbed(container, lynch)
        }
        else if (school == "csom") {
            vegaEmbed(container, csom)
        }
        else if (school == "nursing") {
            vegaEmbed(container, nursing)
        }
        else if (school == "woods") {
            vegaEmbed(container, woods)
        }
    }

    return {
        update
    }
}