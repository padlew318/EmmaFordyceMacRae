            if (GBrowserIsCompatible()) {

                  var baseIcon = new GIcon();
                  baseIcon.iconSize=new GSize(32,32);
                  baseIcon.shadowSize=new GSize(56,32);
                  baseIcon.iconAnchor=new GPoint(16,32);
                  baseIcon.infoWindowAnchor=new GPoint(16,0);

                  var one = new GIcon(baseIcon, "http://maps.google.com/mapfiles/kml/pal3/icon20.png", null, "http://maps.google.com/mapfiles/kml/pal3/icon20s.png");

                  // A function to create the marker and set up the event window
                  function createMarker(point,icon) {
                  var marker = new GMarker(point,icon);
                  return marker;
                  }

                  // create the map
                  var map = new GMap2(document.getElementById("map"));
                  map.addControl(new GLargeMapControl());
                  map.addControl(new GMapTypeControl());
                  map.setCenter(new GLatLng(42.60498,-70.68264), 18);

                  // add the points  
                  var point = new GLatLng(42.60498,-70.68264);
                  var marker = createMarker(point,one)
                  map.addOverlay(marker);
                  }    

                  else {
                  alert("Sorry, the Google Maps API is not compatible with this browser");
                  }