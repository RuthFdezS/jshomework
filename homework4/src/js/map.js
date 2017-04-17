function init(){
//NameSpace --> google.maps.attr
	var divMap = document.getElementById('map');
	navigator.geolocation.getCurrentPosition( fn_ok , fn_error);
	//Latitud y longitud del marcador 1
	var latlng1 = new google.maps.LatLng(9.988555, -84.111999);
	var automercado;

	//Imagenes
	var imageUsuario = "assets/male-2.png";
	var imageMarcador = "assets/supermarket.png";

	function fn_error(){
		alert('No pudimos encontrar tu ubicación exacta');
	}
	function fn_ok(rta){
		var lat = rta.coords.latitude;
		var lon = rta.coords.longitude;
		
		//objecto latitud longitud google
		var glatLon = new google.maps.LatLng( lat, lon);
		//objecto google mapa 
		var objConfig = {
			zoom: 17,
			center: glatLon
			
		}
		//renderiza el map con donde aparece y sus atributos
		var gMap =  new google.maps.Map( divMap, objConfig );
		
		//agregar marcador de usuario
		var objConfigUser = {
			position: glatLon,
			map: gMap,
			icon: imageUsuario,
			title: "usuario"
			
		}
		
		//marca de usuario
		var gUser = new google.maps.Marker (objConfigUser);
		
		//pasa una direccion a coordenadas
		var gCoder = new google.maps.Geocoder();
		
		// da las propiedades de direccion
		objdireccion = {
			address: 'Paseo de Las Flores, San Francisco, Provincia de Heredia, Costa Rica'
		} 
		
		//funcion geocoder de google, recibe la direccion y una funcion a ejecutar
			gCoder.geocode(objdireccion, fn_coder);
		
        //funcion que se ejecuta si encuentra la direccion	
		function fn_coder(datos){
			//convierte en coordenadas la direccion
			var coordenadas = datos[0].geometry.location; //objeto LatLong
			
			//variables de la configuracion del paseo
			var config = {
				map: gMap,
				position: coordenadas,
				icon: imageMarcador,
				title: "Paseo de las flores"				
			}
			
			//crear nuevo marcador
			var gMarkerPaseoFL = new google.maps.Marker(config)
		}	
		// Marcador 1 del Auto Mercado
		
		automercado = new google.maps.Marker({
			position: latlng1,
			map: gMap,
			icon: imageMarcador,
			title: "Auto Mercado"
		})	
	}
}	