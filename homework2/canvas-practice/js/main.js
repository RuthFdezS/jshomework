window.onload = function() {
	init();
};

var contenedor, canvas, context, moon;
var texto = document.getElementById('alert');

function init() {

 	contenedor = document.getElementById('container');

	if (Modernizr.canvas) {

		texto.innerHTML = ': Your browser support HTML5 canvas';

		//Creacion del canvas
		canvas = document.createElement('canvas');
		context = canvas.getContext('2d');
		context.clearRect(0,0,720,300);

		//Creacion del fondo
		var sky = context.createLinearGradient(0,0,0,150);
		sky.addColorStop(0, '#001848');
		sky.addColorStop(1, '#301860');

		context.fillStyle = sky;
		context.fillRect(0,0,720,300);

		contenedor.appendChild(canvas);

		//Llamado hacia otras funciones.
		callFunctions();

	} else {

		texto.innerHTML = ': Your browser does not support HTML5 canvas ';
		fallBackImage();
	
	}	
};


//callFunctions
function callFunctions(){

	//Funciones de la luna Nota: Estas dos funciones tienen que ir
	//antes que las funciones de las montañas para que la 
	//pase por detrás de las montañas. 

	createMoon();
	drawMoon();
}

//Moon
function createMoon(){

	var _self = this;

	moon = new Image();
	moon.src = "assets/moon.png";
	moon.onload = function() {
		_self.drawMoon();
	}

}

//drawMoon
function drawMoon() {

	context.save();
	context.scale(0.4, 0.4);
	context.drawImage(moon, 400, 70, 88, 84);
	context.restore();
}

//fallBackImage 

function fallBackImage() {

	fallBackImage = document.createElement('img');
	fallBackImage.setAttribute('src', "assets/night.jpg");
	contenedor.appendChild(fallBackImage);

}



