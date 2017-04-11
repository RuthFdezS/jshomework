function init(){
//NameSpace --> google.maps.attr
	var divMap = document.getElementById('map');
	navigator.geolocation.getCurrentPosition( fn_ok , fn_error);
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
			map: gMap
		}
		
		//marca de usuario
		var gUser = new google.maps.Marker (objConfigUser);
	}
}	