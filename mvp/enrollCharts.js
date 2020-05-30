var enrollMap1 = function () {

    var newMap = {

        drawMap: function (svg) {

            var chart_width = +svg.attr("width")
            var chart_height = +svg.attr("height")

            svg.selectAll("g").remove();

            svg.append('g')
                .append('text')
                .attr('x', chart_width/2 - 25)
                .attr('y', 50)
                .attr('font-size', '25px')
                .text('test enroll');
        }

    };

    return newMap;

}

var enrollMap2 = function () {

    var newMap = {

        drawMap: function (svg) {

            var chart_width = +svg.attr("width")
            var chart_height = +svg.attr("height")

            svg.selectAll("g").remove();

            svg.append('g')
                .append('text')
                .attr('x', chart_width/2 - 25)
                .attr('y', 50)
                .attr('font-size', '25px')
                .text('test enroll 2');
        }

    };

    return newMap;

}

var enrollMap3 = function () {

    var newMap = {

        drawMap: function (svg) {

            var chart_width = +svg.attr("width")
            var chart_height = +svg.attr("height")

            svg.selectAll("g").remove();

            svg.append('g')
                .append('text')
                .attr('x', chart_width/2 - 25)
                .attr('y', 50)
                .attr('font-size', '25px')
                .text('test enroll 3');
        }

    };

    return newMap;

}

var enrollMap4 = function () {

    var newMap = {

        drawMap: function (svg) {

            var chart_width = +svg.attr("width")
            var chart_height = +svg.attr("height")

            svg.selectAll("g").remove();

            svg.append('g')
                .append('text')
                .attr('x', chart_width/2 - 25)
                .attr('y', 50)
                .attr('font-size', '25px')
                .text('test enroll 4');
        }

    };

    return newMap;

}