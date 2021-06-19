<?php
include_once "header.php"; ?>


<section class="case-study uzvler pt-200 pb-80 pl-25 pr-25">
  <h1 class="text-center mb-30 uzv-title">Üzvlər</h1>

  <div class="table-container">
    <table id="myTable" class="
            table table-striped table-responsive table-bordered table-hover
          ">
      <select id="filterTextTerm" class="sector-select col-4" onchange="filterTextTerm()">
        <option disabled selected>Sektor</option>
        <option value="Hamısı">Hamısı</option>
        <option value="Tikinti">Tikinti</option>
        <option value="Mebel">Mebel</option>
        <option value="Səhiyyə">Səhiyyə</option>
        <option value="Qida">Qida</option>
        <option value="Reklam və Mətbəə">Reklam və Mətbəə</option>
        <option value="Geyim">Geyim</option>
        <option value="Logistika">Logistika</option>
        <option value="Kimya">Kimya</option>
        <option value="IT">IT</option>
        <option value="Avtomobil Təmiri">Avtomobil təmiri</option>
        <option value="İstehsalat">İstehsalat</option>
        <option value="Xidmət">Xidmət</option>
        <option value="Mühasibatlıq və Audit">Mühasibatlıq və Audit</option>
        <option value="Aqro">Aqro</option>
        <option value="Tekstil">Tekstil</option>
        <option value="Konsaltinq">Konsaltinq</option>
        <option value="Avtomatika">Avtomatika</option>
        <option value="Tədris">Tədris</option>
        <option value="Turizm">Turizm</option>
      </select>

      <thead>
        <tr>
          <th>№</th>
          <th>Logo</th>
          <th class="col-4">Şirkət adı</th>
          <th class="col-4">Sektor</th>
        </tr>
      </thead>

      <tbody>
        <?php $sql = mysqli_query($db, "SELECT * FROM members");
        while ($row = mysqli_fetch_array($sql)) {
          echo ' <tr class="tr" style="cursor: pointer" href="uzv.php?id=' . $row['id'] . '">
              <td>' . $row['id'] . '</td>
              <td><img src="assets/img/MUSIAD-Aze/uzvler/' . $row['img'] . '" alt="" />  </td>
              <td>' . $row['company'] . '</td>
              <td class="term">' . $row['sector'] . '</td>
            </tr>';
        }
        ?>
      </tbody>
    </table>
  </div>
</section>
<script>
  $(document).ready(function() {
    $('table tr').click(function() {
      window.location = $(this).attr('href');
      return false;
    });
  });
</script>
<?php include_once "footer.php";  ?>