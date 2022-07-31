                  if (GBrowserIsCompatible()) {
                  var baseIcon = new GIcon();
                  baseIcon.iconSize=new GSize(16,16);
                  baseIcon.shadowSize=new GSize(28,16);
                  baseIcon.iconAnchor=new GPoint(8,16);
                  baseIcon.infoWindowAnchor=new GPoint(8,8);

                  var one = new GIcon(baseIcon, "https://www.emmafordycemacrae.com/images/icon1.png", null, "https://www.emmafordycemacrae.com/images/iconshadow.png");
                  var two   = new GIcon(baseIcon, "https://www.emmafordycemacrae.com/images/icon2.png", null, "https://www.emmafordycemacrae.com/images/iconshadow.png");
                  var three = new GIcon(baseIcon, "https://www.emmafordycemacrae.com/images/icon3.png", null, "https://www.emmafordycemacrae.com/images/iconshadow.png");
                  var four = new GIcon(baseIcon, "https://www.emmafordycemacrae.com/images/icon4.png", null, "https://www.emmafordycemacrae.com/images/iconshadow.png");
                  var five = new GIcon(baseIcon, "https://www.emmafordycemacrae.com/images/icon5.png", null, "https://www.emmafordycemacrae.com/images/iconshadow.png");
                  var six = new GIcon(baseIcon, "https://www.emmafordycemacrae.com/images/icon6.png", null, "https://www.emmafordycemacrae.com/images/iconshadow.png");
                  var seven = new GIcon(baseIcon, "https://www.emmafordycemacrae.com/images/icon7.png", null, "https://www.emmafordycemacrae.com/images/iconshadow.png");
                  var eight = new GIcon(baseIcon, "https://www.emmafordycemacrae.com/images/icon8.png", null, "https://www.emmafordycemacrae.com/images/iconshadow.png");
                  var nine = new GIcon(baseIcon, "https://www.emmafordycemacrae.com/images/icon9.png", null, "https://www.emmafordycemacrae.com/images/iconshadow.png");
                  var ten = new GIcon(baseIcon, "https://www.emmafordycemacrae.com/images/icon10.png", null, "https://www.emmafordycemacrae.com/images/iconshadow.png");
                  var eleven = new GIcon(baseIcon, "https://www.emmafordycemacrae.com/images/icon11.png", null, "https://www.emmafordycemacrae.com/images/iconshadow.png");
                  var twelve = new GIcon(baseIcon, "https://www.emmafordycemacrae.com/images/icon12.png", null, "https://www.emmafordycemacrae.com/images/iconshadow.png");

                  // this variable will collect the html which will eventually be placed in the side_bar
                  var side_bar_html = "";

                  // arrays to hold copies of the markers and html used by the side_bar
                  // because the function closure trick doesnt work there
                  var gmarkers = [];

                  // A function to create the marker and set up the event window
                  function createMarker(point,name,html,icon) {
                  var marker = new GMarker(point,icon);

                  // The new marker "mouseover" listener        
                  GEvent.addListener(marker,"mouseover", function() {
                  marker.openInfoWindowHtml(html);
                  });

                  return marker;
                  }

                  // create the map
                  var map = new GMap2(document.getElementById("map"));
                  //  map.addControl(new GLargeMapControl());
                  // map.addControl(new GMapTypeControl());
                  map.setCenter(new GLatLng(42.6400,-70.64), 12);

                  // add the points  
                  var point = new GLatLng(42.6334,-70.6777);
                  var marker = createMarker(point,'1 - New England','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="https://www.emmafordycemacrae.com/august_in_new_england.html"><img src="https://www.emmafordycemacrae.com/images/07_-_August_in_New_England_-_707.17474009_sq_thumb_m.jpg" width=150 height=150><\/a><br /><a href="https://www.emmafordycemacrae.com/august_in_new_england.html"> more ...<a><\/div>', one)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.6693,-70.6676);
                  var marker = createMarker(point,'2 - Hodgkins Cove','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="https://www.emmafordycemacrae.com/hodgkins_cove.html"><img src="https://www.emmafordycemacrae.com/images/08_Hodgkins_Cove_WM.17783931_sq_thumb_m.jpg" width=150 height=150><\/a><br /><a href="https://www.emmafordycemacrae.com/hodgkins_cove.html"> more . . .<a><\/div>', two)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.6795,-70.6591);
                  var marker = createMarker(point,'3 - New England Beach','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="https://www.emmafordycemacrae.com/new_england_beach.html"><img src="https://www.emmafordycemacrae.com/images/09_New_England_Beach_WM.17784203_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="https://www.emmafordycemacrae.com/new_england_beach.html"> more . . . <a><\/div>', three)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.67625,-70.626);
                  var marker = createMarker(point,'4 - Fishermen','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="https://www.emmafordycemacrae.com/fishermen_at_pigeon_cove.html"><img src="https://www.emmafordycemacrae.com/images/10_Fishermen_At_Pigeon_Cove_WM.17784556_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="https://www.emmafordycemacrae.com/fishermen_at_pigeon_cove.html"> more . . . <a><\/div>', four)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.67625,-70.620);
                  var marker = createMarker(point,'5 - Pigeon Cove','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="https://www.emmafordycemacrae.com/pigeon_cove.html"><img src="https://www.emmafordycemacrae.com/images/11_-_Pigeon_Cove_-_425.17480635_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="https://www.emmafordycemacrae.com/pigeon_cove.html"> more . . . <a><\/div>', five)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.65991,-70.61608);
                  var marker = createMarker(point,'6 - Rockport Beach','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="https://www.emmafordycemacrae.com/rockport_beach.html"><img src="https://www.emmafordycemacrae.com/images/12_-_Rockport_Beach_-_721.17480856_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="https://www.emmafordycemacrae.com/rockport_beach.html"> more . . . <a><\/div>', six)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.608,-70.66423);
                  var marker = createMarker(point,'7 - White Boat','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="https://www.emmafordycemacrae.com/white_boat.html"><img src="https://www.emmafordycemacrae.com/images/01_-_White_Boat_-_E06.17481129_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="https://www.emmafordycemacrae.com/white_boat.html"> more . . . <a><\/div>', seven)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.6115,-70.669);
                  var marker = createMarker(point,'8 - Main Street','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="https://www.emmafordycemacrae.com/main_street.html"><img src="https://www.emmafordycemacrae.com/images/02_Main_St_Gloucester_WM.17790128_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="https://www.emmafordycemacrae.com/main_street.html"> more . . . <a><\/div>', eight)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.6050,-70.677);
                  var marker = createMarker(point,'9 - Half Moon Beach','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="https://www.emmafordycemacrae.com/halfmoon_beach.html"><img src="https://www.emmafordycemacrae.com/images/03_Half_Moon_Beach_WM.17790436_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="https://www.emmafordycemacrae.com/halfmoon_beach.html"> more . . . <a><\/div>', nine)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.6040,-70.68878);
                  var marker = createMarker(point,'10 - Stage Fort Park','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="https://www.emmafordycemacrae.com/stage_fort_park.html"><img src="https://www.emmafordycemacrae.com/images/04_Stage_Fort_Park_WM.17791622_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="https://www.emmafordycemacrae.com/stage_fort_park.html"> more . . . <a><\/div>', ten)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.6040,-70.683);
                  var marker = createMarker(point,'11 - Gloucester Garden','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="https://www.emmafordycemacrae.com/gloucester_garden.html"><img src="https://www.emmafordycemacrae.com/images/05_-_Gloucester_Garden_-_937.17481949_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="https://www.emmafordycemacrae.com/gloucester_garden.html"> more . . . <a><\/div>', eleven)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.6154,-70.6650);
                  var marker = createMarker(point,'12 - Cape Ann Museum','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="https://www.emmafordycemacrae.com/cape_ann_museum.html"><img src="https://www.emmafordycemacrae.com/images/06_New_England_Swimmers.jpg" width=150><\/a><br><a href="https://www.emmafordycemacrae.com/cape_ann_museum.html"> more . . . <a><\/div>', twelve)
                  map.addOverlay(marker);                      
                       
                  } 

                  else {
                  alert("Sorry, the Google Maps API is not compatible with this browser");
                  }