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
            <h1>Exhibitions</h1>
            <h2>Emma Fordyce MacRae 20th Century American Artist</h2>
        </div>
     </div>
     
     <hr>
      
    <div class="row">
        <div class="col-lg-3 col-md-6">     
            <h2>Exhibitions</h2>
                <ul>
                    <li><a href="<?php echo $base_url; ?>exhibitions/exhibitions.php">Exhibitions</a></li>
                </ul>
          </div>

        <div class="col-lg-3 col-md-6">     
            
            <h2>Auctions</h2>
            <ul>  
                <li><a href="<?php echo $base_url; ?>exhibitions/auctions/efm/index.html">EFM</a></li>
                <li><a href="<?php echo $base_url; ?>exhibitions/auctions/efm2/index.html">EFM 2</a></li>
                <li><a href="<?php echo $base_url; ?>exhibitions/auctions/efm3/index.html">EFM 3</a></li>
                <li><a href="<?php echo $base_url; ?>exhibitions/auctions/efm4/index.html">EFM 4</a></li>
                <li><a href="<?php echo $base_url; ?>exhibitions/auctions/efm5/MacRae.EFM5.Beach.434.MorganHand.FINAL.pdf">EFM 5</a></li>
				<li><a href="<?php echo $base_url; ?>exhibitions/auctions/efm7/EMF7-V1.0.pdf">EFM 7</a></li>
            </ul>
          </div>
    </div>
     <hr>
</div> <!-- /container -->

<!-- FOOTER -->
<?php
require ('../_includes/bs_footer.php');
?>