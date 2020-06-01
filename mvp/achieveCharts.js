/*********************** LINE CHART**********************/
// class LineChartVis
var LineChartVis = function () {
    var newLC = {
        drawLineChart: function (svg, data, state, grade=4) {
            var dataReady = {};
            var subjects = ["Reading", "Mathematics"];
            var grades = ["Grade 4", "Grade 8"];
            dataReady = getDataGrade(grade)            

            // get data depending on grade
            function getDataGrade(grade) {
                var dataReady = subjects.map(function (subjectName) {
                    if (grade == 4 ) {
                        key = `G04_A_A_${subjectName.toUpperCase()}`
                    } else if (grade == 8) {
                        key = `G08_A_A_${subjectName.toUpperCase()}`
                    }
                    return {
                        subject: subjectName,
                        grade: grade,
                        values: data.map(function (d) {
                            return {
                                year: d.YEAR,
                                value: +d[key]
                            };
                        })
                    };
                });
                return dataReady; 
            }
            
            // set the dimensions and margins of the graph
            var margin = {top: 20,right: 100,bottom: 30,left: 50},
                width = 500 - margin.left - margin.right,
                height = 400 - margin.top - margin.bottom;
            
            svg.selectAll("g").remove(); 
            
            // Title
            svg.append('g')
            .attr('class', 'title-linechart')
            .append('text')
            .attr('x', width/4 )
            .attr('y', 15)
            .attr('font-size', "20px")
            .text(`Average Test Score of Grade ${grade} in ${state}`)
            
            // append the svg object to the body of the page
            svg.attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("class", "main-g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");
                
            // A color scale: one color for each group
            var myColor = d3.scaleOrdinal()
                .domain(subjects)
                .range(d3.schemeSet2);

            // declare X axis --> it is a date format
            var x = d3.scaleTime()
                .domain([new Date("January 1, 2010 00:00:00"), new Date("January 1, 2020 00:00:00")])
                .range([0, width]);
            
            // declare Y axis
            var y = d3.scaleLinear()
                .domain([200, 300])
                .range([height, 0]);

            svg = d3.select('.main-g')

            // Add X axis
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x)
                    .ticks(d3.timeYear.every(1)));
            // Add Y axis
            svg.append("g")
            .call(d3.axisLeft(y)
                .ticks(10));

            // x axis label
            svg.append('g')
            .append('text')
            .attr('x', width/2)
            .attr('y', height + 30)
            .attr('font-size', "10px")
            .text('Years')

            // y axis label
            svg.append('g')
            .append('text')
            .attr("transform", "translate(-40,220)rotate(-90)")
            .attr('font-size', "10px")
            .text('Average Test Score')

            // Add the lines
            var line = d3.line()
                .x(function (d) { return x(new Date(`January 1, ${d.year} 00:00:00`))})
                .y(function (d) { return y(+d.value) })

            // create lines, dots, label
            updateLineDotsLabel(svg, dataReady);

            /****** draw lines, dots, labels ******* */
            function updateLineDotsLabel(svg, dataReady) {
                var t = d3.select(".title-linechart")
                        .select("text")
                        .text(`Average Test Score of Grade ${grade} in ${state}\n`)
                
                svg.selectAll("myLines")
                .data(dataReady)
                .enter()
                .append("path")
                .attr("class", "subjectPath")
                .attr("d", function (d) {                    
                    return line(d.values)
                })
                .attr("stroke", function (d) {
                    return myColor(d.subject)
                })
                .style("stroke-width", 4)
                .style("fill", "none")
                

            // Add the points
            svg
                // First we need to enter in a group
                .selectAll("myDots")
                .data(dataReady)
                .enter()
                .append('g')
                .attr("class", "subjectDot")
                .style("fill", function (d) {
                    return myColor(d.subject)
                })
                // Second we need to enter in the 'values' part of this group
                .selectAll("myPoints")
                .data(function (d) {
                    return d.values
                })
                .enter()
                .append("circle")
                .attr("cx", function (d) {
                    return x(new Date(`January 1, ${d.year} 00:00:00`))
                })
                .attr("cy", function (d) {
                    return y(d.value)
                })
                .attr("r", 5)
                .attr("stroke", "white")

            // Add a legend at the end of each line
            svg
                .selectAll("myLabels")
                .data(dataReady)
                .enter()
                .append('g')
                .attr('class', 'subjectLabel')
                .append("text")
                .datum(function (d) {
                    return {
                        subject: d.subject,
                        value: d.values[d.values.length - 1]
                    };
                }) // keep only the last value of each time series
                .attr("transform", function (d) {
                    return "translate(" + x(new Date(`January 1, ${d.value.year} 00:00:00`)) + "," + y(d.value.value) + ")";
                }) // Put the text at the position of the last point
                .attr("x", 12) // shift the text a bit more right
                .text(function (d) {
                    return d.subject;
                })
                .style("fill", function (d) {
                    return myColor(d.subject)
                })
                .style("font-size", 15)
            }
            /**************************************/
        
            /****** create form *******/
            var form = d3.select("body")
            .select("main")
            .select("#card1")
            .select("form");
            
            // remove label when click on different state
            form.selectAll("label").remove()
            
            var label = form.selectAll("form")
                .data(grades)
                .enter()
                .append("label")
                .style("margin-right", "10px") 

            label.append("input")
                .attr("type", "radio")
                .attr("name", "grade")
                .attr("value", function(d) { return d; })
                .on("change", change)
                .filter(function(d, i) { return !i; })
                // .each(change)
                .property("checked", true);

            label.append("span")
                .text(function(d) { return " "+d; });
            
            function change(selectedGrade) {
                // console.log('new grade: ' + selectedGrade);
                newData = {}
                if (selectedGrade == "Grade 4") {newData = getDataGrade(4); grade = 4}
                else if (selectedGrade == "Grade 8") {newData = getDataGrade(8); grade = 8}                 
                svg.selectAll(".subjectPath").remove();
                svg.selectAll(".subjectDot").remove();
                svg.selectAll(".subjectLabel").remove();
                updateLineDotsLabel(svg, newData);

                // dispatch when on change
                newLC.dispatch.call("change", {}, selectedGrade);
                
            }
        },

        dispatch: d3.dispatch("change")
    }
    return newLC;
}

/*********************** BAR CHART**********************/
// BarChart Class
var BarChartVis = function () {
    var newBC = {
        drawBarChart: function (svg, data, state, grade=4, year=2019) {
            // get spefic data
            for (var i = 0; i < data.length; i++) {
                if (year == data[i].YEAR) {
                    data = [data[i]];
                }
            }
            
            dataReady = {}
            var subjects = ["Reading", "Mathematics"];
            dataReady = getDataGender(grade)
            // console.log(dataReady);
            
            // get data depending on grade
            function getDataGender(grade) {
                targetGrade = grade
                if (grade == 4 ) {
                    targetGrade = 'G04_A'
                } else if (grade == 8) {
                    targetGrade = 'G08_A'
                }
                var dataReady = subjects.map(function (subjectName) {
                    return {
                        subject: subjectName,
                        values: [
                        {
                            year: data[0].YEAR,
                            grade: grade,
                            gender: "Female",
                            value: +data[0][`${targetGrade}_F_${subjectName.toUpperCase()}`]
                        },
                        {
                            year: data[0].YEAR,
                            grade: grade,
                            gender: "Male",
                            value: +data[0][`${targetGrade}_M_${subjectName.toUpperCase()}`]
                        }]
                    }
                })
                return dataReady;
            } 


            var margin = {top: 20, right: 20, bottom: 30, left: 40},
                width = 450 - margin.left - margin.right,
                height = 400 - margin.top - margin.bottom;
            
            svg.selectAll("g").remove(); 

            // title
            svg.append('g')
            .append('text')
            .attr('x', width/4 )
            .attr('y', 15)
            .attr('font-size', "20px")
            .text(`${grade}th grade in ${state} ${year}`)

            var x0 = d3.scaleBand()
                .rangeRound([0, width], .1);

            // var x1 = d3.scaleOrdinal();
            var x1 = d3.scaleBand();

            var y = d3.scaleLinear()
                .range([height, 0]);

            var xAxis = d3.axisBottom(x0).tickSize(0)

            var yAxis = d3.axisLeft(y).tickSize(0)

            var color = d3.scaleOrdinal()
                .range(["lightpink","lightblue"]);

            // var svg = d3.select('body').append("svg")
            svg.attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("class", "main-bar-g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            
            // x axis label
            svg.append('g')
            .append('text')
            .attr('x', width/2 - 25)
            .attr('y', height + 45)
            .attr('font-size', "10px")
            .text('Avg. score per subject and per gender')

            // y axis label
            svg.append('g')
            .append('text')
            .attr("transform", "translate(10,220)rotate(-90)")
            .attr('font-size', "10px")
            .text('Score')

            var subjectName = dataReady.map(function(d) { return d.subject; });
            var genderNames = dataReady[0].values.map(function(d) { return d.gender; });

            x0.domain(subjectName);
            x1.domain(genderNames).rangeRound([0, x0.bandwidth()]);

            y.domain([0, d3.max(dataReady, function(categorie) { return d3.max(categorie.values, function(d) { return d.value; }) + 70; })]);

            var svg = d3.select('.main-bar-g')
            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            svg.append("g")
                .attr("class", "y axis")
                .style('opacity','0')
                .call(yAxis)
            .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .style('font-weight','bold')
                .text("Value");

            svg.select('.y').transition().duration(10).delay(0).style('opacity','1');

            var slice = svg.selectAll(".slice")
                .data(dataReady)
                .enter().append("g")
                .attr("class", "g")
                .attr("transform",function(d) { return "translate(" + (x0(d.subject) + 50) + ",0)"; });

            slice.selectAll("rect")
                .data(function(d) { return d.values; })
            .enter().append("rect")
                .attr("width", x1.bandwidth()/2)
                .attr("x", function(d) { return x1(d.gender)/2; })
                .style("fill", function(d) { return color(d.gender) })
                .attr("y", function(d) { return y(0); })
                .attr("height", function(d) { return height - y(0); })
                .on("mouseover", function(d) {
                    d3.select(this).style("fill", d3.rgb(color(d.gender)).darker(1));
                })
                .on("mouseout", function(d) {
                    d3.select(this).style("fill", color(d.gender));
                });

            slice.selectAll("rect")
                .transition()
                .delay(function (d) {return Math.random()*1000;})
                .duration(1000)
                .attr("y", function(d) { return y(d.value); })
                .attr("height", function(d) { return height - y(d.value); });

            //Legend
            var legend = svg.selectAll(".legend")
                .data(dataReady[0].values.map(function(d) { return d.gender; }).reverse())
            .enter().append("g")
                .attr("class", "legend")
                .attr("transform", function(d,i) { return "translate(0," + i * 20 + ")"; })
                .style("opacity","0");

            legend.append("rect")
                .attr("x", width - 18)
                .attr("width", 18)
                .attr("height", 18)
                .style("fill", function(d) { return color(d); });

            legend.append("text")
                .attr("x", width - 24)
                .attr("y", 9)
                .attr("dy", ".35em")
                .style("text-anchor", "end")
                .text(function(d) {return d; });

            legend.transition().duration(500).delay(function(d,i){ return 1300 + 100 * i; }).style("opacity","1");

               
        }
    }
    return newBC;
}






