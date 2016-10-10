
function msgBox(id, callback){
	this.id = 0;
	this.atual = 0;
	this.pronto = false;
	this.action = false;
	
	this.box = document.createElement("msgBox");
	this.text = xmlDoc.getElementsByTagName("character")[id].getElementsByTagName("fala")[this.id].childNodes[0].nodeValue;
	this.codnome = xmlDoc.getElementsByTagName("character")[id].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
	this.icone = document.createElement("sprite");
	this.nome = document.createElement("nome");
	this.msg = document.createElement("msg");
	this.next = document.createElement("next");
	
	this.nome.id = "fala";
	
	this.next.onclick = function(){
		for(i = 0; i < objects.length; i++){
			if (objects[i] instanceof msgBox){
				objects[i].action = true;
			}
		}
	};
	
	this.nome.innerHTML = this.codnome;
	this.msg.innerHTML = "";
	this.next.innerHTML = "►";
	
	this.icone.id = 'msgicon';
	
	this.icone.style.backgroundImage = "url('./charset/profs.png')";
	
	if(id % 2 == 1){
		this.icone.style.backgroundPositionX = "-102px";
	}
	this.icone.style.backgroundPositionY = -102*Math.floor(id/2) + "px";
	
	this.box.appendChild(this.icone);
	this.box.appendChild(this.nome);
	this.box.appendChild(this.msg);
	this.box.appendChild(this.next);
	this.time = 0;
	
	document.getElementsByTagName("GUI")[0].appendChild(this.box);
	
	pauseP=true;
	
	this.update = function (timestamp) {
		if(!this.pronto){
			if((action == true && u_action == false) || this.action == true){
				this.msg.innerHTML = this.text;
				this.atual = 0;
				this.pronto = true;
				u_action = true;
			}else{
				this.time += delta;
				while(this.time > 100 && !this.pronto){
					this.msg.innerHTML += this.text.substr(this.atual, 1);
					this.atual++;
					if (this.atual == this.text.length -1){
						this.pronto = true;
						this.atual = 0;
					}
					this.time -= 100;
				}
			}
		}else{
			if((action == true && u_action == false) || this.action == true){
				if(this.id < xmlDoc.getElementsByTagName("character")[id].getElementsByTagName("fala").length -1){
					this.id++;
					this.text = xmlDoc.getElementsByTagName("character")[id].getElementsByTagName("fala")[this.id].childNodes[0].nodeValue;
					this.msg.innerHTML = "";
					this.pronto = false;
					
				}else{
					document.getElementsByTagName("GUI")[0].removeChild(this.box);
					for(i = 0; i < objects.length; i++){
						if(objects[i] === this){
							objects.splice(i,1);
						}
					}
					pauseP = false;
					callback();
				}
				u_action = true;
			}
		}
		this.action = false;
	};
}

function achievement(id){
	
	var conquista = document.createElement("conquista");
	var icone = document.createElement("icone");
	var nome = document.createElement("nome");
	var texto = document.createElement("texto");
	var estilo = ""
	var icon = xmlDoc.getElementsByTagName("achievement")[id].getElementsByTagName("icone")[0].childNodes[0].nodeValue;
	nome.innerHTML = xmlDoc.getElementsByTagName("achievement")[id].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
	texto.innerHTML = xmlDoc.getElementsByTagName("achievement")[id].getElementsByTagName("desc")[0].childNodes[0].nodeValue;

	icone.id = "achivicon";
	if(icon % 2 == 1){
		icone.style.backgroundPositionX = "-68px";
	}
	icone.style.backgroundPositionY = -68*Math.floor(icon/2) + "px";
	
	conquista.appendChild(icone);
	conquista.appendChild(nome);
	conquista.appendChild(texto);
	
	document.getElementsByTagName("GUI")[0].appendChild(conquista);
	
	setTimeout(function(){
		document.getElementsByTagName("GUI")[0].removeChild(document.getElementsByTagName("conquista")[0]);
	}, 5000);
}

function menu(){
	this.smart = document.createElement("smart");
	this.screen = document.createElement("screen");
	this.pad = document.createElement("pad");
	
	this.smart.appendChild(this.screen);
	this.smart.appendChild(this.pad);
	
	this.selectedNum = 0;
	this.atual = 0;
	
	this.move = function(direction){
		if(this.atual == 0){
			this.screen.childNodes[this.selectedNum].setAttribute("class", "");
			switch(direction){
				case "up":
					this.selectedNum = this.selectedNum-2 < 0? 6-(2-this.selectedNum) : this.selectedNum-2;
				break;
				case "down":
					this.selectedNum = this.selectedNum+2 > 5? this.selectedNum+2 - 6 : this.selectedNum+2;
				break;
				case "left":
					this.selectedNum = this.selectedNum-1 < 0? 5 : this.selectedNum-1;
				break;
				case "right":
					this.selectedNum = this.selectedNum+1 > 5 ? 0 : this.selectedNum+1;
				break;
			}
			this.screen.childNodes[this.selectedNum].setAttribute("class", "selected");
		}
	}
	
	this.entrar = function(){
		this.screen.childNodes[this.selectedNum].click();
	}
	
	this.context = function(num){
		this.atual = num;
		while(this.screen.childNodes.length != 0){
			this.screen.removeChild(this.screen.childNodes[0]);
		}
		switch(num){
			case 0:
				this.opt = document.createElement("app");
				this.opt.style.backgroundPositionX = 0 + "px";
				this.opt.style.backgroundPositionY = 0+ "px";
				this.opt.style.left = 0;
				this.opt.style.top = 0;
				this.opt.onclick = function(){
					painel.context(1);
				}
				this.save = document.createElement("app");
				this.save.style.backgroundPositionX = -136 + "px";
				this.save.style.backgroundPositionY = 0 + "px";
				this.save.style.left = 150;
				this.save.style.top = 0;
				this.save.onclick = function(){
					download();
				}
				this.quest = document.createElement("app");
				this.quest.style.backgroundPositionX = 0 + "px";
				this.quest.style.backgroundPositionY = -136 + "px";
				this.quest.style.left = 0;
				this.quest.style.top = 150;
				this.load = document.createElement("app");
				this.load.style.backgroundPositionX = -136 + "px";
				this.load.style.backgroundPositionY = -136 + "px";
				this.load.style.left = 150;
				this.load.style.top = 150;
				this.load.onclick = function(){
					var arquivo = document.createElement("input");
					arquivo.setAtribute
					download();
				}
				this.achiv = document.createElement("app");
				this.achiv.style.backgroundPositionX = 0 + "px";
				this.achiv.style.backgroundPositionY = -272 + "px";
				this.achiv.style.left = 0;
				this.achiv.style.top = 300;
				this.exit = document.createElement("app");
				this.exit.style.backgroundPositionX = -136 + "px";
				this.exit.style.backgroundPositionY = -272 + "px";
				this.exit.style.left = 150;
				this.exit.style.top = 300;
				this.exit.onclick = function(){
					pause = false;
					document.getElementsByTagName("GUI")[0].removeChild(document.getElementsByTagName("smart")[0]);
				};
				this.pad.onclick = function(){
					pause = false;
					document.getElementsByTagName("GUI")[0].removeChild(document.getElementsByTagName("smart")[0]);
				};
				
				this.screen.appendChild(this.opt);
				this.screen.appendChild(this.save);
				this.screen.appendChild(this.quest);
				this.screen.appendChild(this.load);
				this.screen.appendChild(this.achiv);
				this.screen.appendChild(this.exit);
				
			break;
			case 1:
				this.screen.innerHTML = 
								"<table>" +
				"<tbody>"+
					"<tr>"+
						"<th colspan=\"2\">OPÇÕES</th>"+
					"</tr>"+
					"<tr>"+
						"<td>"+
							"<label >Volume principal : </label>"+
						"</td>"+
						"<td>"+
							"<input value="+volumeP+" oninput=\"volumeP = parseInt(this.value);\" onchange=\"volumeP = parseInt(this.value);\" type=\"range\">"+
						"</td>"+
					"</tr>"+
					"<tr>"+
						"<td>"+
							"<label>Música : </label>"+
						"</td>"+
						"<td>"+
							"<input value="+volumeM+"  oninput=\"volumeM = parseInt(this.value);\" onchange=\"volumeM = parseInt(this.value);\" type=\"range\">"+
						"</td>"+
					"</tr>"+
					"<tr>"+
						"<td>"+
							"<label>Efeitos sonoros : </label>"+
						"</td>"+
						"<td>"+
							"<input value="+volumeE+" oninput=\"volumeE = parseInt(this.value);\" onchange=\"volumeE = parseInt(this.value);\" type=\"range\">"+
						"</td>"+
					"</tr>"+
					"<tr>"+
						"<td>"+
							"<label>FPS maximo : </label>"+
						"</td>"+
						"<td>"+
							"<input value="+maxFPS+"  oninput=\"maxFPS = parseInt(this.value);\" onchange=\"maxFPS = parseInt(this.value);\"  type=\"number\"></td>"+
						"</tr>"+
					"<tr>"+
						"<td>"+
							"<label>Mostrar FPS : </label>"+
						"</td>"+
						"<td>"+
							"<input oninput=\"showFPS = this.checked;\" onchange=\"showFPS = this.checked;\" type=\"checkbox\" "+(showFPS?"checked":"")+">"+
						"</td>"+
					"</tr>"+
					"<tr>"+
						"<td>"+
							"<label>Movimentação : </label>"+
						"</td>"+
						"<td>"+
							"<select  oninput=\"if(this.value=='wasd'){	upKey = 87;downKey = 83;leftKey = 65;rightKey = 68;}else{upKey = 38;downKey = 40;leftKey = 37;rightKey = 39;};\" onchange=\"if(this.value=='wasd'){	upKey = 87;downKey = 83;leftKey = 65;rightKey = 68;}else{upKey = 38;downKey = 40;leftKey = 37;rightKey = 39;};\" >"+
								"<option "+(upKey == 87? "selected=\"selected\"":"")+" value=\"wasd\">WASD</option>"+
								"<option "+(upKey == 38? "selected=\"selected\"":"")+" value=\"setas\">Setas</option>"+
							"</select>"+
						"</td>"+
					"</tr>"+
					"<tr>"+
						"<td>"+
							"<label>Tecla de ação : </label>"+
						"</td>"+
						"<td>"+
							"<select oninput=\"if(this.value=='enter'){actionKey=13}else{actionKey = 32;};\" onchange=\"if(this.value=='enter'){actionKey = 13;}else{actionKey = 32;};\" >"+
								"<option "+(actionKey == 13? "selected=\"selected\"":"")+" value=\"enter\">Enter</option>"+
								"<option "+(actionKey == 32? "selected=\"selected\"":"")+" value=\"space\">Espaço</option>"+
							"</select>"+
						"</td>"+
					"</tr>"+
				"</tbody>"+
			"</table>";
				
				this.pad.onclick = function(){
					painel.context(0);
				};
			break
			case 2:
				this.pad.onclick = function(){
					painel.context(0);
				};
			break;
		}
	}
	this.context(0);
	
	document.getElementsByTagName("gui")[0].appendChild(this.smart);
}
