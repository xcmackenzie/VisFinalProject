
export default function PieChart() {

    let pieCharts = {

      "data": {
        "url": "https://raw.githubusercontent.com/xcmackenzie/VisFinalProject/master/data/bcschools.csv"
      },
      "hconcat": [
        {
          "selection": {
          "school_selector": {
            "type": "single",
            "fields": ["School"],
            "bind": {
              "input": "select",
              "options": [
                "All",
                "MCAS",
                "Lynch",
                "CSOM",
                "Nursing",
                "Woods"
              ],
              "labels": [
                "All",
                "MCAS",
                "Lynch",
                "CSOM",
                "Nursing",
                "Woods"
              ],
            "name": "Select School:"
            }
          }
        },
        "title": "1985",
        "width": 75,
        "height": 75,
        "transform": [
          {"filter": {"selection": "school_selector"}},
          {"filter": "datum.Type != \"Total\""},
          {"filter": "datum.Year == 1985"}
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
          "selection": {
          "school_selector": {
            "type": "single",
            "fields": ["School"],
            "bind": {
              "input": "select",
              "options": [
                "All",
                "MCAS",
                "Lynch",
                "CSOM",
                "Nursing",
                "Woods"
              ],
              "labels": [
                "All",
                "MCAS",
                "Lynch",
                "CSOM",
                "Nursing",
                "Woods"
              ],
            "name": "Select School:"
            }
          }
        },
        "title": "1990",
        "width": 75,
        "height": 75,
        "transform": [
          {"filter": {"selection": "school_selector"}},
          {"filter": "datum.Type != \"Total\""},
          {"filter": "datum.Year == 1990"}
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
          "selection": {
          "school_selector": {
            "type": "single",
            "fields": ["School"],
            "bind": {
              "input": "select",
              "options": [
                "All",
                "MCAS",
                "Lynch",
                "CSOM",
                "Nursing",
                "Woods"
              ],
              "labels": [
                "All",
                "MCAS",
                "Lynch",
                "CSOM",
                "Nursing",
                "Woods"
              ],
            "name": "Select School:"
            }
          }
        },
        "title": "1995",
        "width": 75,
        "height": 75,
        "transform": [
          {"filter": {"selection": "school_selector"}},
          {"filter": "datum.Type != \"Total\""},
          {"filter": "datum.Year == 1995"}
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
          "selection": {
          "school_selector": {
            "type": "single",
            "fields": ["School"],
            "bind": {
              "input": "select",
              "options": [
                "All",
                "MCAS",
                "Lynch",
                "CSOM",
                "Nursing",
                "Woods"
              ],
              "labels": [
                "All",
                "MCAS",
                "Lynch",
                "CSOM",
                "Nursing",
                "Woods"
              ],
            "name": "Select School:"
            }
          }
        },
        "title": "2000",
        "width": 75,
        "height": 75,
        "transform": [
          {"filter": {"selection": "school_selector"}},
          {"filter": "datum.Type != \"Total\""},
          {"filter": "datum.Year == 2000"}
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
          "selection": {
          "school_selector": {
            "type": "single",
            "fields": ["School"],
            "bind": {
              "input": "select",
              "options": [
                "All",
                "MCAS",
                "Lynch",
                "CSOM",
                "Nursing",
                "Woods"
              ],
              "labels": [
                "All",
                "MCAS",
                "Lynch",
                "CSOM",
                "Nursing",
                "Woods"
              ],
            "name": "Select School:"
            }
          }
        },
        "title": "2000",
        "width": 75,
        "height": 75,
        "transform": [
          {"filter": {"selection": "school_selector"}},
          {"filter": "datum.Type != \"Total\""},
          {"filter": "datum.Year == 2000"}
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
          "selection": {
          "school_selector": {
            "type": "single",
            "fields": ["School"],
            "bind": {
              "input": "select",
              "options": [
                "All",
                "MCAS",
                "Lynch",
                "CSOM",
                "Nursing",
                "Woods"
              ],
              "labels": [
                "All",
                "MCAS",
                "Lynch",
                "CSOM",
                "Nursing",
                "Woods"
              ],
            "name": "Select School:"
            }
          }
        },
        "title": "2005",
        "width": 75,
        "height": 75,
        "transform": [
          {"filter": {"selection": "school_selector"}},
          {"filter": "datum.Type != \"Total\""},
          {"filter": "datum.Year == 2005"}
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
          "selection": {
          "school_selector": {
            "type": "single",
            "fields": ["School"],
            "bind": {
              "input": "select",
              "options": [
                "All",
                "MCAS",
                "Lynch",
                "CSOM",
                "Nursing",
                "Woods"
              ],
              "labels": [
                "All",
                "MCAS",
                "Lynch",
                "CSOM",
                "Nursing",
                "Woods"
              ],
            "name": "Select School:"
            }
          }
        },
        "title": "2010",
        "width": 75,
        "height": 75,
        "transform": [
          {"filter": {"selection": "school_selector"}},
          {"filter": "datum.Type != \"Total\""},
          {"filter": "datum.Year == 2010"}
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
          "selection": {
          "school_selector": {
            "type": "single",
            "fields": ["School"],
            "bind": {
              "input": "select",
              "options": [
                "All",
                "MCAS",
                "Lynch",
                "CSOM",
                "Nursing",
                "Woods"
              ],
              "labels": [
                "All",
                "MCAS",
                "Lynch",
                "CSOM",
                "Nursing",
                "Woods"
              ],
            "name": "Select School:"
            }
          }
        },
        "title": "2015",
        "width": 75,
        "height": 75,
        "transform": [
          {"filter": {"selection": "school_selector"}},
          {"filter": "datum.Type != \"Total\""},
          {"filter": "datum.Year == 2015"}
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
          "selection": {
          "school_selector": {
            "type": "single",
            "fields": ["School"],
            "bind": {
              "input": "select",
              "options": [
                "All",
                "MCAS",
                "Lynch",
                "CSOM",
                "Nursing",
                "Woods"
              ],
              "labels": [
                "All",
                "MCAS",
                "Lynch",
                "CSOM",
                "Nursing",
                "Woods"
              ],
            "name": "Select School:"
            }
          }
        },
        "title": "2020",
        "width": 75,
        "height": 75,
        "transform": [
          {"filter": {"selection": "school_selector"}},
          {"filter": "datum.Type != \"Total\""},
          {"filter": "datum.Year == 2020"}
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

    function embed(container) {
      vegaEmbed(container, pieCharts)
    }

    return {
        embed
    }
}