var saiu = false;

function player(x, y, direction){
	this.direction = direction;
	this.x = x;
	this.y = y;
	
	this.real_x = x*68;
	this.real_y = y*68;
	
	this.sprite = document.createElement("sprite");
	this.superior = document.createElement("superior");
	
	this.sprite.style.backgroundImage = "url('./charset/anda.png')";
	this.superior.style.backgroundImage = "url('./charset/anda.png')";
	
	this.sprite.style.top = this.real_y -34 + "px";
	this.sprite.style.left = this.real_x + "px";
	
	if(this.direction == "up"){
			this.sprite.style.backgroundPositionY = "-68px";
			this.superior.style.backgroundPositionY = "-68px";
		} else if(this.direction == "down"){
			this.sprite.style.backgroundPositionY = "0px";
			this.superior.style.backgroundPositionY = "0px";
		} else if(this.direction == "left"){
			this.sprite.style.backgroundPositionY = "-204px";
			this.superior.style.backgroundPositionY = "-204px";
		} else if(this.direction == "right"){
			this.sprite.style.backgroundPositionY = "-136px";
			this.superior.style.backgroundPositionY = "-136px";
		}
	
	this.sprite.appendChild(this.superior);
	document.getElementById('game').appendChild(this.sprite);
	
	document.getElementById('game').scrollTop = this.real_y - 266;
	document.getElementById('game').scrollLeft = this.real_x - 366;
	
	this.update = function (delta) {
		if(action == true && u_action == false){
			switch(this.direction){
				case "up":
					if((layer0[this.x][this.y] instanceof colision && !layer0[this.x][this.y].up) || (layer0[this.x][this.y-1] instanceof colision && !layer0[this.x][this.y-1].down) || (!(layer0[this.x][this.y] instanceof colision) && !(layer0[this.x][this.y-1] instanceof colision))){
						if(layer1[this.x][this.y-1] instanceof basicIA){
							layer1[this.x][this.y-1].changeDirection("down");
							layer1[this.x][this.y-1].interaction();
						}
						if(layer1[this.x][this.y-1] instanceof coletaveis){
							layer1[this.x][this.y-1].interaction();
						}
					}
					break;
				case "down":
					if((layer0[this.x][this.y] instanceof colision && !layer0[this.x][this.y].down) || (layer0[this.x][this.y+1] instanceof colision && !layer0[this.x][this.y+1].up) || (!(layer0[this.x][this.y] instanceof colision) && !(layer0[this.x][this.y+1] instanceof colision))){
						if(layer1[this.x][this.y+1] instanceof basicIA){
							layer1[this.x][this.y+1].changeDirection("up");
							layer1[this.x][this.y+1].interaction();
						}
						if(layer1[this.x][this.y+1] instanceof coletaveis){
							layer1[this.x][this.y+1].interaction();
						}
					}
					break
				case "left":
					if((layer0[this.x][this.y] instanceof colision && !layer0[this.x][this.y].left) || (layer0[this.x-1][this.y] instanceof colision && !layer0[this.x-1][this.y].right) || (!(layer0[this.x][this.y] instanceof colision) && !(layer0[this.x-1][this.y] instanceof colision))){
						if(layer1[this.x-1][this.y] instanceof basicIA){
							layer1[this.x-1][this.y].changeDirection("right");
							layer1[this.x-1][this.y].interaction();
						}
						if(layer1[this.x-1][this.y] instanceof coletaveis){
							layer1[this.x-1][this.y].interaction();
						}
					}
					break;
				case "right":
					if((layer0[this.x][this.y] instanceof colision && !layer0[this.x][this.y].right) || (layer0[this.x+1][this.y] instanceof colision && !layer0[this.x+1][this.y].left) || (!(layer0[this.x][this.y] instanceof colision) && !(layer0[this.x][this.y+1] instanceof colision))){
						if(layer1[this.x+1][this.y] instanceof basicIA){
							layer1[this.x+1][this.y].changeDirection("left");
							layer1[this.x+1][this.y].interaction();
						}
						if(layer1[this.x+1][this.y] instanceof coletaveis){
							layer1[this.x+1][this.y].interaction();
						}
					}
					break;
			}
			u_action = true;
		}
		if(up == true && this.real_y == this.y*68 && this.real_x == this.x*68){
			if(this.direction !== "up"){
				this.direction = "up";
				this.sprite.style.backgroundPositionY = "-68px";
				this.superior.style.backgroundPositionY = "-68px";
			}
			if(this.y > 0 && (layer0[this.x][this.y-1] instanceof saida)){
				layer0[this.x][this.y-1].interaction();
			}
			if(this.y > 0 && !(layer1[this.x][this.y-1] instanceof basicIA) && !(layer1[this.x][this.y-1] instanceof coletaveis) && !(layer0[this.x][this.y-1] instanceof saida)){
				if(layer0[this.x][this.y-1] instanceof colision){
					if(!layer0[this.x][this.y-1].down){
						if(layer0[this.x][this.y] instanceof colision){
							if(!layer0[this.x][this.y].up){
								this.y--;
							}
						}else{
							this.y--;
						}
					}
				}
				else{
					if(layer0[this.x][this.y] instanceof colision){
						if(!layer0[this.x][this.y].up){
							this.y--;
						}
					}else {
						this.y--;
					}
				}
			}
		}else if(down == true && this.real_y == this.y*68 && this.real_x == this.x*68){
			if(this.direction !== "down"){
				this.direction = "down";
				this.sprite.style.backgroundPositionY = "0px";
				this.superior.style.backgroundPositionY = "0px";
			}
			if(this.y < layer0[this.x].length-1 && (layer0[this.x][this.y+1] instanceof saida)){
				layer0[this.x][this.y+1].interaction();
			}
			if(this.y < layer0[this.x].length-1 && !(layer1[this.x][this.y+1] instanceof basicIA) && !(layer1[this.x][this.y+1] instanceof coletaveis) && !(layer0[this.x][this.y+1] instanceof saida)){
				if(layer0[this.x][this.y+1] instanceof colision){
					if(!layer0[this.x][this.y+1].up){
						if(layer0[this.x][this.y] instanceof colision){
							if(!layer0[this.x][this.y].down){
								this.y++;
							}
						}else{
							this.y++;
						}
					}
				}
				else{
					if(layer0[this.x][this.y] instanceof colision){
						if(!layer0[this.x][this.y].down){
							this.y++;
						}
					}else {
						this.y++;
					}
				}
			}
		}else if(left == true && this.real_y == this.y*68 && this.real_x == this.x*68){
			if(this.direction !== "left"){
				this.direction = "left";
				this.sprite.style.backgroundPositionY = "-204px";
				this.superior.style.backgroundPositionY = "-204px";
			}
			if(this.x > 0 && (layer0[this.x-1][this.y] instanceof saida)){
				layer0[this.x-1][this.y].interaction();
			}
			if(this.x > 0 && !(layer1[this.x-1][this.y] instanceof basicIA) && !(layer1[this.x-1][this.y] instanceof coletaveis) && !(layer0[this.x-1][this.y] instanceof saida)){
				if(layer0[this.x-1][this.y] instanceof colision){
					if(!layer0[this.x-1][this.y].right){
						if(layer0[this.x][this.y] instanceof colision){
							if(!layer0[this.x][this.y].left){
								this.x--;
							}
						}else{
							this.x--;
						}
					}
				}
				else{
					if(layer0[this.x][this.y] instanceof colision){
						if(!layer0[this.x][this.y].left){
							this.x--;
						}
					}else {
						this.x--;
					}
				}
			}
		}else if(right == true && this.real_y == this.y*68 && this.real_x == this.x*68){
			if(this.direction !== "right"){
				this.direction = "right";
				this.sprite.style.backgroundPositionY = "-136px";
				this.superior.style.backgroundPositionY = "-136px";
			}
			if(this.x < layer0.length-1 && (layer0[this.x+1][this.y] instanceof saida)){
				layer0[this.x+1][this.y].interaction();
			}
			if(this.x < layer0.length-1 && !(layer1[this.x+1][this.y] instanceof basicIA) && !(layer1[this.x+1][this.y] instanceof coletaveis) && !(layer0[this.x+1][this.y] instanceof saida)){
				if(layer0[this.x+1][this.y] instanceof colision){
					if(!layer0[this.x+1][this.y].left){
						if(layer0[this.x][this.y] instanceof colision){
							if(!layer0[this.x][this.y].right){
								this.x++;
							}
						}else{
							this.x++;
						}
					}
				}
				else{
					if(layer0[this.x][this.y] instanceof colision){
						if(!layer0[this.x][this.y].right){
							this.x++;
						}
					}else {
						this.x++;
					}
				}
			}
		}
		
		if(this.real_y > this.y*68){
			document.getElementById('game').scrollTop = this.real_y - 266;
			this.real_y -= Math.round(this.real_y - ((34*delta)/(136)) < this.y*68 ? this.real_y - this.y*68 : ((34*delta)/(136)));
			this.sprite.style.top = this.real_y-34 + "px";
			this.sprite.setAttribute('class','up');
			this.superior.setAttribute('class','up');
		}else if(this.real_y < this.y*68){
			document.getElementById('game').scrollTop = this.real_y - 266;
			this.real_y += Math.round(this.real_y + ((34*delta)/(136)) > this.y*68 ? this.y*68 - this.real_y : ((34*delta)/(136)));
			this.sprite.style.top = this.real_y-34 + "px";
			this.sprite.setAttribute('class','down');
			this.superior.setAttribute('class','down');
		}else if(this.real_x > this.x*68){
			document.getElementById('game').scrollLeft = this.real_x - 366;
			this.real_x -= Math.round(this.real_x - ((34*delta)/(136)) < this.x*68 ? this.real_x - this.x*68 : ((34*delta)/(136)));
			this.sprite.style.left = this.real_x + "px";
			this.sprite.setAttribute('class','left');
			this.superior.setAttribute('class','left');
		}else if(this.real_x < this.x*68){
			document.getElementById('game').scrollLeft = this.real_x - 366;
			this.real_x += Math.round(this.real_x + ((34*delta)/(136)) > this.x*68 ? this.x*68 - this.real_x : ((34*delta)/(136)));
			this.sprite.style.left = this.real_x + "px";
			this.sprite.setAttribute('class','right');
			this.superior.setAttribute('class','right');
		}else{
			this.sprite.setAttribute('class','');
			this.superior.setAttribute('class','');
		}
	};
}

function colision(up, down, left, right){
	this.up = up;
	this.down = down;
	this.left = left;
	this.right = right;
}

function basicIA(x,y,id, direc){
	this.x = x;
	this.y = y;
	this.direc = direc;
	this.real_x = x*68;
	this.real_y = y*68;
	
	this.sprite = document.createElement("sprite");
	this.superior = document.createElement("superior");
	this.sprite.style.backgroundImage = "url('./charset/profs.png')";
	this.superior.style.backgroundImage = "url('./charset/profs.png')";
	
	this.sprite.style.backgroundSize = "272px";
	this.superior.style.backgroundSize = "272px";
	
	this.changeDirection = function (direction){
		this.direc = direction;
		if(this.direc == "up"){
			this.sprite.style.backgroundPositionX = "-204px";
			this.superior.style.backgroundPositionX = "-204px";
		} else if(this.direc == "down"){
			this.sprite.style.backgroundPositionX = "0px";
			this.superior.style.backgroundPositionX = "0px";
		} else if(this.direc == "left"){
			this.sprite.style.backgroundPositionX = "-68px";
			this.superior.style.backgroundPositionX = "-68px";
		} else if(this.direc == "right"){
			this.sprite.style.backgroundPositionX = "-136px";
			this.superior.style.backgroundPositionX = "-136px";
		}
	}
	
	this.changeDirection(this.direc);
	
	this.sprite.style.backgroundPositionY = -68*id + "px";
	this.superior.style.backgroundPositionY = -68*id + "px";
	
	this.sprite.style.top = this.real_y -34 + "px";
	this.sprite.style.left = this.real_x + "px";
	
	this.sprite.appendChild(this.superior);
	document.getElementById('game').appendChild(this.sprite);
	
	this.interaction = function (){
		action = false;
		if(id == 0){
			i = faca[0] + faca[1] + faca[2] + faca[3];
			
			if(i == 4){				
				objects.push(new msgBox(id, function(){
					if(quests[0] != 2){
						var victory = new Audio("./soundfx/missioncomplete.wav");
						victory.volume = volumeE;
						gui.append(document.createElement("sucesso"));
						gui.setVisible(true);
						setTimeout(function(){victory.play();}, 1000);
						setTimeout(function (){
							achievement(3);
							quests[0] = 2;
						}, 2000);
					}
				}, 2));
			}else{
				if(quests[0] == 0){
					if(faca[0] == -1){
						objects.push(new msgBox(id, function(){objects.push(new instBox(id,function(){faca = [0,0,0,0]}))}, 0));
					}
					quests[0] = 1;
				}else if(quests[0] == 1){
					objects.push(new msgBox(id, function(){}, 1));
				}
			}
		}else if(id == 1){
			if(quests[1] == 0){
				objects.push(new msgBox(id, function(){objects.push(new instBox(id,function(){vivasMini()}))}, 0));
			}else if(quests[1] == 2){
				objects.push(new msgBox(id, function (){}, 2));
			}else{
				objects.push(new msgBox(id, function(){objects.push(new instBox(id,function(){vivasMini()}))}, 1));
			}
		}else if(id == 2){
			if(quests[2] == 0){
				objects.push(new msgBox(id, function(){objects.push(new instBox(id,function(){paulaMini()}))}, 0));
			}else{
				objects.push(new msgBox(id, function(){}, 1));
			}
		}else if(id == 3){
			if(quests[3] == 0){
				objects.push(new msgBox(id, function(){objects.push(new instBox(id,function(){willianMini()}))}, 0));
			}else if(quests[3] == 1){
				objects.push(new msgBox(id, function(){objects.push(new instBox(id,function(){willianMini()}))}, 1));
			}else{
				objects.push(new msgBox(id, function (){}, 2));
			}
		}else if(id == 4){
			if(quests[4] == 0){
				objects.push(new msgBox(id, function(){objects.push(new instBox(id,function(){joseMini()}))}, 0));
			}else{
				objects.push(new msgBox(id, function(){}, 1));
			}
		}else if(id == 5){
			if(quests[5] == 0){
				objects.push(new msgBox(id, function(){objects.push(new instBox(id,function(){gliviaMini()}))}, 1));
			}else if(quests[5] == 2){
				objects.push(new msgBox(id, function (){}, 3));
			}else{
				objects.push(new msgBox(id, function(){objects.push(new instBox(id,function(){gliviaMini()}))}, 2));
			}
		}else if(id == 6){
			objects.push(new msgBox(id, function (){}, 0));
		}else if(id == 7){
			objects.push(new msgBox(id, function (){}, 0));
		}else if(id == 8){
			if(quests[8] == 0){
				objects.push(new msgBox(id, function(){objects.push(new instBox(id,function(){caboMini()}))}, 0));
			}else{
				objects.push(new msgBox(id, function (){}, 1));
			}
		}else if(id == 9){
			if(quests[9] == 0){
				objects.push(new msgBox(id, function(){objects.push(new instBox(id,function(){gilmarMini()}))}, 0));
			}else if(quests[9] == 2){
				objects.push(new msgBox(id, function (){}, 2));
			}else{
				objects.push(new msgBox(id, function(){objects.push(new instBox(id,function(){gilmarMini()}))}, 1));
			}
		}else if(id == 10){
			quests[1] = 2;
			
			var victory = new Audio("./soundfx/missioncomplete.wav");
			victory.volume = volumeE;
			gui.append(document.createElement("sucesso"));
			gui.setVisible(true);
			setTimeout(function(){victory.play();}, 1000);
			setTimeout(function (){
				gui.setVisible(false);
				objects.push(new msgBox(id, function(){
				achievement(1);
				setTimeout(function () {
						loadScene(1,0);
					}, 200);
				}, 0));
				quests[10] = 1;
			}, 2000);
		}
		else{
			objects.push(new msgBox(id, function(){}, 0));
		}
	}
}

function coletaveis(x,y,id){
	this.x = x;
	this.y = y;
	
	this.real_x = x*68;
	this.real_y = y*68;
	
	this.sound = new Audio('./soundfx/pickupfaca.wav')
	this.sound.volume = volumeE;
	this.sprite = document.createElement("sprite");
	//this.superior = document.createElement("superior");
	this.sprite.style.backgroundImage = "url('./charset/facas.png')";
	//this.superior.style.backgroundImage = "url('./charset/facas.png')";
	
	this.sprite.style.backgroundSize = "136px";
	//this.superior.style.backgroundSize = "136px";
	
	if(id % 2 == 1){
		this.sprite.style.backgroundPositionX = "-68px";
		//this.superior.style.backgroundPositionX = "-68px";
	}
	this.sprite.style.backgroundPositionY = -68*Math.floor(id/2) + "px";
	//this.superior.style.backgroundPositionY = -68*Math.floor(id/2) + "px";
	
	this.sprite.style.top = this.real_y + "px";
	this.sprite.style.left = this.real_x + "px";
	
	//this.sprite.appendChild(this.superior);
	document.getElementById('game').appendChild(this.sprite);
	
	this.interaction = function (){
		this.sound.play();
		achievement(id+4);
		faca[id] = 1;
		document.getElementById('game').removeChild(this.sprite);
		layer1[x][y] = null;
	}
}

function saida(id, entrada){
	this.interaction = function (){
		if(!saiu){
			saiu = true;
			loadScene(id, entrada);
		}
	}
}