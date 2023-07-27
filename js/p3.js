let chart;

function generatePieChart(obtainedScore, totalScore) {
	// 如果已经存在饼图实例，则销毁它
	if (chart) {
		chart.dispose();
	}

	// 创建一个新的ECharts实例
	chart = echarts.init(document.getElementById('chartContainer'));

	// 配置数据和样式
	const remainingScore = totalScore - obtainedScore;
	const data = [{
			value: obtainedScore,
			itemStyle: {
				color: '#00FF00'
			}
		}, // 设置第一个数据项的颜色为橙色
		{
			value: remainingScore,
			itemStyle: {
				color: '#FF0000'
			}
		} // 设置第二个数据项的颜色为蓝色
	];

	// 配置饼图样式
	const option = {
		series: [{
			name: '分数占比',
			type: 'pie',
			radius: '70%',
			avoidLabelOverlap: false,
			label: {
				show: false,
				position: 'center'
			},
			emphasis: {
				label: {
					show: true,
					fontSize: '20',
					fontWeight: 'bold'
				}
			},
			labelLine: {
				show: false
			},
			data: data
		}]
	};

	// 渲染饼图
	chart.setOption(option);
}

function p1() {
	var tag = document.createElement('div')
	tag.id = 'p3'
	tag.innerHTML = `
    <img src="./img/p3_bg.png" class="bg">
				<img src="./img/p3_kong.png" id="p3_kong0" class="kong">
				<img src="./img/p3_kong.png" id="p3_kong1" class="kong">
				<img src="./img/p3_kong.png" id="p3_kong2" class="kong">
				<img src="./img/p3_kong.png" id="p3_kong3" class="kong">
				<img src="./img/p3_kong.png" id="p3_kong4" class="kong">
				<div class="kong"></div>
				<img src="./img/p3_opt0.png" id="p3_opt0" class="opt">
				<img src="./img/p3_opt1.png" id="p3_opt1" class="opt">
				<img src="./img/p3_opt2.png" id="p3_opt2" class="opt">
				<img src="./img/p3_opt3.png" id="p3_opt3" class="opt">
				<img src="./img/p3_opt4.png" id="p3_opt4" class="opt">
				<img src="./img/p3_opt5.png" id="p3_opt5" class="opt">
				<img src="./img/p3_opt6.png" id="p3_opt6" class="opt">
				<img src="./img/p3_opt7.png" id="p3_opt7" class="opt">
				<div id="err">
					<div class="zhezhao"></div>
					<img src="./img/p3_err.png" id="p3_err">
				</div>
				
				<div id="ok">
					<div class="zhezhao"></div>
					<img src="./img/p3_ok.png" id="p3_ok">
					<div id="result">您的得分是：100分</div>
					<!-- 创建一个具有id为chartContainer的容器元素来显示饼图 -->
					<div id="chartContainer"></div>
				</div>
`
	var t = document.getElementById('view')
	t.appendChild(tag)
	//设置饼图
	// setChart()
}
p1()
