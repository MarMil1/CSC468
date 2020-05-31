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
                        "group": "Revenue ($USD) per Student",
                        "state": "24.21",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "24.74",
                        "nat": "13.4"
                    }
                ],
                "VERMONT": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "23.44",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "23.12",
                        "nat": "13.4"
                    }
                ],
                "ALASKA": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "22.34",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "22.7",
                        "nat": "13.4"
                    }
                ],
                "NEW JERSEY": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "21.9",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "21.51",
                        "nat": "13.4"
                    }
                ],
                "CONNECTICUT": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "21.96",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "20.86",
                        "nat": "13.4"
                    }
                ],
                "WYOMING": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "20.91",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "20.69",
                        "nat": "13.4"
                    }
                ],
                "PENNSYLVANIA": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "18.85",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "18.68",
                        "nat": "13.4"
                    }
                ],
                "MASSACHUSETTS": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "18.54",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "18.53",
                        "nat": "13.4"
                    }
                ],
                "RHODE ISLAND": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "17.59",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "17.29",
                        "nat": "13.4"
                    }
                ],
                "NORTH DAKOTA": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "15.51",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "17.02",
                        "nat": "13.4"
                    }
                ],
                "NEW HAMPSHIRE": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "16.9",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "16.63",
                        "nat": "13.4"
                    }
                ],
                "DELAWARE": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "16.55",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "16.21",
                        "nat": "13.4"
                    }
                ],
                "MARYLAND": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "16.58",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "15.88",
                        "nat": "13.4"
                    }
                ],
                "ILLINOIS": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "15.68",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "15.83",
                        "nat": "13.4"
                    }
                ],
                "MINNESOTA": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "14.48",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "14.83",
                        "nat": "13.4"
                    }
                ],
                "MAINE": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "15.55",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "14.74",
                        "nat": "13.4"
                    }
                ],
                "OHIO": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "15.23",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "14.1",
                        "nat": "13.4"
                    }
                ],
                "HAWAII": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "14.82",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "13.82",
                        "nat": "13.4"
                    }
                ],
                "NEBRASKA": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "13.61",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "13.72",
                        "nat": "13.4"
                    }
                ],
                "WISCONSIN": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "13.5",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "13.41",
                        "nat": "13.4"
                    }
                ],
                "IOWA": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "13.29",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "13.4",
                        "nat": "13.4"
                    }
                ],
                "MICHIGAN": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "14.15",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "13.19",
                        "nat": "13.4"
                    }
                ],
                "LOUISIANA": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "12.78",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "12.76",
                        "nat": "13.4"
                    }
                ],
                "WASHINGTON": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "12.78",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "12.71",
                        "nat": "13.4"
                    }
                ],
                "CALIFORNIA": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "12.57",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "12.59",
                        "nat": "13.4"
                    }
                ],
                "VIRGINIA": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "12.39",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "12.59",
                        "nat": "13.4"
                    }
                ],
                "MONTANA": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "12.49",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "12.49",
                        "nat": "13.4"
                    }
                ],
                "KANSAS": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "12.06",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "12.43",
                        "nat": "13.4"
                    }
                ],
                "WEST VIRGINIA": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "12.44",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "12.4",
                        "nat": "13.4"
                    }
                ],
                "OREGON": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "12.47",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "12.29",
                        "nat": "13.4"
                    }
                ],
                "SOUTH CAROLINA": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "11.88",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "11.91",
                        "nat": "13.4"
                    }
                ],
                "MISSOURI": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "11.9",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "11.81",
                        "nat": "13.4"
                    }
                ],
                "NEW MEXICO": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "11.61",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "11.79",
                        "nat": "13.4"
                    }
                ],
                "INDIANA": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "12.4",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "11.33",
                        "nat": "13.4"
                    }
                ],
                "TEXAS": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "11.11",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "11.24",
                        "nat": "13.4"
                    }
                ],
                "ARKANSAS": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "11.07",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "11.15",
                        "nat": "13.4"
                    }
                ],
                "SOUTH DAKOTA": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "10.65",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "11.03",
                        "nat": "13.4"
                    }
                ],
                "KENTUCKY": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "10.96",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "10.97",
                        "nat": "13.4"
                    }
                ],
                "COLORADO": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "11.06",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "10.96",
                        "nat": "13.4"
                    }
                ],
                "GEORGIA": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "10.82",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "10.77",
                        "nat": "13.4"
                    }
                ],
                "ALABAMA": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "10.01",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "10.21",
                        "nat": "13.4"
                    }
                ],
                "FLORIDA": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "9.83",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "9.94",
                        "nat": "13.4"
                    }
                ],
                "TENNESSEE": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "9.51",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "9.62",
                        "nat": "13.4"
                    }
                ],
                "NORTH CAROLINA": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "8.97",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "9.6",
                        "nat": "13.4"
                    }
                ],
                "NEVADA": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "9.9",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "9.53",
                        "nat": "13.4"
                    }
                ],
                "MISSISSIPPI": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "9.37",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "9.43",
                        "nat": "13.4"
                    }
                ],
                "OKLAHOMA": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "9.11",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "9.21",
                        "nat": "13.4"
                    }
                ],
                "ARIZONA": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "8.71",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "8.36",
                        "nat": "13.4"
                    }
                ],
                "UTAH": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "8.2",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
                        "state": "7.91",
                        "nat": "13.4"
                    }
                ],
                "IDAHO": [
                    {
                        "group": "Revenue ($USD) per Student",
                        "state": "7.91",
                        "nat": "13.46"
                    },
                    {
                        "group": "Expenditure ($USD) per Student",
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
                .attr("transform", "translate(70," + height + ")")
                .call(d3.axisBottom(x).ticks(5).tickSize(0));

            // Add Y axis
            var y = d3.scaleLinear()
                .domain([0, 30])
                .range([ height-70, 0 ]);
            svg.append("g")
                .attr("transform", "translate(70,70)")
                .call(d3.axisLeft(y).ticks(5));

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
                    .attr("x", function(d) { return xSubgroup(d.key) + 70; })
                    .attr("y", function(d) { return y(d.value) + 70; })
                    .attr("width", xSubgroup.bandwidth())
                    .attr("height", function(d) { return height -(70) - y(d.value); })
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

            // y axis label
            svg.append('g')
                .append('text')
                .attr("transform", "translate(25,250)rotate(-90)")
                .attr('font-size', "10px")
                .text('US Dollars')

        }

    };

    return newMap;

}

var finMap4 = function () {

    var newMap = {

        drawMap: function (svg, state="Illinois") {

            var stateUpper = state.toUpperCase();
            var chart_width = +svg.attr("width")
            var chart_height = +svg.attr("height")

            svg.selectAll("g").remove();

            // set the dimensions and margins of the graph
            var margin = {top: 10, right: 30, bottom: 20, left: 50},
                width = chart_width - margin.left - margin.right,
                height = chart_height - margin.top - margin.bottom;

            var data = 
                [
                {'state': 'ALABAMA',
                  'instruction_expend_per_student': '5.19',
                  'total_expenditure': '7501799.0',
                  'avg_math_8_score': '267.0'},
                 {'state': 'ALASKA',
                  'instruction_expend_per_student': '11.35',
                  'total_expenditure': '2968341.0',
                  'avg_math_8_score': '280.0'},
                 {'state': 'ARIZONA',
                  'instruction_expend_per_student': '4.07',
                  'total_expenditure': '7902600.0',
                  'avg_math_8_score': '283.0'},
                 {'state': 'ARKANSAS',
                  'instruction_expend_per_student': '5.46',
                  'total_expenditure': '5350543.0',
                  'avg_math_8_score': '275.0'},
                 {'state': 'CALIFORNIA',
                  'instruction_expend_per_student': '6.26',
                  'total_expenditure': '78365958.0',
                  'avg_math_8_score': '275.0'},
                 {'state': 'COLORADO',
                  'instruction_expend_per_student': '5.25',
                  'total_expenditure': '9557682.0',
                  'avg_math_8_score': '286.0'},
                 {'state': 'CONNECTICUT',
                  'instruction_expend_per_student': '11.89',
                  'total_expenditure': '10542667.0',
                  'avg_math_8_score': '284.0'},
                 {'state': 'DELAWARE',
                  'instruction_expend_per_student': '8.8',
                  'total_expenditure': '1975093.0',
                  'avg_math_8_score': '280.0'},
                 {'state': 'FLORIDA',
                  'instruction_expend_per_student': '5.44',
                  'total_expenditure': '27277049.0',
                  'avg_math_8_score': '275.0'},
                 {'state': 'GEORGIA',
                  'instruction_expend_per_student': '5.87',
                  'total_expenditure': '18501103.0',
                  'avg_math_8_score': '279.0'},
                 {'state': 'HAWAII',
                  'instruction_expend_per_student': '7.55',
                  'total_expenditure': '2521004.0',
                  'avg_math_8_score': '279.0'},
                 {'state': 'IDAHO',
                  'instruction_expend_per_student': '4.13',
                  'total_expenditure': '2029520.0',
                  'avg_math_8_score': '284.0'},
                 {'state': 'ILLINOIS',
                  'instruction_expend_per_student': '8.46',
                  'total_expenditure': '32410033.0',
                  'avg_math_8_score': '282.0'},
                 {'state': 'INDIANA',
                  'instruction_expend_per_student': '5.51',
                  'total_expenditure': '11378564.0',
                  'avg_math_8_score': '287.0'},
                 {'state': 'IOWA',
                  'instruction_expend_per_student': '6.7',
                  'total_expenditure': '6772654.0',
                  'avg_math_8_score': '286.0'},
                 {'state': 'KANSAS',
                  'instruction_expend_per_student': '6.14',
                  'total_expenditure': '6175724.0',
                  'avg_math_8_score': '284.0'},
                 {'state': 'KENTUCKY',
                  'instruction_expend_per_student': '5.53',
                  'total_expenditure': '7554887.0',
                  'avg_math_8_score': '278.0'},
                 {'state': 'LOUISIANA',
                  'instruction_expend_per_student': '6.2',
                  'total_expenditure': '8437263.0',
                  'avg_math_8_score': '268.0'},
                 {'state': 'MAINE',
                  'instruction_expend_per_student': '7.99',
                  'total_expenditure': '2596180.0',
                  'avg_math_8_score': '285.0'},
                 {'state': 'MARYLAND',
                  'instruction_expend_per_student': '8.79',
                  'total_expenditure': '13882823.0',
                  'avg_math_8_score': '283.0'},
                 {'state': 'MASSACHUSETTS',
                  'instruction_expend_per_student': '10.67',
                  'total_expenditure': '16972319.0',
                  'avg_math_8_score': '297.0'},
                 {'state': 'MICHIGAN',
                  'instruction_expend_per_student': '6.72',
                  'total_expenditure': '17742903.0',
                  'avg_math_8_score': '278.0'},
                 {'state': 'MINNESOTA',
                  'instruction_expend_per_student': '7.75',
                  'total_expenditure': '11969872.0',
                  'avg_math_8_score': '294.0'},
                 {'state': 'MISSISSIPPI',
                  'instruction_expend_per_student': '4.8',
                  'total_expenditure': '4624539.0',
                  'avg_math_8_score': '271.0'},
                 {'state': 'MISSOURI',
                  'instruction_expend_per_student': '6.03',
                  'total_expenditure': '10540353.0',
                  'avg_math_8_score': '281.0'},
                 {'state': 'MONTANA',
                  'instruction_expend_per_student': '6.51',
                  'total_expenditure': '1804841.0',
                  'avg_math_8_score': '287.0'},
                 {'state': 'NEBRASKA',
                  'instruction_expend_per_student': '7.83',
                  'total_expenditure': '4283846.0',
                  'avg_math_8_score': '286.0'},
                 {'state': 'NEVADA',
                  'instruction_expend_per_student': '4.94',
                  'total_expenditure': '4183085.0',
                  'avg_math_8_score': '275.0'},
                 {'state': 'NEW HAMPSHIRE',
                  'instruction_expend_per_student': '9.27',
                  'total_expenditure': '3044720.0',
                  'avg_math_8_score': '294.0'},
                 {'state': 'NEW JERSEY',
                  'instruction_expend_per_student': '11.45',
                  'total_expenditure': '28809725.0',
                  'avg_math_8_score': '293.0'},
                 {'state': 'NEW MEXICO',
                  'instruction_expend_per_student': '5.44',
                  'total_expenditure': '3846641.0',
                  'avg_math_8_score': '271.0'},
                 {'state': 'NEW YORK',
                  'instruction_expend_per_student': '15.94',
                  'total_expenditure': '65094591.0',
                  'avg_math_8_score': '280.0'},
                 {'state': 'NORTH CAROLINA',
                  'instruction_expend_per_student': '5.43',
                  'total_expenditure': '14060699.0',
                  'avg_math_8_score': '281.0'},
                 {'state': 'NORTH DAKOTA',
                  'instruction_expend_per_student': '7.78',
                  'total_expenditure': '1804762.0',
                  'avg_math_8_score': '288.0'},
                 {'state': 'OHIO',
                  'instruction_expend_per_student': '7.26',
                  'total_expenditure': '22561728.0',
                  'avg_math_8_score': '285.0'},
                 {'state': 'OKLAHOMA',
                  'instruction_expend_per_student': '4.47',
                  'total_expenditure': '6184819.0',
                  'avg_math_8_score': '275.0'},
                 {'state': 'OREGON',
                  'instruction_expend_per_student': '6.4',
                  'total_expenditure': '7011609.0',
                  'avg_math_8_score': '283.0'},
                 {'state': 'PENNSYLVANIA',
                  'instruction_expend_per_student': '10.1',
                  'total_expenditure': '29690645.0',
                  'avg_math_8_score': '284.0'},
                 {'state': 'RHODE ISLAND',
                  'instruction_expend_per_student': '9.82',
                  'total_expenditure': '2326473.0',
                  'avg_math_8_score': '281.0'},
                 {'state': 'SOUTH CAROLINA',
                  'instruction_expend_per_student': '5.59',
                  'total_expenditure': '8783362.0',
                  'avg_math_8_score': '276.0'},
                 {'state': 'SOUTH DAKOTA',
                  'instruction_expend_per_student': '5.34',
                  'total_expenditure': '1464781.0',
                  'avg_math_8_score': '285.0'},
                 {'state': 'TENNESSEE',
                  'instruction_expend_per_student': '5.37',
                  'total_expenditure': '9562527.0',
                  'avg_math_8_score': '278.0'},
                 {'state': 'TEXAS',
                  'instruction_expend_per_student': '5.34',
                  'total_expenditure': '56255791.0',
                  'avg_math_8_score': '284.0'},
                 {'state': 'UTAH',
                  'instruction_expend_per_student': '4.13',
                  'total_expenditure': '4537962.0',
                  'avg_math_8_score': '286.0'},
                 {'state': 'VERMONT',
                  'instruction_expend_per_student': '11.55',
                  'total_expenditure': '1969415.0',
                  'avg_math_8_score': '290.0'},
                 {'state': 'VIRGINIA',
                  'instruction_expend_per_student': '6.84',
                  'total_expenditure': '16113212.0',
                  'avg_math_8_score': '288.0'},
                 {'state': 'WASHINGTON',
                  'instruction_expend_per_student': '6.07',
                  'total_expenditure': '13630138.0',
                  'avg_math_8_score': '287.0'},
                 {'state': 'WEST VIRGINIA',
                  'instruction_expend_per_student': '6.51',
                  'total_expenditure': '3466981.0',
                  'avg_math_8_score': '271.0'},
                 {'state': 'WISCONSIN',
                  'instruction_expend_per_student': '6.64',
                  'total_expenditure': '11553677.0',
                  'avg_math_8_score': '289.0'},
                 {'state': 'WYOMING',
                  'instruction_expend_per_student': '9.54',
                  'total_expenditure': '1942406.0',
                  'avg_math_8_score': '287.0'}]

            // Add X axis
            var x = d3.scaleLinear()
                    .domain([0, 20])
                    .range([ 0, width]);
                svg.append("g")
                    .attr("transform", "translate(70," + height + ")")
                    .call(d3.axisBottom(x).ticks(5));

            // Add Y axis
            var y = d3.scaleLinear()
                    .domain([260, 310])
                    .range([ height-70, 0 ]);
                svg.append("g")
                    .attr("transform", "translate(70, 70)")
                    .call(d3.axisLeft(y).ticks(5));

            // // Add a scale for bubble size
            var z = d3.scaleLinear()
                    .domain([1360942, 78365958])
                    .range([ 1, 40]);

            // Add dots
            svg.append('g')
                .selectAll("dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("cx", function (d) { return x(d.instruction_expend_per_student)+70; } )
                .attr("cy", function (d) { return y(d.avg_math_8_score)+70; } )
                .attr("r", function (d) { return z(d.total_expenditure); } )
                .style("fill", function(d){
                    if(stateUpper==d.state){
                        return '#e41a1c';
                    }else{
                        return '#377eb8';
                    }
                    
                })
                // .style("fill", "#e41a1c")
                .style("opacity", function(d){
                     if(stateUpper==d.state){

                        return "0.7";
                    }else{
                        return "0.2";
                    }
                })
                .attr("stroke", "black")

                // y axis label
                svg.append('g')
                    .append('text')
                    .attr("transform", "translate(25,300)rotate(-90)")
                    .attr('font-size', "10px")
                    .text('Avg Math Score 8th Grade')

                // x axis label
                svg.append('g')
                    .append('text')
                    .attr("x", width/2 - 20)
                    .attr("y", 400)
                    .attr('font-size', "10px")
                    .text('Instruction Expenditure per Student')

        }

    };

    return newMap;

}

var finMap3 = function () {

    var newMap = {

        drawMap: function (svg, state="Illinois") {

            var stateUpper = state.toUpperCase();
            var chart_width = +svg.attr("width")
            var chart_height = +svg.attr("height")

            svg.selectAll("g").remove();

            // set the dimensions and margins of the graph
            var margin = {top: 10, right: 30, bottom: 20, left: 50},
                width = chart_width - margin.left - margin.right,
                height = chart_height - margin.top - margin.bottom;

            var data = 
                [{'state': 'ALABAMA', 'support_services': '3.29'},
                     {'state': 'ALASKA', 'support_services': '8.17'},
                     {'state': 'ARIZONA', 'support_services': '3.05'},
                     {'state': 'ARKANSAS', 'support_services': '3.7'},
                     {'state': 'CALIFORNIA', 'support_services': '3.77'},
                     {'state': 'COLORADO', 'support_services': '3.63'},
                     {'state': 'CONNECTICUT', 'support_services': '6.4'},
                     {'state': 'DELAWARE', 'support_services': '4.79'},
                     {'state': 'FLORIDA', 'support_services': '2.98'},
                     {'state': 'GEORGIA', 'support_services': '3.1'},
                     {'state': 'HAWAII', 'support_services': '4.58'},
                     {'state': 'IDAHO', 'support_services': '2.42'},
                     {'state': 'ILLINOIS', 'support_services': '5.02'},
                     {'state': 'INDIANA', 'support_services': '3.7'},
                     {'state': 'IOWA', 'support_services': '3.78'},
                     {'state': 'KANSAS', 'support_services': '3.41'},
                     {'state': 'KENTUCKY', 'support_services': '3.51'},
                     {'state': 'LOUISIANA', 'support_services': '4.2'},
                     {'state': 'MAINE', 'support_services': '5.17'},
                     {'state': 'MARYLAND', 'support_services': '4.99'},
                     {'state': 'MASSACHUSETTS', 'support_services': '5.5'},
                     {'state': 'MICHIGAN', 'support_services': '4.34'},
                     {'state': 'MINNESOTA', 'support_services': '3.64'},
                     {'state': 'MISSISSIPPI', 'support_services': '3.11'},
                     {'state': 'MISSOURI', 'support_services': '3.66'},
                     {'state': 'MONTANA', 'support_services': '4.03'},
                     {'state': 'NEBRASKA', 'support_services': '3.53'},
                     {'state': 'NEVADA', 'support_services': '3.33'},
                     {'state': 'NEW HAMPSHIRE', 'support_services': '5.13'},
                     {'state': 'NEW JERSEY', 'support_services': '7.03'},
                     {'state': 'NEW MEXICO', 'support_services': '3.85'},
                     {'state': 'NEW YORK', 'support_services': '5.97'},
                     {'state': 'NORTH CAROLINA', 'support_services': '2.79'},
                     {'state': 'NORTH DAKOTA', 'support_services': '4.56'},
                     {'state': 'OHIO', 'support_services': '4.58'},
                     {'state': 'OKLAHOMA', 'support_services': '3.04'},
                     {'state': 'OREGON', 'support_services': '3.98'},
                     {'state': 'PENNSYLVANIA', 'support_services': '5.16'},
                     {'state': 'RHODE ISLAND', 'support_services': '5.89'},
                     {'state': 'SOUTH CAROLINA', 'support_services': '3.92'},
                     {'state': 'SOUTH DAKOTA', 'support_services': '3.21'},
                     {'state': 'TENNESSEE', 'support_services': '2.88'},
                     {'state': 'TEXAS', 'support_services': '3.03'},
                     {'state': 'UTAH', 'support_services': '2.03'},
                     {'state': 'VERMONT', 'support_services': '6.65'},
                     {'state': 'VIRGINIA', 'support_services': '3.97'},
                     {'state': 'WASHINGTON', 'support_services': '4.21'},
                     {'state': 'WEST VIRGINIA', 'support_services': '4.16'},
                     {'state': 'WISCONSIN', 'support_services': '4.28'},
                     {'state': 'WYOMING', 'support_services': '6.02'}]

            // X axis: scale and draw:
            var x = d3.scaleLinear()
                    .domain([0, 10])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
                    .range([0, width]);
                svg.append("g")
                    .attr("transform", "translate(70," + height + ")")
                    .call(d3.axisBottom(x).ticks(10));

            // set the parameters for the histogram
            var histogram = d3.histogram()
                    .value(function(d) { return d.support_services; })   // I need to give the vector of value
                    .domain(x.domain())  // then the domain of the graphic
                    .thresholds(x.ticks(10)); // then the numbers of bins

            // And apply this function to data to get the bins
            var bins = histogram(data);

            // Y axis: scale and draw:
            var y = d3.scaleLinear()
                    .range([height, 0]);
                y.domain([0, d3.max(bins, function(d) { return d.length; }) * 1.25]);   // d3.hist has to be called before the Y axis obviously
                svg.append("g")
                    .attr("transform", "translate(70, 0)")
                    .call(d3.axisLeft(y).ticks(8));

            // append the bar rectangles to the svg element
            svg.selectAll("body")
            .data(bins)
            .enter()
            .append("g")
            .append('rect')
              .attr("x", 70)
              .attr("transform", function(d) { return "translate(" + (x(d.x0)) + "," + y(d.length) + ")"; })
              .attr("width", function(d) { return x(d.x1) - (x(d.x0)-1) ; })
              .attr("height", function(d) { return height - y(d.length); })
              .style("fill", '#e41a1c')
              .style("opacity", function(d){
                for(var i =0; i<d.length; i++){

                    for(var x = 0; x<d.length; x++){

                        if(stateUpper==d[x].state){
                          return "0.7"
                        }

                    }

                    return "0.2";
                }
              }
             )

                // y axis label
                svg.append('g')
                    .append('text')
                    .attr("transform", "translate(25,200)rotate(-90)")
                    .attr('font-size', "10px")
                    .text('Count')

                // x axis label
                svg.append('g')
                    .append('text')
                    .attr("x", width/2 - 20)
                    .attr("y", 400)
                    .attr('font-size', "10px")
                    .text('Support Services Expenditure ($USD) per Student')

        }

    };

    return newMap;

}

var finMap2 = function () {

    var newMap = {

        drawMap: function (svg, state="Illinois") {

            var stateUpper = state.toUpperCase();
            var chart_width = +svg.attr("width")
            var chart_height = +svg.attr("height")

            svg.selectAll("g").remove();

            // set the dimensions and margins of the graph
            var margin = {top: 10, right: 30, bottom: 20, left: 50},
                width = chart_width - margin.left - margin.right,
                height = chart_height - margin.top - margin.bottom;

            var data_full = {
                    "ALABAMA": [
                        {
                            "label": "State Rev",
                            "value": "4080167.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "2484817.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "795238.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "3817479.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "2414860.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "510091.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "594283.0"
                        }
                    ],
                    "ALASKA": [
                        {
                            "label": "State Rev",
                            "value": "2026555.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "550320.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "344111.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "1484610.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "1068849.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "281914.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "92766.0"
                        }
                    ],
                    "ARIZONA": [
                        {
                            "label": "State Rev",
                            "value": "3232013.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "3904660.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "1093834.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "3846357.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "2880184.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "497662.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "478876.0"
                        }
                    ],
                    "ARKANSAS": [
                        {
                            "label": "State Rev",
                            "value": "4075118.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "652095.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "581412.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "2620399.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "1772639.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "511556.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "290396.0"
                        }
                    ],
                    "CALIFORNIA": [
                        {
                            "label": "State Rev",
                            "value": "42360470.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "28331207.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "7556365.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "38951948.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "23501848.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "6373893.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "3754315.0"
                        }
                    ],
                    "COLORADO": [
                        {
                            "label": "State Rev",
                            "value": "4354525.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "4578518.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "715254.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "4578938.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "3170482.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "923360.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "397263.0"
                        }
                    ],
                    "CONNECTICUT": [
                        {
                            "label": "State Rev",
                            "value": "4353546.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "6302218.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "444073.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "6006275.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "3233901.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "530491.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "362941.0"
                        }
                    ],
                    "DELAWARE": [
                        {
                            "label": "State Rev",
                            "value": "1142333.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "737198.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "137544.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "1072395.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "583951.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "103129.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "122741.0"
                        }
                    ],
                    "FLORIDA": [
                        {
                            "label": "State Rev",
                            "value": "10661586.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "13191864.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "3118041.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "14931173.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "8186082.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "1681665.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "1816178.0"
                        }
                    ],
                    "GEORGIA": [
                        {
                            "label": "State Rev",
                            "value": "8310872.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "8442573.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "1831221.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "10081483.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "5324072.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "1879063.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "996277.0"
                        }
                    ],
                    "HAWAII": [
                        {
                            "label": "State Rev",
                            "value": "2381547.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "62746.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "259390.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "1377713.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "835930.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "161801.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "145560.0"
                        }
                    ],
                    "IDAHO": [
                        {
                            "label": "State Rev",
                            "value": "1381205.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "554313.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "232449.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "1130814.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "663005.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "75680.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "108684.0"
                        }
                    ],
                    "ILLINOIS": [
                        {
                            "label": "State Rev",
                            "value": "11858968.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "17975672.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "2262192.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "17313173.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "10279691.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "2056951.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "992075.0"
                        }
                    ],
                    "INDIANA": [
                        {
                            "label": "State Rev",
                            "value": "7676341.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "3850352.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "929878.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "5537406.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "3712136.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "948358.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "547516.0"
                        }
                    ],
                    "IOWA": [
                        {
                            "label": "State Rev",
                            "value": "3460798.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "2795155.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "458457.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "3383909.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "1912222.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "842674.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "262267.0"
                        }
                    ],
                    "KANSAS": [
                        {
                            "label": "State Rev",
                            "value": "3967809.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "1548649.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "475273.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "3051755.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "1692953.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "963767.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "250584.0"
                        }
                    ],
                    "KENTUCKY": [
                        {
                            "label": "State Rev",
                            "value": "4176753.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "2523155.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "848963.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "3807748.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "2417226.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "600859.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "468694.0"
                        }
                    ],
                    "LOUISIANA": [
                        {
                            "label": "State Rev",
                            "value": "3480365.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "3732798.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "1235580.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "4100906.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "2774314.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "780338.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "416066.0"
                        }
                    ],
                    "MAINE": [
                        {
                            "label": "State Rev",
                            "value": "1060925.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "1494781.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "183883.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "1406898.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "910381.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "55686.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "109541.0"
                        }
                    ],
                    "MARYLAND": [
                        {
                            "label": "State Rev",
                            "value": "6267624.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "7404856.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "819162.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "7686024.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "4358416.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "1050651.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "386104.0"
                        }
                    ],
                    "MASSACHUSETTS": [
                        {
                            "label": "State Rev",
                            "value": "6808436.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "9397810.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "778939.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "9774884.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "5043032.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "1034539.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "497880.0"
                        }
                    ],
                    "MICHIGAN": [
                        {
                            "label": "State Rev",
                            "value": "10510346.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "6932944.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "1582706.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "9040821.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "5839572.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "967476.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "831874.0"
                        }
                    ],
                    "MINNESOTA": [
                        {
                            "label": "State Rev",
                            "value": "7567199.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "3487141.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "629909.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "6257807.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "2933999.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "1328863.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "893322.0"
                        }
                    ],
                    "MISSISSIPPI": [
                        {
                            "label": "State Rev",
                            "value": "2324855.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "1595122.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "672366.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "2350872.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "1525340.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "407791.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "285117.0"
                        }
                    ],
                    "MISSOURI": [
                        {
                            "label": "State Rev",
                            "value": "4441091.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "5233700.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "948600.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "5387766.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "3266781.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "869078.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "615166.0"
                        }
                    ],
                    "MONTANA": [
                        {
                            "label": "State Rev",
                            "value": "851068.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "738291.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "214980.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "940488.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "581694.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "160885.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "80426.0"
                        }
                    ],
                    "NEBRASKA": [
                        {
                            "label": "State Rev",
                            "value": "1350116.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "2554197.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "344382.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "2446701.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "1102622.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "449287.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "183067.0"
                        }
                    ],
                    "NEVADA": [
                        {
                            "label": "State Rev",
                            "value": "2744606.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "1205183.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "395630.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "2170424.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "1459504.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "205794.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "174388.0"
                        }
                    ],
                    "NEW HAMPSHIRE": [
                        {
                            "label": "State Rev",
                            "value": "1000063.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "1928093.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "164905.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "1697165.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "938368.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "125475.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "75581.0"
                        }
                    ],
                    "NEW JERSEY": [
                        {
                            "label": "State Rev",
                            "value": "11423305.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "16757928.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "1154004.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "15339450.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "9414336.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "1290946.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "1271558.0"
                        }
                    ],
                    "NEW MEXICO": [
                        {
                            "label": "State Rev",
                            "value": "2595682.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "694180.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "499789.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "1773801.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "1256303.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "587243.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "154435.0"
                        }
                    ],
                    "NEW YORK": [
                        {
                            "label": "State Rev",
                            "value": "25900858.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "34941513.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "2869847.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "41954260.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "15714795.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "4536014.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "1540851.0"
                        }
                    ],
                    "NORTH CAROLINA": [
                        {
                            "label": "State Rev",
                            "value": "8172685.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "3384679.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "1589570.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "7960222.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "4082387.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "698847.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "746694.0"
                        }
                    ],
                    "NORTH DAKOTA": [
                        {
                            "label": "State Rev",
                            "value": "942772.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "543388.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "158373.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "825445.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "483984.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "303053.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "110836.0"
                        }
                    ],
                    "OHIO": [
                        {
                            "label": "State Rev",
                            "value": "10169760.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "12532080.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "1676820.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "11620080.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "7324444.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "1750785.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "922732.0"
                        }
                    ],
                    "OKLAHOMA": [
                        {
                            "label": "State Rev",
                            "value": "2993050.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "2439148.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "688990.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "3000894.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "2041507.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "663768.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "414086.0"
                        }
                    ],
                    "OREGON": [
                        {
                            "label": "State Rev",
                            "value": "3678001.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "2856603.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "577106.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "3650855.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "2272382.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "477516.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "249968.0"
                        }
                    ],
                    "PENNSYLVANIA": [
                        {
                            "label": "State Rev",
                            "value": "10532452.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "17576848.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "1857885.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "16058338.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "8196747.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "1663209.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "1050310.0"
                        }
                    ],
                    "RHODE ISLAND": [
                        {
                            "label": "State Rev",
                            "value": "908963.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "1273387.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "184718.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "1322055.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "792525.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "50889.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "90209.0"
                        }
                    ],
                    "SOUTH CAROLINA": [
                        {
                            "label": "State Rev",
                            "value": "4094766.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "3829041.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "836137.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "4123140.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "2893109.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "928112.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "447019.0"
                        }
                    ],
                    "SOUTH DAKOTA": [
                        {
                            "label": "State Rev",
                            "value": "425614.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "782682.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "206853.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "709363.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "426257.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "222592.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "70128.0"
                        }
                    ],
                    "TENNESSEE": [
                        {
                            "label": "State Rev",
                            "value": "4385403.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "3947742.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "1122775.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "5343272.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "2862499.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "553396.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "560697.0"
                        }
                    ],
                    "TEXAS": [
                        {
                            "label": "State Rev",
                            "value": "20967429.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "28783628.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "5830972.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "26745844.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "15145619.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "6765205.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "2783770.0"
                        }
                    ],
                    "UTAH": [
                        {
                            "label": "State Rev",
                            "value": "2487937.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "1816934.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "400213.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "2367650.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "1166728.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "606254.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "271400.0"
                        }
                    ],
                    "VERMONT": [
                        {
                            "label": "State Rev",
                            "value": "1546600.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "344862.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "105333.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "983532.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "566649.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "58856.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "61871.0"
                        }
                    ],
                    "VIRGINIA": [
                        {
                            "label": "State Rev",
                            "value": "6240349.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "8604970.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "1012205.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "8755896.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "5075509.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "1086722.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "627473.0"
                        }
                    ],
                    "WASHINGTON": [
                        {
                            "label": "State Rev",
                            "value": "8293812.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "4379208.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "1036422.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "6508964.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "4510672.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "1601069.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "546926.0"
                        }
                    ],
                    "WEST VIRGINIA": [
                        {
                            "label": "State Rev",
                            "value": "1979466.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "1135976.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "362959.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "1819903.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "1161944.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "232738.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "233836.0"
                        }
                    ],
                    "WISCONSIN": [
                        {
                            "label": "State Rev",
                            "value": "5869265.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "4953726.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "814385.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "5723474.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "3691809.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "894823.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "513402.0"
                        }
                    ],
                    "WYOMING": [
                        {
                            "label": "State Rev",
                            "value": "1116917.0"
                        },
                        {
                            "label": "Local Rev",
                            "value": "725667.0"
                        },
                        {
                            "label": "Fed Rev",
                            "value": "120290.0"
                        },
                        {
                            "label": "Instruct Exp",
                            "value": "895910.0"
                        },
                        {
                            "label": "Supp Serv Exp",
                            "value": "565489.0"
                        },
                        {
                            "label": "Cap Outl Exp",
                            "value": "409425.0"
                        },
                        {
                            "label": "Oth Exp",
                            "value": "52520.0"
                        }
                    ]
                }

            var data = data_full[state.toUpperCase()]
            
                // Add X axis - for bar-
                // var x = d3.scaleLinear()
                // .domain([0, 45])
                // .range([ 0, width]);
                // svg.append("g")
                // .attr("transform", "translate(75," + height + ")")
                // .call(d3.axisBottom(x))
                // .selectAll("body")
                //   .attr("transform", "translate(-10,0)rotate(-45)")
                //   .style("text-anchor", "end");

                // Add X axis - for lolli
                var x = d3.scaleLinear()
                    .domain([0, 45])
                    .range([ 75, width+45]);
                svg.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x))
                .selectAll("body")
                    .attr("transform", "translate(-10,0)rotate(-45)")
                    .style("text-anchor", "end");

                // Y axis
                var y = d3.scaleBand()
                .range([ 0, height ])
                .domain(data.map(function(d) { return d.label; }))
                .padding(.1);
                svg.append("g")
                .attr("transform", "translate(75,0)")
                .call(d3.axisLeft(y))

                // //Bars
                // svg.selectAll("body")
                // .data(data)
                // .enter()
                // .append('g')
                // .append("rect")
                // .attr("x", 75 )
                // .attr("y", function(d) { return y(d.label); })
                // .attr("width", function(d) { return x(+d.value/1000000); })
                // .attr("height", y.bandwidth() )
                // .attr("fill", '#e41a1c')


                svg.selectAll("body")
                    .data(data)
                    .enter()
                    .append('g')
                    .append("line")
                        .attr("x1", function(d) { return x(d.value/1000000); })
                        .attr("x2", x(0))
                        .attr("y1", function(d) { return y(d.label)+23; })
                        .attr("y2", function(d) { return y(d.label)+23; })
                        .attr("stroke", "grey")

                // Circles
                svg.selectAll("body")
                    .data(data)
                    .enter()
                    .append('g')
                    .append("circle")
                        .attr("cx", function(d) {return x(d.value/1000000); })
                        .attr("cy", function(d) { return y(d.label) +23; })
                        .attr("r", "5")
                        .style("fill", "#e41a1c")
                        .attr("stroke", "black")

                // x axis label
                svg.append('g')
                .append('text')
                .attr("x", width/2 + 45)
                .attr("y", 400)
                .attr('font-size', "10px")
                .text('$USD MM')

        }

    };

    return newMap;

}