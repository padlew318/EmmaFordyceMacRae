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
            <a href="<?php echo $base_url; ?>figures/beatrice.php">
            <img src="<?php echo $base_url; ?>_images/beatrice_thumb.jpg" class="left img-responsive img-thumbnail"></a>
            <h3><a href="<?php echo $base_url; ?>figures/beatrice.php">Beatrice</a></h3>
        </div>
     </div>
            
    <hr />

    <div class="row">
        <div class="col-lg-12">
            <a href="<?php echo $base_url; ?>figures/before_the_song.php">
            <img src="<?php echo $base_url; ?>_images/before_the_song_thumb.jpg" class="left img-responsive img-thumbnail"></a>
            <h3><a href="<?php echo $base_url; ?>figures/before_the_song.php">Before the Song</a></h3>
        </div>
     </div>
            
    <hr />
   
</div> <!-- /container -->

<!-- FOOTER -->
<?php
require ('../_includes/bs_footer.php');
?>
