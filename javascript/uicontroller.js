
function Gui(){
	this.documentGui = game.getElementsByTagName("gui")[0];
	this.visibible= false;
	
	this.setVisible = function(visibible){
		this.visibible = visibible;
		if(this.visibible){
			this.documentGui.style.display = "inline";
		}else{
			this.documentGui.style.display = "none";
			while(this.documentGui.childNodes.length != 0){
				this.documentGui.removeChild(this.documentGui.childNodes[0]);
			}
		}
	};
	
	this.append = function (child){
		if(this.documentGui !==null &&this.documentGui !==undefined && this.documentGui ===game.getElementsByTagName("gui")[0]){
			this.documentGui.appendChild(child);
		}else{
			if(game.getElementsByTagName("gui")[0] !==null &&  game.getElementsByTagName("gui")[0] !== undefined){
				this.documentGui = game.getElementsByTagName("gui")[0];
				this.documentGui.appendChild(child);
			}
			else{
				this.documentGui = document.createElement("gui");
				game.appendChild(this.documentGui);
				this.documentGui.appendChild(child);
			}
		}
		game.getElementsByTagName("gui")[0] = this.documentGui;
	};
	
	this.setVisible(false);
}


function msgBox(id, callback, sit){
	this.id = 0;
	this.atual = 0;
	this.pronto = false;
	this.action = false;
	
	this.talk = new Audio("./soundfx/talk.wav");
	this.talk.volume = 0.5;
	this.talk.loop = true;
	
	this.box = document.createElement("msgBox");
	this.text = xmlDoc.getElementsByTagName("character")[id].getElementsByTagName("falas")[sit].getElementsByTagName("fala")[this.id].childNodes[0].nodeValue;
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
	
	this.icone.style.backgroundSize = '408px';
	this.icone.style.backgroundPositionY = -102*id + "px";
	
	this.box.appendChild(this.icone);
	this.box.appendChild(this.nome);
	this.box.appendChild(this.msg);
	this.box.appendChild(this.next);
	this.time = 0;
	
	gui.append(this.box);
	
	pauseP=true;
	
	gui.setVisible(true);
	
	this.update = function (timestamp) {
		if(!this.pronto){
			if(this.talk.paused){
				this.talk.play();
			}
			if((action == true && u_action == false) || this.action == true){
				this.msg.innerHTML = this.text;
				this.atual = 0;
				this.pronto = true;
				u_action = true;
				this.talk.pause();
			}else{
				this.time += delta;
				while(this.time > 100 && !this.pronto){
					if(this.talk.paused){
						this.talk.play();
					}
					this.msg.innerHTML += this.text.substr(this.atual, 1);
					this.atual++;
					if (this.atual == this.text.length){
						this.pronto = true;
						this.atual = 0;
						this.talk.pause();
					}
					this.time -= 100;
				}
			}
		}else{
			if((action == true && u_action == false) || this.action == true){
				if(this.id < xmlDoc.getElementsByTagName("character")[id].getElementsByTagName("falas")[sit].getElementsByTagName("fala").length -1){
					this.id++;
					this.text = xmlDoc.getElementsByTagName("character")[id].getElementsByTagName("falas")[sit].getElementsByTagName("fala")[this.id].childNodes[0].nodeValue;
					this.msg.innerHTML = "";
					this.pronto = false;
					
				}else{
					gui.setVisible(false);
					this.talk.pause();
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
	this.sound = new Audio('./soundfx/achievement.wav');
	
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
	
	if(achievements[id] == 0){
		this.sound.play();
		gui.setVisible(true);
		gui.append(conquista);
		
		setTimeout(function(){
			gui.setVisible(false);
			achievements[id] = 1;
		}, 5000);
	}
}