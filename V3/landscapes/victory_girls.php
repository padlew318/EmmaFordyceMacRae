<?php
    $description = 'Emma Fordyce MacRae 20th Century American Artist painter of original oil paintings, subjects painted include boats, flowers,figures and landscapes.';
    $keywords = 'Emma Fordyce MacRae, american artist, boat oil painting, flower oil painting, figure oil painting';
    $title = 'Victory Girls | Emma Fordyce MacRae 20th Century American Artist';
    require ('../_includes/bs_header.php');
    require ('../_includes/bs_nav.php');
  ?>

<div class="container">
    
    <div class="row"> 
        <div class="pagetitle col-lg-12">
            <h1>Victory Girls</h1>
            <h2>Emma Fordyce MacRae 20th Century American Artist</h2>
            <hr />
        </div>
    </div>
            
    <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-8">
            <a href="<?php echo $base_url; ?>_images/victory_girls.jpg" alt="Victory Girls" data-lightbox="Victory Girls" data-caption="Victory Girls"> 
            <img src="<?php echo $base_url; ?>_images/victory_girls.jpg" alt="Victory Girls" data-lightbox="Victory Girls" data-caption="Victory Girls" class="img-responsive img-thumbnail"></a>
        </div> 
    </div>
            
    <div class="row">
        <div class="col-lg-12">  
            <hr />										
            <p>Victory Girls<br>Oil Painting<br>New York Landscape<br>Emma Fordyce MacRae 1887 - 1974</p>	
        </div>  
    </div>
    
    <hr />
   
</div> <!-- /container -->

<!-- FOOTER -->
<?php
require ('../_includes/bs_footer.php');
?>