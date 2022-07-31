<?php
    $description = 'Emma Fordyce MacRae painted a series of oil paintings of landscapes around Cape Ann and this picture captures her impressionistic reflections in the water.';
    $keywords = 'Emma Fordyce MacRae, oil painting, landscape, reflections in the water';
    $title = 'Central Park in April | Emma Fordyce MacRae 20th Century American Artist';
    require ('../_includes/bs_header.php');
?>

<?php
    require ('../_includes/bs_nav.php');
?>
<div class="container">
    
    <div class="row">
        <div class="pagetitle col-lg-12">
            <h1>August In New England</h1>
            <h2>Emma Fordyce MacRae - Cape Ann Landscapes</h2>
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
                        <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/august_in_new_england.php" type="button" class="btn btn-primary btn-circle">1</a>
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
            
    <div class="row" style="background:#5391AA; margin:5px; padding:5px;" >
         <div class="col-lg-4 col-md-5 col-sm-6">
               <img src="<?php echo $base_url; ?>_images/07_August_In_New_England_WM.17783611_std.jpg" alt="August In New England" class="img-thumbnail img-responsive">
                    
             </div>
         <div class="col-lg-8 col-md-7 col-sm-6" style="padding-top:10px;">
                  <div id="map" style="width: 100%; height: 400px; border:3px solid white"></div> 
                  <p style="color:white;text-align:center;">SatNav : 5 Hodgkins Street, Gloucester, MA</p>
         </div>
 </div>
 <hr>
 <div class="row">
         <div class="col-lg-12">
            <p>
                The oil painting of the landscape <em>August in New England</em> was chosen to be exhibited in Portrait of America Exhibition sponsored by Pepsi Cola in 1945 and is a wonderful example of Emma's later distinctive painting style
             and her method of manipulating color to create impressionistic reflections in the water. In this landscape <em>August in New England</em> you can see Emma's use of red showing through the different greens around the houses 
             on the opposite shore giving depth to the painting. The Church on Washington Street remains as do the rocky cliffs but much has changed.
            </p>
            <p>
                In Emma's time Cape Ann itself was accessed by route 127 from the west and it still makes its way around the Cape. Care has been taken with the directions. However, it is recommended that you check the directions possibly with the Cape Ann Chamber of Commerce map.
            </p>
            <p>
                When I first visited Gloucester, Massachusetts I had no idea where Emma had painted the landscapes I had photographs of. I stayed at Julietta House and told Susan of my difficulty. 
                Within hours Susan had abandoned her guests and was driving me around and up and down different streets to the edge of the sea and back again 
                and so on until we finally located where Emma placed her easel to paint the landscape you will see as you go around Cape Ann so many years ago.
            </p>
            <p>
                When you stop on Hodgkins Street you will be a few feet above the spot where Emma placed her easel and painted <em>August in New England.</em> This landscape is of Riverdale which Emma is known to have painted a few times.  
            </p>
   </div>
 </div>
 
 <div class="row" style="text-align:center;">
         <div class="col-lg-12">                  
                    <input type='button' class='btn btn-info' value='<<' onclick='history.go(-1)'>
         
                    <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/index.php" type="button" class="btn btn-primary">Cape Ann Landscapes Tour</a>
                    
                    <a href="<?php echo $base_url; ?>cape_ann_landscape_tour/hodgkins_cove.php" type="button" class="btn btn-info">>></a>
    </div>
    </div>
    
    <hr />

<script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCmAAGGzENG5rRyas42vy217yYRijYYbWU&callback=initMap&v=weekly" defer ></script>
<script type="text/javascript" src="<?php echo $base_url; ?>_js/august_in_new_england.js"></script>
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