var Map = function() {

    var newMap = {

      drawMap: function() {

          var chart_width = 500;
          var chart_height = 400;

          var colors =['#f2f0f7','#cbc9e2','#9e9ac8','#756bb1','#54278f'];

          var valMin = d3.min(data, function(d){
                return d.value;
              }),
              valMax = d3.max(data, function(d){
                return d.value;
              });

          var color_scale = d3.scaleQuantize()
              .range(colors)
              .domain([valMin,valMax]);

          var projection = d3.geoAlbersUsa()
            .scale(600)
            .translate([250,200]);

          var path = d3.geoPath(projection);

          var svg = d3.select("#chart")
              .append("svg")
              .attr("width", chart_width)
              .attr("height", chart_height);

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
            .attr('fill', '#f2f0f7')
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
            .attr('fill', '#cbc9e2')
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
            .attr('fill', '#9e9ac8')
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
            .attr('fill', '#756bb1')
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
            .attr('fill', '#54278f')
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

          // svg.selectAll('path')
          //     .transition()
          //     .attr('d', path);

          var map = svg.append('g')
            .attr('id', 'map');

          // bind geo_json_data to state values from data.json.js file
          geo_json_data.features.forEach(function(gjd_x, gjd_i){

            data.forEach(function(data_x, data_i){
              if(gjd_x.properties.name !== data_x.state){
                return null;
              }

              geo_json_data.features[gjd_i].properties.value = parseFloat(data_x. value);

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
            .attr('fill', function(d){
              var val = d.properties.value;
              return val ? color_scale(val) : '#ff0000';
            })
            .attr('stroke', '#fff')
            .attr('stroke_width', 1)
            .on("click", function(d) {newMap.dispatch.call("selected", {}, d.properties.name); })

      },

      dispatch: d3.dispatch("selected")

    };

    return newMap;

}
