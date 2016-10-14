var images = [
	"./charset/cabo/A.png",
	"./charset/cabo/BA.png",
	"./charset/cabo/L.png",
	"./charset/cabo/BL.png",
	"./charset/cabo/M.png",
	"./charset/cabo/BM.png",
	"./charset/cabo/V.png",
	"./charset/cabo/BV.png"
];
var pos = [ 0, 1, 2, 3, 4, 5, 6, 7];
var idx = [ 0, 1, 2, 3, 4, 5, 6, 7];
var T568A = [ 7, 6, 3, 0, 1, 2, 5, 4];
var T568B = [ 3, 2, 7, 0, 1, 6, 5, 4];
var patt;

function init() {
	patt =(Math.floor(Math.random() * 2) == 1)? 'A': 'B';
	if(patt == 'A')
		document.getElementById("lb1").textContent = "T-568A";
	else
		document.getElementById("lb1").textContent = "T-568B";
    var i, j, x;
    do{
		for (i = 7; i >= 0; i--) {
		    j = Math.floor(Math.random() * i);
		    x = idx[i];
		    idx[i] = idx[j];
		    idx[j] = x;
		}
	}while(verify());
    for (i = 0; i < 8; i++){
    	document.getElementById("id" + i.toString()).src = images[idx[i]];	
	}
}

var source;
var num_source;

function mov(n){
	var i, x, aux;
	for (i = 0; i < 8; i++)
    	if(pos[i] == num_source)
    		x = i;
	if(n > 0){
		aux = pos[x];
		pos[x] = pos[x + 1];
		pos[x + 1] = aux;
	}
	else{
		aux = pos[x];
		pos[x] = pos[x - 1];
		pos[x - 1] = aux;
	}
	if(verify() == 1){
		for (i = 0; i < 8; i++){
    		document.getElementById("id" + i.toString()).setAttribute('draggable', false);	
		}
		setTimeout(
			function(){
				quests[8] = 1;
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
			}, 50);	
	}
}

function isbefore(a, b) {
    if (a.parentNode == b.parentNode) {
      	for (var cur = a; cur; cur = cur.previousSibling) {
        	if (cur === b) { 
          		return true;
        	}
      	}
    }
    return false;
} 

function dragenter(e) {
	if(e != undefined && e != null){
		if (isbefore(source, e.target)) {
			e.target.parentNode.insertBefore(source, e.target);
			if(parseInt((e.target.id).substr(2,1)) != num_source){
				mov(-1);
			}
		}
		else {
			e.target.parentNode.insertBefore(source, e.target.nextSibling);
			mov(1);
		}
	}
}

function dragstart(e) {
    source = e.target;
    moves = 0;
	num_source = parseInt((source.id).substr(2,1));
    e.dataTransfer.effectAllowed = 'move';
}
  
function verify(){
	var win = 1;
	if(patt == 'A'){
		for(var i = 0; i < 8; i++){
			if(idx[pos[i]] != T568A[i]){
				win = 0;
				break;
			}
		}
	}
	else{
		for(var i = 0; i < 8; i++){
			if(idx[pos[i]] != T568B[i]){
				win = 0;
				break;
			}
		}
	}
	return win;
}









  
  
  
  
  
  
  
