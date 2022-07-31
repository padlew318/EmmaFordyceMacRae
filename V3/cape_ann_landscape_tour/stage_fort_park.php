<?php
    $description = 'This oil painting captures no boats or reflections in the water instead the artist painted flowers the cemetery and the town beyond Stage Fort Park.';
    $keywords = 'oil painting, flowers, stage fort park, landscape';
    $title = 'Stage Fort Park | Emma Fordyce MacRae 20th Century American Artist';
    require ('../_includes/bs_header.php');
	require ('../_includes/bs_nav.php');
?>
<script src="https://maps.google.com/maps?file=api&amp;v=2&amp;sensor=false&amp;key=AIzaSyAlB-5v7th933t8Ozl7nFydAP0K6xRq1LE" type="text/javascript">
</script> 


<div class="container">
    
    <div class="row">
        <div class="pagetitle col-lg-12">
            <h1>Stage Fort Park</h1>
            <h2>Emma Fordyce MacRae - Cape Ann Landscapes</h2>
            <noscript>
            <div class="alert alert-danger">
                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                <strong>Danger!</strong> JavaScript must be enabled in order for you to use some of the features on this page.<br>
                    However, it seems JavaScript is either disabled or not supported by your browser.<br>
                    Please enable JavaScript by changing your browser options, and then try again.
            </div>
        </noscript>
        </div>
        </div>
        <hr>
        <div class="row">
        <div class="col-lg-12">
            <div class="stepwizard">
                <div class="stepwizard-row setup-panel">
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/index.php" type="button" class="btn btn-default btn-circle">Start</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/august_in_new_england.php" type="button" class="btn btn-default btn-circle">1</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/hodgkins_cove.php" type="button" class="btn btn-default btn-circle">2</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/new_england_beach.php" type="button" class="btn btn-default btn-circle">3</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/fishermen_at_pigeon_cove.php" type="button" class="btn btn-default btn-circle">4</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/pigeon_cove.php" type="button" class="btn btn-default btn-circle">5</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/rockport_beach.php" type="button" class="btn btn-default btn-circle">6</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/white_boat.php" type="button" class="btn btn-default btn-circle">7</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/main_street.php" type="button" class="btn btn-default btn-circle">8</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/halfmoon_beach.php" type="button" class="btn btn-default btn-circle">9</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/stage_fort_park.php" type="button" class="btn btn-primary btn-circle">10</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/gloucester_garden.php" type="button" class="btn btn-default btn-circle">11</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/cape_ann_museum.php" type="button" class="btn btn-default btn-circle">12</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
    <hr />
            
    <div class="row" style="background:#5391AA; margin:5px; padding:5px;" >
         <div class="col-lg-4 col-md-5 col-sm-6">
		 <img src="<?php echo $base_url; ?>_images/04_Stage_Fort_Park_WM.17792440_std.jpg" alt="Stage Fort Park" class="img-thumbnail img-responsive">
                    
             </div>
         <div class="col-lg-8 col-md-7 col-sm-6" style="padding:5px;">
                  <div id="map" style="width: 100%; height: 450px; border:3px solid white"></div> 
                  <p style="color:white;text-align:center;">SatNav : 8 Old Salem Road, Gloucester, MA</p>
         </div>
 </div>
 <hr>
 <div class="row">
         <div class="col-lg-12">
		 <p>
                    From here Emma painted the landscape with flowers in the garden, the tombstones in the cemetery, the American flag, the Annisquam River and the town in the distance.  
					Her technique in <em>Stage Fort Park</em> is similar to her other paintings but without so much of the background showing through and in this landscape oil painting there are no boats or reflections in the water.
                  </p>
                  <p>
                    As you leave Stage Fort Park turn right towards Gloucester on Route 127 and take the first left onto Old Salem Road.  Atlantic Highlands the house built by Emma’s father is up the hill on the left. 
                  </p>
                  <p>
                    Emma abandoned by MacRae may have lived with her parents during the summers at their home on Old Salem Road while waiting for her marriage to end.  
					Emma’s father purchased the land in 1916 and built Atlantic Highlands which he left to Emma when he died in 1925 -- the year she exhibited <em>White Boat.</em>
                  </p>
                  <p>
                    Dr. Homer Swift, Emma’s second husband, usually spent the weekends in summer with her at Atlantic Highlands and the plants Emma painted were more often than not selected by Homer during winter evenings in their New York apartment 
					pouring over seed catalogues and a collection of garden books to design a summer garden for her.
                  </p>
		 </div>
 </div>
 
 <div class="row" style="text-align:center;">
         <div class="col-lg-12">                  
                    <input type='button' class='btn btn-info' value='<<' onclick='history.go(-1)'>
                    <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/index.php" type="button" class="btn btn-primary">Cape Ann Landscapes Tour</a>
                    <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/gloucester_garden.php" type="button" class="btn btn-info">>></a>
    </div>
    </div>
    
    <hr />
    <div class="row">
         <div class="col-lg-12">   
    <p>
     Stage Fort Park<br>
                    Oil painting<br>
                    New England Landscape<br>
                    Exhibited: Cape Ann Museum, Page 15 catalogue<br>
                    Emma Fordyce MacRae 1887-1974
                  </p>
                  </div>
    </div>
    
    <hr />
   
</div> <!-- /container -->

<!-- FOOTER -->
<?php
require ('../_includes/bs_footer.1.php');
?>
<script type="text/javascript">

                  if (GBrowserIsCompatible()) {

    var baseIcon = new GIcon();
    baseIcon.iconSize = new GSize(32, 32);
    baseIcon.shadowSize = new GSize(56, 32);
    baseIcon.iconAnchor = new GPoint(16, 32);
    baseIcon.infoWindowAnchor = new GPoint(16, 0);

    var one = new GIcon(baseIcon, "https://maps.google.com/mapfiles/kml/pal3/icon20.png", null, "https://maps.google.com/mapfiles/kml/pal3/icon20s.png");

    // A function to create the marker and set up the event window
    function createMarker(point, icon) {
        var marker = new GMarker(point, icon);
        return marker;
    }

    // create the map
    var map = new GMap2(document.getElementById("map"));
    map.addControl(new GLargeMapControl());
    map.addControl(new GMapTypeControl());
    map.setCenter(new GLatLng(42.60498, -70.68264), 18);

    // add the points  
    var point = new GLatLng(42.60498, -70.68264);
    var marker = createMarker(point, one)
    map.addOverlay(marker);
}

else {
    alert("Sorry, the Google Maps API is not compatible with this browser");
}
</script>
<?php
require ('../_includes/bs_footer.2.php');
?>
