function p1(){
    var tag=document.createElement('div')
    tag.id='p2'
    tag.innerHTML=`
    <img src="./img/p2_bg.png" class="bg">
				<img src="./img/p2_btn.png" id="p2_btn">
				<img src="./img/xingxing0.png" id="xing0" class="xing">
				<img src="./img/xingxing0.png" id="xing1" class="xing">
				<img src="./img/xingxing1.png" id="xing2" class="xing">
				<img src="./img/xingxing1.png" id="xing3" class="xing">
`
    var t=document.getElementById('view')
    t.appendChild(tag)
}
p1()
