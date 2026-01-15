// // window.onload = function () {

// // var chart = new CanvasJS.Chart("chartContainer", {
// // 	animationEnabled: true,
// // 	theme: "light2",
// // 	title:{
// // 		text: "Site Traffic"
// // 	},
// // 	axisX:{
// // 		valueFormatString: "DD MMM",
// // 		crosshair: {
// // 			enabled: true,
// // 			snapToDataPoint: true
// // 		}
// // 	},
// // 	axisY: {
// // 		title: "Number of Visits",
// // 		includeZero: true,
// // 		crosshair: {
// // 			enabled: true
// // 		}
// // 	},
// // 	toolTip:{
// // 		shared:true
// // 	},  
// // 	legend:{
// // 		cursor:"pointer",
// // 		verticalAlign: "bottom",
// // 		horizontalAlign: "left",
// // 		dockInsidePlotArea: true,
// // 		itemclick: toogleDataSeries
// // 	},
// // 	data: [{
// // 		type: "line",
// // 		showInLegend: true,
// // 		name: "Total Visit",
// // 		markerType: "square",
// // 		xValueFormatString: "DD MMM, YYYY",
// // 		color: "#F08080",
// // 		dataPoints: [
// // 			{ x: new Date(2017, 0, 3), y: 650 },
// // 			{ x: new Date(2017, 0, 4), y: 700 },
// // 			{ x: new Date(2017, 0, 5), y: 710 },
// // 			{ x: new Date(2017, 0, 6), y: 658 },
// // 			{ x: new Date(2017, 0, 7), y: 734 },
// // 			{ x: new Date(2017, 0, 8), y: 963 },
// // 			{ x: new Date(2017, 0, 9), y: 847 },
// // 			{ x: new Date(2017, 0, 10), y: 853 },
// // 			{ x: new Date(2017, 0, 11), y: 869 },
// // 			{ x: new Date(2017, 0, 12), y: 943 },
// // 			{ x: new Date(2017, 0, 13), y: 970 },
// // 			{ x: new Date(2017, 0, 14), y: 869 },
// // 			{ x: new Date(2017, 0, 15), y: 890 },
// // 			{ x: new Date(2017, 0, 16), y: 930 }
// // 		]
// // 	},
// // 	{
// // 		type: "line",
// // 		showInLegend: true,
// // 		name: "Unique Visit",
// // 		lineDashType: "dash",
// // 		dataPoints: [
// // 			{ x: new Date(2017, 0, 3), y: 510 },
// // 			{ x: new Date(2017, 0, 4), y: 560 },
// // 			{ x: new Date(2017, 0, 5), y: 540 },
// // 			{ x: new Date(2017, 0, 6), y: 558 },
// // 			{ x: new Date(2017, 0, 7), y: 544 },
// // 			{ x: new Date(2017, 0, 8), y: 693 },
// // 			{ x: new Date(2017, 0, 9), y: 657 },
// // 			{ x: new Date(2017, 0, 10), y: 663 },
// // 			{ x: new Date(2017, 0, 11), y: 639 },
// // 			{ x: new Date(2017, 0, 12), y: 673 },
// // 			{ x: new Date(2017, 0, 13), y: 660 },
// // 			{ x: new Date(2017, 0, 14), y: 562 },
// // 			{ x: new Date(2017, 0, 15), y: 643 },
// // 			{ x: new Date(2017, 0, 16), y: 570 }
// // 		]
// // 	}]
// // });
// // chart.render();

// // function toogleDataSeries(e){
// // 	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
// // 		e.dataSeries.visible = false;
// // 	} else{
// // 		e.dataSeries.visible = true;
// // 	}
// // 	chart.render();
// // }

// // }

// document.addEventListener('DOMContentLoaded', function () {
//     // Earnings Overview - Line/Area Chart
//     const earningsCtx = document.getElementById('earningsChart').getContext('2d');
//     new Chart(earningsCtx, {
//         type: 'line',
//         data: {
//             labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//             datasets: [{
//                 label: 'Earnings',
//                 data: [0, 10000, 25000, 35000, 40000, 42000],
//                 borderColor: 'rgba(78, 115, 223, 1)',
//                 backgroundColor: 'rgba(78, 115, 223, 0.1)',
//                 borderWidth: 3,
//                 fill: true,
//                 tension: 0.4
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             },
//             plugins: {
//                 legend: {
//                     display: false
//                 }
//             }
//         }
//     });



// // pie chart 

// window.onload = function () {

// var totalVisitors = 883000;
// var visitorsData = {
// 	"New vs Returning Visitors": [{
// 		click: visitorsChartDrilldownHandler,
// 		cursor: "pointer",
// 		explodeOnClick: false,
// 		innerRadius: "75%",
// 		legendMarkerType: "square",
// 		name: "New vs Returning Visitors",
// 		radius: "100%",
// 		showInLegend: true,
// 		startAngle: 90,
// 		type: "doughnut",
// 		dataPoints: [
// 			{ y: 519960, name: "New Visitors", color: "#E7823A" },
// 			{ y: 363040, name: "Returning Visitors", color: "#546BC1" }
// 		]
// 	}],
// 	"New Visitors": [{
// 		color: "#E7823A",
// 		name: "New Visitors",
// 		type: "column",
// 		dataPoints: [
// 			{ x: new Date("1 Jan 2015"), y: 33000 },
// 			{ x: new Date("1 Feb 2015"), y: 35960 },
// 			{ x: new Date("1 Mar 2015"), y: 42160 },
// 			{ x: new Date("1 Apr 2015"), y: 42240 },
// 			{ x: new Date("1 May 2015"), y: 43200 },
// 			{ x: new Date("1 Jun 2015"), y: 40600 },
// 			{ x: new Date("1 Jul 2015"), y: 42560 },
// 			{ x: new Date("1 Aug 2015"), y: 44280 },
// 			{ x: new Date("1 Sep 2015"), y: 44800 },
// 			{ x: new Date("1 Oct 2015"), y: 48720 },
// 			{ x: new Date("1 Nov 2015"), y: 50840 },
// 			{ x: new Date("1 Dec 2015"), y: 51600 }
// 		]
// 	}],
// 	"Returning Visitors": [{
// 		color: "#546BC1",
// 		name: "Returning Visitors",
// 		type: "column",
// 		dataPoints: [
// 			{ x: new Date("1 Jan 2015"), y: 22000 },
// 			{ x: new Date("1 Feb 2015"), y: 26040 },
// 			{ x: new Date("1 Mar 2015"), y: 25840 },
// 			{ x: new Date("1 Apr 2015"), y: 23760 },
// 			{ x: new Date("1 May 2015"), y: 28800 },
// 			{ x: new Date("1 Jun 2015"), y: 29400 },
// 			{ x: new Date("1 Jul 2015"), y: 33440 },
// 			{ x: new Date("1 Aug 2015"), y: 37720 },
// 			{ x: new Date("1 Sep 2015"), y: 35200 },
// 			{ x: new Date("1 Oct 2015"), y: 35280 },
// 			{ x: new Date("1 Nov 2015"), y: 31160 },
// 			{ x: new Date("1 Dec 2015"), y: 34400 }
// 		]
// 	}]
// };

// var newVSReturningVisitorsOptions = {
// 	animationEnabled: true,
// 	theme: "light2",
// 	title: {
// 		text: "New VS Returning Visitors"
// 	},
// 	subtitles: [{
		
// 		backgroundColor: "#2eacd1",
// 		fontSize: 16,
// 		fontColor: "white",
// 		padding: 5
// 	}],
// 	legend: {
// 		fontFamily: "calibri",
// 		fontSize: 14,
// 		itemTextFormatter: function (e) {
// 			return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalVisitors * 100) + "%";  
// 		}
// 	},
// 	data: []
// };

// var visitorsDrilldownedChartOptions = {
// 	animationEnabled: true,
// 	theme: "light2",
// 	axisX: {
// 		labelFontColor: "#717171",
// 		lineColor: "#a2a2a2",
// 		tickColor: "#a2a2a2"
// 	},
// 	axisY: {
// 		gridThickness: 0,
// 		includeZero: false,
// 		labelFontColor: "#717171",
// 		lineColor: "#a2a2a2",
// 		tickColor: "#a2a2a2",
// 		lineThickness: 1
// 	},
// 	data: []
// };

// var chart = new CanvasJS.Chart("chartContainer2", newVSReturningVisitorsOptions);
// chart.options.data = visitorsData["New vs Returning Visitors"];
// chart.render();

// function visitorsChartDrilldownHandler(e) {
// 	chart = new CanvasJS.Chart("chartContainer2", visitorsDrilldownedChartOptions);
// 	chart.options.data = visitorsData[e.dataPoint.name];
// 	chart.options.title = { text: e.dataPoint.name }
// 	chart.render();
// 	$("#backButton").toggleClass("invisible");
// }

// $("#backButton").click(function() { 
// 	$(this).toggleClass("invisible");
// 	chart = new CanvasJS.Chart("chartContainer2", newVSReturningVisitorsOptions);
// 	chart.options.data = visitorsData["New vs Returning Visitors"];
// 	chart.render();
// });

// }


document.addEventListener('DOMContentLoaded', function () {
    
    // --- 1. EARNINGS CHART (Chart.js) ---
    const canvas = document.getElementById('earningsChart');
    if (canvas) {
        const earningsCtx = canvas.getContext('2d');
        new Chart(earningsCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Earnings',
                    data: [0, 10000, 25000, 35000, 40000, 42000],
                    borderColor: 'rgba(78, 115, 223, 1)',
                    backgroundColor: 'rgba(78, 115, 223, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { y: { beginAtZero: true } },
                plugins: { legend: { display: false } }
            }
        });
    }

    // --- 2. PIE/DRILLDOWN CHART (CanvasJS) ---
    var totalVisitors = 883000;
    var visitorsData = {
        "New vs Returning Visitors": [{
            click: visitorsChartDrilldownHandler,
            cursor: "pointer",
            explodeOnClick: false,
            innerRadius: "75%",
            legendMarkerType: "square",
            name: "New vs Returning Visitors",
            radius: "100%",
            showInLegend: true,
            startAngle: 90,
            type: "doughnut",
            dataPoints: [
                { y: 519960, name: "New Visitors", color: "#E7823A" },
                { y: 363040, name: "Returning Visitors", color: "#546BC1" }
            ]
        }],
        "New Visitors": [{
            color: "#E7823A",
            name: "New Visitors",
            type: "column",
            dataPoints: [
                { x: new Date("1 Jan 2015"), y: 33000 },
                { x: new Date("1 Feb 2015"), y: 35960 },
                { x: new Date("1 Mar 2015"), y: 42160 },
                { x: new Date("1 Apr 2015"), y: 42240 },
                { x: new Date("1 May 2015"), y: 43200 },
                { x: new Date("1 Jun 2015"), y: 40600 }
            ]
        }],
        "Returning Visitors": [{
            color: "#546BC1",
            name: "Returning Visitors",
            type: "column",
            dataPoints: [
                { x: new Date("1 Jan 2015"), y: 22000 },
                { x: new Date("1 Feb 2015"), y: 26040 },
                { x: new Date("1 Mar 2015"), y: 25840 },
                { x: new Date("1 Apr 2015"), y: 23760 },
                { x: new Date("1 May 2015"), y: 28800 },
                { x: new Date("1 Jun 2015"), y: 29400 }
            ]
        }]
    };

    var newVSReturningVisitorsOptions = {
        animationEnabled: true,
        theme: "light2",
        title: { text: "New VS Returning Visitors" },
        legend: {
            fontFamily: "calibri",
            fontSize: 14,
            itemTextFormatter: function (e) {
                return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalVisitors * 100) + "%";  
            }
        },
        data: []
    };

    var visitorsDrilldownedChartOptions = {
        animationEnabled: true,
        theme: "light2",
        axisX: { labelFontColor: "#717171", lineColor: "#a2a2a2" },
        axisY: { gridThickness: 0, includeZero: false },
        data: []
    };

    var chart = new CanvasJS.Chart("chartContainer2", newVSReturningVisitorsOptions);
    chart.options.data = visitorsData["New vs Returning Visitors"];
    chart.render();

    function visitorsChartDrilldownHandler(e) {
        chart = new CanvasJS.Chart("chartContainer2", visitorsDrilldownedChartOptions);
        chart.options.data = visitorsData[e.dataPoint.name];
        chart.options.title = { text: e.dataPoint.name };
        chart.render();
        document.getElementById("backButton").classList.remove("invisible");
    }

    document.getElementById("backButton").addEventListener("click", function() { 
        this.classList.add("invisible");
        chart = new CanvasJS.Chart("chartContainer2", newVSReturningVisitorsOptions);
        chart.options.data = visitorsData["New vs Returning Visitors"];
        chart.render();
    });
});
