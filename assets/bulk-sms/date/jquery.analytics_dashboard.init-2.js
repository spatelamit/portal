var options = {
	chart: {
		height: 320,
		type: "area",
		stacked: !0,
		toolbar: {
			show: !1,
			autoSelected: "zoom"
		}
	},
	colors: ["#2a77f4", "#a5c2f1"],
	dataLabels: {
		enabled: !1
	},
	stroke: {
		curve: "smooth",
		width: [1.5, 1.5],
		dashArray: [0, 4],
		lineCap: "round"
	},
	grid: {
		padding: {
			left: 0,
			right: 0
		},
		strokeDashArray: 3
	},
	markers: {
		size: 0,
		hover: {
			size: 0
		}
	},
	series: [{
		name: "New Visits",
		data: [0, 60, 20, 90, 45, 110, 55, 130, 44, 110, 75, 120]
	}, {
		name: "Unique Visits",
		data: [0, 45, 10, 75, 35, 94, 40, 115, 30, 105, 65, 110]
	}],
	xaxis: {
		type: "month",
		categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		axisBorder: {
			show: !0
		},
		axisTicks: {
			show: !0
		}
	},
	fill: {
		type: "gradient",
		gradient: {
			shadeIntensity: 1,
			opacityFrom: .4,
			opacityTo: .3,
			stops: [0, 90, 100]
		}
	},
	tooltip: {
		x: {
			format: "dd/MM/yy HH:mm"
		}
	},
	legend: {
		position: "top",
		horizontalAlign: "right"
	}
};
(chart = new ApexCharts(document.querySelector("#ana_dash_1"), options)).render();
options = {
	chart: {
		height: 270,
		type: "donut"
	},
	plotOptions: {
		pie: {
			donut: {
				size: "100%"
			}
		}
	},
	dataLabels: {
		enabled: !1
	},
	stroke: {
		show: !0,
		width: 3,
		colors: ["transparent"]
	},
	series: [50, 25, 25],
	legend: {
		show: !0,
		position: "bottom",
		horizontalAlign: "center",
		verticalAlign: "middle",
		floating: !1,
		fontSize: "13px",
		offsetX: 0,
		offsetY: 0
	},
	labels: ["Mobile", "Tablet", "Desktop"],
	colors: ["#2a76f4", "rgba(42, 118, 244, .5)", "rgba(42, 118, 244, .18)"],
	responsive: [{
		breakpoint: 600,
		options: {
			plotOptions: {
				donut: {
					customScale: .2
				}
			},
			chart: {
				height: 240
			},
			legend: {
				show: !1
			}
		}
	}],
	tooltip: {
		y: {
			formatter: function(o) {
				return o + " %"
			}
		}
	}
};
(chart = new ApexCharts(document.querySelector("#ana_device"), options)).render();
var chart, colors = ["#5AE190", "#FF5F62", "#92e6f0", "#bec7fa", "#A2AAAD", "#75BC54", "#0078D7"];
options = {
	series: [{
		name: "Inflation",
		data: [55, 10, 10, 10, 5, 5, 5]
	}],
	chart: {
		height: 355,
		type: "bar",
		toolbar: {
			show: !1
		}
	},
	plotOptions: {
		bar: {
			dataLabels: {
				position: "top"
			},
			columnWidth: "25",
			distributed: !0
		}
	},
	dataLabels: {
		enabled: !0,
		formatter: function(o) {
			return o + "%"
		},
		offsetY: -20,
		style: {
			fontSize: "12px",
			colors: ["#000"]
		}
	},
	colors: colors,
	xaxis: {
		categories: ["Devices", "Browser", "Platform", "iOS", "Mac", "Android",  "Windows"],
		position: "top",
		axisBorder: {
			show: !1
		},
		axisTicks: {
			show: !1
		},
		crosshairs: {
			fill: {
				type: "gradient",
				gradient: {
					colorFrom: "#D8E3F0",
					colorTo: "#BED1E6",
					stops: [0, 100],
					opacityFrom: .4,
					opacityTo: .5
				}
			}
		},
		tooltip: {
			enabled: !0
		}
	},
	grid: {
		padding: {
			left: 0,
			right: 0
		},
		strokeDashArray: 3
	},
	yaxis: {
		axisBorder: {
			show: !1
		},
		axisTicks: {
			show: !1
		},
		labels: {
			show: !1,
			formatter: function(o) {
				return o + "%"
			}
		}
	}
};
(chart = new ApexCharts(document.querySelector("#barchart"), options)).render();