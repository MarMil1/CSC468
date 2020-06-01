var enrollMap1 = function () {

    var newMap = {

        drawMap: function (svg, data, state) {
            //https://www.d3-graph-gallery.com/graph/line_select.html
            console.log(data);
            

            svg.selectAll("g").remove()

            var dataList = []

            for (var i = 0; i < data.length; i++) {
                dataList.push({
                                year: +data[i].YEAR, 
                                state: data[i].STATE,
                                Grade1: +data[i]['G01_A_A'],
                                Grade2: +data[i]['G02_A_A'],
                                Grade3: +data[i]['G03_A_A'],
                                Grade4: +data[i]['G04_A_A'],
                                Grade5: +data[i]['G05_A_A'],
                                Grade6: +data[i]['G06_A_A'],
                                Grade7: +data[i]['G07_A_A'],
                                Grade8: +data[i]['G08_A_A'],
                                Grade9: +data[i]['G09_A_A'],
                                Grade10: +data[i]['G10_A_A'],
                                Grade11: +data[i]['G11_A_A'],
                                Grade12: +data[i]['G12_A_A']
                            })
            }

            // set the dimensions and margins of the graph
            var margin = {top: 10, right: 100, bottom: 50, left: 50},
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom;

            // append the svg object to the body of the page
            // var svg = d3.select("#my_dataviz")
            // .append("svg")
            svg.attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("class", "first-g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

            // List of groups (here I have one group per column)
            var allGroup = ["Grade1", "Grade2", "Grade3","Grade4", "Grade5", "Grade6",
                            "Grade7", "Grade8", "Grade9", "Grade10", "Grade11", "Grade12"]

            d3.selectAll("#enroll-selectGrade").selectAll("option").remove();

            // add the options to the button
            d3.select("#enroll-selectGrade")
            .selectAll('myOptions')
                .data(allGroup)
            .enter()
                .append('option')
            .text(function (d) { return d; }) // text showed in the menu
            .attr("value", function (d) { return d; }) // corresponding value returned by the button

            // A color scale: one color for each group
            var myColor = d3.scaleOrdinal()
            .domain(allGroup)
            .range(d3.schemeSet1);

            // Add X axis --> it is a date format
            var x = d3.scaleTime()
            .domain([new Date(2009, 0, 1), new Date(2016, 0, 1, 0)])
            .rangeRound([ 0, width - 20 ]);

            svg = svg.select(".first-g")
            svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

            // Add Y axis
            var y = d3.scaleLinear()
            .domain( [1000,500000])
            .range([ height, 0 ]);
            svg.append("g")
            .call(d3.axisLeft(y)
            .tickFormat(d3.format(".0s"))
            );

            // Initialize line with group a
            var line = svg
            .append('g')
            .append("path")
                .datum(dataList)
                .attr("d", d3.line()
                .x(function(d) { return x(new Date(+d.year, 0, 1)) })
                .y(function(d) { return y(+d.Grade1) })
                )
                .attr("stroke", function(d){ return myColor("Grade1") })
                .style("stroke-width", 4)
                .style("fill", "none")

            // A function that update the chart
            function update(selectedGroup) {

            // Create new data with the selection?
            var dataFilter = dataList.map(function(d){return {year: d.year, value:d[selectedGroup]} })

            // Give these new data to update line
            line
                .datum(dataFilter)
                .transition()
                .duration(300)
                .attr("d", d3.line()
                    .x(function(d) { return x(new Date(+d.year, 0, 1)) })
                    .y(function(d) { return y(+d.value) })
                )
                .attr("stroke", function(d){ return myColor(selectedGroup) })
            }

            // When the button is changed, run the updateChart function
            d3.select("#enroll-selectGrade").on("change", function(d) {
                // recover the option that has been chosen
                var selectedOption = d3.select(this).property("value")
                // run the updateChart function with this selected option
                update(selectedOption)
            })

            // Title
            svg.append('g')
                .append('text')
                .attr('x', 50 )
                .attr('y', 10)
                .attr('font-size', "20px")
                .text(state + " enrollment per grade per year");

            
            }            

    };

    return newMap;
}

var enrollMap2 = function () {

    var newMap = {

        drawMap: function (svg, data, state, grade=1, year=2016) {

            svg.selectAll("g").remove()

            var dataList2 = getData(year);

            function getData(year) {
                result = []
                for (var i = 0; i < data.length; i++) {
                    if (+data[i].YEAR == year) {
                        result.push({id: "American Indian", value: +data[i][`G0${grade}_AM_F`]}),
                        result.push({id: "Asian", value: +data[i][`G0${grade}_AS_F`]}),
                        result.push({id: "Black", value: +data[i][`G0${grade}_BL_F`]}),
                        result.push({id: "Hispanic", value: +data[i][`G0${grade}_HI_F`]}),
                        result.push({id: "White", value: +data[i][`G0${grade}_WH_F`]})
                    }                            
                }
                
                return result;
            }

            var width  = +svg.attr("width"),
                height = +svg.attr("height");

            var radius = Math.min(width, height) / 2.5;
            var allFemale = ["American Indian", "Asian", "Black", "Hispanic", "White"]
            var years = ["2009", "2010", "2011", "2012", "2013", "2014", "2016"]

            d3.selectAll("#enroll-selectYear").selectAll("option").remove();

            d3.select("#enroll-selectYear")
            .selectAll('myOptions')
                .data(years)
                .enter()
                .append('option')
            .text(function (d) { return d; }) // text showed in the menu
            .attr("value", function (d) { return d; }) // corresponding value returned by the button

            var color = d3.scaleOrdinal()
                          .domain(allFemale)
                          .range(["lightpink","lightblue","lightgreen","lightsalmon","lightgrey"]);

            var arc = d3.arc()
                .outerRadius(radius - 10)
                .innerRadius(0);

            var labelArc = d3.arc()
                .outerRadius(radius - 40)
                .innerRadius(radius - 40);

            var pie = d3.pie()
                .sort(null)
                .value(function(d) { return d.value; });

            svg.attr("class", "pieChart")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("class", "first-g2")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


            svg = svg.select(".first-g2")

            var g = svg.selectAll(".arc")
                .data(pie(dataList2))
                .enter().append("g")
                .attr("class", "arc");

            g.append("path")
                .attr("d", arc)
                .style("fill", function(d) { return color(d.data.value); });

            g.append("text")
                .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
                .attr("dy", ".35em")
                .text(function(d) { 
                    var value = d.data.value;
                    var id = d.data.id.split(".").slice(-1);
                    
                    return value + " " + id; })
        
            // A function that update the chart
            function updatePieChart(selectedGroup) {

                // // Create new data with the selection?
                // var dataFilter = dataList.map(function(d){return {year: d.year, value:d[selectedGroup]} })
                var dataFilter = getData(selectedGroup);
                console.log(dataFilter);
                
                console.log(g);

                svg.selectAll(".arc").remove()
            
                var g =svg.selectAll(".arc")
                .data(pie(dataFilter))
                .enter()
                .append("g")
                .attr("class", "arc")
                g.append("path")
                .attr("d", arc)
                .style("fill", function(d) { return color(d.data.value); })

                g.append("text")
                .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
                .attr("dy", ".35em")
                .text(function(d) { 
                    var value = d.data.value;
                    var id = d.data.id.split(".").slice(-1);
                    return value + " " + id; });
                
            }
            
            
            // When the year is changed, run the updatePieChart function
            d3.select("#enroll-selectYear").on("change", function(d) {
                var selectedOption = d3.select(this).property("value")
                console.log(selectedOption);
                updatePieChart(selectedOption)
            })

            // Title
            svg.append('g')
                .append('text')
                .attr('x', -150)
                .attr('y', -180)
                .attr('font-size', "20px")
                .text(state + " enrollment per ethnicity female");

            
        }

    };

    return newMap;

}

var enrollMap3 = function () {

    var newMap = {

        drawMap: function (svg, data, state, grade=1, year=2016) {

            svg.selectAll("g").remove()

            var dataList2 = getData(year);

            function getData(year) {
                result = []
                for (var i = 0; i < data.length; i++) {
                    if (+data[i].YEAR == year) {
                        result.push({id: "American Indian", value: +data[i][`G0${grade}_AM_M`]}),
                        result.push({id: "Asian", value: +data[i][`G0${grade}_AS_M`]}),
                        result.push({id: "Black", value: +data[i][`G0${grade}_BL_M`]}),
                        result.push({id: "Hispanic", value: +data[i][`G0${grade}_HI_M`]}),
                        result.push({id: "White", value: +data[i][`G0${grade}_WH_M`]})
                    }                            
                }
                
                return result;
            }

            var width  = +svg.attr("width"),
                height = +svg.attr("height");

            var radius = Math.min(width, height) / 2.5;
            var allFemale = ["American Indian", "Asian", "Black", "Hispanic", "White"]
            var years = ["2009", "2010", "2011", "2012", "2013", "2014", "2016"]

            d3.selectAll("#enroll-selectYearMale").selectAll("option").remove();

            d3.select("#enroll-selectYearMale")
            .selectAll('myOptions')
                .data(years)
                .enter()
                .append('option')
            .text(function (d) { return d; }) // text showed in the menu
            .attr("value", function (d) { return d; }) // corresponding value returned by the button

            var color = d3.scaleOrdinal()
                          .domain(allFemale)
                          .range(["lightpink","lightblue","lightgreen","lightsalmon","lightgrey"]);

            var arc = d3.arc()
                .outerRadius(radius - 10)
                .innerRadius(0);

            var labelArc = d3.arc()
                .outerRadius(radius - 40)
                .innerRadius(radius - 40);

            var pie = d3.pie()
                .sort(null)
                .value(function(d) { return d.value; });

            svg.attr("class", "pieChart")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("class", "first-g2")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


            svg = svg.select(".first-g2")

            var g = svg.selectAll(".arc")
                .data(pie(dataList2))
                .enter().append("g")
                .attr("class", "arc");

            g.append("path")
                .attr("d", arc)
                .style("fill", function(d) { return color(d.data.value); });

            g.append("text")
                .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
                .attr("dy", ".35em")
                .text(function(d) { 
                    var value = d.data.value;
                    var id = d.data.id.split(".").slice(-1);
                    
                    return value + " " + id; })
        
            // A function that update the chart
            function updatePieChart(selectedGroup) {

                // // Create new data with the selection?
                // var dataFilter = dataList.map(function(d){return {year: d.year, value:d[selectedGroup]} })
                var dataFilter = getData(selectedGroup);
                console.log(dataFilter);
                
                console.log(g);

                svg.selectAll(".arc").remove()
            
                var g =svg.selectAll(".arc")
                .data(pie(dataFilter))
                .enter()
                .append("g")
                .attr("class", "arc")
                g.append("path")
                .attr("d", arc)
                .style("fill", function(d) { return color(d.data.value); })

                g.append("text")
                .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
                .attr("dy", ".35em")
                .text(function(d) { 
                    var value = d.data.value;
                    var id = d.data.id.split(".").slice(-1);
                    return value + " " + id; });
                
            }
            
            
            // When the year is changed, run the updatePieChart function
            d3.select("#enroll-selectYearMale").on("change", function(d) {
                var selectedOption = d3.select(this).property("value")
                console.log(selectedOption);
                updatePieChart(selectedOption)
            })

            // Title
            svg.append('g')
                .append('text')
                .attr('x', -150)
                .attr('y', -180)
                .attr('font-size', "20px")
                .text(state + " enrollment per enthnicity male");

            
        }

    };

    return newMap;

}

var enrollMap4 = function () {

    var newMap = {

        drawMap: function (svg, data, state="Illinois") {

            
        }

    };

    return newMap;

}