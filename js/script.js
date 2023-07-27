const $ = (id) => document.getElementById(id)
const $$ = (classname) => document.getElementsByClassName(classname)
$('music_icon').onclick = ()=>{
		if ($('bgm').paused) {
		$('bgm').play()
		$('music_icon').src = "img/music_on.png"
		$('music_icon').style.animationPlayState = "running"
	} else{
		$('bgm').pause()
		$('music_icon').src = "img/music_off.png"
		$('music_icon').style.animationPlayState = "paused"
	}
}
// function music() {
// 	$('music_icon').style.display = "block"
// 	if ($('bgm').paused) {
// 		$('bgm').play()
// 		$('music_icon').src = "img/music_on.png"
// 		$('music_icon').style.animationPlayState = "running"
// 	} else{
// 		$('bgm').pause()
// 		$('music_icon').src = "img/music_off.png"
// 		$('music_icon').style.animationPlayState = "paused"
// 	}
// }

