function klikButton() {
    let button;

    if (confirm("Silahkan Klik Button")) {
        button = "Anda Berhasil Klik Button";
    } else {
        button = "Anda Tidak Klik Button";
    }
    document.getElementById("hasilKlik").innerHTML = button;
}