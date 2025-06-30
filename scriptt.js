document.addEventListener("DOMContentLoaded", function () {
  // Navigasi scroll ke bagian halaman
  document.getElementById("btn-home").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("btn-produk").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("produk").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("btn-keranjang").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("keranjang").scrollIntoView({ behavior: "smooth" });
  });

  // Tombol "Add to bag"
  const buttons = document.querySelectorAll(".produk-item button");
  const keranjangList = document.getElementById("keranjang-list");

  let keranjang = [];

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const produkItem = button.parentElement;
      const namaProduk = produkItem.querySelector("h3").innerText;
      const hargaProduk = produkItem.querySelector("p").innerText;

      const produk = {
        nama: namaProduk,
        harga: hargaProduk,
      };

      keranjang.push(produk);
      tampilkanKeranjang();
    });
  });

  function tampilkanKeranjang() {
    if (keranjang.length === 0) {
      keranjangList.innerHTML = "<p>Belum ada produk dipilih.</p>";
    } else {
      keranjangList.innerHTML =
        "<ul>" +
        keranjang
          .map((item) => <li>${item.nama} - ${item.harga}</li>)
          .join("") +
        "</ul>";
    }
  }
});
