/*=========================================
        TRAVELGO V2.0
        MAIN JAVASCRIPT
=========================================*/

// ==========================
// STICKY HEADER
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// ==========================
// BACK TO TOP BUTTON
// ==========================

const backTop = document.createElement("button");

backTop.className = "back-top";

backTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(backTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================
// FADE UP ANIMATION
// ==========================

const fadeItems = document.querySelectorAll(
    ".service-card, .destination-card, .tour-card, .hotel-card, .feature-box, .testimonial-card, .blog-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");

            setTimeout(() => {

                entry.target.classList.add("show");

            }, 100);

        }

    });

}, {

    threshold: 0.15

});

fadeItems.forEach(item => {

    observer.observe(item);

});

// ==========================
// ACTIVE MENU
// ==========================

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage || (currentPage === "" && href === "index.html")) {

        link.classList.add("active");

    }

});

// ==========================
// NEWSLETTER VALIDATION
// ==========================

const newsletter = document.querySelector(".newsletter-form");

if (newsletter) {

    newsletter.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = this.querySelector("input").value.trim();

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(email)) {

            alert("Vui lòng nhập email hợp lệ.");

            return;

        }

        alert("🎉 Cảm ơn bạn đã đăng ký nhận ưu đãi từ Travelgo!");

        this.reset();

    });

}

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ==========================
// IMAGE HOVER EFFECT
// ==========================

document.querySelectorAll(".tour-card img, .hotel-card img, .destination-card img").forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transition = ".4s";

    });

});

// ==========================
// CONSOLE MESSAGE
// ==========================

console.log("%cTravelgo v2.0 Loaded Successfully 🚀", "color:#0D6EFD;font-size:18px;font-weight:bold;");
