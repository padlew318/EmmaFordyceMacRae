<?php
    $description = 'This picture of children enjoying themselves on the beach and the boats tied up at the dock and the house reflected in the water is of Hodgkin’s Cove.';
    $keywords = 'hodgkins cove, oil painting, beach, boats, reflected in the water';
    $title = 'Hodgkins Cove | Emma Fordyce MacRae 20th Century American Artist';
    require ('../../_includes/bs_header.php');
?>
<script src="http://maps.google.com/maps?file=api&amp;v=2&amp;sensor=false&amp;key=AIzaSyCzvdOhuNOf3nsVJV6gaictl81lNrRvtoY" type="text/javascript"></script>

<?php
    require ('../../_includes/bs_nav.php');
?>
<div class="container">
    
    <div class="row">
        <div class="pagetitle col-lg-12">
            <h1>Hodgkins Cove</h1>
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
                        <a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/hodgkins_cove.php" type="button" class="btn btn-primary btn-circle">2</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/new_england_beach.php" type="button" class="btn btn-default btn-circle">3</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/fishermen_at_pigeon_cove.php" type="button" class="btn btn-default btn-circle">4</a>
                    </div>
                    <div class="stepwizard-step">
                        <a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/pigeon_cove.php" type="button" class="btn btn-default btn-circle">5</a>
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
             <img src="<?php echo $base_url; ?>_images/08_Hodgkins_Cove_WM.17783931_std.jpg" alt="Hodgkins Cove" class="img-thumbnail img-responsive">            
         </div>
         <div class="col-lg-8 col-md-7 col-sm-6" style="padding-top:10px;">
                  <div id="map" style="width: 100%; height: 250px; border:3px solid white"></div> 
                  <p style="color:white;text-align:center;">SatNav : Hodgkins Cove, Gloucester, MA</p>
         </div>
 </div>
 <hr>
 <div class="row">
         <div class="col-lg-12">
                    <p>
                    This oil painting of children enjoying themselves on the beach, boats tied up and the house reflected in the water is of Hodgkin’s Cove.
                  </p>
                  <p>
                    Passing through Annisquam one is reminded that it was a favoured painting place on this side of the peninsula for artists such as William Picknell, Stephen Parrish and Frank Duveneck.  It was ignored by Emma who seems to have preferred subjects other artists had not treated.
                  </p>
                  <p>
                    To paint the dock built of the huge local granite blocks quarried nearby, Emma under painted and scraped layers of paint back sometimes to the white gesso on the canvas.
                  </p>
                  <p align="left" style="text-align: left">
                    It is difficult today to reach the spot from where she painted the scene but sometimes it is possible to park by the gate close to the location.  However, the landscape  remains much the same although the houses alongside route 127 themselves have been altered over the years.
                  </p>
         
                  </div>
 </div>
 
 <div class="row" style="text-align:center;">
         <div class="col-lg-12">                  
                    <input type='button' class='btn btn-info' value='<<' onclick='history.go(-1)'>
         
                    <a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/index.php" type="button" class="btn btn-primary">Cape Ann Landscapes Tour</a>
                    
                    <a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/new_england_beach.php" type="button" class="btn btn-info">>></a>
                  
 </div>
 </div>
 <hr>
 <div class="row">
         <div class="col-lg-12">
                  <p>
                    Hodgkins Cove<br>
                    Oil painting<br>
                    New England Landscape<br>
                    Exhibited: Cape Ann Museum, Gloucester, MA, Page 17 catalogue<br>
                    Emma Fordyce MacRae 1887 - 1974
                  </p>
                  </div>
		
    </div>
    
    <hr />
   
</div> <!-- /container -->

<!-- FOOTER -->
<?php
require ('../../_includes/bs_footer.1.php');
?>
<script type="text/javascript" src="<?php echo $base_url; ?>_js/hodgkins_cove.js"></script>
<?php
require ('../../_includes/bs_footer.2.php');
?>