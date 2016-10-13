action = false;
document.onkeydown = evento;
document.onkeyup = ativa;
var imgGaroto = ["./charset/balao/garoto.png", "./charset/balao/garoto2.png"];
var imgBomba = ["./charset/balao/bomba.png", "./charset/balao/bomba2.png"];
var stt = [ "hidden" , "visible" ];
var ind=1;
var size=48,t=308,l=402;
var ativado=true;
var pts=0, s=0;
function evento(e) {
	//Espaco
	if (e.keyCode == 32) {
		if(ativado){
			update();
			ativado=false;
		}
	}
	
}
function ativa(e){
	if (e.keyCode == 32) {
		ativado=true;
	}
}
function update(){
	var garoto=document.getElementById("garoto");
	var bomba=document.getElementById("bomba");
	var suor=document.getElementById("suor");
	var balao=document.getElementById("balao");
	var pontos=document.getElementById("pontos");
	garoto.src=imgGaroto[ind];
	bomba.src=imgBomba[ind];
	suor.style.visibility=stt[ind];
	size+=4;
	balao.style.width=size;
	balao.style.height=(size/4)*5;
	t-=5;
	balao.style.top=t;
	l-=2;
	balao.style.left=l;
	pts++;
	pontos.innerHTML=pts;
	if(ind==1)
		ind=0;
	else
		ind=1;
}
function time(){
	var tempo= document.getElementById("tempo");
	var relogio= document.getElementById("relogio");
	s++;
	if(tempo != null && tempo != undefined){
		tempo.innerHTML=(10-s);
	}
	if(s==7){
		relogio.style.color="red";
	}
	if(s>=10){
		clearInterval(refreshInterval);
		if(pts>=60){
			var victory = new Audio("./soundfx/missioncomplete.wav");
			quests[5] = 2;
			while(document.getElementsByTagName("mini")[0].childNodes.length != 0){
				document.getElementsByTagName("mini")[0].removeChild(document.getElementsByTagName("mini")[0].childNodes[0]);
			}
			document.getElementsByTagName("head")[0].removeChild(script);
			document.onkeydown = principal;
			document.onkeyup = secundario;
			setTimeout(function () {
				action = false;
				u_action = true;
				pauseP = false;
				victory.play();
			}, 200);
		}else{
			var victory = new Audio("./soundfx/missioncomplete.wav");
			quests[5] = 1;
			pauseP = false;
			while(document.getElementsByTagName("mini")[0].childNodes.length != 0){
				document.getElementsByTagName("mini")[0].removeChild(document.getElementsByTagName("mini")[0].childNodes[0]);
			}
			document.getElementsByTagName("head")[0].removeChild(script);
			document.onkeydown = principal;
			document.onkeyup = secundario;
			setTimeout(function (){
				action = false;
				u_action = true;
				pauseP = false;
				victory.play();
			}, 200);
		}
	}
}
var refreshInterval=setInterval(
	function(){ 
		time();
	}
	, 1000
);