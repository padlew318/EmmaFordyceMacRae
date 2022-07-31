<?php
    $description = 'site content map to allow you to find all the content on Emma Fordyce MacRae website';
    $keywords = 'Emma Fordyce MacRae, site content';
    $title = 'Site content | Emma Fordyce MacRae';
    require ('../_includes/bs_header.php');
    require ('../_includes/bs_nav.php');
  ?>
<div class="container">
    
    <div class="row">
        <div class="pagetitle col-lg-12">
            <h1>Site content</h1>
            <h2>Emma Fordyce MacRae 20th Century American Artist</h2>
        </div>
     </div>
     
     <hr>
      
    <div class="row">
        <div class="col-lg-3 col-md-6">     
            <h2>Main menu</h2>
            <ul>
                    <li><a href="<?php echo $base_url; ?>index.php">Home Page</a></li>
                    <li><a href="<?php echo $base_url; ?>more/about_the_artist.php">About the Artist</a></li>
                    <li><a href="<?php echo $base_url; ?>contact/contact_us.php">Contact Us</a></li>
                    <li><a href="<?php echo $base_url; ?>more/useful-links.php">Useful Links</a></li>
                    <li><a href="<?php echo $base_url; ?>more/help.php">Help</a></li>
                    <li><a href="<?php echo $base_url; ?>more/cookies.php">Cookies</a></li>
                 </ul>

            <h2>Other areas</h2>
            <ul>  
                <li><a href="<?php echo $base_url; ?>exhibitions/exhibitions-map.php">Exhibitions</a></li>
            </ul>
          </div>
        <div class="col-lg-3 col-md-6">     
            <h2>Artwork</h2>
                        <ul>
                            <li><a href="<?php echo $base_url; ?>artwork/landscapes/oil_paintings_of_landscapes.php">Oil paintings of Landscapes</a>
                                <ul>
                                    <li><a href="<?php echo $base_url; ?>artwork/landscapes/venice.php">Venice</a></li>
                                    <li><a href="<?php echo $base_url; ?>artwork/landscapes/central_park_in_april.php">Central Park in April</a></li>
                                    <li><a href="<?php echo $base_url; ?>artwork/landscapes/europe.php">Europe</a></li>
                                    <li><a href="<?php echo $base_url; ?>artwork/landscapes/victory_girls.php">Victory Girls</a></li>
                                </ul>
                            </li>
                            <li><a href="<?php echo $base_url; ?>artwork/flowers/oil_paintings_of_flowers.php">Oil paintings of Flowers</a>
                                <ul>
                                    <li><a href="<?php echo $base_url; ?>artwork/flowers/amaryllis.php">Amaryllis</a></li>
                                    <li><a href="<?php echo $base_url; ?>artwork/flowers/daffodils_in_white_bowl.php">Daffodils in White Bowl</a></li>
                                    <li><a href="<?php echo $base_url; ?>artwork/flowers/bird_of_paradise.php">Birds of Paradise</a></li>
                                </ul>
                            </li>
                            <li><a href="<?php echo $base_url; ?>artwork/figures/oil_paintings_of_figures.php">Oil paintings of Figures</a>
                                <ul>
                                    <li><a href="<?php echo $base_url; ?>artwork/figures/elizabeth.php">Elizabeth</a></li>
                                    <li><a href="<?php echo $base_url; ?>artwork/figures/sonya.php">Sonya</a></li>
                                    <li><a href="<?php echo $base_url; ?>artwork/figures/leonore.php">Leonore</a></li>
                                </ul>
                            </li>
                        </ul>
          </div>
             
             <div class="col-lg-3 col-md-6">     
            <h2>Tour</h2>
            <ul>
                    <li><a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/index.php">Cape Ann Landscapes Tour</a>
                        <ul>
                            <li><a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/august_in_new_england.php">August In New England</a></li>
                            <li><a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/hodgkins_cove.php">Hodgkins Cove</a></li>
                            <li><a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/new_england_beach.php">New England Beach</a></li>
                            <li><a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/fishermen_at_pigeon_cove.php">Fishermen at Pigeon Cove</a></li>
                            <li><a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/pigeon_cove.php">Pigeon Cove</a></li>
                            <li><a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/rockport_beach.php">Rockport Beach</a></li>
                            <li><a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/white_boat.php">White Boat</a></li>
                            <li><a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/main_street.php">Main Street, Gloucester MA</a></li>
                            <li><a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/halfmoon_beach.php">Halfmoon Beach</a></li>
                            <li><a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/stage_fort_park.php">Stage Fort Park</a></li>
                            <li><a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/gloucester_garden.php">Gloucester Garden</a></li>
                            <li><a href="<?php echo $base_url; ?>artwork/cape_ann_landscape_tour/cape_ann_museum.php">Cape Ann Museum</a></li>
                        </ul>
                    </li>
                 </ul>
          </div>
             
        <div class="col-lg-3 col-md-6">
                 <h2>Pdf files</h2>
                 <ul>
                     <li><a href="<?php echo $base_url; ?>_pdf/Emma_Fordyce_MacRae_Cat.pdf">Cape Ann Museum Catalogue</a></li>
                     <li><a href="<?php echo $base_url; ?>_pdf/MacRaeYorkScCat.pdf">Richard York Gallery Catalogue</a></li>
                     <li><a href="<?php echo $base_url; ?>_pdf/Cape_Ann_Landscapes_Tour.pdf">Cape Ann Landscapes Tour Leaflet</a></li>
                </ul>
                
        </div>
       
    </div>
     <hr>
   
   
</div> <!-- /container -->

<!-- FOOTER -->
<?php
require ('../_includes/bs_footer.php');
?>