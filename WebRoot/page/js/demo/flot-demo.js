//Flot Bar Chart
$(function() {
    var barOptions = {
        series: {
            bars: {
                show: true,
                barWidth: 0.5,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 0.8
                    }, {
                        opacity: 0.8
                    }]
                }
            }
        },
        xaxis: {
        	ticks: [[1,'2013'],[2,'2014'],[3,'2015'],[4,'2016'],[5,'2017']],
            tickDecimals: 0
        },
        colors: ["#33aaff"],
        grid: {
            color: "#999999",
            hoverable: true,
            clickable: true,
            tickColor: "#D4D4D4",
            borderWidth:0
        },
        legend: {
            show: false
        },
        tooltip: true,
        tooltipOpts: {
            content: "x: %x, y: %y"
        }
    };
    var barData = {
        label: "bar",
        data: [
            [1, 340],
            [2, 300],
            [3, 200],
            [4, 180],
            [5, 100],
   
        ]
    };
    $.plot($("#flot-bar-chart"), [barData], barOptions);

});

$(function() {
    var barOptions = {
        series: {
            lines: {
                show: true,
                lineWidth: 2,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 0.0
                    }, {
                        opacity: 0.0
                    }]
                }
            }
        },
        xaxis: {
        	ticks: [[1,'2013'],[2,'2014'],[3,'2015'],[4,'2016'],[5,'2017']],
            tickDecimals: 0
        },
        colors: ["#33aaff"],
        grid: {
            color: "#999999",
            hoverable: true,
            clickable: true,
            tickColor: "#D4D4D4",
            borderWidth:0
        },
        legend: {
            show: false
        },
        tooltip: true,
        tooltipOpts: {
            content: "x: %x, y: %y"
        }
    };
    var barData = {
        label: "bar",
        data: [
            [1, 4],
            [2, 5],
            [3, -9],
            [4, 4],
            [5, -2],
    
        ]
    };
    $.plot($("#flot-line-chart"), [barData], barOptions);

});
//Flot Pie Chart
$(function() {

    var data = [{
        label: "船舶动力系统",
        data: 21,
        color: "#a485ff",
    }, {
        label: "能源动力系统",
        data: 3,
        color: "#bababa",
    }, {
        label: "陆地动力系统",
        data: 15,
        color: "#85ffd8",
    }, {
        label: "航空动力系统",
        data: 52,
        color: "#33aaff",
    }];

    var plotObj = $.plot($("#flot-pie-chart"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});

$(function() {

    var container = $("#flot-line-chart-moving");

    // Determine how many data points to keep based on the placeholder's initial size;
    // this gives us a nice high-res plot while avoiding more than one point per pixel.

    var maximum = container.outerWidth() / 0.5 || 50;

    //

    var data = [];

    function getRandomData() {

        if (data.length) {
            data = data.slice(1);
        }

        while (data.length < maximum) {
            var previous = data.length ? data[data.length - 1] : 50;
            var y = previous + Math.random() * 10 - 5;
            data.push(y < 0 ? 0 : y > 100 ? 100 : y);
        }

        // zip the generated y values with the x values

        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
        }

        return res;
    }

    //

    series = [{
        data: getRandomData(),
        lines: {
            fill: true
        }
    }];

    //

    var plot = $.plot(container, series, {
        grid: {

            color: "#999999",
            tickColor: "#D4D4D4",
            borderWidth:0,
            minBorderMargin: 20,
            labelMargin: 10,
            backgroundColor: {
                colors: ["#ffffff", "#ffffff"]
            },
            margin: {
                top: 8,
                bottom: 20,
                left: 20
            },
            markings: function(axes) {
                var markings = [];
                var xaxis = axes.xaxis;
                for (var x = Math.floor(xaxis.min); x < xaxis.max; x += xaxis.tickSize * 2) {
                    markings.push({
                        xaxis: {
                            from: x,
                            to: x + xaxis.tickSize
                        },
                        color: "#fff"
                    });
                }
                return markings;
            }
        },
        colors: ["#33aaff"],
        xaxis: {
            tickFormatter: function() {
                return "";
            }
        },
        yaxis: {
            min: 0,
            max: 110
        },
        legend: {
            show: true
        }
    });

    // Update the random dataset at 25FPS for a smoothly-animating chart

    setInterval(function updateRandom() {
        series[0].data = getRandomData();
        plot.setData(series);
        plot.draw();
    }, 40);

});

//Flot Multiple Axes Line Chart
$(function() {
    var oilprices = [
        [1427692400000, 61.05],
        [1427778800000, 58.32],
        [1427865200000, 57.35],
        [1427951600000, 56.31],
        [1428210800000, 55.55],
        [1428297200000, 55.64],
        [1428383600000, 54.02],
        [1428470000000, 51.88],
        [1428556400000, 52.99],
        [1428815600000, 52.99],
        [1428902000000, 51.21],
        [1428988400000, 52.24],
        [1429074800000, 50.48],
        [1429161468000, 51.99],
        [1429420400000, 51.13],
        [1429506800000, 55.04],
        [1429593200000, 55.37],
        [1429679600000, 54.23],
        [1429766000000, 55.42],
        [1430025200000, 54.01],
        [1430114200000, 56.97],
        [1430198000000, 58.14],
        [1430284400000, 58.14],
        [1430370800000, 59.02],
        [1430630000000, 58.74],
        [1430716400000, 58.88],
        [1430802800000, 57.71],
        [1430889200000, 59.71],
        [1430975600000, 59.89],
        [1431234800000, 57.81],
        [1431321468000, 59.06],
        [1431407600000, 58.00],
        [1431494000000, 57.99],
        [1431580400000, 59.39],
        [1431839600000, 59.39],
        [1431926000000, 58.07],
        [1432012400000, 60.07],
        [1432098800000, 61.14],
        [1432444400000, 61.39],
        [1432530800000, 61.46],
        [1432617200000, 61.79],
        [1432703600000, 62.00],
        [1432790000000, 60.07],
        [1433135600000, 60.69],
        [1433222000000, 61.82],
        [1433308400000, 60.05],
        [1433654000000, 58.91],
        [1433740400000, 57.93],
        [1433826800000, 58.16],
        [1433913200000, 57.55],
        [1433999600000, 57.11],
        [1434258800000, 56.59],
        [1434345200000, 59.61],
        [1434518000000, 61.69],
        [1434604400000, 62.28],
        [1434860000000, 62.91],
        [1434946400000, 62.93],
        [1435032800000, 64.03],
        [1435145200000, 66.03],
        [1435205600000, 65.87],
        [1435464800000, 64.64],
        [1435637600000, 64.38],
        [1435724000000, 64.28],
        [1435810400000, 64.28],
        [1436069600000, 61.51],
        [1436156000000, 61.89],
        [1436242400000, 62.01],
        [1436328800000, 63.85],
        [1436415200000, 63.63],
        [1436674400000, 63.61],
        [1436760800000, 63.10],
        [1436847200000, 63.13],
        [1436933600000, 61.83],
        [1437020000000, 63.38],
        [1437279200000, 64.58],
        [1437452000000, 65.84],
        [1437538400000, 65.06],
        [1437624800000, 66.46],
        [1437884000000, 64.40],
        [1438056800000, 63.68],
        [1438143200000, 63.19],
        [1438229600000, 61.93],
        [1438488800000, 61.47],
        [1438575200000, 61.55],
        [1438748000000, 61.81],
        [1438834400000, 62.37],
        [1439093600000, 62.46],
        [1439180000000, 63.17],
        [1439266400000, 62.55],
        [1439352800000, 64.94],
        [1439698400000, 66.27],
        [1439784800000, 65.50],
        [1439871468000, 65.77],
        [1439957600000, 64.18],
        [1440044000000, 65.20],
        [1440389600000, 63.15],
        [1440476000000, 63.49],
        [1440562400000, 65.08],
        [1440908000000, 66.30],
        [1440994400000, 65.96],
        [1441427200000, 66.93],
        [1441253600000, 65.98],
        [1441599200000, 65.35],
        [1441685600000, 66.26],
        [1441858400000, 68.00],
        [1442143600000, 69.09],
        [1442204000000, 69.10],
        [1442290400000, 68.19],
        [1442376800000, 68.19],
        [1442463200000, 69.14],
        [1442722400000, 68.19],
        [1442808800000, 67.77],
        [1442895200000, 68.97],
        [1442981600000, 69.57],
        [1443068000000, 70.68],
        [1443327200000, 71.09],
        [1443413600000, 70.92],
        [1443586400000, 71.81],
        [1443672800000, 72.81],
        [1443932000000, 72.19],
        [1444018400000, 72.56],
        [1444191468000, 72.50],
        [1444277600000, 74.15],
        [1444623200000, 75.05],
        [1444796000000, 75.92],
        [1444882400000, 75.57],
        [1445141600000, 74.89],
        [1445228000000, 73.56],
        [1445314400000, 75.57],
        [1445400800000, 74.95],
        [1445487200000, 76.83],
        [1445832800000, 78.21],
        [1445919200000, 76.53],
        [1446005600000, 76.86],
        [1446092000000, 76.00],
        [1446437600000, 71.59],
        [1446696800000, 71.47],
        [1446956000000, 71.62],
        [1447042400000, 71.00],
        [1447301600000, 71.98],
        [1447560800000, 71.12],
        [1447647200000, 69.47],
        [1447733600000, 69.26],
        [1447820000000, 69.83],
        [1447906400000, 71.09],
        [1448165600000, 71.73],
        [1448338400000, 73.36],
        [1448511468000, 74.04],
        [1448856800000, 76.30],
        [1449142000000, 77.49],
        [1449461600000, 78.23],
        [1449548000000, 79.91],
        [1449634400000, 80.09],
        [1449720800000, 79.10],
        [1449980000000, 80.57],
        [1450066400000, 81.93],
        [1450239200000, 83.32],
        [1450325600000, 81.62],
        [1450584800000, 80.95],
        [1450671468000, 79.53],
        [1450757600000, 80.30],
        [1450844000000, 82.88],
        [1450930400000, 81.66],
        [1451449600000, 80.24],
        [1451276000000, 80.05],
        [1451362400000, 79.94],
        [1451448800000, 81.44],
        [1451535200000, 81.22],
        [1451794400000, 79.02],
        [1451880800000, 80.26],
        [1451967200000, 80.30],
        [1452053600000, 83.08],
        [1452140000000, 83.69],
        [1452399200000, 86.13],
        [1452485600000, 87.61],
        [1452572000000, 87.40],
        [1452658400000, 89.47],
        [1452744800000, 88.60],
        [1453004000000, 87.56],
        [1453090400000, 87.56],
        [1453176800000, 87.10],
        [1453263200000, 91.86],
        [1453612400000, 93.53],
        [1453698800000, 94.53],
        [1453871600000, 95.93],
        [1454217200000, 93.98],
        [1454303600000, 96.37],
        [1454476400000, 95.46],
        [1454562800000, 96.32],
        [1455081468000, 93.43],
        [1455167600000, 95.10],
        [1455426800000, 94.64],
        [1455513200000, 95.10],
        [1456031600000, 97.70],
        [1456144000000, 94.42],
        [1456204400000, 90.62],
        [1456290800000, 91.01],
        [1456377200000, 88.71],
        [1456636400000, 88.32],
        [1456809200000, 90.23],
        [1456982000000, 88.28],
        [1457241468000, 87.86],
        [1457327600000, 90.02],
        [1457414000000, 92.25],
        [1457586800000, 90.63],
        [1457846000000, 90.63],
        [1457932400000, 90.49],
        [1458018800000, 91.24],
        [1458105200000, 91.06],
        [1458191600000, 90.49],
        [1458710000000, 96.62],
        [1458796400000, 96.00],
        [1459142000000, 99.62],
        [1459314800000, 99.18],
        [1459401468000, 95.09],
        [1459660400000, 96.33],
        [1459833200000, 95.67],
        [1468351600000, 91.90],
        [1468438000000, 90.84],
        [1468524400000, 90.13],
        [1468610800000, 90.57],
        [1468956400000, 89.21],
        [1469042800000, 86.99],
        [1469129200000, 89.85],
        [1469474800000, 90.99],
        [1469561468000, 91.64],
        [1469647600000, 92.33],
        [1469734000000, 91.75],
        [1470079600000, 90.02],
        [1470166000000, 88.41],
        [1470252400000, 87.14],
        [1470338800000, 88.11],
        [1470425200000, 91.77],
        [1470770800000, 92.78],
        [1470857200000, 93.27],
        [1470943600000, 95.46],
        [1471030000000, 95.46],
        [1471289200000, 101.74],
        [1471462000000, 98.81],
        [1471894000000, 100.88],
        [1472066800000, 99.64],
        [1472153200000, 102.59],
        [1472239600000, 101.84],
        [1472498800000, 99.52],
        [1472585200000, 99.52],
        [1472671600000, 104.52],
        [1472758000000, 105.47],
        [1472844400000, 105.15],
        [1473103600000, 108.75],
        [1473276400000, 109.92],
        [1473362800000, 110.33],
        [1473449200000, 110.21],
        [1473708400000, 105.68],
        [1473967600000, 101.84],
        [1474313200000, 100.86],
        [1474399600000, 101.22],
        [1474486000000, 105.90],
        [1474572400000, 107.58],
        [1474658800000, 105.62],
        [1474914400000, 101.58],
        [1475000800000, 100.98],
        [1475173600000, 103.83],
        [1475260000000, 106.23],
        [1475605600000, 108.50],
        [1475778400000, 110.11],
        [1475864800000, 110.14],
        [1476210400000, 113.79],
        [1476296800000, 114.93],
        [1476383200000, 114.86],
        [1476728800000, 143.48],
        [1476815200000, 144.30],
        [1476988000000, 142.06],
        [1477074400000, 144.52],
        [1477333600000, 144.75],
        [1477420000000, 113.46],
        [1477592800000, 112.52],
        [1478024800000, 121.84],
        [1478111468000, 123.53],
        [1478197600000, 123.69],
        [1478543200000, 124.23],
        [1478629600000, 125.80],
        [1478716000000, 126.29],
        [1479148000000, 127.05],
        [1479320800000, 129.07],
        [1479493600000, 132.19],
        [1479839200000, 128.85],
        [1480357600000, 127.76],
        [1480703200000, 138.54],
        [1480962400000, 136.80],
        [1481135200000, 136.38],
        [1481308000000, 134.86],
        [1481653600000, 134.01],
        [1481740000000, 136.68],
        [1481912800000, 135.65],
        [1482172000000, 134.62],
        [1482258400000, 134.62],
        [1482344800000, 134.62],
        [1482431468000, 139.64],
        [1482517600000, 140.21],
        [1482776800000, 140.00],
        [1482863200000, 140.97],
        [1482949600000, 143.57],
        [1483036000000, 145.29],
        [1483381600000, 141.37],
        [1483468000000, 136.04],
        [1483727200000, 146.40],
        [1483986400000, 145.18],
        [1484072800000, 138.74],
        [1484159200000, 134.60],
        [1484245600000, 129.29],
        [1484332000000, 130.65],
        [1484677600000, 127.95],
        [1484850400000, 127.95],
        [1485282400000, 122.19],
        [1485455200000, 124.08],
        [1485541600000, 125.10],
        [1485800800000, 121.41],
        [1485887200000, 145.17],
        [1485973600000, 144.58],
        [1486060000000, 120.02],
        [1486405600000, 114.45],
        [1486492000000, 113.01],
        [1486578400000, 142.00],
        [1486751468000, 113.77],
        [1487010400000, 112.87],
        [1487096800000, 114.53],
        [1487269600000, 114.98],
        [1487356000000, 114.98],
        [1487701600000, 142.27],
        [1487788000000, 144.15],
        [1487874400000, 115.59],
        [1487960800000, 115.46],
        [1488306400000, 109.71],
        [1488392800000, 109.35],
        [1488565600000, 106.23],
        [1488824800000, 106.34]
    ];
    var exchangerates = [
        [1427606000000, 0.7580],
        [1427692400000, 0.7580],
        [1427778800000, 0.75470],
        [1427865200000, 0.75490],
        [1427951600000, 0.76130],
        [1428038000000, 0.76550],
        [1428124400000, 0.76930],
        [1428210800000, 0.76940],
        [1428297200000, 0.76880],
        [1428383600000, 0.76780],
        [1428470000000, 0.77080],
        [1428556400000, 0.77270],
        [1428642800000, 0.77490],
        [1428729200000, 0.77410],
        [1428815600000, 0.77410],
        [1428902000000, 0.77320],
        [1428988400000, 0.77270],
        [1429074800000, 0.77370],
        [1429161468000, 0.77240],
        [1429247600000, 0.77120],
        [1429334000000, 0.7720],
        [1429420400000, 0.77210],
        [1429506800000, 0.77170],
        [1429593200000, 0.77040],
        [1429679600000, 0.7690],
        [1429766000000, 0.77110],
        [1429852400000, 0.7740],
        [1429938800000, 0.77450],
        [1430025200000, 0.77450],
        [1430114200000, 0.7740],
        [1430198000000, 0.77160],
        [1430284400000, 0.77130],
        [1430370800000, 0.76780],
        [1430457200000, 0.76880],
        [1430543600000, 0.77180],
        [1430630000000, 0.77180],
        [1430716400000, 0.77280],
        [1430802800000, 0.77290],
        [1430889200000, 0.76980],
        [1430975600000, 0.76850],
        [1431062000000, 0.76810],
        [1431148400000, 0.7690],
        [1431234800000, 0.7690],
        [1431321468000, 0.76980],
        [1431407600000, 0.76990],
        [1431494000000, 0.76510],
        [1431580400000, 0.76130],
        [1431666800000, 0.76160],
        [1431753200000, 0.76140],
        [1431839600000, 0.76140],
        [1431926000000, 0.76070],
        [1432012400000, 0.76020],
        [1432098800000, 0.76110],
        [1432185200000, 0.76220],
        [1432271600000, 0.76150],
        [1432358000000, 0.75980],
        [1432444400000, 0.75980],
        [1432530800000, 0.75920],
        [1432617200000, 0.75730],
        [1432703600000, 0.75660],
        [1432790000000, 0.75670],
        [1432876400000, 0.75910],
        [1432962800000, 0.75820],
        [1433049200000, 0.75850],
        [1433135600000, 0.76130],
        [1433222000000, 0.76310],
        [1433308400000, 0.76150],
        [1433394800000, 0.760],
        [1433481468000, 0.76130],
        [1433567600000, 0.76270],
        [1433654000000, 0.76270],
        [1433740400000, 0.76080],
        [1433826800000, 0.75830],
        [1433913200000, 0.75750],
        [1433999600000, 0.75620],
        [1434086000000, 0.7520],
        [1434172400000, 0.75120],
        [1434258800000, 0.75120],
        [1434345200000, 0.75170],
        [1434431600000, 0.7520],
        [1434518000000, 0.75110],
        [1434604400000, 0.7480],
        [1434690800000, 0.75090],
        [1434777200000, 0.75310],
        [1434860000000, 0.75310],
        [1434946400000, 0.75270],
        [1435032800000, 0.74980],
        [1435145200000, 0.74930],
        [1435205600000, 0.75040],
        [1435292000000, 0.750],
        [1435378400000, 0.74910],
        [1435464800000, 0.74910],
        [1435551468000, 0.74850],
        [1435637600000, 0.74840],
        [1435724000000, 0.74920],
        [1435810400000, 0.74710],
        [1435896800000, 0.74590],
        [1435983200000, 0.74770],
        [1436069600000, 0.74770],
        [1436156000000, 0.74830],
        [1436242400000, 0.74580],
        [1436328800000, 0.74480],
        [1436415200000, 0.7430],
        [1436501600000, 0.73990],
        [1436588000000, 0.73950],
        [1436674400000, 0.73950],
        [1436760800000, 0.73780],
        [1436847200000, 0.73820],
        [1436933600000, 0.73620],
        [1437020000000, 0.73550],
        [1437106400000, 0.73480],
        [1437192800000, 0.73610],
        [1437279200000, 0.73610],
        [1437365600000, 0.73650],
        [1437452000000, 0.73620],
        [1437538400000, 0.73310],
        [1437624800000, 0.73390],
        [1437711468000, 0.73440],
        [1437797600000, 0.73270],
        [1437884000000, 0.73270],
        [1437970400000, 0.73360],
        [1438056800000, 0.73330],
        [1438143200000, 0.73590],
        [1438229600000, 0.73590],
        [1438316000000, 0.73720],
        [1438402400000, 0.7360],
        [1438488800000, 0.7360],
        [1438575200000, 0.7350],
        [1438661600000, 0.73650],
        [1438748000000, 0.73840],
        [1438834400000, 0.73950],
        [1438920800000, 0.74130],
        [1439007200000, 0.73970],
        [1439093600000, 0.73960],
        [1439180000000, 0.73850],
        [1439266400000, 0.73780],
        [1439352800000, 0.73660],
        [1439439200000, 0.740],
        [1439525600000, 0.74110],
        [1439614680000, 0.74060],
        [1439698400000, 0.74050],
        [1439784800000, 0.74140],
        [1439871468000, 0.74310],
        [1439957600000, 0.74310],
        [1440044000000, 0.74380],
        [1440130400000, 0.74430],
        [1440216800000, 0.74430],
        [1440303200000, 0.74430],
        [1440389600000, 0.74340],
        [1440476000000, 0.74290],
        [1440562400000, 0.74420],
        [1440648800000, 0.7440],
        [1440735200000, 0.74390],
        [1440821600000, 0.74370],
        [1440908000000, 0.74370],
        [1440994400000, 0.74290],
        [1441080800000, 0.74030],
        [1441427200000, 0.73990],
        [1441253600000, 0.74180],
        [1441340000000, 0.74680],
        [1441426400000, 0.7480],
        [1441512800000, 0.7480],
        [1441599200000, 0.7490],
        [1441685600000, 0.74940],
        [1441772000000, 0.75220],
        [1441858400000, 0.75150],
        [1441944800000, 0.75020],
        [1442031468000, 0.74720],
        [1442143600000, 0.74720],
        [1442204000000, 0.74620],
        [1442290400000, 0.74550],
        [1442376800000, 0.74490],
        [1442463200000, 0.74670],
        [1442549600000, 0.74580],
        [1442636000000, 0.74270],
        [1442722400000, 0.74270],
        [1442808800000, 0.7430],
        [1442895200000, 0.74290],
        [1442981600000, 0.7440],
        [1443068000000, 0.7430],
        [1443154400000, 0.74220],
        [1443240800000, 0.73880],
        [1443327200000, 0.73880],
        [1443413600000, 0.73690],
        [1443500000000, 0.73450],
        [1443586400000, 0.73450],
        [1443672800000, 0.73450],
        [1443759200000, 0.73520],
        [1443845600000, 0.73410],
        [1443932000000, 0.73410],
        [1444018400000, 0.7340],
        [1444104800000, 0.73240],
        [1444191468000, 0.72720],
        [1444277600000, 0.72640],
        [1444364000000, 0.72550],
        [1444450400000, 0.72580],
        [1444536800000, 0.72580],
        [1444623200000, 0.72560],
        [1444709600000, 0.72570],
        [1444796000000, 0.72470],
        [1444882400000, 0.72430],
        [1444968800000, 0.72440],
        [1445055200000, 0.72350],
        [1445141600000, 0.72350],
        [1445228000000, 0.72350],
        [1445314400000, 0.72350],
        [1445400800000, 0.72620],
        [1445487200000, 0.72880],
        [1445573600000, 0.73010],
        [1445660000000, 0.73370],
        [1445746400000, 0.73370],
        [1445832800000, 0.73240],
        [1445919200000, 0.72970],
        [1446005600000, 0.73170],
        [1446092000000, 0.73150],
        [1446178400000, 0.72880],
        [1446264800000, 0.72630],
        [1446351468000, 0.72630],
        [1446437600000, 0.72420],
        [1446524000000, 0.72530],
        [1446610400000, 0.72640],
        [1446696800000, 0.7270],
        [1446783200000, 0.73120],
        [1446869600000, 0.73050],
        [1446956000000, 0.73050],
        [1447042400000, 0.73180],
        [1447128800000, 0.73580],
        [1447215200000, 0.74090],
        [1447301600000, 0.74540],
        [1447388000000, 0.74370],
        [1447474400000, 0.74240],
        [1447560800000, 0.74240],
        [1447647200000, 0.74150],
        [1447733600000, 0.74190],
        [1447820000000, 0.74140],
        [1447906400000, 0.73770],
        [1447992800000, 0.73550],
        [1448079200000, 0.73150],
        [1448165600000, 0.73150],
        [1448252000000, 0.7320],
        [1448338400000, 0.73320],
        [1448424800000, 0.73460],
        [1448511468000, 0.73280],
        [1448597600000, 0.73230],
        [1448684000000, 0.7340],
        [1448770400000, 0.7340],
        [1448856800000, 0.73360],
        [1448943200000, 0.73510],
        [1449029600000, 0.73460],
        [1449142000000, 0.73210],
        [1449202400000, 0.72940],
        [1449288800000, 0.72660],
        [1449375200000, 0.72660],
        [1449461600000, 0.72540],
        [1449548000000, 0.72420],
        [1449634400000, 0.72130],
        [1449720800000, 0.71970],
        [1449807200000, 0.72090],
        [1449893600000, 0.7210],
        [1449980000000, 0.7210],
        [1450066400000, 0.7210],
        [1450152800000, 0.72090],
        [1450239200000, 0.71590],
        [1450325600000, 0.71330],
        [1450414680000, 0.71050],
        [1450498400000, 0.70990],
        [1450584800000, 0.70990],
        [1450671468000, 0.70930],
        [1450757600000, 0.70930],
        [1450844000000, 0.70760],
        [1450930400000, 0.7070],
        [1451016800000, 0.70490],
        [1451103200000, 0.70120],
        [1451449600000, 0.70110],
        [1451276000000, 0.70190],
        [1451362400000, 0.70460],
        [1451448800000, 0.70630],
        [1451535200000, 0.70890],
        [1451621600000, 0.70770],
        [1451708000000, 0.70770],
        [1451794400000, 0.70770],
        [1451880800000, 0.70910],
        [1451967200000, 0.71440],
        [1452053600000, 0.70790],
        [1452140000000, 0.70530],
        [1452226400000, 0.7050],
        [1452312800000, 0.70550],
        [1452399200000, 0.70550],
        [1452485600000, 0.70450],
        [1452572000000, 0.70510],
        [1452658400000, 0.70510],
        [1452744800000, 0.70170],
        [1452831468000, 0.70],
        [1452917600000, 0.69950],
        [1453004000000, 0.69940],
        [1453090400000, 0.70140],
        [1453176800000, 0.70360],
        [1453263200000, 0.70210],
        [1453349600000, 0.70020],
        [1453436000000, 0.69670],
        [1453522400000, 0.6950],
        [1453612400000, 0.6950],
        [1453698800000, 0.69390],
        [1453785200000, 0.6940],
        [1453871600000, 0.69220],
        [1453958000000, 0.69190],
        [1454044400000, 0.69140],
        [1454130800000, 0.68940],
        [1454217200000, 0.68910],
        [1454303600000, 0.69040],
        [1454390000000, 0.6890],
        [1454476400000, 0.68340],
        [1454562800000, 0.68230],
        [1454649200000, 0.68070],
        [1454735600000, 0.68150],
        [1454822000000, 0.68150],
        [1454908400000, 0.68470],
        [1454994800000, 0.68590],
        [1455081468000, 0.68220],
        [1455167600000, 0.68270],
        [1455254000000, 0.68370],
        [1455340400000, 0.68230],
        [1455426800000, 0.68220],
        [1455513200000, 0.68220],
        [1455599600000, 0.67920],
        [1455686000000, 0.67460],
        [1455772400000, 0.67350],
        [1455858800000, 0.67310],
        [1455945200000, 0.67420],
        [1456031600000, 0.67440],
        [1456144000000, 0.67390],
        [1456204400000, 0.67310],
        [1456290800000, 0.67610],
        [1456377200000, 0.67610],
        [1456463600000, 0.67850],
        [1456550000000, 0.68180],
        [1456636400000, 0.68360],
        [1456722800000, 0.68230],
        [1456809200000, 0.68050],
        [1456895600000, 0.67930],
        [1456982000000, 0.68490],
        [1457068400000, 0.68330],
        [1457154800000, 0.68250],
        [1457241468000, 0.68250],
        [1457327600000, 0.68160],
        [1457414000000, 0.67990],
        [1457500400000, 0.68130],
        [1457586800000, 0.68090],
        [1457673200000, 0.68680],
        [1457759600000, 0.69330],
        [1457846000000, 0.69330],
        [1457932400000, 0.69450],
        [1458018800000, 0.69440],
        [1458105200000, 0.69460],
        [1458191600000, 0.69640],
        [1458278000000, 0.69650],
        [1458364400000, 0.69560],
        [1458450800000, 0.69560],
        [1458537200000, 0.6950],
        [1458623600000, 0.69480],
        [1458710000000, 0.69280],
        [1458796400000, 0.68870],
        [1458882800000, 0.68240],
        [1458969200000, 0.67940],
        [1459055600000, 0.67940],
        [1459142000000, 0.68030],
        [1459228400000, 0.68550],
        [1459314800000, 0.68240],
        [1459401468000, 0.67910],
        [1459487600000, 0.67830],
        [1459574000000, 0.67850],
        [1459660400000, 0.67850],
        [1459746800000, 0.67970],
        [1459833200000, 0.680],
        [1459919600000, 0.68030],
        [1468006000000, 0.68050],
        [1468092400000, 0.6760],
        [1468178800000, 0.6770],
        [1468265200000, 0.6770],
        [1468351600000, 0.67360],
        [1468438000000, 0.67260],
        [1468524400000, 0.67640],
        [1468610800000, 0.68210],
        [1468697200000, 0.68310],
        [1468783600000, 0.68420],
        [1468870000000, 0.68420],
        [1468956400000, 0.68870],
        [1469042800000, 0.69030],
        [1469129200000, 0.68480],
        [1469483600000, 0.68240],
        [1469302000000, 0.67880],
        [1469388400000, 0.68140],
        [1469474800000, 0.68140],
        [1469561468000, 0.67970],
        [1469647600000, 0.67690],
        [1469734000000, 0.67650],
        [1469820400000, 0.67330],
        [1469906800000, 0.67290],
        [1469993200000, 0.67580],
        [1470079600000, 0.67580],
        [1470166000000, 0.6750],
        [1470252400000, 0.6780],
        [1470338800000, 0.68330],
        [1470425200000, 0.68560],
        [1470514200000, 0.69030],
        [1470598000000, 0.68960],
        [1470684400000, 0.68960],
        [1470770800000, 0.68820],
        [1470857200000, 0.68790],
        [1470943600000, 0.68620],
        [1471030000000, 0.68520],
        [1471142400000, 0.68230],
        [1471470800000, 0.68130],
        [1471289200000, 0.68130],
        [1471375600000, 0.68220],
        [1471462000000, 0.68020],
        [1471548400000, 0.68020],
        [1471634800000, 0.67840],
        [1471721468000, 0.67480],
        [1471807600000, 0.67470],
        [1471894000000, 0.67470],
        [1471980400000, 0.67480],
        [1472066800000, 0.67330],
        [1472153200000, 0.6650],
        [1472239600000, 0.66110],
        [1472326000000, 0.65830],
        [1472412400000, 0.6590],
        [1472498800000, 0.6590],
        [1472585200000, 0.65810],
        [1472671600000, 0.65780],
        [1472758000000, 0.65740],
        [1472844400000, 0.65320],
        [1472930800000, 0.65020],
        [1473017200000, 0.65140],
        [1473103600000, 0.65140],
        [1473190000000, 0.65070],
        [1473276400000, 0.6510],
        [1473362800000, 0.64890],
        [1473449200000, 0.64240],
        [1473535600000, 0.64060],
        [1473622000000, 0.63820],
        [1473708400000, 0.63820],
        [1473794800000, 0.63410],
        [1473881468000, 0.63440],
        [1473967600000, 0.63780],
        [1474054000000, 0.64390],
        [1474140400000, 0.64780],
        [1474226800000, 0.64810],
        [1474313200000, 0.64810],
        [1474399600000, 0.64940],
        [1474486000000, 0.64380],
        [1474572400000, 0.63770],
        [1474658800000, 0.63290],
        [1474745200000, 0.63360],
        [1474831600000, 0.63330],
        [1474914400000, 0.63330],
        [1475000800000, 0.6330],
        [1475087200000, 0.63710],
        [1475173600000, 0.64030],
        [1475260000000, 0.63960],
        [1475346400000, 0.63640],
        [1475432800000, 0.63560],
        [1475519200000, 0.63560],
        [1475605600000, 0.63680],
        [1475692000000, 0.63570],
        [1475778400000, 0.63540],
        [1475864800000, 0.6320],
        [1475951468000, 0.63320],
        [1476037600000, 0.63280],
        [1476124000000, 0.63310],
        [1476210400000, 0.63420],
        [1476296800000, 0.63210],
        [1476383200000, 0.63020],
        [1476469600000, 0.62780],
        [1476556000000, 0.63080],
        [1476642400000, 0.63240],
        [1476728800000, 0.63240],
        [1476815200000, 0.63070],
        [1476901600000, 0.62770],
        [1476988000000, 0.62690],
        [1477074400000, 0.63350],
        [1477160800000, 0.63920],
        [1477247200000, 0.640],
        [1477333600000, 0.64010],
        [1477420000000, 0.63960],
        [1477506400000, 0.64070],
        [1477592800000, 0.64230],
        [1477679200000, 0.64290],
        [1477765600000, 0.64720],
        [1477852000000, 0.64850],
        [1477938400000, 0.64860],
        [1478024800000, 0.64670],
        [1478111468000, 0.64440],
        [1478197600000, 0.64670],
        [1478284000000, 0.65090],
        [1478370400000, 0.64780],
        [1478456800000, 0.64610],
        [1478543200000, 0.64610],
        [1478629600000, 0.64680],
        [1478716000000, 0.64490],
        [1478802400000, 0.6470],
        [1478888800000, 0.64610],
        [1478975200000, 0.64520],
        [1479061600000, 0.64220],
        [1479148000000, 0.64220],
        [1479234400000, 0.64250],
        [1479320800000, 0.64140],
        [1479407200000, 0.63660],
        [1479493600000, 0.63460],
        [1479580000000, 0.6350],
        [1479666400000, 0.63460],
        [1479752800000, 0.63460],
        [1479839200000, 0.63430],
        [1479925600000, 0.63460],
        [1480014680000, 0.63790],
        [1480098400000, 0.64160],
        [1482864800000, 0.64420],
        [1480271468000, 0.64310],
        [1480357600000, 0.64310],
        [1480444000000, 0.64350],
        [1480530400000, 0.6440],
        [1480616800000, 0.64730],
        [1480703200000, 0.64690],
        [1480789600000, 0.63860],
        [1480876000000, 0.63560],
        [1480962400000, 0.6340],
        [1481048800000, 0.63460],
        [1481135200000, 0.6430],
        [1481221600000, 0.64520],
        [1481308000000, 0.64670],
        [1481394400000, 0.65060],
        [1481480800000, 0.65040],
        [1481567200000, 0.65030],
        [1481653600000, 0.64810],
        [1481740000000, 0.64510],
        [1481826400000, 0.6450],
        [1481912800000, 0.64410],
        [1481999200000, 0.64140],
        [1482085600000, 0.64090],
        [1482172000000, 0.64090],
        [1482258400000, 0.64280],
        [1482344800000, 0.64310],
        [1482431468000, 0.64180],
        [1482517600000, 0.63710],
        [1482604000000, 0.63490],
        [1482690400000, 0.63330],
        [1482776800000, 0.63340],
        [1482863200000, 0.63380],
        [1482949600000, 0.63420],
        [1483036000000, 0.6320],
        [1483122400000, 0.63180],
        [1483208800000, 0.6370],
        [1483295200000, 0.63680],
        [1483381600000, 0.63680],
        [1483468000000, 0.63830],
        [1483554400000, 0.63710],
        [1483640800000, 0.63710],
        [1483727200000, 0.63550],
        [1483813600000, 0.6320],
        [1483900000000, 0.62770],
        [1483986400000, 0.62760],
        [1484072800000, 0.62910],
        [1484159200000, 0.62740],
        [1484245600000, 0.62930],
        [1484332000000, 0.63110],
        [1484418400000, 0.6310],
        [1484504800000, 0.63120],
        [1484591468000, 0.63120],
        [1484677600000, 0.63040],
        [1484764000000, 0.62940],
        [1484850400000, 0.63480],
        [1484936800000, 0.63780],
        [1485023200000, 0.63680],
        [1485109600000, 0.63680],
        [1485196000000, 0.63680],
        [1485282400000, 0.6360],
        [1485368800000, 0.6370],
        [1485455200000, 0.64180],
        [1485541600000, 0.64110],
        [1485628000000, 0.64350],
        [1485714400000, 0.64270],
        [1485800800000, 0.64270],
        [1485887200000, 0.64190],
        [1485973600000, 0.64460],
        [1486060000000, 0.64680],
        [1486146400000, 0.64870],
        [1486232800000, 0.65940],
        [1486319200000, 0.66660],
        [1486405600000, 0.66660],
        [1486492000000, 0.66780],
        [1486578400000, 0.67120],
        [1486664800000, 0.67050],
        [1486751468000, 0.67180],
        [1486837600000, 0.67840],
        [1486924000000, 0.68110],
        [1487010400000, 0.68110],
        [1487096800000, 0.67940],
        [1487183200000, 0.68040],
        [1487269600000, 0.67810],
        [1487356000000, 0.67560],
        [1487442400000, 0.67350],
        [1487528800000, 0.67630],
        [1487615200000, 0.67620],
        [1487701600000, 0.67770],
        [1487788000000, 0.68150],
        [1487874400000, 0.68020],
        [1487960800000, 0.6780],
        [1488047200000, 0.67960],
        [1488133600000, 0.68170],
        [1488220000000, 0.68170],
        [1488306400000, 0.68320],
        [1488392800000, 0.68770],
        [1488479200000, 0.69120],
        [1488565600000, 0.69140],
        [1488652000000, 0.70090],
        [1488738400000, 0.70120],
        [1488824800000, 0.7010],
        [1488911468000, 0.70050]
    ];

    function euroFormatter(v, axis) {
        return "&yen;"+v.toFixed(axis.tickDecimals);
    }

    function doPlot(position) {
        $.plot($("#flot-line-chart-multi"), [{
            data: oilprices,
            label: "焊条 (&yen;)"
        }, {
            data: exchangerates,
            label: "美元/人民币汇率",
            yaxis: 2
        }], {
            xaxes: [{
                mode: 'time'
            }],
            yaxes: [{
                min: 0
            }, {
                // align if we are to the right
                alignTicksWithAxis: position == "right" ? 1 : null,
                position: position,
                tickFormatter: euroFormatter
            }],
            legend: {
                position: 'sw'
            },
            colors: ["#33aaff"],
            grid: {
                color: "#999999",
                hoverable: true,
                clickable: true,
                tickColor: "#D4D4D4",
                borderWidth:0,
                hoverable: true //IMPORTANT! this is needed for tooltip to work,

            },
            tooltip: true,
            tooltipOpts: {
                content: "%s %x 为 %y",
                xDateFormat: "%y-%0m-%0d",

                onHover: function(flotItem, $tooltipEl) {
                    // console.log(flotItem, $tooltipEl);
                }
            }

        });
    }

    doPlot("right");

    $("button").click(function() {
        doPlot($(this).text());
    });
});



