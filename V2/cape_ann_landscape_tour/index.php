<?php
    $description = 'What to do on Cape Ann, follow the New England landscapes of Cape Ann of boats, beaches, docks, harbours by mousing over numbers on the map.';
    $keywords = 'Emma Fordyce MacRae, cape ann, new england landscapes, boats, beach, beaches, harbors';
    $title = 'Cape Ann Landscapes Tour | Emma Fordyce MacRae 20th Century American Artist';
    require ('../_includes/bs_header.php');
    require ('../_includes/bs_nav.php');
  ?>
<div class="container">
    
    <div class="row">
        <div class="pagetitle col-lg-12">
            <h1>Cape Ann Landscapes Tour</h1>
            <h2>Emma Fordyce MacRae - Cape Ann Landscapes</h2>
        </div>
    </div>
    
     <hr />
     
     <div class="row">
        <div class="col-lg-12">
            <div class="stepwizard">
                <div class="stepwizard-row setup-panel">
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/index.php" type="button" class="btn btn-primary btn-circle">Start</a>
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
                        <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/stage_fort_park.php" type="button" class="btn btn-default btn-circle">10</a>
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
     
    
     <div class="row">
         <div class="col-lg-4">
        
                  <h3>Cape Ann Landscapes Tour</h3>
                  <p>Emma Fordyce MacRae is known for her original oil paintings of landscapes, boats, flowers, reflections in the water and docks. She painted in New England, New York and Europe. The Cape Ann Landscapes Tour includes paintings of Cape Ann, MA.</p>
                    <h4>Paintings and information</h4>
                    <ol>
                        <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/august_in_new_england.php">New England</a></li>
                    <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/hodgkins_cove.php">Hodgkins Cove</a></li>
                    <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/new_england_beach.php">New England Beach</a></li>
                    <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/fishermen_at_pigeon_cove.php">Fishermen</a></li>
                    <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/pigeon_cove.php">Pigeon Cove</a></li>
                    <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/rockport_beach.php">Rockport Beach</a></li>
                    <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/white_boat.php">White Boat</a></li>
                    <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/main_street.php">Main Street</a></li>
                    <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/halfmoon_beach.php">Half Moon Beach</a></li>
                    <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/stage_fort_park.php">Stage Fort Park</a></li>
                    <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/gloucester_garden.php">Gloucester Garden</a></li>
                    <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/cape_ann_museum.php">Cape Ann Museum</a></li>
                    </ol>
                    <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/august_in_new_england.php" type="button" class="btn btn-primary">Start the Cape Ann Landscapes Tour</a>
                   </div>
        <div class="col-lg-8">
            <p style="text-align:center;"><i>Mouse over number on map for an image of the painting</i></p>
                  <div id="map"></div>
                  <p style="text-align:center">
                    <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/print.php">Print this map</a>
                  </p>
        </div>
        </div>
    <hr>
                  
                  <script type="text/javascript" src="https://maps.google.com/maps?file=api&amp;v=2&amp;sensor=false&amp;key=AIzaSyAlB-5v7th933t8Ozl7nFydAP0K6xRq1LE"></script> 
<script type="text/javascript" src="<?php echo $base_url; ?>_js/cape_ann_landscapes_tour.js"></script>
 <noscript>
                  <div class="javawarning">
                    <strong>JavaScript must be enabled in order for you to use some of the features on this page.</strong><br>
                    However, it seems JavaScript is either disabled or not supported by your browser.<br>
                    Please enable JavaScript by changing your browser options, and then try again.
                  </div></noscript>
        
   
</div> <!-- /container -->

<!-- FOOTER -->
<?php
require ('../_includes/bs_footer.php');
?>