<?php
    $description = 'Emma Fordyce MacRae 20th Century American Artist painter of original oil paintings, subjects painted include boats, flowers,figures and landscapes.';
    $keywords = 'Emma Fordyce MacRae, american artist, boat oil painting, flower oil painting, figure oil painting';
    $title = 'The Lily | Emma Fordyce MacRae 20th Century American Artist';
    require ('../_includes/bs_header.php');
    require ('../_includes/bs_nav.php');
  ?>
<div class="container">
    
    <div class="row">
        
        <div class="pagetitle col-lg-12">
            <h1>The Lily</h1>
            <h2>Emma Fordyce MacRae 20th Century American Artist</h2>
            <hr />
              </div>
        
    </div>
            <div class="row">
        
        <div class="col-lg-4 col-md-3 col-sm-2">
                <a href="<?php echo $base_url; ?>_images/the_lily.jpg" alt="The Lily" data-lightbox="The Lily" data-caption="The Lily"> 
                <img src="<?php echo $base_url; ?>_images/the_lily.jpg" alt="The Lily" data-lightbox="The Lily" class="img-responsive img-thumbnail"></a>
        </div>
        
    </div>
            
            <div class="row">
         <div class="col-lg-12">  
            <hr />
													
            <p>The Lily<br>
            Oil Painting<br>
            Size : 22 x 16 inches<br>
            Floral still life<br>
            Emma Fordyce MacRae 1887 - 1974</p>
				
        </div>
        
    </div>
    <hr />
   
</div> <!-- /container -->

<!-- FOOTER -->
<?php
require ('../_includes/bs_footer.php');
?>