var mySvg, rect, g;
var texto = document.getElementById('alert');

window.onload = function(){

	init();
}

function init(){
	if(Modernizr.svg) {

		mySvg = Snap(720, 300);
		rect = mySvg.rect(0,0,'100%','100%');
		g = mySvg.gradient('l(0,0,0,1)#001848-#301860');

		rect.attr({
			fill: g
		});

	} else {

		texto.innerHTML = ': Your browser does not support HTML5 canvas ';
 		fallBackImage();

	}
}

function fallBackImage() {
	var contenedor = document.getElementById('container');
	fallBackImage = document.createElement('img');
	fallBackImage.setAttribute('src', "snap/vendor/assets/night.jpg");
	contenedor.appendChild(fallBackImage);

}


