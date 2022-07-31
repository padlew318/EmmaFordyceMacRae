<!DOCTYPE html>
<html>
  <head>
    <title>Cape Ann Landscapes Tour | Emma Fordyce MacRae</title>
    <meta charset="UTF-8">
    <meta name="DESCRIPTION" content="What to do on Cape Ann, follow the New England landscapes of Cape Ann of boats, beaches, docks, harbours by mousing over numbers on the map.">
    <meta name="KEYWORDS" content="cape ann, new england landscapes, boats, beach, beaches, harbors">
	<meta name="robots" content="index, follow">
	<?php include '../_includes/header.php' ?>
  </head>
  <body>
    <div id="body">
      <div id="doc">
        <div id="hd">
          <div id="hContent">
            <div id="headerContent" class="editorWrap">
              <div id="headerZoneElement" class="editable rte flexContent">
                <h1>
                  Emma Fordyce MacRae
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div id="wrapper">
          <?php include '../_includes/nav.php' ?>
          <div id="bd">
            <div id="pageName">
              <div id="pageNameContent" class="editorWrap">
                <div id="pageNameZoneContent" class="editable rte flexContent">
                  <h2>
                    Cape Ann Landscapes Tour
                  </h2>
                  <h3>
                    Emma Fordyce MacRae - Cape Ann Landscapes
                  </h3>
                </div>
              </div>
            </div>
            <div id="zWrap">
              <div id="zA">
                <div class="modWrap">
                  <p>
                    Emma Fordyce MacRae is known for her original oil paintings of landscapes, boats, flowers, reflections in the water and docks. She painted in New England, New York and Europe. The Cape Ann Landscapes Tour includes paintings of Cape Ann, MA.
                  </p>
                  <div id="map"></div>
                  <div id="mapbar">
                    <div class="mapbutton" style="text-align:left; height:55px; padding-left:3px; text-size:0.8em">
                      <i>Mouse over number on map for an image of the painting</i>
                    </div>
                    <div class="mapbutton">
                      <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/august_in_new_england.php">1 - New England</a>
                    </div>
                    <div class="mapbutton">
                      <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/hodgkins_cove.php">2 - Hodgkins Cove</a>
                    </div>
                    <div class="mapbutton">
                      <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/new_england_beach.php">3 - New England Beach</a>
                    </div>
                    <div class="mapbutton">
                      <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/fishermen_at_pigeon_cove.php">4 - Fishermen</a>
                    </div>
                    <div class="mapbutton">
                      <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/pigeon_cove.php">5 - Pigeon Cove</a>
                    </div>
                    <div class="mapbutton">
                      <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/rockport_beach.php">6 - Rockport Beach</a>
                    </div>
                    <div class="mapbutton">
                      <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/white_boat.php">7 - White Boat</a>
                    </div>
                    <div class="mapbutton">
                      <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/main_street.php">8 - Main Street</a>
                    </div>
                    <div class="mapbutton">
                      <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/halfmoon_beach.php">9 - Half Moon Beach</a>
                    </div>
                    <div class="mapbutton">
                      <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/stage_fort_park.php">10 - Stage Fort Park</a>
                    </div>
                    <div class="mapbutton">
                      <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/gloucester_garden.php">11 - Gloucester Garden</a>
                    </div>
                    <div class="mapbutton">
                      <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/cape_ann_museum.php">12 - Cape Ann Museum</a>
                    </div>
                  </div>
                  <p style="text-align:center">

				  <div id="map"></div>
                      <script>
                          var map;
                          function initMap() {
                              map = new google.maps.Map(document.getElementById('map'), {
                                  center: { lat: 42.6400, lng: -70.64 },
                                  zoom: 12
                              });
                          }
                      </script>
                      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAlB-5v7th933t8Ozl7nFydAP0K6xRq1LE&callback=initMap" async defer></script>

                    <a href="<?php echo $base_url; ?>print.php">Print this map</a>
                  </p><script src="http://maps.google.com/maps?file=api&amp;v=2&amp;sensor=false&amp;key=AIzaSyAlB-5v7th933t8Ozl7nFydAP0K6xRq1LE" type="text/javascript">
</script> 
<script type="text/javascript" src="<?php echo $base_url; ?>js/cape_ann_landscapes_tour.js"></script>
 <noscript>
                  <div class="javawarning">
                    <strong>JavaScript must be enabled in order for you to use some of the features on this page.</strong><br>
                    However, it seems JavaScript is either disabled or not supported by your browser.<br>
                    Please enable JavaScript by changing your browser options, and then try again.
                  </div></noscript>
                </div>
              </div>
              <div id="zB">
                <div class="modWrap"></div>
              </div>
              <div id="zC">
                <div class="modWrap"></div>
              </div>
            </div>
          </div>
        <?php include '../_includes/footer.php' ?>
      </div>
    </div>
	<script type="text/javascript" src="<?php echo $base_url; ?>js/mc_yss_extensions.144201.js"></script>
	<script type="text/javascript" src="<?php echo $base_url; ?>js/gstats.js"></script>
  </body>
</html>