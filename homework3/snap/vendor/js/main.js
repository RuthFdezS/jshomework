/*********Variables****************/
var mySvg, rect, g,moon;
var texto = document.getElementById('alert');
var a=300
var b=400

/*********fin Variables****************/


window.onload = function(){

	init();
}

function init(){
	if(Modernizr.svg) {
		mySvg = Snap("#mysvg");
		createBackground();
		createMoon();
		animate();

	} else {

		texto.innerHTML = ': Your browser does not support HTML5 canvas ';
 		fallBackImage();

	}
}

function createBackground(){	
		rect = mySvg.rect(0,0,'100%','100%');
		g = mySvg.gradient('l(0,0,0,1)#001848-#301860');

		rect.attr({
			fill: g
		});
}

function createMoon() {
	moon= mySvg.circle(0,300,50);
	moon.attr({
		fill: "white",
		stroke: "#E8E4DD",
		strokeWidth: 3
	});
	// moon.addClass('moon');
}

function animate(){	
	animateMoon();		

}

function animateMoon(){
	a++
	b--
	if(b==-40){// en este punto desaparece totalmente arriba
		b=400
		a=200
	}
	moon.animate({cx:a,cy:b},3,function(){
			animateMoon()
		});

	/*************OTRA FORMA**********************
	var time
	if(b==-40){// en este punto desaparece totalmente arriba
		b=400
		a=200
		time=1
	}else{
		b=-40
		a=650
		time=3000
	}
	moon.animate({cx:a,cy:b},time,function(){
			animateMoon()
		});*/
}

function fallBackImage() {
	var contenedor = document.getElementById('container');
	fallBackImage = document.createElement('img');
	fallBackImage.setAttribute('src', "snap/vendor/assets/night.jpg");
	contenedor.appendChild(fallBackImage);

}


