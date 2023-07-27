function p1(){
    var tag=document.createElement('div')
    tag.id='p1'
    tag.innerHTML=`
    <img src="./img/p1_bg.png" class="bg">
    <img src="./img/p1_mao.png" id="p1_mao">
    <img src="./img/yuan0.png" id="p1_yuan0" class="yuan">
    <img src="./img/yuan0.png" id="p1_yuan1" class="yuan">
    <img src="./img/yuan0.png" id="p1_yuan2" class="yuan">
    <img src="./img/yuan0.png" id="p1_yuan3" class="yuan">
    <div id="p1_loaning">100%</div>
`
    var t=document.getElementById('view')
    t.appendChild(tag)
}
p1()
