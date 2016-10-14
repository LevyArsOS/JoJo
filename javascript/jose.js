var images = [
	"./charset/jose/img1.PNG",
	"./charset/jose/img1.PNG",
	"./charset/jose/img2.png",
	"./charset/jose/img2.png",
	"./charset/jose/img3.png",
	"./charset/jose/img3.png",
	"./charset/jose/img4.png",
	"./charset/jose/img4.png",
	"./charset/jose/img5.png",
	"./charset/jose/img5.png",
	"./charset/jose/img6.png",
	"./charset/jose/img6.png",
	"./charset/jose/img7.png",
	"./charset/jose/img7.png",
	"./charset/jose/img8.jpg",
	"./charset/jose/img8.jpg"
];

var states = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// 0: Default
// 1: Matched

var current, pt = 0, wait;

function init() {
	current = -1;
	wait = false;
    var i, j, x;
    for (i = 15; i >= 0; i--) {
    	document.getElementById("id" + i.toString()).src = "./charset/jose/imgDefault.png";
        j = Math.floor(Math.random() * i);
        x = images[i];
        images[i] = images[j];
        images[j] = x;
    }
}

function clicked(n){
	if(wait == false){
		if(states[n] == 0 && n != current){
			document.getElementById("id" + n.toString()).src = images[n];
			if(current >= 0){
				if(images[current] == images[n]){
					states[current] = 1;
					states[n] = 2;
					pt++;
					current = -1;
					if(pt == 8){
						quests[4] = 1;
						document.onkeydown = null;
						document.onkeyup = null;
						gui.append(document.createElement("sucesso"));
						gui.setVisible(true);
						var victory = new Audio("./soundfx/missioncomplete.wav");
						victory.volume = volumeE;
						setTimeout(function(){victory.play();}, 1000);
						setTimeout(function () {
							audio.src = './music/02_Failien_Funk.ogg';
							audioCtr = setInterval(function (){
								if(audio.paused){
									audio.play();
									clearInterval(audioCtr);
								}
							}, 200);
							gui.setVisible(false);
							document.getElementsByTagName("mini")[0].innerHTML = "";
							document.getElementsByTagName("head")[0].removeChild(script);
							document.onkeydown = principal;
							document.onkeyup = secundario;
							action = false;
							u_action = true;
							pauseP = false;
						}, 2000);
					}
				}
				else{
					wait = true;
					setTimeout(
						function(){
							document.getElementById("id" + current.toString()).src = "./charset/jose/imgDefault.png";
							document.getElementById("id" + n.toString()).src = "./charset/jose/imgDefault.png";
							current = -1;
							wait = false;
						}, 1000);
				}
			}
			else{
				current = n;
			}
		}
	}
}



