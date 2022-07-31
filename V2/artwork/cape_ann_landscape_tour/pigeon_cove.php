<?php
    $description = 'Self portrait of the American artist Emma Fordyce MacRae capturing the landscape across the harbor with her easel set up on the dock with her box of oil paints.';
    $keywords = 'Emma Fordyce MacRae, landscape, harbor, oil painting, docks';
    $title = 'Painting at Pigeon Cove | Emma Fordyce MacRae 20th Century American Artist';
    require ('../../_includes/bs_header.php');
?>
<script src="https://maps.google.com/maps?file=api&amp;v=2&amp;sensor=false&amp;key=AIzaSyAlB-5v7th933t8Ozl7nFydAP0K6xRq1LE" type="text/javascript">
</script>

<?php
    require ('../../_includes/bs_nav.php');
?>
<div class="container">
    
    <div class="row">
        <div class="pagetitle col-lg-12">
            <h1>Painting at Pigeon Cove</h1>
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
                        <a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/index.php" type="button" class="btn btn-default btn-circle">Start</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/august_in_new_england.php" type="button" class="btn btn-default btn-circle">1</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/hodgkins_cove.php" type="button" class="btn btn-default btn-circle">2</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/new_england_beach.php" type="button" class="btn btn-default btn-circle">3</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/fishermen_at_pigeon_cove.php" type="button" class="btn btn-default btn-circle">4</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/pigeon_cove.php" type="button" class="btn btn-primary btn-circle">5</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/rockport_beach.php" type="button" class="btn btn-default btn-circle">6</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/white_boat.php" type="button" class="btn btn-default btn-circle">7</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/main_street.php" type="button" class="btn btn-default btn-circle">8</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/halfmoon_beach.php" type="button" class="btn btn-default btn-circle">9</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/stage_fort_park.php" type="button" class="btn btn-default btn-circle">10</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/gloucester_garden.php" type="button" class="btn btn-default btn-circle">11</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/cape_ann_museum.php" type="button" class="btn btn-default btn-circle">12</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
    <hr />
            
    <div class="row" style="background:#5391AA; margin:5px; padding:5px;" >
         <div class="col-lg-4 col-md-5 col-sm-6">
               <img src="<?php echo $base_url; ?>_images/11_Pigeon_Cove_WM.17784829_std.jpg" alt="Pigeon Cove" class="img-thumbnail img-responsive">
                    
             </div>
         <div class="col-lg-8 col-md-7 col-sm-6" style="padding-top:10px;">
                  <div id="map" style="width: 100%; height: 250px; border:3px solid white"></div> 
                  <p style="color:white;text-align:center;">SatNav : Breakwater Avenue, Gloucester, MA</p>
         </div>
 </div>
 <hr>
 <div class="row">
         <div class="col-lg-12">
            <p>
                    <em>Painting at Pigeon Cove</em> is a tranquil landscape and again Emma has built up and taken back her colors from the gesso white under paint and has painted herself with her easel and box of paints set up on the dock capturing the view across the harbor with the boats and granite walls to the Church with the small red roof over the belfry.  Emma also painted a small oil painting of her second husband Homer standing on a dock.
                  </p>
                  <p>
                    Pigeon Cove seems to have been Emma’s favourite harbor and she painted it several times.  One oil painting is at the  National Academy of Design on Fifth Avenue in New York and another hangs at the Cape Ann Museum in Gloucester, M.A.
                  </p>
                  <p>
                    From here it is a short drive to the center of Rockport.
                  </p>
   </div>
 </div>
 
 <div class="row" style="text-align:center;">
         <div class="col-lg-12">                  
                    <input type='button' class='btn btn-info' value='<<' onclick='history.go(-1)'>
         
                    <a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/index.php" type="button" class="btn btn-primary">Cape Ann Landscapes Tour</a>
                    
                    <a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/rockport_beach.php" type="button" class="btn btn-info">>></a>
    </div>
    </div>
    
    <hr />
    <div class="row">
         <div class="col-lg-12">   
    <p>
                    Painting at Pigeon Cove<br>
                    Oil painting<br>
                    New England Landscape<br>
                    Emma Fordyce MacRae  1887 - 1974
                  </p>
                  </div>
    </div>
    
    <hr />
   
</div> <!-- /container -->

<!-- FOOTER -->
<?php
require ('../../_includes/bs_footer.1.php');
?>
<script type="text/javascript">

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
                  map.setCenter(new GLatLng(42.67728,-70.62166), 16);

                  // add the points  
                  var point = new GLatLng(42.67728,-70.62166);
                  var marker = createMarker(point,one)
                  map.addOverlay(marker);
                  }    

                  else {
                  alert("Sorry, the Google Maps API is not compatible with this browser");
                  }

                  </script>
<?php
require ('../../_includes/bs_footer.2.php');
?>