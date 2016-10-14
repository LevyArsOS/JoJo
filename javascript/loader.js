var xmlDoc;
var loading = false;

var achievements = [0,0,0,0,0,0,0,0];

var quests = [0,0,0,0,0,0,0,0,0,0,0];

var mapa = [1,1,1,1,1];

var faca = [-1,-1,-1,-1];

var script;

var audioCtr;

loadFalas();

function joseMini(){
	audio.pause();
	script = document.createElement("script");
	script.type= 'text/javascript';
	script.onreadystatechange= function () {
		if (this.readyState == 'complete') {
			document.getElementsByTagName('mini')[0].innerHTML = '<div style="background-image: url(./charset/jose/bg.png);background-color: azure;height: 100%;width: 100%;"><table style="left: 310px;top: 165px;"><tr><td><img src = "#" onclick = "clicked(0)" id = "id0"></img></td><td><img src = "#" onclick = "clicked(1)" id = "id1"></img></td><td><img src = "#" onclick = "clicked(2)" id = "id2"></img></td><td><img src = "#" onclick = "clicked(3)" id = "id3"></img></td></tr><tr><td><img src = "#" onclick = "clicked(4)" id = "id4"></img></td><td><img src = "#" onclick = "clicked(5)" id = "id5"></img></td><td><img src = "#" onclick = "clicked(6)" id = "id6"></img></td><td><img src = "#" onclick = "clicked(7)" id = "id7"></img></td></tr><tr><td><img src = "#" onclick = "clicked(8)" id = "id8"></img></td><td><img src = "#" onclick = "clicked(9)" id = "id9"></img></td><td><img src = "#" onclick = "clicked(10)" id = "id10"></img></td><td><img src = "#" onclick = "clicked(11)" id = "id11"></img></td></tr><tr><td><img src = "#" onclick = "clicked(12)" id = "id12"></img></td><td><img src = "#" onclick = "clicked(13)" id = "id13"></img></td><td><img src = "#" onclick = "clicked(14)" id = "id14"></img></td><td><img src = "#" onclick = "clicked(15)" id = "id15"></img></td></tr></table></div>';
			init();
		}
	}
	script.onload = function () {
		document.getElementsByTagName('mini')[0].innerHTML = '<div style="background-image: url(./charset/jose/bg.png);background-color: azure;height: 100%;width: 100%;"><table style="left: 310px;top: 165px;"><tr><td><img src = "#" onclick = "clicked(0)" id = "id0"></img></td><td><img src = "#" onclick = "clicked(1)" id = "id1"></img></td><td><img src = "#" onclick = "clicked(2)" id = "id2"></img></td><td><img src = "#" onclick = "clicked(3)" id = "id3"></img></td></tr><tr><td><img src = "#" onclick = "clicked(4)" id = "id4"></img></td><td><img src = "#" onclick = "clicked(5)" id = "id5"></img></td><td><img src = "#" onclick = "clicked(6)" id = "id6"></img></td><td><img src = "#" onclick = "clicked(7)" id = "id7"></img></td></tr><tr><td><img src = "#" onclick = "clicked(8)" id = "id8"></img></td><td><img src = "#" onclick = "clicked(9)" id = "id9"></img></td><td><img src = "#" onclick = "clicked(10)" id = "id10"></img></td><td><img src = "#" onclick = "clicked(11)" id = "id11"></img></td></tr><tr><td><img src = "#" onclick = "clicked(12)" id = "id12"></img></td><td><img src = "#" onclick = "clicked(13)" id = "id13"></img></td><td><img src = "#" onclick = "clicked(14)" id = "id14"></img></td><td><img src = "#" onclick = "clicked(15)" id = "id15"></img></td></tr></table></div>';
		init();
	};
	script.src= './javascript/jose.js';
	document.getElementsByTagName("head")[0].appendChild(script);
	pauseP = true;
	u_action = true;
	audio.src = './music/03_Stroll_n_Roll.ogg';
	audioCtr = setInterval(function (){
		if(audio.paused){
			audio.play();
			clearInterval(audioCtr);
		}
	}, 200);
}

function gliviaMini(){
	audio.pause();
	script = document.createElement("script");
	script.type= 'text/javascript';
	script.onreadystatechange= function () {
		if (this.readyState == 'complete') {
			document.getElementsByTagName('mini')[0].innerHTML = '  <div id="telaBalao" style="    height: 100%;    background-color: transparent;">  <img id="bg" src="./charset/balao/bgBalao.png" style="    width: 800;height: 600px;image-rendering: pixelated;z-index: -4;position: absolute;">    <img id="balao" src="./charset/balao/balao.png" style="    width: 48px;height: 60px;image-rendering: pixelated;z-index: 0;position: absolute;top: 308px;left: 402px;">    <img id="bomba" src="./charset/balao/bomba2.png" style="width: 148;height: 116px;image-rendering: pixelated;z-index: -1;position: absolute;top: 369px;left: 426px;"><img id="garoto" src="./charset/balao/garoto2.png" style="    z-index: -2;width: 125;height: 165px;image-rendering: pixelated;position: absolute;top: 272px;left: 480px;">  <img id="suor" src="./charset/balao/suor.png" style="    z-index: -2;width: 32px;height: 32px;image-rendering: pixelated;position: absolute;top: 269px;left: 589px;visibility: hidden;">  <div id="Placar" style=" float: right;position: absolute;letter-spacing: 5px;">    <h2>Pontos: <span id="pontos">0</span></h2><h2>  </h2></div></div><div id="relogio" style="    position: absolute;    top: 0;    left: 527px;    font-size: 36;    /* color: black; */">  <div id="tempo" style="    top: 30;    position: absolute;    font-size: 72;">0</div></div>';
		}
	}
	script.onload = function () {
		document.getElementsByTagName('mini')[0].innerHTML = '  <div id="telaBalao" style="    height: 100%;    background-color: transparent;">  <img id="bg" src="./charset/balao/bgBalao.png" style="    width: 800;height: 600px;image-rendering: pixelated;z-index: -4;position: absolute;">    <img id="balao" src="./charset/balao/balao.png" style="    width: 48px;height: 60px;image-rendering: pixelated;z-index: 0;position: absolute;top: 308px;left: 402px;">    <img id="bomba" src="./charset/balao/bomba2.png" style="width: 148;height: 116px;image-rendering: pixelated;z-index: -1;position: absolute;top: 369px;left: 426px;"><img id="garoto" src="./charset/balao/garoto2.png" style="    z-index: -2;width: 125;height: 165px;image-rendering: pixelated;position: absolute;top: 272px;left: 480px;">  <img id="suor" src="./charset/balao/suor.png" style="    z-index: -2;width: 32px;height: 32px;image-rendering: pixelated;position: absolute;top: 269px;left: 589px;visibility: hidden;">  <div id="Placar" style=" float: right;position: absolute;letter-spacing: 5px;">    <h2>Pontos: <span id="pontos">0</span></h2><h2>  </h2></div></div><div id="relogio" style="    position: absolute;    top: 0;    left: 527px;    font-size: 36;    /* color: black; */">  <div id="tempo" style="    top: 30;    position: absolute;    font-size: 72;">0</div></div>';
	};
	script.src= './javascript/balao.js';
	document.getElementsByTagName("head")[0].appendChild(script);
	pauseP = true;
	u_action = true;
	audio.src = './music/03_Stroll_n_Roll.ogg';
	audioCtr = setInterval(function (){
		if(audio.paused){
			audio.play();
			clearInterval(audioCtr);
		}
	}, 200);
}

function vivasMini(){
	script = document.createElement("script");
	script.type= 'text/javascript';
	script.onreadystatechange= function () {
	  if (this.readyState == 'complete') startGame();
	}
	script.onload = function () { startGame();};
	script.src= './javascript/vivas.js';
	document.getElementsByTagName("head")[0].appendChild(script);
	pauseP = true;
	u_action = true;
	audio.src = './music/04_Shell_Shock_Shake.ogg';
	audioCtr = setInterval(function (){
		if(audio.paused){
			audio.play();
			clearInterval(audioCtr);
		}
	}, 200);
}

function gilmarMini(){
	audio.pause();
	script = document.createElement("script");
	script.type= 'text/javascript';
	script.onreadystatechange= function () {
	  if (this.readyState == 'complete') startGame();
	}
	script.onload = function () { startGame();};
	script.src= './javascript/gilmar.js';
	document.getElementsByTagName("head")[0].appendChild(script);
	pauseP = true;
	u_action = true;
	audio.src = './music/05_Im_a_Fighter.ogg';
	audioCtr = setInterval(function (){
		if(audio.paused){
			audio.play();
			clearInterval(audioCtr);
		}
	}, 200);
}

function willianMini(){
	audio.pause();
	script = document.createElement("script");
	script.type= 'text/javascript';
	script.onreadystatechange= function () {
	  if (this.readyState == 'complete') startGame();
	}
	script.onload = function () { startGame();};
	script.src= './javascript/willian.js';
	document.getElementsByTagName("head")[0].appendChild(script);
	pauseP = true;
	u_action = true;
	audio.src = './music/03_Stroll_n_Roll.ogg';
	audioCtr = setInterval(function (){
		if(audio.paused){
			audio.play();
			clearInterval(audioCtr);
		}
	}, 200);
}

function paulaMini(){
	audio.pause();
	script = document.createElement("script");
	script.type= 'text/javascript';
	script.onreadystatechange= function () {
		if (this.readyState == 'complete') {
			document.getElementsByTagName('mini')[0].innerHTML = '<table cellspacing="0" cellpadding="0"><tr><td id ="id01"></td><td id ="id02"></td><td id ="id03"></td><td id ="id04"></td><td id ="id05"></td><td id ="id06"></td><td id ="id07"></td></tr><tr><td id ="id08"></td><td id ="id09"></td><td id ="id10"></td><td id ="id11"></td><td id ="id12"></td><td id ="id13"></td><td id ="id14"></td></tr><tr><td id ="id15"></td><td id ="id16"></td><td id ="id17"></td><td id ="id18"></td><td id ="id19"></td><td id ="id20"></td><td id ="id21"></td></tr><tr><td id ="id22"></td><td id ="id23"></td><td id ="id24"></td><td id ="id25"></td><td id ="id26"></td><td id ="id27"></td><td id ="id28"></td></tr><tr><td id ="id29"></td><td id ="id30"></td><td id ="id31"></td><td id ="id32"></td><td id ="id33"></td><td id ="id34"></td><td id ="id35"></td></tr><tr><td id ="id36"></td><td id ="id37"></td><td id ="id38"></td><td id ="id39"></td><td id ="id40"></td><td id ="id41"></td><td id ="id42"></td></tr><tr><td id ="id43"></td><td id ="id44"></td><td id ="id45"></td><td id ="id46"></td><td id ="id47"></td><td id ="id48"></td><td id ="id49"></td></tr></table>';
			gameStart();
		}
	}
	script.onload = function () {
		document.getElementsByTagName('mini')[0].innerHTML = '<table cellspacing="0" cellpadding="0"><tr><td id ="id01"></td><td id ="id02"></td><td id ="id03"></td><td id ="id04"></td><td id ="id05"></td><td id ="id06"></td><td id ="id07"></td></tr><tr><td id ="id08"></td><td id ="id09"></td><td id ="id10"></td><td id ="id11"></td><td id ="id12"></td><td id ="id13"></td><td id ="id14"></td></tr><tr><td id ="id15"></td><td id ="id16"></td><td id ="id17"></td><td id ="id18"></td><td id ="id19"></td><td id ="id20"></td><td id ="id21"></td></tr><tr><td id ="id22"></td><td id ="id23"></td><td id ="id24"></td><td id ="id25"></td><td id ="id26"></td><td id ="id27"></td><td id ="id28"></td></tr><tr><td id ="id29"></td><td id ="id30"></td><td id ="id31"></td><td id ="id32"></td><td id ="id33"></td><td id ="id34"></td><td id ="id35"></td></tr><tr><td id ="id36"></td><td id ="id37"></td><td id ="id38"></td><td id ="id39"></td><td id ="id40"></td><td id ="id41"></td><td id ="id42"></td></tr><tr><td id ="id43"></td><td id ="id44"></td><td id ="id45"></td><td id ="id46"></td><td id ="id47"></td><td id ="id48"></td><td id ="id49"></td></tr></table>';
		gameStart();
	};
	script.src= './javascript/plug.js';
	document.getElementsByTagName("head")[0].appendChild(script);
	pauseP = true;
	u_action = true;
	audio.src = './music/03_Stroll_n_Roll.ogg';
	audioCtr = setInterval(function (){
		if(audio.paused){
			audio.play();
			clearInterval(audioCtr);
		}
	}, 200);
}

function caboMini(){
	script = document.createElement("script");
	script.type= 'text/javascript';
	script.onreadystatechange= function () {
	  if (this.readyState == 'complete') {
		document.getElementsByTagName('mini')[0].innerHTML = '<div style="'+
		"background: url('./charset/cabo/bg.png');"+
		'height: 336px;'+
		'width: 1000px;'+
		'z-index: -1;"></div>'+
		'<h1>Ordene os cabos</h1>'+
		'<div id = "pattern" style = "letter-spacing: 0px;">'+
		'	PADRÃO: <label id = "lb1">0</label>'+
		'</div>'+
		'</br>'+
		'<div id = "cables">'+
			'<img src = "imagens/cabo.png" id = "cable" style = "width: 90px; height: 184px;"/>'+
	'<div class="DragContainer" id="DragContainer"> '+
				'<img src = "#" id = "id0" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)"/>'+
				'<img src = "#" id = "id1" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)"/>'+
				'<img src = "#" id = "id2" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)"/>'+
				'<img src = "#" id = "id3" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)"/>'+
				'<img src = "#" id = "id4" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)"/>'+
				'<img src = "#" id = "id5" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)"/>'+
				'<img src = "#" id = "id6" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)"/>'+
				'<img src = "#" id = "id7" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)"/>'+
			'</div>'+
		'</div>';
		  init()
		}
	}
	script.onload = function () {
		document.getElementsByTagName('mini')[0].innerHTML = '<div style="'+
		"background: url('./charset/cabo/bg.png');"+
		'height: 336px;'+
		'width: 1000px;'+
		'z-index: -1;"></div>'+
		'<h1>Ordene os cabos</h1>'+
		'<div id = "pattern" style = "letter-spacing: 0px;">'+
		'	PADRÃO: <label id = "lb1">0</label>'+
		'</div>'+
		'</br>'+
		'<div id = "cables">'+
			'<img src = "./charset/cabo/cabo.png" id = "cable" style = "width: 90px; height: 184px;"/>'+
	'<div class="DragContainer" id="DragContainer"> '+
				'<img src = "#" id = "id0" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)"/>'+
				'<img src = "#" id = "id1" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)"/>'+
				'<img src = "#" id = "id2" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)"/>'+
				'<img src = "#" id = "id3" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)"/>'+
				'<img src = "#" id = "id4" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)"/>'+
				'<img src = "#" id = "id5" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)"/>'+
				'<img src = "#" id = "id6" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)"/>'+
				'<img src = "#" id = "id7" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)"/>'+
			'</div>'+
		'</div>';
		init();
	};
	script.src= './javascript/cabo.js';
	document.getElementsByTagName("head")[0].appendChild(script);
	pauseP = true;
	u_action = true;
	audio.src = './music/08_Filaments_and_Voids	.ogg';
	audioCtr = setInterval(function (){
		if(audio.paused){
			audio.play();
			clearInterval(audioCtr);
		}
	}, 200);
}

function loadFalas(){
	
	var http;
	if (window.XMLHttpRequest) {
		http = new XMLHttpRequest();
	} else {
		http = new ActiveXObject("Microsoft.XMLHTTP");
	}   

	http.onreadystatechange = function() {
		var parser;
		
		if (http.readyState == 4 && http.status == 200) {
			parser = new DOMParser();
			xmlDoc = parser.parseFromString(http.responseText, "text/xml");            
		}
	};

	http.open("GET", "texts/pt-BR.xml", true);
	http.send();
}

function loadScene(id, entrada){
	var http;
	if (window.XMLHttpRequest) {
		http = new XMLHttpRequest();
	} else {
		http = new ActiveXObject("Microsoft.XMLHTTP");
	}   

	http.onreadystatechange = function() {
		var parser;
		if (http.readyState == 4 && http.status == 200) {
			layer0 = new Array();
			layer1 = new Array();
			objects = new Array();
			parser = new DOMParser();
			var xml = parser.parseFromString(http.responseText, "text/xml");
			if(document.getElementsByTagName("scene").length != 0){
				document.getElementById('game').innerHTML = "";
			}
			while(document.getElementsByTagName("sprite").length != 0){
				document.getElementById('game').innerHTML = "";
			}
			var cena = document.createElement("scene");
			var tam = {x : parseInt(xml.getElementsByTagName("resolution")[0].getElementsByTagName("X")[0].childNodes[0].nodeValue), y : parseInt(xml.getElementsByTagName("resolution")[0].getElementsByTagName("Y")[0].childNodes[0].nodeValue)};
			cena.style.backgroundImage = "url('./scenes/map" + id + "_"+mapa[id-1]+".png')";
			cena.style.backgroundSize = tam.x*2 + "px";
			cena.style.width = tam.x*4  + "px";
			cena.style.height = tam.y*4  + "px";
			
			document.getElementById('game').appendChild(cena);
			
			for(i = 0; i < (tam.x/34)+2; i++){
				layer0.push([]);
			}
			for(i = 0; i < (tam.x/34)+2; i++){
				for(j = 0; j < (tam.y/34)+2; j++){
					layer0[i].push(null);
				};
			}
			
			for(i = 0; i < (tam.x/34)+2; i++){
				layer1.push([]);
			}
			for(i = 0; i < (tam.x/34)+2; i++){
				for(j = 0; j < (tam.y/34)+2; j++){
					layer1[i].push(null);
				};
			}
			
			var obs = xml.getElementsByTagName("cord");
			for(i = 0; i < obs.length; i++){
				var x = parseInt(obs[i].getElementsByTagName("X")[0].childNodes[0].nodeValue);
				var y = parseInt(obs[i].getElementsByTagName("Y")[0].childNodes[0].nodeValue);
				var coords = JSON.parse(obs[i].getAttribute('dir'));
				layer0[x][y] = new colision(coords[0],coords[1],coords[2],coords[3]);
			}
			var play = xml.getElementsByTagName("player")[entrada];
			var x = parseInt(play.getElementsByTagName("X")[0].childNodes[0].nodeValue);
			var y = parseInt(play.getElementsByTagName("Y")[0].childNodes[0].nodeValue);
			var dir = play.getElementsByTagName("dir")[0].childNodes[0].nodeValue;
			objects.push(new player(x,y,dir));
			var ent = xml.getElementsByTagName("ent");
			for(i = 0; i < ent.length; i++){
				var x = parseInt(ent[i].getElementsByTagName("X")[0].childNodes[0].nodeValue);
				var y = parseInt(ent[i].getElementsByTagName("Y")[0].childNodes[0].nodeValue);
				var ids = parseInt(ent[i].getElementsByTagName("id")[0].childNodes[0].nodeValue);
				var direc = ent[i].getElementsByTagName("dir")[0].childNodes[0].nodeValue;
				layer1[x][y] = new basicIA(x,y,ids,direc);
			}
			
			var obj = xml.getElementsByTagName("obj");
			for(i = 0; i < obj.length; i++){
				var x = parseInt(obj[i].getElementsByTagName("X")[0].childNodes[0].nodeValue);
				var y = parseInt(obj[i].getElementsByTagName("Y")[0].childNodes[0].nodeValue);
				var ids = parseInt(obj[i].getElementsByTagName("id")[0].childNodes[0].nodeValue);
				if(faca[ids] == 0){
					layer1[x][y] = new coletaveis(x,y,ids);
				}
			}
			
			var sai = xml.getElementsByTagName("saida");
			for(i = 0; i < sai.length; i++){
				var x = parseInt(sai[i].getElementsByTagName("X")[0].childNodes[0].nodeValue);
				var y = parseInt(sai[i].getElementsByTagName("Y")[0].childNodes[0].nodeValue);
				var ids = parseInt(sai[i].getElementsByTagName("dir")[0].childNodes[0].nodeValue);
				var entr = parseInt(sai[i].getElementsByTagName("entrada")[0].childNodes[0].nodeValue);
				layer0[x][y] = new saida(ids, entr);
			}
		}
		if(document.getElementsByTagName('mini').length == 0){
			document.getElementsByTagName('game')[0].innerHTML += "<mini></mini>";
		}
	};
	http.open("GET", "scenes/map"+id+"_"+mapa[id-1]+".xml", true);
	http.send();
}
