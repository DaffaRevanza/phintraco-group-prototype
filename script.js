// menu
var tombolmenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
  tombolmenu.click(function () {
    menu.toggle();
  });
  menu.click(function () {
    menu.toggle();
  });
}
$(document).ready(function () {
  var width = $(window).width();
  if (width < 990) {
    klikMenu();
  }
});

// // chech lebar

$(Window).resize(function () {
  var width = $(Window).width();
  if (width > 989) {
    menu.css("display", "block");
  } else {
    menu.css("display", "none");
  }
  klikMenu();
});

// News

const newsArticles = [
  {
    title:
      "Kelvin Go Pimpin Pelatihan Pre-Sales & Sales: Sinergi dan Strategi untuk Kesuksesan Penjualan",
    image: (src = "asset/article1.jpg"),
    description:
      "Phintraco Group mengadakan pelatihan intensif bagi tim Pre-Sales dan Sales pada 30 September & 1 Oktober 2024 di Jakarta. Dipimpin langsung oleh President Director Phintraco Group – Kelvin Go, pelatihan ini bertujuan memperkuat kolaborasi antar kedua tim dalam mencapai target penjualan perusahaan. Dalam sesi pelatihan ini, peserta",
    link: "#",
  },
  {
    title:
      "MitraComm Ekasarana Buktikan Konsistensi: Juara Bertahan Contact Center World 2024 untuk Best Outsourcing Partnership",
    image: (src = "asset/article3.jpg"),
    description:
      "MitraComm Business Process Services (MBPS), unit bisnis dari MitraComm Ekasarana, kembali menorehkan prestasi gemilang di tingkat internasional. Dalam ajang Contact Center World (CCW) 2024, MBPS berhasil mempertahankan gelar prestisius Gold Winner untuk kategori Best Outsourcing Partnership in Asia Pacific. Prestasi yang luar",
    link: "#",
  },
  {
    title: "Antusiasme Seluruh Karyawan dalam Selebrasi HUT 33 Phintraco Group",
    image: (src = "asset/article4.jpg"),
    description:
      "Perayaan HUT ke-33 Phintraco Group tahun ini terasa istimewa dan berbeda. Mengusung tema “Serve With Heart”, acara ini tak hanya dimeriahkan dengan keceriaan dan kekompakan, tetapi juga dengan sentuhan kreatif melalui perlombaan menghias tumpeng.",
    link: "#",
  },
  {
    title:
      "Mendukung Pertumbuhan SDM Berkualitas, Phintraco Group Luncurkan Phintraco Bootcamp",
    image: (src = "asset/article5.webp"),
    description:
      "Phintraco Group, perusahaan terkemuka di Indonesia yang bergerak di bidang ICT Solutions & Services resmi meluncurkan program Phintraco Bootcamp (22 Februari 2024). Program pelatihan intensif ini dirancang untuk meningkatkan keterampilan team Sales, Presales dan Product. Materi ajar yang dibawakan dalam Phintraco Bootcamp ini tak hanya dari segi technical skill, namun juga dari segi soft skill.",
    link: "#",
  },
  {
    title: "Phintraco Group: Pendorong Inovasi AI dalam Layanan Contact Center",
    image: (src = "asset/article2.jpg"),
    description:
      "Phintraco Group kembali menunjukkan komitmennya dalam mendorong kemajuan teknologi di Indonesia, dengan berpartisipasi aktif dalam event The Best Contact Center Indonesia 2024 yang diselenggarakan oleh Indonesia Contact Center Association (ICCA). Dengan tema “Innovative Customer Service",
    link: "#",
  },
  {
    title:
      "MitraComm Ekasarana Buktikan Keunggulan di Bidang CX Dengan Raih Penghargaan NXT CX Summit & Awards 2024",
    image: (src = "asset/article6.webp"),
    description:
      "MitraComm Ekasarana, perusahaan penyedia solusi Business Process Outsourcing (BPO) terkemuka di Indonesia, meraih penghargaan bergengsi “Best Trusted and Excellence BPO Company” dalam ajang 9th NXT CX Summit & Awards 2024 yang diselenggarakan di Hotel Shangri-La Jakarta pada 21 Februari 2024.",
    link: "#",
  },
];

// Fungsi untuk memuat berita ke halaman
function loadNews() {
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = ""; // Mengosongkan kontainer berita

  // Menambahkan artikel ke dalam kontainer
  newsArticles.forEach((article) => {
    const newsItem = document.createElement("div");
    newsItem.classList.add("news-item");

    // Membuat HTML untuk berita
    newsItem.innerHTML = `
            <img src="${article.image}" alt="Thumbnail berita">
            <div class="news-content">
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <a href="${article.link}" class="read-more">Baca Selengkapnya</a>
            </div> 
        `;

    // Menambahkan berita ke kontainer
    newsContainer.appendChild(newsItem);
  });
}

// Memanggil fungsi untuk memuat berita saat halaman dimuat
window.onload = loadNews;
