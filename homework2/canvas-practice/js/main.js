window.onload = function() {
	init();
};

var contenedor, canvas, context, sky, mountain, posLunaX, posLunaY;

var texto = document.getElementById('alert');

var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;

function init() {

 	contenedor = document.getElementById('container');

	if (Modernizr.canvas) {

		texto.innerHTML = ': Your browser support HTML5 canvas';

		//Creacion del canvas
		canvas = document.createElement('canvas');
		context = canvas.getContext('2d');
		context.clearRect(0,0,720,300);

		//Creacion del fondo
		sky = context.createLinearGradient(0,0,0,150);
		sky.addColorStop(0, '#001848');
		sky.addColorStop(1, '#301860');

		context.fillStyle = sky;
		context.fillRect(0,0,720,300);

		contenedor.appendChild(canvas);

		posLunaX=100;
		posLunaY=canvas.height;
		//Llamado hacia otras funciones.
		callFunctions();

	} else {

		texto.innerHTML = ': Your browser does not support HTML5 canvas ';
		fallBackImage();
	
	}	
};


//callFunctions
function callFunctions() {

	//Funciones de la luna Nota: Estas dos funciones tienen que ir
	//antes que las funciones de las montañas para que la 
	//pase por detrás de las montañas. 

	createMoon();
	moveMoon();
}

//Moon
function createMoon() {

	var _self = this;

	moon = new Image();
	moon.src = "assets/moon.png";
	moon.onload = function() {
		_self.drawMoon();
	}

}

//moveMoon
function moveMoon() {

	context.save();
	context.restore();
	
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.drawImage(moon, posLunaX, posLunaY, 50, 48);
	
	if(posLunaY < -20){
		context.globalAlpha=0.4;
	} else{
		context.globalAlpha=1;
	}

	if(posLunaY== -30){
    	posLunaY=canvas.height;
    	posLunaX=100;
    }else{
    	posLunaX+=1;
    	posLunaY-=1;
     }

	 setTimeout(function(){
    	requestAnimationFrame(moveMoon);
	}, 100);

}

//fallBackImage 

function fallBackImage() {

	fallBackImage = document.createElement('img');
	fallBackImage.setAttribute('src', "assets/night.jpg");
	contenedor.appendChild(fallBackImage);

}



