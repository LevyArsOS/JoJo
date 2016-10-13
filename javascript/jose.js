var images = [
	"./charset/jose/img1.png",
	"./charset/jose/img1.png",
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
					states[current] = 2;
					pt++;
					current = -1;
					if(pt == 8){
						quests[4] = 1;
						pauseP = false;
						while(document.getElementsByTagName("mini")[0].childNodes.length != 0){
							document.getElementsByTagName("mini")[0].removeChild(document.getElementsByTagName("mini")[0].childNodes[0]);
						}
						document.getElementsByTagName("head")[0].removeChild(script);
						var victory = new Audio("./soundfx/missioncomplete.wav");
						setTimeout(function (){
							victory.play();
						},200);
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



