<?php
    $description = 'Contact form to make it easy if you wish to contact us';
    $keywords = 'Contact Us, contact form, contact Emma Fordyce MacRae';
    $title = 'Contact us | Emma Fordyce MacRae 20th Century American Artist';
    require ('../_includes/bs_header.php');
    require ('../_includes/bs_nav.php');
    
    if (isset($_GET['msg'])){
        $msg = $_GET['msg'] ;
    }else{
        $msg = "";
    }
    
  ?>
<div class="container">
    <div class="row">
        <div class="pagetitle col-lg-12">
            <h1>Contact us</h1>
            <h2>Emma Fordyce MacRae 20th Century American Artist</h2>
        </div>
    </div>
            
    <hr />
            
    <div class="row">
         <div class="col-lg-12">
                <p>
                For information and where to view or buy Emma Fordyce MacRae oil paintings please email by completing and submitting the form below:
              </p>
             
               <?php 
       if ($msg == '1'){
        echo'<div class="alert alert-danger">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong>Danger!</strong> This request failed spam alert, please ensure the email is correct.
        </div>';
       }
       if ($msg == '2'){
        echo'<div class="alert alert-success">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong>Success!</strong> Form sent.
        </div>';
       }
       if ($msg == '3'){
        echo'<div class="alert alert-warning">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong>Warning!</strong> No email filled out.
        </div>';
       }
    ?>
     </div>
            <form role="form" action="mailform.php" method="post">
                    <div class="form-group col-md-12">
                        <label for="name">Name:</label>
                        <input type="input" class="form-control" name="name" id="name" required>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" name="email" id="email" required>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="message">Message:</label>
                        <textarea class="form-control" rows="9" name="message" id="message" required></textarea>
                    </div>
                    <div class="form-group col-md-12">
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <input type='button' class='btn btn-info' value='Return to previous page' onclick='history.go(-1)'>
                    </div>
                </form>
		</div>
    
    <hr />
   
</div> <!-- /container -->

<!-- FOOTER -->
<?php
require ('../_includes/bs_footer.php');
?>