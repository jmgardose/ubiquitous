function initMap() {
    var locations = [
		['2-24-13, Jinden-cho Kandamachi, Miyako-gun, Fukouka-ken Japan', 33.792722, 130.980963, 3],
		['7F Fukuhisa Building 4-49 MinamiNakadori, Nakaku,Yokohama-shi Japan', 35.448711, 139.637684, 2],
		['5F King\'s Court Building 1, Makati, Chino Roces Ave Legazpi Village, Makati, NCR, Philippines', 14.557922, 121.013412, 1]
	];
  
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: new google.maps.LatLng(27.617705, 133.743045),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});
  
	var infowindow = new google.maps.InfoWindow();
  
	var marker, i;
  
	for (i = 0; i < locations.length; i++) { 
		marker = new google.maps.Marker({
		  position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		  map: map
		});
  
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
		  return function() {
			infowindow.setContent(locations[i][0]);
			infowindow.open(map, marker);
		  }
		})(marker, i));
	}
}