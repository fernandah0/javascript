	let arrayImagens = ["todos.jpg", "steven.jpg", "perola.jpg", "ametista.jpg", "gernet.jpg", "greg.jpg"];
	let i = 0;
	let ativo = false;
	window.onload = function (){
		let img = document.getElementsByTagName('img');
		
		img[0].src="img/" + arrayImagens[0];
		img[1].src="img/" + arrayImagens[0];
		img[2].src="img/" + arrayImagens[1];
		img[3].src="img/" + arrayImagens[2];
		img[4].src="img/" + arrayImagens[3];
		img[5].src="img/" + arrayImagens[4];
		img[6].src="img/" + arrayImagens[5];
		
		play();
	}
	
	let x ;
	function play(){
		x = setInterval(img,3000);
	}
	
	function img(){
		let img = document.getElementsByTagName('img');
		img[0].src="img/" + arrayImagens[i];
		i++; 
		if(i>=6){
			i = 0;
		}
	}
	
	function stop(){
		clearInterval(x);  
 		
	}
	function img01(){
		let img = document.getElementsByTagName('img');
		img[0].src="img/" + arrayImagens[0];
      stop();
	}
	
	function img02(){
		let img = document.getElementsByTagName('img');
		img[0].src="img/" + arrayImagens[1];
		stop();
	}
	
	function img03(){
		let img = document.getElementsByTagName('img');
		img[0].src="img/" + arrayImagens[2];
		stop();
	}
	
	function img04(){
		let img = document.getElementsByTagName('img');
		img[0].src="img/" + arrayImagens[3];
		stop();
	}
	
	function img05(){
		let img = document.getElementsByTagName('img');
		img[0].src="img/" + arrayImagens[4];
		stop();
	}
	
	function img06(){
		let img = document.getElementsByTagName('img');
		img[0].src="img/" + arrayImagens[5];
		stop();
	}

 