<<<<<<< HEAD
// ================ Filter ================
const filterTabs = document.querySelectorAll(".filter-btn");
const filterContents = document.querySelectorAll(".filter [data-content]");

filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        filterTabs.forEach((t) => {
            t.classList.remove("active");
        });

        tab.classList.add("active");

        const target = document.querySelector(tab.dataset.target);

        filterContents.forEach((content) => {
            content.classList.remove("active");
        });

        if (target) {
            target.classList.add("active");
            console.log("✅ Target added:", target.id);
        } else {
            console.log("❌ Target not found:", tab.dataset.target);
        }
    });
});

// ================ Theme ================
const theme_btn = document.getElementById("theme-btn");

theme_btn.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme");

    theme_btn.classList.toggle("ri-moon-line");
    theme_btn.classList.toggle("ri-sun-line");
});

// ================ Certificate Modal Functions ================
function openCertificate(imageUrl) {
    console.log("📄 Opening certificate:", imageUrl);
    
    const modal = document.getElementById("certificate-modal");
    const image = document.getElementById("certificate-image");
    
    if (modal && image) {
        image.src = imageUrl;
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
        console.log("✅ Modal opened");
    } else {
        console.log("❌ Modal elements not found");
    }
}

function closeCertificate() {
    console.log("🔒 Closing certificate");
    
    const modal = document.getElementById("certificate-modal");
    const image = document.getElementById("certificate-image");
    
    if (modal && image) {
        modal.classList.remove("show");
        image.src = "";
        document.body.style.overflow = "auto";
        console.log("✅ Modal closed");
    }
}

// Close modal when clicking outside content
=======
// ================ Filter ================
const filterTabs = document.querySelectorAll(".filter-btn");
const filterContents = document.querySelectorAll(".filter [data-content]");

filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        filterTabs.forEach((t) => {
            t.classList.remove("active");
        });

        tab.classList.add("active");

        const target = document.querySelector(tab.dataset.target);

        filterContents.forEach((content) => {
            content.classList.remove("active");
        });

        if (target) {
            target.classList.add("active");
            console.log("✅ Target added:", target.id);
        } else {
            console.log("❌ Target not found:", tab.dataset.target);
        }
    });
});

// ================ Theme ================
const theme_btn = document.getElementById("theme-btn");

theme_btn.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme");

    theme_btn.classList.toggle("ri-moon-line");
    theme_btn.classList.toggle("ri-sun-line");
});

// ================ Certificate Modal Functions ================
function openCertificate(imageUrl) {
    console.log("📄 Opening certificate:", imageUrl);
    
    const modal = document.getElementById("certificate-modal");
    const image = document.getElementById("certificate-image");
    
    if (modal && image) {
        image.src = imageUrl;
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
        console.log("✅ Modal opened");
    } else {
        console.log("❌ Modal elements not found");
    }
}

function closeCertificate() {
    console.log("🔒 Closing certificate");
    
    const modal = document.getElementById("certificate-modal");
    const image = document.getElementById("certificate-image");
    
    if (modal && image) {
        modal.classList.remove("show");
        image.src = "";
        document.body.style.overflow = "auto";
        console.log("✅ Modal closed");
    }
}

// Close modal when clicking outside content
>>>>>>> c4b3a458d39f91aa34ca65aba7de9d63475d0011
document.getElementById