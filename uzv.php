<?php include_once "header.php"; 
if(isset($_GET['id'])){
  $id=$_GET['id'];
  $get_member=mysqli_fetch_array(mysqli_query($db,"SELECT * FROM members WHERE id='$id'"));
}
?>

    <div class="tedbir-container pt-240 pb-80">
      <div class="tedbir-img">
        <img
          style="border: none"
          src="assets/img/MUSIAD-Aze/uzvler/<?= $get_member['img'] ?>"
          alt=""
        />
      </div>
      <div class="tedbir-article">
        <!-- <h1 class="mb-18">SET Medical MMC</h1> -->

        <table class="table table-borderless">
          <tbody>
            <tr>
              <td class="font-weight-bold w-25">Ad/Soyad:</td>
              <td><?= $get_member['fullname'] ?></td>
            </tr>
            <tr>
              <td class="font-weight-bold w-25">Şirkət adı:</td>
              <td><?= $get_member['company'] ?></td>
            </tr>
            <tr>
              <td class="font-weight-bold w-25">E-mail:</td>
              <td><?= $get_member['email'] ?></td>
            </tr>
            <tr>
              <td class="font-weight-bold w-25">Web adresi:</td>
              <td><?= $get_member['website'] ?></td>
            </tr>
            <tr>
              <td class="font-weight-bold w-25">Telefon:</td>
              <td><?= $get_member['phone'] ?></td>
            </tr>
            <tr>
              <td class="font-weight-bold w-25">Sektor:</td>
              <td><?= $get_member['sector'] ?></td>
            </tr>
            <tr>
              <td class="font-weight-bold w-25">Ünvan:</td>
              <td><?= $get_member['adress'] ?></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <?php include_once "footer.php"; ?>
   