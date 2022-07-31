<?php
    $description = 'This oil painting is not a true New England landscape but a New England landscape street which remains today much as it is in the painting.';
    $keywords = 'oil painting, new england landscape, painting';
    $title = 'Main Street | Emma Fordyce MacRae 20th Century American Artist';
    require ('../_includes/bs_header.php');
	require ('../_includes/bs_nav.php');
?>
<script src="https://maps.google.com/maps?file=api&amp;v=2&amp;sensor=false&amp;key=AIzaSyAlB-5v7th933t8Ozl7nFydAP0K6xRq1LE" type="text/javascript"></script> 

<div class="container">
    
    <div class="row">
        <div class="pagetitle col-lg-12">
            <h1>Main Street, Gloucester MA</h1>
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
                        <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/main_street.php" type="button" class="btn btn-primary btn-circle">8</a>
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
               <img src="<?php echo $base_url; ?>_images/02_Main_St_Gloucester_WM.17790128_std.jpg" alt="Main Street, Gloucester MA" class="img-thumbnail img-responsive">
                    
             </div>
         <div class="col-lg-8 col-md-7 col-sm-6" style="padding:5px;">
                  <div id="map" style="width: 100%; height: 250px; border:3px solid white"></div> 
                  <p style="color:white;text-align:center;">SatNav : 2 Main Street, Gloucester, MA</p>
         </div>
 </div>
 <hr>
 <div class="row">
         <div class="col-lg-12">
            <p>
            It will be easier to park on Commercial Street and walk the short distance to Main Street because Emma set up her easel to paint this landscape where the Shell gas station is located today opposite Main Street.   Emma painted the Blackburn Tavern on Main Street built around the 1870’s on the left of the painting with the clock tower with the small domed towers in each corner of the building of City Hall in the distance giving the timeless quality which pervades the landscape in spite of the presence of details of modern life such as a car or the telephone poles.
            </p>
            <p>
            Emma was not from New England.  Her family lived in New York and spent summers on Cape Ann possibly meeting her uncle and his family who came from Chicago to Eastern Point.  Later her father built a house above Stage Fort Park.
            </p>
            <p>
            Emma Fordyce MacRae studied at the Art Students League in New York 1911 and she included paintings of Cape Ann in her first exhibition.  Emma had her studio on West 69th Street close to Central Park.
            </p>
   </div>
 </div>
 
 <div class="row" style="text-align:center;">
         <div class="col-lg-12">                  
                    <input type='button' class='btn btn-info' value='<<' onclick='history.go(-1)'>
                    <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/index.php" type="button" class="btn btn-primary">Cape Ann Landscapes Tour</a>
                    <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/halfmoon_beach.php" type="button" class="btn btn-info">>></a>
    </div>
    </div>
    
    <hr />
    <div class="row">
         <div class="col-lg-12">   
    <p>
    Main Street, Gloucester MA<br>
                    Oil painting<br>
                    New England Landscape<br>
                    Exhibited: Cape Ann Museum, Gloucester, MA, Page 19 catalogue<br>
                    Emma Fordyce MacRae 1887-1974
                  </p>
                  </div>
    </div>
    
    <hr />
   
</div> <!-- /container -->


<script type="text/javascript" src="<?php echo $base_url; ?>_js/main_street.js"></script>

<!-- FOOTER -->
<?php
require ('../_includes/bs_footer.php');
?>