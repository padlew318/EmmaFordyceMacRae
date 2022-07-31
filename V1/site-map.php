<?php
    $description = 'site content map to allow you to find all the content on Emma Fordyce MacRae website';
    $keywords = 'Emma Fordyce MacRae, site content';
    $title = 'Site content | Emma Fordyce MacRae';
    require ('_includes/bs_header.php');
    require ('_includes/bs_nav.php');
  ?>
<div class="container">
    
    <div class="row">
        
        <div class="col-lg-12">
            <h1>Site content</h1>
        </div>
     </div>
     
     <hr>
      
    <div class="row">
        <div class="col-lg-4">     
            <h2>Main</h2>
            <ul>
                    <li><a href="<?php echo $base_url; ?>index.php">Home Page</a>
                        <ul>
                            <li><a href="<?php echo $base_url; ?>landscapes/oil_paintings_of_landscapes.php">Oil paintings of Landscapes</a>
                                <ul>
                                    <li><a href="<?php echo $base_url; ?>landscapes/venice.php">Venice</a></li>
                                    <li><a href="<?php echo $base_url; ?>landscapes/central_park_in_april.php">Central Park in April</a></li>
                                    <li><a href="<?php echo $base_url; ?>landscapes/europe.php">Europe</a></li>
                                    <li><a href="<?php echo $base_url; ?>landscapes/victory_girls.php">Victory Girls</a></li>
                                </ul>
                            </li>
                            <li><a href="<?php echo $base_url; ?>flowers/oil_paintings_of_flowers.php">Oil paintings of Flowers</a>
                                <ul>
                                    <li><a href="<?php echo $base_url; ?>flowers/amaryllis.php">Amaryllis</a></li>
                                    <li><a href="<?php echo $base_url; ?>flowers/daffodils_in_white_bowl.php">Daffodils in White Bowl</a></li>
                                    <li><a href="<?php echo $base_url; ?>flowers/bird_of_paradise.php">Birds of Paradise</a></li>
                                </ul>
                            </li>
                            <li><a href="<?php echo $base_url; ?>figures/oil_paintings_of_figures.php">Oil paintings of Figures</a>
                                <ul>
                                    <li><a href="<?php echo $base_url; ?>figures/elizabeth.php">Elizabeth</a></li>
                                    <li><a href="<?php echo $base_url; ?>figures/sonya.php">Sonya</a></li>
                                    <li><a href="<?php echo $base_url; ?>figures/leonore.php">Leonore</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="<?php echo $base_url; ?>about_the_artist.php">About the Artist</a></li>
                    <li><a href="<?php echo $base_url; ?>contact_us.php">Contact Us</a></li>
                    <li><a href="<?php echo $base_url; ?>useful-links.php">Useful Links</a></li>
                    <li><a href="<?php echo $base_url; ?>help.php">Help</a></li>
                 </ul>
          </div>
             
             <div class="col-lg-4">     
            <h2>Tour</h2>
            <ul>
                    <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/index.php">Cape Ann Landscapes Tour</a>
                        <ul>
                            <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/august_in_new_england.php">August In New England</a></li>
                            <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/hodgkins_cove.php">Hodgkins Cove</a></li>
                            <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/new_england_beach.php">New England Beach</a></li>
                            <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/fishermen_at_pigeon_cove.php">Fishermen at Pigeon Cove</a></li>
                            <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/pigeon_cove.php">Pigeon Cove</a></li>
                            <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/rockport_beach.php">Rockport Beach</a></li>
                            <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/white_boat.php">White Boat</a></li>
                            <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/main_street.php">Main Street, Gloucester MA</a></li>
                            <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/halfmoon_beach.php">Halfmoon Beach</a></li>
                            <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/stage_fort_park.php">Stage Fort Park</a></li>
                            <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/gloucester_garden.php">Gloucester Garden</a></li>
                            <li><a href="<?php echo $base_url; ?>cape_ann_landscape_tour/cape_ann_museum.php">Cape Ann Museum</a></li>
                        </ul>
                    </li>
                 </ul>
          </div>
             
        <div class="col-lg-4">
                 <h2>Pdf files</h2>
                 <ul>
                     <li><a href="http://www.emmafordycemacrae.com/docs/Emma_Fordyce_MacRae_Cat.pdf">Cape Ann Museum Catalogue</a></li>
                     <li><a href="http://www.emmafordycemacrae.com/docs/MacRaeYorkScCat.pdf">Richard York Gallery Catalogue</a></li>
                     <li><a href="http://www.emmafordycemacrae.com/docs/Cape_Ann_Landscapes_Tour.pdf">Cape Ann Landscapes Tour Leaflet</a></li>
                </ul>
                
        </div>
       
    </div>
     <hr>
   
   
</div> <!-- /container -->

<!-- FOOTER -->
<?php
require ('_includes/bs_footer.php');
?>