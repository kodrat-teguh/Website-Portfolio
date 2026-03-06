// ================ Filter ================
const filterTabs = document.querySelectorAll(".filter-btn");
const filterContents = document.querySelectorAll(".filter [data-content]");

filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // Hapus class active dari semua tab
        filterTabs.forEach((t) => {
            t.classList.remove("active");
        });

        // Tambah class active ke tab yang diklik
        tab.classList.add("active");

        // Dapatkan target section
        const target = document.querySelector(tab.dataset.target);

        // Hapus class active dari semua content
        filterContents.forEach((content) => {
            content.classList.remove("active");
        });

        // Tambah class active ke target
        if (target) {
            target.classList.add("active");
        }
    });
});

// ================ Theme Toggle ================
const theme_btn = document.getElementById("theme-btn");

theme_btn.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme");

    // Toggle icon bulan/matahari
    theme_btn.classList.toggle("ri-moon-line");
    theme_btn.classList.toggle("ri-sun-line");
});

// ================ Certificate Modal Functions ================
function openCertificate(imageUrl) {
    const modal = document.getElementById("certificate-modal");
    const image = document.getElementById("certificate-image");
    
    if (modal && image) {
        image.src = imageUrl;
        modal.classList.add("show");
        document.body.style.overflow = "hidden"; // Matikan scroll saat modal terbuka
    }
}

function closeCertificate() {
    const modal = document.getElementById("certificate-modal");
    const image = document.getElementById("certificate-image");
    
    if (modal && image) {
        modal.classList.remove("show");
        image.src = "";
        document.body.style.overflow = "auto"; // Hidupkan scroll lagi
    }
}