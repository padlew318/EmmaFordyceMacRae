<?php
    $description = 'Boy sculling boat from the dock with a typical New England landscape background and people on the beach painted by american artist Emma Fordyce MacRae.';
    $keywords = 'Emma Fordyce MacRae, boat, new england landscape, beach';
    $title = 'New England Beach | Emma Fordyce MacRae 20th Century American Artist';
    require ('../_includes/bs_header.php');
	require ('../_includes/bs_nav.php');
?>
<script src="https://maps.google.com/maps?file=api&amp;v=2&amp;sensor=false&amp;key=AIzaSyAlB-5v7th933t8Ozl7nFydAP0K6xRq1LE" type="text/javascript"></script>

<div class="container">
    
    <div class="row">
        <div class="pagetitle col-lg-12">
            <h1>New England Beach</h1>
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
                        <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/new_england_beach.php" type="button" class="btn btn-primary btn-circle">3</a>
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
            
    <div class="row" style="background:#5391AA; margin:5px; padding:5px;" >
         <div class="col-lg-4 col-md-5 col-sm-6">
             <img src="<?php echo $base_url; ?>_images/09_New_England_Beach_WM.17784203_std.jpg" alt="New England Beach" class="img-thumbnail img-responsive">
                    
             </div>
         <div class="col-lg-8 col-md-7 col-sm-6" style="padding-top:10px;">
                  <div id="map" style="width: 100%; height: 250px; border:3px solid white"></div> 
                  <p style="color:white;text-align:center;">SatNav : Lanes Cove Road, Gloucester, MA</p>
         </div>
 </div>
 <hr>
 <div class="row">
         <div class="col-lg-12">
            <p>
                    Route 127 or Washington Street as it is called continues alongside Ipswich Bay.  Lanesville and Lanes Cove have changed since Emma painted the <em>New England Beach, Lanesville</em> landscape sitting on the dock looking across the beach to Duley Street. 
                  </p>
                  <p>
                    Once Emma found her style she continued with her distinctive method of painting as here in <em>New England Beach, Lanesville. </em> She has built up the reflection in the water of the boat and the onlookers and added texture to the sea with some colors scraped back and others added to achieve distinct picture planes.
                  </p>
                  <p>
                    No one in her immediate family was an artist.  Her father John Addison Fordyce, a dermatologist, came from the mid-west to New York and her mother had grown up in the city having been raised by her grandfather, Thompson Dean, a colourful investor and owner of steamboats on the Mississippi.  The family lived on the west side of New York City.
                  </p>
                  <p>
                    The harbour and its docks remain today.  
                  </p>
   </div>
 </div>
 
 <div class="row" style="text-align:center;">
         <div class="col-lg-12">                  
                    <input type='button' class='btn btn-info' value='<<' onclick='history.go(-1)'>
         
                    <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/index.php" type="button" class="btn btn-primary">Cape Ann Landscapes Tour</a>
                    
                    <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/fishermen_at_pigeon_cove.php" type="button" class="btn btn-info">>></a>
    </div>
    </div>
    
    <hr />
    
     
 <div class="row">
         <div class="col-lg-12">
                <p>
                    New England Beach<br>
                    Oil painting<br>
                    New England Landscape<br>
                    Exhibited: Cape Ann Museum, Gloucester, MA, Page 22 catalogue<br>
                    Emma Fordyce MacRae 1887-1974
                  </p>
             </div>
             </div>
    <hr>
   
</div> <!-- /container -->

<!-- FOOTER -->
<?php
require ('../_includes/bs_footer.1.php');
?>
<script type="text/javascript" src="<?php echo $base_url; ?>_js/new_england_beach.js"></script>
<?php
require ('../_includes/bs_footer.2.php');
?>