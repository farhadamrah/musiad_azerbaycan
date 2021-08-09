<?php
include_once "header.php";?>

<section class="contact-area pt-110 pb-120 bg_cover" id="elaqe">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="section-title section-title-white mb-75 text-center mt-100">
          <h2 style="color: black">Bizimlə Əlaqə</h2>
        </div>
      </div>
    </div>
    <div class="contact-form__container row">
        <div class="contact-form">
          <form action="inc/add.php" method="POST" enctype="multipart/form-data">
            <input type="hidden" name="type" value="2">
            <div class="row justify-content-center">
                <div class="form_group">
                  <input type="text" class="form_control" placeholder="Adınız və Soyadınız" name="fullname" required />
               </div>
                <div class="form_group">
                  <input type="text" class="form_control" placeholder="Telefon" name="phone" required />
               </div>
                <div class="form_group">
                  <input type="email" class="form_control" placeholder="E-mail" name="email" required />
               </div>
                <div class="form_group">
                  <textarea type="text" class="form_control" placeholder="Müraciətiniz" name="content" required></textarea>
               </div>

               <div class="col-lg-12">
                <div class="form_group text-center">
                  <button type="submit" class="main-btn">Göndər</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        
        <div class="contact-form__info">
            <p>
                <i class="fa fa-envelope"></i><a href="mailto:info@musiad.az">
                    <span>info@musiad.az</span>
                </a>
            </p>
            <p>
                <i class="fa fa-phone"></i><a href="tel:+994124400690">
                    <span>+994 12 440 06 90</span>
                </a>
            </p>
            <p>
              <i class="fa fa-map-marker-alt"></i>
             <span>Abbasqulu Ağa Bakıxanov 48C Nəsimi Bakı/Azərbaycan AZ1007</span> 
            </p>
            
                <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6098.655349271663!2d49.84269631471621!3d40.39161675213394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9bbc2fa36151b2e3!2zTcO8c2lhZCBCYWvEsQ!5e0!3m2!1sen!2s!4v1626950163905!5m2!1sen!2s" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
        </div>
    </div>
  </div>
</section>


<?php
include_once "footer.php";?>