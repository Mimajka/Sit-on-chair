document.querySelector(".dropdown-btn").addEventListener("focus", function (e) {
    e.preventDefault();
    document.querySelector(".submenu").classList.add("show");

});

document.querySelector(".dropdown-btn").addEventListener("blur", function (e) {
    e.preventDefault();
    document.querySelector(".submenu").classList.remove("show");

});

