p1F()
function p1F() {
	$('p1').style.display = "block"
	setInterval(()=>{
		for (let i = 0; i < $$('yuan').length; i++) {
			$$('yuan').item(i).src = "img/yuan0.png"
			for (let i = 0; i < $$('yuan').length; i++) {
				setTimeout(()=>{
					$$('yuan').item(i).src = "img/yuan1.png"
				},i*300)
			}
		}
	},1200)
	for (let i = 0; i < 101; i++) {
		setTimeout(()=>{
			$('p1_loaning').innerHTML = `${i}%`
			if (i===100) {
				p2F()
				music()
			}
		},i*30)
	}
}
function p2F() {
	$('p1').style.display = "none"
	$('p2').style.display = "block"
	$('p3').style.display = "none"
	$('p2_btn').onclick = ()=>{
		p3F()
	}
}
function p3F() {
	$('p2').style.display = "none"
	$('p3').style.display = "block"
	// 题目索引添加大小类名
	let tiIndex = 0
	// 根据题目选择答案的索引
	let ans_index = [2,0,1,3,4]
	// 添加类名方法
	function addClass(tiIndex) {
		for (let i = 0; i < $$('kong').length; i++) {
			$$('kong').item(i).classList.remove('daXiao')
		}
		$$('kong').item(tiIndex).classList.add('daXiao')
	}
	addClass(tiIndex)
	// 初始化题目方法
	function init() {
		tiIndex = 0
		for (let i = 0; i < $$('opt').length; i++) {
			$$('opt').item(i).style.display = "block"
		}
		for (let i = 0; i < $$('kong').length; i++) {
			$$('kong').item(i).src = "img/p3_kong.png"
		}
	}
	init()
	// 判断对错
	for (let i = 0; i < $$('opt').length; i++) { 
		$$('opt').item(i).onclick = ()=>{
			// 当前选择的题目索引是否等于答案数组里的题目索引
			if (i === ans_index[tiIndex]) {
				console.log('对');
				// 空白的题目索引图片等于点击的图片
				$$('opt').item(i).style.display = "none"
				$$('kong').item(tiIndex).src = $$('opt').item(i).src
				tiIndex++
				addClass(tiIndex)
				if (tiIndex == 5) {
					$('ok').style.display = "block"
					$('ok').onclick = ()=>{
						$('ok').style.display = "none"
						p2F()
						init()
					}
				}
			} else{
				console.log('错');
				$('err').style.display = "block"
				$('p3_err').onclick = ()=>{
					$('err').style.display = "none"
				}
			}
		}
	}
}
