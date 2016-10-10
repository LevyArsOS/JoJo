var xmlDoc;
var loading = false;

var achievements = [0,0,0,0,0,0,0];

var quests = [0,0,0,0,0,0,0,0,0,0];

var mapa = [1,1,1,1];

var faca = [0,0,0,0];

var script;

function vivasMini(){
	script = document.createElement("script");
	script.type= 'text/javascript';
	script.onreadystatechange= function () {
	  if (this.readyState == 'complete') startGame();
	}
	script.onload = function () { startGame();};
	script.src= './javascript/vivas.js';
	document.getElementsByTagName("head")[0].appendChild(script);
	pause = true;
	u_action = true;
}

function gilmarMini(){
	script = document.createElement("script");
	script.type= 'text/javascript';
	script.onreadystatechange= function () {
	  if (this.readyState == 'complete') startGame();
	}
	script.onload = function () { startGame();};
	script.src= './javascript/gilmar.js';
	document.getElementsByTagName("head")[0].appendChild(script);
	pause = true;
	u_action = true;
}

function willianMini(){
	script = document.createElement("script");
	script.type= 'text/javascript';
	script.onreadystatechange= function () {
	  if (this.readyState == 'complete') startGame();
	}
	script.onload = function () { startGame();};
	script.src= './javascript/willian.js';
	document.getElementsByTagName("head")[0].appendChild(script);
	pause = true;
	u_action = true;
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
	pause = true;
	u_action = true;
}

var save = {
	dia:1,
	quests : [0,0,0,0,0,0,0,0,0,0],
	game : 0,
	scene: "map0",
	position: {x:0,y:0},
	stat : 'cansado',
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

loadFalas();

function startRead() {  
  var file = document.getElementById('file').files[0];
  if(file){
    getAsText(file);
  }
}

function getAsText(readFile) {
        
  var reader = new FileReader();
  
  reader.readAsText(readFile, "UTF-8");
  
  reader.onprogress = updateProgress;
  reader.onload = loaded;
  reader.onerror = errorHandler;
}

function updateProgress(evt) {
  if (evt.lengthComputable) {
    // evt.loaded and evt.total are ProgressEvent properties
    var loaded = (evt.loaded / evt.total);
    if (loaded < 1) {
      // Increase the prog bar length
      // style.width = (loaded * 200) + "px";
    }
  }
}

function loaded(evt) {  
  // Obtain the read file data
  var fileString = evt.target.result;
  // Handle UTF-16 file dum
  setConfigurations(fileString);
}

function errorHandler(evt) {
  if(evt.target.error.name == "NotReadableError") {
    // The file could not be read
  }
}


function download() {
    var a = document.createElement("a"),
        file = new Blob([geraSave()], {type: "sav"});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, "save");
    else { // Others
        var url = URL.createObjectURL(file);
        a.href = url;
        a.download = "save";
        a.click();
    }
}

function geraSave(){
	
	return btoa("asdasdasd");
}

function loadScene(id){
	var http;
	if (window.XMLHttpRequest) {
		http = new XMLHttpRequest();
	} else {
		http = new ActiveXObject("Microsoft.XMLHTTP");
	}   

	http.onreadystatechange = function() {
		var parser;
		if (http.readyState == 4 && http.status == 200) {
			scene = new Array();
			objects = new Array();
			parser = new DOMParser();
			var xml = parser.parseFromString(http.responseText, "text/xml");
			if(document.getElementsByTagName("scene").length != 0){
				document.getElementById('game').removeChild(document.getElementsByTagName("scene")[0]);
			}
			while(document.getElementsByTagName("sprite").length != 0){
				document.getElementById('game').removeChild(document.getElementsByTagName("sprite")[0]);
			}
			var cena = document.createElement("scene");
			var tam = {x : parseInt(xml.getElementsByTagName("resolution")[0].getElementsByTagName("X")[0].childNodes[0].nodeValue), y : parseInt(xml.getElementsByTagName("resolution")[0].getElementsByTagName("Y")[0].childNodes[0].nodeValue)};
			cena.style.backgroundImage = "url('./scenes/Decom" + id + "_"+mapa[id-1]+".png')";
			cena.style.backgroundSize = tam.x*2 + "px";
			cena.style.width = tam.x*4  + "px";
			cena.style.height = tam.y*4  + "px";
			
			document.getElementById('game').appendChild(cena);
			
			for(i = 0; i < (tam.x*4/34)+2; i++){
				scene.push([]);
			}
			for(i = 0; i < (tam.x*4/34)+2; i++){
				for(j = 0; j < (tam.y*4/34)+2; j++){
					scene[i].push(new air());
				};
			}
			var obs = xml.getElementsByTagName("cord");
			for(i = 0; i < obs.length; i++){
				var x = parseInt(obs[i].getElementsByTagName("X")[0].childNodes[0].nodeValue);
				var y = parseInt(obs[i].getElementsByTagName("Y")[0].childNodes[0].nodeValue);
				scene[x][y] = new colision();
			}
			var play = xml.getElementsByTagName("player");
			var x = parseInt(play[0].getElementsByTagName("X")[0].childNodes[0].nodeValue);
			var y = parseInt(play[0].getElementsByTagName("Y")[0].childNodes[0].nodeValue);
			var dir = play[0].getElementsByTagName("dir")[0].childNodes[0].nodeValue;
			objects.push(new player(x,y,dir));
			var ent = xml.getElementsByTagName("ent");
			for(i = 0; i < ent.length; i++){
				var x = parseInt(ent[i].getElementsByTagName("X")[0].childNodes[0].nodeValue);
				var y = parseInt(ent[i].getElementsByTagName("Y")[0].childNodes[0].nodeValue);
				var ids = parseInt(ent[i].getElementsByTagName("id")[0].childNodes[0].nodeValue);
				scene[x][y] = new basicIA(x,y,ids);
			}
			
			var obj = xml.getElementsByTagName("obj");
			for(i = 0; i < obj.length; i++){
				var x = parseInt(obj[i].getElementsByTagName("X")[0].childNodes[0].nodeValue);
				var y = parseInt(obj[i].getElementsByTagName("Y")[0].childNodes[0].nodeValue);
				var ids = parseInt(obj[i].getElementsByTagName("id")[0].childNodes[0].nodeValue);
				if(faca[ids] == 0){
					scene[x][y] = new coletaveis(x,y,ids);
				}
			}
			
			var sai = xml.getElementsByTagName("saida");
			for(i = 0; i < sai.length; i++){
				var x = parseInt(sai[i].getElementsByTagName("X")[0].childNodes[0].nodeValue);
				var y = parseInt(sai[i].getElementsByTagName("Y")[0].childNodes[0].nodeValue);
				var ids = parseInt(sai[i].getElementsByTagName("dir")[0].childNodes[0].nodeValue);
				scene[x][y] = new saida(ids);
			}
		}
		if(document.getElementsByTagName('mini').length == 0){
			document.getElementsByTagName('game')[0].innerHTML += "<mini></mini>";
		}
	};
	http.open("GET", "scenes/Decom"+id+"_"+mapa[id-1]+".xml", true);
	http.send();
}
