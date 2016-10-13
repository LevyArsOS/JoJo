color_rgb = [ "#FFFFFF", "#FF0000", "#FFFF00", "#0000FF", "#008000", "#800080", "#FF8C00", "#DC143C"];
var patterns = [
	[1,0,0,2,0,0,0,
	 3,0,0,0,0,1,0,
	 4,0,4,0,0,0,0,
	 0,0,0,3,0,0,5,
	 0,0,0,0,0,2,0,
	 6,7,0,0,0,7,0,
	 0,6,5,0,0,0,0
	],
	[1,0,0,0,2,0,0,
	 3,0,0,0,0,1,0,
	 4,5,3,0,0,0,0,
	 0,0,7,0,4,0,0,
	 0,0,6,0,0,0,0,
	 0,0,5,6,0,0,0,
	 0,0,0,0,0,7,2
	],
	[1,0,0,0,3,2,0,
	 0,0,6,4,0,7,0,
	 0,0,0,0,0,0,0,
	 0,0,0,3,5,0,0,
	 0,0,0,1,0,0,0,
	 0,4,6,0,5,7,0,
	 0,0,0,0,2,0,0
	],
	[7,0,0,0,0,2,3,
	 0,0,0,5,3,0,0,
	 0,0,0,0,4,0,0,
	 0,0,0,0,6,0,0,
	 0,0,0,0,5,0,4,
	 0,0,2,1,0,0,6,
	 0,0,0,7,0,0,1
	],
	[4,1,0,7,0,0,6,
	 0,2,0,1,0,0,5,
	 0,0,0,2,0,0,0,
	 0,0,0,0,0,0,0,
	 0,0,4,0,0,0,0,
	 0,3,0,0,7,6,0,
	 0,0,0,3,5,0,0
	]
]

var path = [[],[],[],[],[],[],[],[]];
function gameStart(){
	
	var cur_color = 0;
	var last_sqr = 0;
	
	var game_number = Math.floor(Math.random()*5);
	var cur_game = [];
	
	/*function next_game(){
		game_number++;
		if(game_number < game.length){
			path = [[],[],[],[],[],[],[],[]];
			cur_color = 0;
			last_sqr = 0;
			cur_game = [];
			for (i = 0; i <mini.getElementsByTagName("td").length; i++){
	       	 	mini.getElementsByTagName("td")[i].style.backgroundColor = color_rgb[game[game_number][last_sqr]];
				if(color_rgb[game[game_number][last_sqr]] != "#FFFFFF"){
					mini.getElementsByTagName("td")[i].style.backgroundImage = 'url(charset/plug/PC.png)';
					mini.getElementsByTagName("td")[i].style.backgroundRepeat = 'no-repeat';
					mini.getElementsByTagName("td")[i].style.backgroundPositionY = '11px';
					mini.getElementsByTagName("td")[i].style.backgroundPositionX = '3px';
				}else{
					mini.getElementsByTagName("td")[i].style.backgroundImage = '';
					mini.getElementsByTagName("td")[i].style.backgroundRepeat = '';
					mini.getElementsByTagName("td")[i].style.backgroundPositionY = '';
					mini.getElementsByTagName("td")[i].style.backgroundPositionX = '';
				}
	        	cur_game.push(game[game_number][last_sqr]);
	        	last_sqr++;
	    	}
    	}
	}*/
	
	
	for (i = 0; i <mini.getElementsByTagName("td").length; i++){
        mini.getElementsByTagName("td")[i].style.backgroundColor = color_rgb[patterns[game_number][last_sqr]];
		if(color_rgb[patterns[game_number][last_sqr]] != "#FFFFFF"){
			mini.getElementsByTagName("td")[i].style.backgroundImage = 'url(./charset/plug/PC.png)';
			mini.getElementsByTagName("td")[i].style.backgroundRepeat = 'no-repeat';
			mini.getElementsByTagName("td")[i].style.backgroundPositionY = '20px';
			mini.getElementsByTagName("td")[i].style.backgroundPositionX = '3px';
		}else{
			mini.getElementsByTagName("td")[i].style.backgroundImage = '';
			mini.getElementsByTagName("td")[i].style.backgroundRepeat = '';
			mini.getElementsByTagName("td")[i].style.backgroundPositionY = '';
			mini.getElementsByTagName("td")[i].style.backgroundPositionX = '';
		}
        cur_game.push(patterns[game_number][last_sqr]);
        last_sqr++;
		mini.getElementsByTagName("td")[i].onclick = function(){
			var pos = parseInt((this.getAttribute('id')).substr(2,2)) - 1;
			var aux;
			verify();
			if(cur_color == 0){
				cur_color = cur_game[pos];
				while(path[cur_color][path[cur_color].length - 1] != pos && path[cur_color].length > 1){
					aux = path[cur_color][path[cur_color].length - 1];
					if(patterns[game_number][path[cur_color][path[cur_color].length - 1]] == 0){
						cur_game[aux] = 0;
						mini.getElementsByTagName("td")[aux].style.backgroundColor = color_rgb[0];
					}
					path[cur_color].pop();
				}
				if(path[cur_color].length <= 1){
					path[cur_color] = [];
					path[cur_color].push(pos);
				}
			}
			else{
				cur_color = 0;
			}
		};
		mini.getElementsByTagName("td")[i].onmouseenter = function(){
			var pos = parseInt((this.getAttribute('id')).substr(2,2)) - 1;
			if(cur_color != 0){
				if((pos % 7 == path[cur_color][path[cur_color].length - 1] % 7 && Math.abs(pos - path[cur_color][path[cur_color].length - 1]) <= 7) ||
					(Math.floor(pos / 7) == Math.floor(path[cur_color][path[cur_color].length - 1] / 7) && 
					 Math.abs(pos - path[cur_color][path[cur_color].length - 1]) == 1
				)){
					if(cur_game[pos] == 0){
						if(path[cur_color].length == 1 || patterns[game_number][path[cur_color][path[cur_color].length - 1]] == 0){
							this.style.backgroundColor = color_rgb[cur_color];
							cur_game[pos] = cur_color;
							path[cur_color].push(pos);
						}
					}
					else{
						if(cur_game[pos] == cur_color ){
							if(path[cur_color].indexOf(pos) < 0){
								path[cur_color].push(pos);
							}
							else{
								var aux;
								do{
									var aux = path[cur_color].pop();
									if(patterns[game_number][aux] == 0){
										cur_game[aux] = 0;
										mini.getElementsByTagName("td")[aux].style.backgroundColor = color_rgb[0];
									}
								}while(pos != aux);
								cur_game[pos] = cur_color;
								path[cur_color].push(aux);
								this.style.backgroundColor = color_rgb[cur_color];
							}
						}
					}
				}
			}
		};
    }
	
	function verify(){
		var flag = true;
		var cnt = 0;
		var i;
		for(i = 1; i <= 7; ++i){
			if(patterns[game_number][path[i][0]] == 0 || patterns[game_number][path[i][path[i].length - 1]] == 0 || path[i].length <= 1){
				flag = false;
				break;
			}
			cnt += path[i].length;
		}
		if(flag == true && cnt == 49){
			var victory = new Audio("./soundfx/missioncomplete.wav");
			audio.pause();
			quests[2] = 1;
			while(document.getElementsByTagName("mini")[0].childNodes.length != 0){
				document.getElementsByTagName("mini")[0].removeChild(document.getElementsByTagName("mini")[0].childNodes[0]);
			}
			document.getElementsByTagName("head")[0].removeChild(script);
			setTimeout(function (){
				audio.src = './music/02_Failien_Funk.ogg';
				audio.play();
				victory.play();
				u_action = true;
				pauseP = false;
			}, 200);
		}
	}
}











