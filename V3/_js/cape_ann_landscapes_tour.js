/*                   if (GBrowserIsCompatible()) {
  
                  var point = new GLatLng(42.67625,-70.620);
                  var marker = createMarker(point,'5 - Pigeon Cove','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="https://www.emmafordycemacrae.com/artwork/cape_ann_landscape_tour/pigeon_cove.php"><img src="https://www.emmafordycemacrae.com/images/11_-_Pigeon_Cove_-_425.17480635_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="https://www.emmafordycemacrae.com/artwork/cape_ann_landscape_tour/pigeon_cove.php"> more . . . <a><\/div>', five)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.65991,-70.61608);
                  var marker = createMarker(point,'6 - Rockport Beach','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="https://www.emmafordycemacrae.com/artwork/cape_ann_landscape_tour/rockport_beach.php"><img src="https://www.emmafordycemacrae.com/images/12_-_Rockport_Beach_-_721.17480856_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="https://www.emmafordycemacrae.com/artwork/cape_ann_landscape_tour/rockport_beach.php"> more . . . <a><\/div>', six)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.608,-70.66423);
                  var marker = createMarker(point,'7 - White Boat','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="https://www.emmafordycemacrae.com/artwork/cape_ann_landscape_tour/white_boat.php"><img src="https://www.emmafordycemacrae.com/images/01_-_White_Boat_-_E06.17481129_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="https://www.emmafordycemacrae.com/artwork/cape_ann_landscape_tour/white_boat.php"> more . . . <a><\/div>', seven)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.6115,-70.669);
                  var marker = createMarker(point,'8 - Main Street','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="https://www.emmafordycemacrae.com/artwork/cape_ann_landscape_tour/main_street.php"><img src="https://www.emmafordycemacrae.com/images/02_Main_St_Gloucester_WM.17790128_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="https://www.emmafordycemacrae.com/artwork/cape_ann_landscape_tour/main_street.php"> more . . . <a><\/div>', eight)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.6050,-70.677);
                  var marker = createMarker(point,'9 - Half Moon Beach','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="https://www.emmafordycemacrae.com/artwork/cape_ann_landscape_tour/halfmoon_beach.php"><img src="https://www.emmafordycemacrae.com/images/03_Half_Moon_Beach_WM.17790436_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="https://www.emmafordycemacrae.com/artwork/cape_ann_landscape_tour/halfmoon_beach.php"> more . . . <a><\/div>', nine)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.6040,-70.68878);
                  var marker = createMarker(point,'10 - Stage Fort Park','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="https://www.emmafordycemacrae.com/artwork/cape_ann_landscape_tour/stage_fort_park.php"><img src="https://www.emmafordycemacrae.com/images/04_Stage_Fort_Park_WM.17791622_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="https://www.emmafordycemacrae.com/artwork/cape_ann_landscape_tour/stage_fort_park.php"> more . . . <a><\/div>', ten)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.6040,-70.683);
                  var marker = createMarker(point,'11 - Gloucester Garden','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="https://www.emmafordycemacrae.com/artwork/cape_ann_landscape_tour/gloucester_garden.php"><img src="https://www.emmafordycemacrae.com/images/05_-_Gloucester_Garden_-_937.17481949_sq_thumb_m.jpg" width=150 height=150><\/a><br><a href="https://www.emmafordycemacrae.com/artwork/cape_ann_landscape_tour/gloucester_garden.php"> more . . . <a><\/div>', eleven)
                  map.addOverlay(marker);

                  var point = new GLatLng(42.6154,-70.6650);
                  var marker = createMarker(point,'12 - Cape Ann Museum','<div style="width:250px;background-color:#ffffcc;text-align:center; font-family:cursive; padding:3px 3px; border:solid 3px black;"><a href="https://www.emmafordycemacrae.com/artwork/cape_ann_landscape_tour/cape_ann_museum.php"><img src="https://www.emmafordycemacrae.com/images/06_New_England_Swimmers.jpg" width=150><\/a><br><a href="https://www.emmafordycemacrae.com/artwork/cape_ann_landscape_tour/cape_ann_museum.php"> more . . . <a><\/div>', twelve)
                  map.addOverlay(marker);                      
                       
                  } 
 */
         
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const capeann = { lat: 42.6400, lng: -70.64 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: capeann,
    });

    // The markers
    const label1 = "1";
    const newengland = { lat: 42.6334, lng: -70.6777 };
    const label2 = "2";
    const hodgekinscove = { lat: 42.6693, lng: -70.6676 };
    const label3 = "3";
    const newenglanbeach = { lat: 42.6795, lng: -70.6591 };
    const label4 = "4";
    const fishermen = { lat: 42.67625, lng: -70.626 };

    const marker1 = new google.maps.Marker({
      position: newengland,
      map,
      label: label1,
      title:"New England"
    });

    const marker2 = new google.maps.Marker({
      position: hodgekinscove,
      map: map,
      label: label2,
      title:"Hodekins Cove"
    });

    const marker3 = new google.maps.Marker({
      position: newenglanbeach,
      map: map,
      label: label3,
      title:"New England Beach"
    });

    const marker4 = new google.maps.Marker({
      position: fishermen,
      map: map,
      label: label4,
      title:"Fishermen"
    });

  }
  
  window.initMap = initMap;