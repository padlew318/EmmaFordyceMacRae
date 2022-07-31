<?php
include('../_includes/var.php');
?>
<style>
#loadImg{position:absolute;z-index:999;}
#loadImg div{display:table-cell;width:200px;height:200px;background:#fff;text-align:center;vertical-align:middle;}
</style>

<div id="loadImg"><div><img src="<?php echo $base_url; ?>_images/loading.gif" /></div></div>
<iframe border=0 name=iframe src="Emma_Fordyce_MacRae_Cat.pdf" width="100%" height="100%" onload="document.getElementById('loadImg').style.display='none';"></iframe>