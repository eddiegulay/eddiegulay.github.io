// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
        
function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 12,
		scrollwheel: true,
		disableDefaultUI: true,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":34},{"color":"#787d86"},{"lightness":38}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":14}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#cbd1da"},{"lightness":18}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#cbd1da"},{"lightness":15},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#e6eced"},{"lightness":18}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#dbe3e5"},{"lightness":19}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#cbd1da"},{"lightness":15}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":27},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#cbd1da"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#cbd1da"},{"lightness":14}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#cbd1da"},{"lightness":17}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#f4f8f9"},{"lightness":15}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
		icon: "assets/images/icon-map-pic.svg",
        title: 'a/vc'
    });
				
	// Construct a new InfoWindow.
    var infoWindow = new google.maps.InfoWindow({
        content: '756 Livingston Street, Brooklyn, NY 11201'
    });
				
	// Opens the InfoWindow when marker is clicked.
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
}
