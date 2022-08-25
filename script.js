function validasi() {
  var nama = document.getElementById("nama").value;
  var nim = document.getElementById("nim").value;
  var born = document.getElementById("born").value;
  var lk = document.getElementById("lk").value;
  var pr = document.getElementById("pr").value;
  var address = document.getElementById("address").value;

  if (nama == "" || nim == "" || born == "" || (lk == false && pr == false) || address == "") {
    alert("Isi semua dulu woy!");
  } else {
    alert("selamat sudah diisi semua");
  }
}
