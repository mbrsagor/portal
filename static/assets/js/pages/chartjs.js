"use strict";
function getChartColorsArray(r) {
    if (null !== document.getElementById(r)) {
        r = document.getElementById(r).getAttribute("data-colors");
        return (r = JSON.parse(r)).map(function (r) {
            var o = r.replace(" ", "");
            if (-1 === o.indexOf(",")) {
                var a = getComputedStyle(document.documentElement).getPropertyValue(o);
                return a || o;
            }
            r = r.split(",");
            return 2 !== r.length ? o : "rgba(" + getComputedStyle(document.documentElement).getPropertyValue(r[0]) + "," + r[1] + ")";
        });
    }
}

var barChart, isbarchart = document.getElementById("bar");
var barChartColor = getChartColorsArray("bar");
barChartColor && (isbarchart.setAttribute("width", isbarchart.parentElement.offsetWidth), barChart = new Chart(isbarchart, {
    type: "bar",
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: "Monthly generator entry analytics",
            backgroundColor: barChartColor[0],
            borderColor: barChartColor[0],
            borderWidth: 1,
            hoverBackgroundColor: barChartColor[1],
            hoverBorderColor: barChartColor[1],
            data: [65, 59, 81, 45, 56, 80, 50, 20, 40, 65, 45, 29]
        }]
    }
}));

var pieChart, ispiechart = document.getElementById("pieChart");
var pieChartColors = getChartColorsArray("pieChart");
pieChartColors && (pieChart = new Chart(ispiechart, {
    type: "pie",
    data: {
        labels: ["Investment", "Loss"],
        datasets: [{
            data: [300, 180],
            backgroundColor: pieChartColors,
            hoverBackgroundColor: pieChartColors,
            hoverBorderColor: "#fff"
        }]
    }
}));
