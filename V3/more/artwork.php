<?php
    $description = 'Emma Fordyce MacRae 20th Century American Artist painter of original oil paintings, subjects painted include boats, flowers,figures and landscapes.';
    $keywords = 'Emma Fordyce MacRae, Emma Fordyce MacRae 20th Century American Artist, american artist, boat oil painting, flower oil painting, figure oil painting';
    $title = 'Emma Fordyce MacRae 20th Century American Artist';
    require ('../_includes/bs_header.php');
    require ('../_includes/bs_nav.php');
  ?>
<div class="container">
    
    <div class="row">
        
        <div class="pagetitle col-lg-12">
            <h1>Emma Fordyce MacRae N.A.</h1>
            <h2>20th Century American Artist</h2>
        </div>
        
    </div>
    
    <hr>
    
    <div class="row">
        <div class="col-lg-12">
        <p>Original oil paintings of landscapes, floral still lives and figurative compositions of the female 20th century artist Emma Fordyce MacRae as well as a tour of Cape Ann landscapes as she painted them.   She painted in New England, New York and Europe.</p>

  </div>
        
    </div>
    
    <hr>
    
    <div class="row">
  
  
        <div class="col-lg-3">
            <h3><a href="<?php echo $base_url; ?>landscapes/oil_paintings_of_landscapes.php">Oil paintings of Landscapes</a></h3>
            
            <a href="<?php echo $base_url; ?>landscapes/oil_paintings_of_landscapes.php">
            <img src="../_images/Hodgkins_Cove.jpg" class="img-responsive img-thumbnail"></a>
            <p>Landscape oil paintings of boats and beaches and docks and harbors.</p>
        </div>
        
        
        
        <div class="col-lg-3">
    <h3><a href="<?php echo $base_url; ?>figures/oil_paintings_of_figures.php">Oil Paintings of Figures</a></h3>
  
  <a href="<?php echo $base_url; ?>figures/oil_paintings_of_figures.php">
      <img src="../_images/Woman_Alone.jpg" class="img-responsive img-thumbnail"></a>
      <p>Decorative oil paintings of figures with backgrounds from different cultures and periods.</p>
        </div>
        
        <div class="col-lg-3">
    <h3><a href="<?php echo $base_url; ?>flowers/oil_paintings_of_flowers.php">Oil Paintings of Flowers</a></h3>
  
  <a href="<?php echo $base_url; ?>flowers/oil_paintings_of_flowers.php">
      <img src="../_images/Tulips_Hopi_Pot.jpg" class="img-responsive img-thumbnail"></a>
      <p>Oil paintings of flowers such as lilies and tulips and dogwood and daisies and iris.</p>
        </div>

        <div class="col-lg-3">
    <h3><a href="<?php echo $base_url; ?>boats/oil_paintings_of_boats.php">Oil Paintings of Boats</a></h3>
  
  <a href="<?php echo $base_url; ?>boats/oil_paintings_of_boats.php">
      <img src="../_images/whiteboat.jpg" class="img-responsive img-thumbnail"></a>
      <p>Oil paintings of boats.</p>
        </div>
             
    </div> 
    <hr>
   
</div> <!-- /container -->
<!-- FOOTER -->
<?php
require ('../_includes/bs_footer.php');
?>