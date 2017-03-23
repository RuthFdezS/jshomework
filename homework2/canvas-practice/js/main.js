window.onload = function() {
	init();
};

var contenedor, canvas, context, mountain;
var texto = document.getElementById('alert');

function init() {

	 	contenedor = document.getElementById('container');

		if (Modernizr.canvas) {

			texto.innerHTML = ': Your browser support HTML5 canvas';

			canvas = document.createElement('canvas');
			
			context = canvas.getContext('2d');
			context.clearRect(0,0,720,300);
			
			var sky = context.createLinearGradient(0,0,0,150);
			sky.addColorStop(0, '#001848');
			sky.addColorStop(1, '#301860');

			context.fillStyle = sky;
			context.fillRect(0,0,720,300);

			contenedor.appendChild(canvas);

			crearImagen();
			dibujarImagen();

			
		} else {

			texto.innerHTML = ': Your browser does not support HTML5 canvas ';
			fallBackImage();
		
		}	
};

function crearImagen() {

	var _self = this;

	mountain = new Image();
	mountain.src = "assets/mountains.png";
	
	mountain.onload = function() {
		_self.dibujarImagen();
	}
}

function dibujarImagen() {

	context.save();
	context.scale(0.4, 0.4);
	context.drawImage(mountain, 0, 75, 750, 300);
	context.restore();
}

function fallBackImage() {

	fallBackImage = document.createElement('img');
	fallBackImage.setAttribute('src', "assets/night.jpg");
	contenedor.appendChild(fallBackImage);

}



