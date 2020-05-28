var Map = function () {

    var newMap = {

        drawMap: function (svg) {
            var chart_width = +svg.attr("width")
            var chart_height = +svg.attr("height")

            var colors = ["#eaf3f9", "#b3d3e4",
                "#74acc4", "#318ba3", "#00526c"
            ];

            // Set tooltips
            const tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .html(function(d) {
                    var text = "";
                    populationData.forEach(function(data) {
                        if (data.state == d.properties.name) {
                            text = `<strong>State: </strong> ${data.state}<br>
                                    <strong>Population: </strong> ${data.value}`
                        }
                    })
                    return text;
                });
                    

            svg.call(tip);

            var color_scale = d3.scaleQuantize()
                .range(colors)
                .domain([1000000, 10000000, 30000000]);

            var projection = d3.geoAlbersUsa()
                .scale(700)
                .translate([500, 200]);

            var path = d3.geoPath(projection);

            var legend = d3.select("svg")
                .append("g")
                .attr("width", 225)
                .attr("height", 75);

            legend.append('text')
                .attr('x', 70)
                .attr('y', 15)
                .attr('font-size', '10px')
                .text('Scale');

            legend.append('rect')
                .attr('width', 30)
                .attr('height', 10)
                .attr('x', 10)
                .attr('y', 20)
                .attr('fill', '#eaf3f9')
                .attr('stroke', 'black')
                .attr('stroke_width', 1);

            legend.append('line')
                .attr('width', 5)
                .attr('height', 10)
                .attr('x1', 10)
                .attr('x2', 10)
                .attr('y1', 20)
                .attr('y2', 40)
                .attr('stroke', 'black')
                .attr('stroke_width', 1);

            legend.append('text')
                .attr('x', 5)
                .attr('y', 50)
                .attr('font-size', '10px')
                .text('0%');

            legend.append('rect')
                .attr('width', 30)
                .attr('height', 10)
                .attr('fill', '#b3d3e4')
                .attr('x', 40)
                .attr('y', 20)
                .attr('stroke', 'black')
                .attr('stroke_width', 1);

            legend.append('line')
                .attr('width', 5)
                .attr('height', 10)
                .attr('x1', 40)
                .attr('x2', 40)
                .attr('y1', 20)
                .attr('y2', 40)
                .attr('stroke', 'black')
                .attr('stroke_width', 1)

            legend.append('text')
                .attr('x', 35)
                .attr('y', 50)
                .attr('font-size', '10px')
                .text('20%');

            legend.append('rect')
                .attr('width', 30)
                .attr('height', 10)
                .attr('fill', '#74acc4')
                .attr('x', 70)
                .attr('y', 20)
                .attr('stroke', 'black')
                .attr('stroke_width', 1);

            legend.append('line')
                .attr('width', 5)
                .attr('height', 10)
                .attr('x1', 70)
                .attr('x2', 70)
                .attr('y1', 20)
                .attr('y2', 40)
                .attr('stroke', 'black')
                .attr('stroke_width', 1);

            legend.append('text')
                .attr('x', 65)
                .attr('y', 50)
                .attr('font-size', '10px')
                .text('40%');

            legend.append('rect')
                .attr('width', 30)
                .attr('height', 10)
                .attr('fill', '#318ba3')
                .attr('x', 100)
                .attr('y', 20)
                .attr('stroke', 'black')
                .attr('stroke_width', 1);

            legend.append('line')
                .attr('width', 5)
                .attr('height', 10)
                .attr('x1', 100)
                .attr('x2', 100)
                .attr('y1', 20)
                .attr('y2', 40)
                .attr('stroke', 'black')
                .attr('stroke_width', 1);

            legend.append('text')
                .attr('x', 95)
                .attr('y', 50)
                .attr('font-size', '10px')
                .text('60%');

            legend.append('rect')
                .attr('width', 30)
                .attr('height', 10)
                .attr('fill', '#00526c')
                .attr('x', 130)
                .attr('y', 20)
                .attr('stroke', 'black')
                .attr('stroke_width', 1);

            legend.append('line')
                .attr('width', 5)
                .attr('height', 10)
                .attr('x1', 130)
                .attr('x2', 130)
                .attr('y1', 20)
                .attr('y2', 40)
                .attr('stroke', 'black')
                .attr('stroke_width', 1)

            legend.append('text')
                .attr('x', 125)
                .attr('y', 50)
                .attr('font-size', '10px')
                .text('80%');

            legend.append('line')
                .attr('width', 5)
                .attr('height', 10)
                .attr('x1', 160)
                .attr('x2', 160)
                .attr('y1', 20)
                .attr('y2', 40)
                .attr('stroke', 'black')
                .attr('stroke_width', 1)

            legend.append('text')
                .attr('x', 153)
                .attr('y', 50)
                .attr('font-size', '10px')
                .text('100%');


            var map = svg.append('g')
                .attr('id', 'map');

            // bind geo_json_data to state values from data.json.js file
            geo_json_data.features.forEach(function (gjd_x, gjd_i) {

                populationData.forEach(function (data_x, data_i) {
                    if (gjd_x.properties.name !== data_x.state) {
                        return null;
                    }

                    geo_json_data.features[gjd_i].properties.value = parseFloat(data_x.value);

                });
            });

            map.append('rect')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', chart_width)
                .attr('height', chart_height)
                .attr('opacity', 0);

            map.selectAll('path')
                .data(geo_json_data.features)
                .enter()
                .append('path')
                .attr('d', path)
                .attr('fill', function (d) {
                    var val = d.properties.value;
                    return val ? color_scale(val) : '#ff0000';
                })
                .attr('stroke', '#fff')
                .attr('stroke_width', 1)
                .on("click", function (d) {
                    newMap.dispatch.call("selected", {}, d.properties.name);
                })// tooltips
                .on('mouseover',function(d){
                    tip.show(d);
                    d3.select(this)
                    .style('opacity', 1)
                    .style('stroke-width', 3);
                })
                .on('mouseout', function(d){
                    tip.hide(d);
                    d3.select(this)
                    .style('opacity', 0.8)
                    .style('stroke-width',0.3);
                });

        },

        dispatch: d3.dispatch("selected")

    };

    return newMap;

}