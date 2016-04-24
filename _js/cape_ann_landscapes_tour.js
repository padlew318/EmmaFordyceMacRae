                  if (GBrowserIsCompatible()) {
                  var baseIcon = new GIcon();
                  baseIcon.iconSize=new GSize(16,16);
                  baseIcon.shadowSize=new GSize(28,16);
                  baseIcon.iconAnchor=new GPoint(8,16);
                  baseIcon.infoWindowAnchor=new GPoint(8,8);

                  var one = new GIcon(baseIcon, "http://www.emmafordycemacrae.com/_images/icon1.png", null, "http://www.emmafordycemacrae.com/_images/iconshadow.png");
                  var two   = new GIcon(baseIcon, "http://www.emmafordycemacrae.com/_images/icon2.png", null, "http://www.emmafordycemacrae.com/_images/iconshadow.png");
                  var three = new GIcon(baseIcon, "http://www.emmafordycemacrae.com/_images/icon3.png", null, "http://www.emmafordycemacrae.com/_images/iconshadow.png");
                  var four = new GIcon(baseIcon, "http://www.emmafordycemacrae.com/_images/icon4.png", null, "http://www.emmafordycemacrae.com/_images/iconshadow.png");
                  var five = new GIcon(baseIcon, "http://www.emmafordycemacrae.com/_images/icon5.png", null, "http://www.emmafordycemacrae.com/_images/iconshadow.png");
                  var six = new GIcon(baseIcon, "http://www.emmafordycemacrae.com/_images/icon6.png", null, "http://www.emmafordycemacrae.com/_images/iconshadow.png");
                  var seven = new GIcon(baseIcon, "http://www.emmafordycemacrae.com/_images/icon7.png", null, "http://www.emmafordycemacrae.com/_images/iconshadow.png");
                  var eight = new GIcon(baseIcon, "http://www.emmafordycemacrae.com/_images/icon8.png", null, "http://www.emmafordycemacrae.com/_images/iconshadow.png");
                  var nine = new GIcon(baseIcon, "http://www.emmafordycemacrae.com/_images/icon9.png", null, "http://www.emmafordycemacrae.com/_images/iconshadow.png");
                  var ten = new GIcon(baseIcon, "http://www.emmafordycemacrae.com/_images/icon10.png", null, "http://www.emmafordycemacrae.com/_images/iconshadow.png");
                  var eleven = new GIcon(baseIcon, "http://www.emmafordycemacrae.com/_images/icon11.png", null, "http://www.emmafordycemacrae.com/_images/iconshadow.png");
                  var twelve = new GIcon(baseIcon, "http://www.emmafordycemacrae.com/_images/icon12.png", null, "http://www.emmafordycemacrae.com/_images/iconshadow.png");

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
                  var marker = createMarker(point,'1 - New England','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="http://www.emmafordycemacrae.com/august_in_new_england.php"><img src="http://www.emmafordycemacrae.com/images/07_-_August_in_New_England_-_707.17474009_sq_thumb_m.jpg" width=150 height=150><\/a><br /><a href="http://www.emmafordycemacrae.com/august_in_new_england.php"> more ...<a><\/div>', one)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.6693,-70.6676);
                  var marker = createMarker(point,'2 - Hodgkins Cove','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="http://www.emmafordycemacrae.com/hodgkins_cove.php"><img src="http://www.emmafordycemacrae.com/images/08_Hodgkins_Cove_WM.17783931_sq_thumb_m.jpg" width=150 height=150><\/a><br /><a href="http://www.emmafordycemacrae.com/hodgkins_cove.php"> more . . .<a><\/div>', two)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.6795,-70.6591);
                  var marker = createMarker(point,'3 - New England Beach','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="http://www.emmafordycemacrae.com/new_england_beach.php"><img src="http://www.emmafordycemacrae.com/images/09_New_England_Beach_WM.17784203_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="http://www.emmafordycemacrae.com/new_england_beach.php"> more . . . <a><\/div>', three)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.67625,-70.626);
                  var marker = createMarker(point,'4 - Fishermen','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="http://www.emmafordycemacrae.com/fishermen_at_pigeon_cove.php"><img src="http://www.emmafordycemacrae.com/images/10_Fishermen_At_Pigeon_Cove_WM.17784556_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="http://www.emmafordycemacrae.com/fishermen_at_pigeon_cove.php"> more . . . <a><\/div>', four)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.67625,-70.620);
                  var marker = createMarker(point,'5 - Pigeon Cove','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="http://www.emmafordycemacrae.com/pigeon_cove.php"><img src="http://www.emmafordycemacrae.com/images/11_-_Pigeon_Cove_-_425.17480635_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="http://www.emmafordycemacrae.com/pigeon_cove.php"> more . . . <a><\/div>', five)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.65991,-70.61608);
                  var marker = createMarker(point,'6 - Rockport Beach','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="http://www.emmafordycemacrae.com/rockport_beach.php"><img src="http://www.emmafordycemacrae.com/images/12_-_Rockport_Beach_-_721.17480856_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="http://www.emmafordycemacrae.com/rockport_beach.php"> more . . . <a><\/div>', six)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.608,-70.66423);
                  var marker = createMarker(point,'7 - White Boat','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="http://www.emmafordycemacrae.com/white_boat.php"><img src="http://www.emmafordycemacrae.com/images/01_-_White_Boat_-_E06.17481129_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="http://www.emmafordycemacrae.com/white_boat.php"> more . . . <a><\/div>', seven)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.6115,-70.669);
                  var marker = createMarker(point,'8 - Main Street','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="http://www.emmafordycemacrae.com/main_street.php"><img src="http://www.emmafordycemacrae.com/images/02_Main_St_Gloucester_WM.17790128_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="http://www.emmafordycemacrae.com/main_street.php"> more . . . <a><\/div>', eight)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.6050,-70.677);
                  var marker = createMarker(point,'9 - Half Moon Beach','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="http://www.emmafordycemacrae.com/halfmoon_beach.php"><img src="http://www.emmafordycemacrae.com/images/03_Half_Moon_Beach_WM.17790436_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="http://www.emmafordycemacrae.com/halfmoon_beach.php"> more . . . <a><\/div>', nine)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.6040,-70.68878);
                  var marker = createMarker(point,'10 - Stage Fort Park','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="http://www.emmafordycemacrae.com/stage_fort_park.php"><img src="http://www.emmafordycemacrae.com/images/04_Stage_Fort_Park_WM.17791622_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="http://www.emmafordycemacrae.com/stage_fort_park.php"> more . . . <a><\/div>', ten)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.6040,-70.683);
                  var marker = createMarker(point,'11 - Gloucester Garden','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="http://www.emmafordycemacrae.com/gloucester_garden.php"><img src="http://www.emmafordycemacrae.com/images/05_-_Gloucester_Garden_-_937.17481949_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="http://www.emmafordycemacrae.com/gloucester_garden.php"> more . . . <a><\/div>', eleven)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.6154,-70.6650);
                  var marker = createMarker(point,'12 - Cape Ann Museum','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="http://www.emmafordycemacrae.com/cape_ann_museum.php"><img src="http://www.emmafordycemacrae.com/images/06_New_England_Swimmers.jpg" width=150><\/a><br><a href="http://www.emmafordycemacrae.com/cape_ann_museum.php"> more . . . <a><\/div>', twelve)
                  map.addOverlay(marker);                      
                       
                  } 

                  else {
                  alert("Sorry, the Google Maps API is not compatible with this browser");
                  }