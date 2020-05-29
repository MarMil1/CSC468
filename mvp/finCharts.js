var finMap1 = function () {

    var newMap = {

        drawMap: function (svg,state="Illinois") {

            var chart_width = +svg.attr("width")
            var chart_height = +svg.attr("height")

            svg.selectAll("g").remove();

            // set the dimensions and margins of the graph
            var margin = {top: 10, right: 30, bottom: 20, left: 50},
                width = chart_width - margin.left - margin.right,
                height = chart_height - margin.top - margin.bottom;

            var data_full =  {
                "NEW YORK": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "24.21",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "24.74",
                        "nat": "13.4"
                    }
                ],
                "VERMONT": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "23.44",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "23.12",
                        "nat": "13.4"
                    }
                ],
                "ALASKA": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "22.34",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "22.7",
                        "nat": "13.4"
                    }
                ],
                "NEW JERSEY": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "21.9",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "21.51",
                        "nat": "13.4"
                    }
                ],
                "CONNECTICUT": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "21.96",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "20.86",
                        "nat": "13.4"
                    }
                ],
                "WYOMING": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "20.91",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "20.69",
                        "nat": "13.4"
                    }
                ],
                "PENNSYLVANIA": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "18.85",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "18.68",
                        "nat": "13.4"
                    }
                ],
                "MASSACHUSETTS": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "18.54",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "18.53",
                        "nat": "13.4"
                    }
                ],
                "RHODE ISLAND": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "17.59",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "17.29",
                        "nat": "13.4"
                    }
                ],
                "NORTH DAKOTA": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "15.51",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "17.02",
                        "nat": "13.4"
                    }
                ],
                "NEW HAMPSHIRE": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "16.9",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "16.63",
                        "nat": "13.4"
                    }
                ],
                "DELAWARE": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "16.55",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "16.21",
                        "nat": "13.4"
                    }
                ],
                "MARYLAND": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "16.58",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "15.88",
                        "nat": "13.4"
                    }
                ],
                "ILLINOIS": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "15.68",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "15.83",
                        "nat": "13.4"
                    }
                ],
                "MINNESOTA": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "14.48",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "14.83",
                        "nat": "13.4"
                    }
                ],
                "MAINE": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "15.55",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "14.74",
                        "nat": "13.4"
                    }
                ],
                "OHIO": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "15.23",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "14.1",
                        "nat": "13.4"
                    }
                ],
                "HAWAII": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "14.82",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "13.82",
                        "nat": "13.4"
                    }
                ],
                "NEBRASKA": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "13.61",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "13.72",
                        "nat": "13.4"
                    }
                ],
                "WISCONSIN": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "13.5",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "13.41",
                        "nat": "13.4"
                    }
                ],
                "IOWA": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "13.29",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "13.4",
                        "nat": "13.4"
                    }
                ],
                "MICHIGAN": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "14.15",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "13.19",
                        "nat": "13.4"
                    }
                ],
                "LOUISIANA": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "12.78",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "12.76",
                        "nat": "13.4"
                    }
                ],
                "WASHINGTON": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "12.78",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "12.71",
                        "nat": "13.4"
                    }
                ],
                "CALIFORNIA": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "12.57",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "12.59",
                        "nat": "13.4"
                    }
                ],
                "VIRGINIA": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "12.39",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "12.59",
                        "nat": "13.4"
                    }
                ],
                "MONTANA": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "12.49",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "12.49",
                        "nat": "13.4"
                    }
                ],
                "KANSAS": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "12.06",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "12.43",
                        "nat": "13.4"
                    }
                ],
                "WEST VIRGINIA": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "12.44",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "12.4",
                        "nat": "13.4"
                    }
                ],
                "OREGON": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "12.47",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "12.29",
                        "nat": "13.4"
                    }
                ],
                "SOUTH CAROLINA": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "11.88",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "11.91",
                        "nat": "13.4"
                    }
                ],
                "MISSOURI": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "11.9",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "11.81",
                        "nat": "13.4"
                    }
                ],
                "NEW MEXICO": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "11.61",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "11.79",
                        "nat": "13.4"
                    }
                ],
                "INDIANA": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "12.4",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "11.33",
                        "nat": "13.4"
                    }
                ],
                "TEXAS": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "11.11",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "11.24",
                        "nat": "13.4"
                    }
                ],
                "ARKANSAS": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "11.07",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "11.15",
                        "nat": "13.4"
                    }
                ],
                "SOUTH DAKOTA": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "10.65",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "11.03",
                        "nat": "13.4"
                    }
                ],
                "KENTUCKY": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "10.96",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "10.97",
                        "nat": "13.4"
                    }
                ],
                "COLORADO": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "11.06",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "10.96",
                        "nat": "13.4"
                    }
                ],
                "GEORGIA": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "10.82",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "10.77",
                        "nat": "13.4"
                    }
                ],
                "ALABAMA": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "10.01",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "10.21",
                        "nat": "13.4"
                    }
                ],
                "FLORIDA": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "9.83",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "9.94",
                        "nat": "13.4"
                    }
                ],
                "TENNESSEE": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "9.51",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "9.62",
                        "nat": "13.4"
                    }
                ],
                "NORTH CAROLINA": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "8.97",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "9.6",
                        "nat": "13.4"
                    }
                ],
                "NEVADA": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "9.9",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "9.53",
                        "nat": "13.4"
                    }
                ],
                "MISSISSIPPI": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "9.37",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "9.43",
                        "nat": "13.4"
                    }
                ],
                "OKLAHOMA": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "9.11",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "9.21",
                        "nat": "13.4"
                    }
                ],
                "ARIZONA": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "8.71",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "8.36",
                        "nat": "13.4"
                    }
                ],
                "UTAH": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "8.2",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "7.91",
                        "nat": "13.4"
                    }
                ],
                "IDAHO": [
                    {
                        "group": "Revenue per Enrollment",
                        "state": "7.91",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure per Enrollment",
                        "state": "7.4",
                        "nat": "13.4"
                    }
                ]
            }

            var data = data_full[state.toUpperCase()]

            var subgroups = ["state", "nat"]

            var groups = d3.map(data, function(d){return(d.group)}).keys()

            // Add X axis
            var x = d3.scaleBand()
              .domain(groups)
              .range([0, width])
              .padding([0.2])
            svg.append("g")
                .attr("transform", "translate(30," + height + ")")
                .call(d3.axisBottom(x).tickSize(0));

            // Add Y axis
            var y = d3.scaleLinear()
                .domain([0, 30])
                .range([ height-30, 0 ]);
            svg.append("g")
                .attr("transform", "translate(30,30)")
                .call(d3.axisLeft(y));

            var xSubgroup = d3.scaleBand()
                .domain(subgroups)
                .range([0, x.bandwidth()])
                .padding([0.05])

            // color palette = one color per subgroup
            var color = d3.scaleOrdinal()
                .domain(subgroups)
                .range(['#e41a1c','#377eb8'])

            // Show the bars
            svg.append("g")
                .selectAll("g")
                .data(data)
                .enter()
                .append("g")
                    .attr("transform", function(d) { return "translate(" + x(d.group) + ",0)"; })
                .selectAll("rect")
                    .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
                    .enter().append("rect")
                    .attr("x", function(d) { return xSubgroup(d.key) + 30; })
                    .attr("y", function(d) { return y(d.value) + 30; })
                    .attr("width", xSubgroup.bandwidth())
                    .attr("height", function(d) { return height -(30) - y(d.value); })
                    .attr("fill", function(d) { return color(d.key); });

            // Legend
            svg.append('g')
                .append('rect')
                .attr('width', 30)
                .attr('height', 30)
                .attr('fill', '#e41a1c')
                .attr('x', width + 20)
                .attr('y', 20)
                .attr('stroke', 'black')
                .attr('stroke_width', 1);

            svg.append('g')
                .append('text')
                .attr('x', width -30)
                .attr('y', 40)
                .attr('font-size', "10px")
                .text('State')

            svg.append('g')
                .append('rect')
                .attr('width', 30)
                .attr('height', 30)
                .attr('fill', '#377eb8')
                .attr('x', width + 20)
                .attr('y', 60)
                .attr('stroke', 'black')
                .attr('stroke_width', 1);

            svg.append('g')
                .append('text')
                .attr('x', width -60)
                .attr('y', 80)
                .attr('font-size', "10px")
                .text('National Average')


            // Title
            svg.append('g')
                .append('text')
                .attr('x', width/2 )
                .attr('y', 30)
                .attr('font-size', "20px")
                .text(state)

        }

    };

    return newMap;

}