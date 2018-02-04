var imgProduct = document.querySelectorAll(".section-products img");
console.log(imgProduct);

for (var i = 0; i < imgProduct.length; i++) {
    imgProduct[i].addEventListener("mouseover", function(){
        var label = this.nextElementSibling;
        label.style.display ="none";
    });
    imgProduct[i].addEventListener("mouseout", function(){

        var label = this.nextElementSibling;
        label.style.display ="block";
    })
}