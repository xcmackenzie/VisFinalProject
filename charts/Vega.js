var stacked_area = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Number of Students of Each Ethnicity by Year",
    "data": {"url": "data/bcethnicity.csv"},
    "width": 350,
    "height": 250,
    "transform": [
        {"filter": "datum.Source == \"BC\""}
        ],
    "params": [{
        "name": "grid",
        "select": "interval",
        "bind": "scales"
    }],
    "mark": {"type": "area", "tooltip": true},
    "encoding": {
        "x": {
            "field": "Year",
            "title": "Year",
            "type": "temporal"
        },
        "y": {
            "field": "Total",
            "title": "Total",
            "type": "quantitative"
        },
        "color": {
            "field": "Ethnicity",
            "type": "nominal",
            "scale": {"scheme": "set3"}
        },
        "tooltip": [
            {
                "field": "Ethnicity",
                "type": "nominal"
            },
            {
                "field": "Year",
                "type": "temporal",
                "timeUnit": "year",
                "title": "Year"
            },
            {
                "field": "Total",
                "type": "quantitative"
            },
            {
                "field": "Percent",
                "type": "quantitative"
            }
        ],
    }
}

var dot_plot = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Percentage of Students of Each Ethnicity at BC vs. in the US",
    "data": {"url": "data/bcethnicity.csv",
    "format": {
        "type": "csv",
        "parse": {
        "Year": "number"
        }
        }
    },
    "transform": [
        {"filter": "datum.Year == Yr_Year"}
    ],
    "width": 400,
    "height": 250,
    "encoding": {
        "x": {
            "field": "Percent",
            "type": "quantitative",
            "title": "Percent"
        },
        "y": {
            "field": "Ethnicity",
            "type": "nominal",
            "title": "Ethnicity",
            "axis": {
                "offset": 5,
                "ticks": false,
                "minExtent": 70,
                "domain": false
            }
        }
    },
    "layer": [
        {
        "mark": "line",
        "encoding": {
            "detail": {
            "field": "Ethnicity",
            "type": "nominal"
            },
        }
        },
        {
        "params": [{
            "name": "Yr",
            "select": {"type": "point", "fields": ["Year"]},
            "bind": {
            "Year": {
                "input": "range",
                "min": 1980,
                "max": 2020,
                "step": 10}
            }
        }],
        "mark": {
            "type": "point",
            "filled": true,
            "tooltip": true
        },
        "encoding": {
            "color": {
            "field": "Source",
            "type": "ordinal",
            "title": "Source",
            "scale": {
                "domain": ["BC", "US"],
                "range": ["darkred", "grey"]
            }
            },
            "size": {"value": 100},
            "opacity": {"value": 1}
            }
        }
    ]
}
vegaEmbed('#stacked-area', stacked_area);
vegaEmbed('#dot-plot', dot_plot);

var stacked_bar = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Gender Distribution at BC vs Peer Universities",
    "data": {"url": "data/otherschoolsgender.csv"},
    "width": 400,
    "height": 250,
    "layer": [
        {
    "mark": "bar",
        "encoding": {
        "x": {
            "field": "School",
            "type": "ordinal",
            "title": "University"
        },
        "y": {
            "aggregate": "sum",
            "field": "Percent",
            "type": "quantitative",
            "title": "Percentage of Students"
        },
        "tooltip": [
            {
                "field": "Type",
                "type": "nominal",
                "title": "Gender"
            },
            {
                "field": "Value",
                "type": "quantitative",
                "title": "Number of Students"
            },
            {
                "field": "Percent",
                "type": "quantitative",
                "title": "Percent (%)"
            }
        ],
        "color": {
            "field": "Type",
            "type": "nominal",
            "scale": {
                "domain": ["Female", "Male"],
                "range": ["#ffb6c1", "#aec7e8"]
                }}
        }}
    ,
    {"mark": "rule",
    "encoding": {
        "y":  {"field": "Percent", "aggregate": "mean" },
        "size": {"value": 2},
        "color": {"value": "grey"},
        "strokeDash": {"signal": "strokeDash"}
    }}
]}
vegaEmbed('#stacked-bar', stacked_bar);

var stacked_bar2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Ethnicities at BC vs Peer Universities",
    "data": {"url": "data/otherschoolsethnicity.csv"},
    "width": 400,
    "height": 250,
    "layer": [
        {
    "mark": "bar",
        "encoding": {
        "x": {
            "field": "School",
            "type": "ordinal",
            "title": "University"
        },
        "y": {
            "aggregate": "sum",
            "field": "Percent",
            "type": "quantitative"
        },
        "tooltip": [
            {
                "field": "Type",
                "type": "nominal",
                "title": "Ethnicity"
            },
            {
                "field": "Value",
                "type": "quantitative",
                "title": "Number of Students"
            },
            {
                "field": "Percent",
                "type": "quantitative",
                "title": "Percent (%)"
            }
        ],
        "color": {
            "field": "Type",
            "type": "nominal",
            "scale": {"scheme": "set3"}
        }}
}]
}

vegaEmbed('#stacked-bar2', stacked_bar2);


var intl_line_chart = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Percent of International Students vs. Year",
    "width": 500,
    "height": 300,
    "data":{"url": "https://raw.githubusercontent.com/xcmackenzie/VisFinalProject/master/data/bcStudentsbyState.csv"},
    "transform": [{"filter": "datum.Location==='International'"}],
    "mark": {"type": "line", "tooltip": true, "point": true},
    "encoding": {
        "x": {"field": "Year", "type": "temporal"},
        "y": {"field": "Percent", "type": "quantitative"},
        "tooltip": [
        {
            "field": "Year",
            "type": "temporal",
            "timeUnit": "year",
            "title": "Year"
        },
        {
            "field": "Value",
            "type": "quantitative"
        },
        {
            "field": "Percent",
            "type": "quantitative"
        }
    ]
    }
}
vegaEmbed('#intl-line-chart',intl_line_chart)

var two_more_bar = {
    "title": "Students Identifying Each Ethnicity as One of Their Two or More Ethnicities",
    "width": 300,
    "height": 240,
    "padding": {"left": 55, "right": 20, "top": 10, "bottom": 10},
    "data": {"url": "https://raw.githubusercontent.com/xcmackenzie/VisFinalProject/master/data/twoormore.csv"},
    "mark": {"type": "bar", "tooltip": true},
    "params": [{
        "name": "Yr",
        "select": {"type": "point", "fields": ["Year"]},
        "bind": {
        "Year": {
            "input": "range",
            "min": 2010,
            "max": 2020,
            "step": 5}
        }
        }
    ],
    "transform": [{"filter": "datum.Year == Yr_Year"}],
    "encoding": {
        "y": {"field": "Ethnicity", "type": "nominal"},
        "x": {"field": "Percent", "type": "quantitative"},
        "color": {
            "field": "Ethnicity",
            "type": "nominal",
            "scale": {
                "domain": ["Asian", "Black", "Hispanic", "Native American", "White"],
                "range": ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#fdb462"],
            },
            "legend": false
        }
    }
}

vegaEmbed('#two-more-bar', two_more_bar)


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
              "Morrissey College of Arts & Sciences",
              "Lynch School of Education",
              "Carroll School of Management",
              "Connell School of Nursing",
              "Woods College of Advancing Studies"
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

vegaEmbed("#school-pie-chart", pieCharts)