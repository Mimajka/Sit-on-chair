document.addEventListener("DOMContentLoaded", function () {


    document.querySelector(".dropdown-button").addEventListener("focus", function (e) {
        e.preventDefault();
        document.querySelector(".dropdown-content").classList.add("show");

    });

    document.querySelector(".dropdown-button").addEventListener("blur", function (e) {
        e.preventDefault();
        document.querySelector(".dropdown-content").classList.remove("show");

    });

});
