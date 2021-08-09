<?php
include_once "header.php"; ?>

<section class="contact-area pt-110 pb-120 bg_cover" id="uzvluk_form">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="section-title section-title-white mb-75 text-center mt-100">
          <!-- <span class="span">Üzvlük</span> -->
          <h2 style="color: black">Layihə Təklifi üçün Müraciət</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="contact-form">
          <form action="inc/add.php" method="POST" enctype="multipart/form-data">
            <input type="hidden" name="type" value="2">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="form_group">
                  <input type="text" class="form_control" placeholder="Adınız və Soyadınız" name="fullname" required />
                </div>
              </div>
              <div class="col-lg-8">
                <div class="form_group">
                  <input type="text" class="form_control" placeholder="Telefon" name="phone" required />
                </div>
              </div>
              <div class="col-lg-8">
                <div class="form_group">
                  <input type="email" class="form_control" placeholder="E-mail" name="email" required />
                </div>
              </div>
              <div class="col-lg-8">
                <div class="form_group">
                  <textarea type="text" class="form_control" placeholder="Təklifiniz" name="content" required></textarea>
                </div>
              </div>

              <div class="col-lg-12">
                <div class="form_group text-center">
                  <button type="submit" class="main-btn">Göndər</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<?php
include_once "footer.php"; ?>