var Chart = function() {

    var newChart = {

      drawChart: function(svg, data, state, text_color) {
        var chart_width = +svg.attr("width");
        var chart_height = +svg.attr("height");

        svg.selectAll("text").remove();

        svg.append('text')
            .attr('x', chart_width/2 - 25)
            .attr('y', 50)
            .attr('font-size', '25px')
            .text(state);

        svg.append('text')
            .attr('x', chart_width/2 - 25)
            .attr('y', 100)
            .attr('font-size', '25px')
            .attr('fill', text_color)
            .text(data.value);

        }
    };

    return newChart;

}
