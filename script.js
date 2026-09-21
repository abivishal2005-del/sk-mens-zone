// ==============================
// SIDE MENU
// ==============================

function openMenu() {
    document.getElementById("sideMenu").classList.add("active");
}

function closeMenu() {
    document.getElementById("sideMenu").classList.remove("active");
}


// ==============================
// WISHLIST
// ==============================

function addWishlist(button) {

    button.classList.toggle("active");

    if (button.classList.contains("active")) {
        button.innerHTML = "♥";
    } else {
        button.innerHTML = "♡";
    }
}


// ==============================
// SEARCH PRODUCTS
// ==============================

function searchProducts() {

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const products = document
        .querySelectorAll(".product-card");

    products.forEach(function(product) {

        const name = product
            .querySelector("h3")
            .innerText
            .toLowerCase();

        if (name.includes(input)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }

    });
}


// ==============================
// CATEGORY FILTER
// ==============================

function filterCategory(category) {

    const products = document
        .querySelectorAll(".product-card");

    products.forEach(function(product) {

        if (product.dataset.category === category) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }

    });

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ==============================
// WHATSAPP ORDER
// ==============================

// IMPORTANT:
// Replace this number with your shop WhatsApp number.
// Use country code without + or spaces.

const whatsappNumber = "917200048460";


function orderProduct(productName, price) {

    const message =
        "Hello SK Men's Zone,%0A%0A" +
        "I want to order:%0A" +
        productName +
        "%0APrice: ₹" +
        price;

    const url =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        message;

    window.open(url, "_blank");
}


// ==============================
// MAIN WHATSAPP BUTTON
// ==============================

document.getElementById("whatsappMain").href =
    "https://wa.me/" + whatsappNumber;

document.getElementById("whatsappFloat").href =
    "https://wa.me/" + whatsappNumber;