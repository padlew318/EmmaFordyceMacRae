<?php
    $description = 'Emma Fordyce MacRae 20th Century American Artist painter of original oil paintings, subjects painted include boats, flowers,figures and landscapes.';
    $keywords = 'Emma Fordyce MacRae, american artist, boat oil painting, flower oil painting, figure oil painting';
    $title = 'Oil paintings of figures | Emma Fordyce MacRae 20th Century American Artist';
    require ('../_includes/bs_header.php');
    require ('../_includes/bs_nav.php');
  ?>
<div class="container">
    
    <div class="row">
        <div class="pagetitle col-lg-12">
            <h1>Oil paintings of figures</h1>
            <h2>Emma Fordyce MacRae 20th Century American Artist</h2>
        </div>
    </div>
            
    <hr />
    
    <div class="row">
        <div class="col-lg-12">
            <a href="<?php echo $base_url; ?>figures/beatrice.html">
            <img src="<?php echo $base_url; ?>_images/cape_ann_landscapes_thumb.jpg" class="left img-responsive img-thumbnail"></a>
            <h3><a href="<?php echo $base_url; ?>figures/beatrice.html">Beatrice</a></h3>
            <p> Emma Fordyce MacRae is known for her original oil paintings of landscapes, boats, flowers, reflections in the water and docks. She painted in New England, New York and Europe. The Cape Ann Landscapes Tour includes paintings of Cape Ann, MA. </p>
         </div>
     </div>
            
    <hr />
   
</div> <!-- /container -->

<!-- FOOTER -->
<?php
require ('../_includes/bs_footer.php');
?>
