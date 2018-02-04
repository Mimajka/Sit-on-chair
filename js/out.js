/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

document.addEventListener("DOMContentLoaded", function () {
    __webpack_require__(1);
    __webpack_require__(2);
    __webpack_require__(3);
    __webpack_require__(4);
});



/***/ }),
/* 1 */
/***/ (function(module, exports) {

document.querySelector(".dropdown-btn").addEventListener("focus", function (e) {
    e.preventDefault();
    document.querySelector(".submenu").classList.add("show");

});

document.querySelector(".dropdown-btn").addEventListener("blur", function (e) {
    e.preventDefault();
    document.querySelector(".submenu").classList.remove("show");

});



/***/ }),
/* 2 */
/***/ (function(module, exports) {

var prevPicture = document.querySelector('.less-than');
var nextPicture = document.querySelector('.greater-than');

var slides = document.querySelectorAll('.slider li');
var index = 0;

console.log(slides);

slides[index].classList.add("visible");

nextPicture.addEventListener("click", function() {
    slides[index].classList.remove("visible");
    index++;
    index %= slides.length;
    slides[index].classList.add('visible');
});

prevPicture.addEventListener("click", function() {
    slides[index].classList.remove("visible");
    index--;
    index = index <0 ? slides.length -1 :index;
    slides[index].classList.add('visible');
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var prevPicture = document.querySelector('.less-than');
var nextPicture = document.querySelector('.greater-than');

var slides = document.querySelectorAll('.slider li');
var index = 0;

console.log(slides);

slides[index].classList.add("visible");

nextPicture.addEventListener("click", function() {
    slides[index].classList.remove("visible");
    index++;
    index %= slides.length;
    slides[index].classList.add('visible');
});

prevPicture.addEventListener("click", function() {
    slides[index].classList.remove("visible");
    index--;
    index = index <0 ? slides.length -1 :index;
    slides[index].classList.add('visible');
});

//Application

var listArrow = document.querySelectorAll(".list_arrow");

console.log(listArrow);

var ul = document.querySelectorAll('.list_panel');
function hideuls () {
    for  (var i = 0; i < ul.length; i++) {
        ul[i].classList.remove('list_panel_block')
    }
}


for (var i = 0; i < listArrow.length; i++) {
    listArrow[i].addEventListener('click', function () {
        var listPanel = this.nextElementSibling;
        if (listPanel.classList.contains("list_panel_block")) {
            listPanel.classList.toggle("list_panel_block");
        }
        else {
            hideuls();
            listPanel.classList.toggle("list_panel_block");
        }
    });

}

var chairType = document.querySelector('.chair_type').children;
console.log (chairType);
var chairColor = document.querySelector('.chair_color').children;
console.log (chairColor);
var chairPattern = document.querySelector('.chair_pattern').children;
console.log (chairPattern);


for (var i = 0; i < chairType.length; i++) {
    chairType[i].addEventListener("click", function () {
        var title = document.querySelector('.title');
        var titleValue = document.querySelector('.panel_right h4');

        if (this.innerText === "Clair") {
            titleValue.innerText = 400;
        }

        if (this.innerText === "Margarita") {
            titleValue.innerText = 350;
        }

        if (this.innerText === "Selena") {
            titleValue.innerText = 250;
        }

        title.innerText = this.innerText;
        updateSum ();

    })

}

for (var i = 0; i < chairColor.length; i++) {
    chairColor[i].addEventListener("click", function () {
        var color = document.querySelector('.color');
        var colorValue = document.querySelector('.color_value');

        if (this.innerText === "Czerwony") {
            colorValue.innerText = 30;
        }

        if (this.innerText === "Czarny") {
            colorValue.innerText = 0;
        }

        if (this.innerText === "Pomarańczowy") {
            colorValue.innerText = 40;
        }
        color.innerText = this.innerText;
        updateSum ();
    })
}

for (var i = 0; i < chairPattern.length; i++) {
    chairPattern[i].addEventListener("click", function () {
        var pattern = document.querySelector('.pattern');
        var patternValue = document.querySelector('.pattern_value');

        if (this.innerText === "Tkanina") {
            patternValue.innerText = 0;
        }

        if (this.innerText === "Skóra") {
            patternValue.innerText = 25;
        }

        pattern.innerText = this.innerText;
        updateSum ();
    })

}

var transport = document.querySelector('#transport');
transport.addEventListener('change', function () {

    if (this.checked) {
        document.querySelector('.transport').innerText = "Transport";
        document.querySelector('.transport_value').innerText = 50;
        updateSum ();
    }
    else {
        document.querySelector('.transport').innerText = "";
        document.querySelector('.transport_value').innerText = "";
        updateSum ();
    }

});


function updateSum () {
    var sum = document.querySelector(".sum strong");
    var titleValue = document.querySelector('.panel_right h4');
    var colorValue = document.querySelector('.color_value');
    var patternValue = document.querySelector('.pattern_value');
    var transportValue = document.querySelector('.transport_value');
    sum.innerText = Number(titleValue.innerText) + Number(colorValue.innerText) + Number(patternValue.innerText) + Number(transportValue.innerText);

}

/***/ })
/******/ ]);