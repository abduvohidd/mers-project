/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function accordion() {
  //According

  const accordion = document.querySelectorAll(".accordion");

  accordion.forEach((acc) => {
    acc.addEventListener("click", () => {
      acc.classList.toggle("active");

      const panel = acc.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);


/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cards() {
  // Class

  const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  class CarCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classess) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classess = classess;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 10.5;
      this.changeToUSD();
    }

    changeToUSD() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement("div");

      // if (this.classess.length === 0) {
      //   this.classess = "menu__item";
      //   element.classList.add(this.classess);
      // } else {
      //   this.classess.forEach((className) => element.classList.add(className));
      // }

      element.innerHTML = `
            <div class="menu__item">
              <img src=${this.src} alt=${this.alt} />
              <h3 class="menu__item-subtitle">${this.title}</h3>
              <div class="menu__item-descr">
                ${this.descr}
              </div>
              <div class="menu__item-divider"></div>
              <div class="menu__item-price">
                <div class="menu__item-cost">Price:</div>
                <div class="menu__item-total"><span>${this.price}</span> $</div>
              </div>
          </div>
      `;

      this.parent.append(element);
    }
  }

  // getResource("http://localhost:3000/menu").then((data) => {
  //   data.forEach(({ img, altimg, title, descr, price }) => {
  //     new CarCard(
  //       img,
  //       altimg,
  //       title,
  //       descr,
  //       price,
  //       ".menu .container"
  //     ).render();
  //   });
  // });

  axios.get("http://localhost:3000/menu").then((data) => {
    data.data.forEach(({ img, altimg, title, descr, price }) => {
      new CarCard(
        img,
        altimg,
        title,
        descr,
        price,
        ".menu .container"
      ).render();
    });
  });

  // new CarCard(
  //   "img/tabs/1.jpg",
  //   "car",
  //   "2021 Mercedes-Benz C-Class",
  //   `The 2021 Mercedes-Benz C-Class finishes in the top half of our luxury small car rankings. It's powerful and upscale, but it hasso-so handli...`,
  //   100,
  //   ".menu .container"
  //   // "red",
  //   // "black"
  // ).render();
  // new CarCard(
  //   "img/tabs/2.jpg",
  //   "car",
  //   "2021 Mercedes-Benz CLA-Class",
  //   `The 2021 Mercedes-Benz CLA offers punchy powertrains, an elegant
  //             interior, and easy-to-use tech features, but it also has a firm
  //             ride and a ..`,
  //   150,
  //   ".menu .container"
  // ).render();
  // new CarCard(
  //   "img/tabs/3.jpg",
  //   "car",
  //   "2021 Mercedes-Benz SCLA-Class",
  //   `The German luxury car-manufacturer has been around for more than a
  //             century, having elegantly drifted rough curves of automobile.`,
  //   200,
  //   ".menu .container"
  // ).render();

  //Easy silider Frist way
  // const slides = document.querySelectorAll(".offer__slide");
  // const prev = document.querySelector(".offer__slider-prev");
  // const next = document.querySelector(".offer__slider-next");
  // const current = document.querySelector("#current");
  // const total = document.querySelector("#total");

  // let slideIndex = 1;
  // show(slideIndex);

  // function show(s) {
  //   if (s > slides.length) {
  //     slideIndex = 1;
  //   }

  //   if (s < 1) {
  //     slideIndex = slides.length;
  //   }
  //   slides.forEach((item) => (item.style.cssText = "display: none"));

  //   slides[slideIndex - 1].style.display = "block";

  //   if (slides.length < 10) {
  //     current.textContent = `0${slideIndex}`;
  //   } else {
  //     current.textContent = slideIndex;
  //   }
  // }

  // function sliderPlus(s) {
  //   show((slideIndex += 1));
  // }
  // prev.addEventListener("click", () => {
  //   sliderPlus(-1);
  // });
  // next.addEventListener("click", () => {
  //   sliderPlus(1);
  // });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);


/***/ }),

/***/ "./js/modules/data.js":
/*!****************************!*\
  !*** ./js/modules/data.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function data() {
  //DATA

  const deadline = "2022-06-30";

  function getTime(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);

    return {
      total: total,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      const time = getTime(endtime);
      days.innerHTML = getZero(time.days);
      hours.innerHTML = getZero(time.hours);
      minutes.innerHTML = getZero(time.minutes);
      seconds.innerHTML = getZero(time.seconds);
      if (time.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);


/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");


function form(modalTimer) {
  //AJAX

  const forms = document.querySelectorAll("form");

  const message = {
    loading: "img/form/spinner.svg",
    success: "Murojatingiz qabul qilindi",
    failure: "Error",
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: data,
    });

    //async await
    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display:block;
        margin: 0 auto;
      `;

      form.append(statusMessage);
      const formData = new FormData(form);

      // const request = new XMLHttpRequest();
      // request.open("POST", "server.php");

      // request.setRequestHeader("Content-type", "application/json");

      // const object = {};
      // formData.forEach(function (value, key) {
      //   object[key] = value;
      // });

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      // const json = JSON.stringify(object);

      // fetch("server.php", {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   body: JSON.stringify(object),
      // })
      //   .then((data) => data.text())
      postData("http://localhost:3000/requests", json)
        .then((data) => {
          console.log(data);
          showThanksModal(message.success);
          // form.reset();
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        });

      // request.send(json);
      // request.send(formData);

      // request.addEventListener("load", () => {
      //   if (request.status === 200) {
      //     console.log(request.response);
      //     showThanksModal(message.success);
      //     form.reset();
      //   } else {
      //     showThanksModal(message.failure);
      //   }
      // });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");

    prevModalDialog.classList.add("hide");

    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)(".modal", modalTimer);

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `<div class="modal__content">
        <div class="modal__close" data-close>x</div>
        <div class="modal__title">${message}</div>
    </div>`;

    document.querySelector(".modal").append(thanksModal);

    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(".modal", modalTimer);
    }, 3000);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);


/***/ }),

/***/ "./js/modules/loader.js":
/*!******************************!*\
  !*** ./js/modules/loader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loader() {
  //LOADER
  const loader = document.querySelector(".loader");

  setTimeout(function () {
    loader.style.opacity = "0";

    setTimeout(function () {
      loader.style.display = "none";
    }, 2000);
  }, 3500);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loader);


/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
function openModal(modalSelector, modalTimer) {
  modal = document.querySelector(modalSelector);
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
  console.log(modalTimer);
  if (modalTimer) {
    clearInterval(modalTimer);
  }
}

function closeModal(modalSelector) {
  modal = document.querySelector(modalSelector);
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

function modal(triggerSelector, modalSelector, modalTimer) {
  //MODAL

  const allModalBtn = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);
  // const modalClose = document.querySelector("[data-close]");

  allModalBtn.forEach((btn) => {
    btn.addEventListener("click", () => openModal(modalSelector, modalTimer));
  });

  // modalClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") === "") {
      closeModal(modalSelector);
    }
  });

  function showMyModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal(modalSelector, modalTimer);
      window.removeEventListener("scroll", showMyModalByScroll);
    }
  }

  window.addEventListener("scroll", showMyModalByScroll);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);




/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider() {
  //CROUSEL SLIDER

  const slides = document.querySelectorAll(".offer__slide");
  const slider = document.querySelector(".offer__slider");
  const prev = document.querySelector(".offer__slider-prev");
  const next = document.querySelector(".offer__slider-next");
  const current = document.querySelector("#current");
  const total = document.querySelector("#total");
  const slidesWrapper = document.querySelector(".offer__slider-wrapper");
  const width = window.getComputedStyle(slidesWrapper).width;
  const slidesField = document.querySelector(".offer__slider-inner");

  let slideIndex = 1;
  let offset = 0;

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = `${slides.length}`;
    current.textContent = `${slideIndex}`;
  }

  // console.log(width);
  // console.log("hello");

  slidesField.style.width = 100 * slides.length + "%";

  slidesField.style.display = "flex";
  slidesField.style.transition = "0.5s all";
  slidesWrapper.style.overflow = "hidden";

  slides.forEach((slide) => {
    slide.style.width = width;
  });

  slider.style.position = "relative";
  let indicator = document.createElement("ol");
  let dots = [];

  indicator.style.cssText = `
    position: absolute;
    right: 0 ;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
  `;

  slider.append(indicator);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.style.cssText = `
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 30px;
      height: 6px;
      margin: 0 3px;
      cursor: pointer;
      background-color: #fff;
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      opacity: 0.5;
      transform: opacity 0.6s ease;
    `;

    if (i == 0) {
      dot.style.opacity = 1;
    }
    indicator.append(dot);
    dots.push(dot);
  }

  function deleteNotDigits(str) {
    return +str.replace(/\D/g, "");
  }

  next.addEventListener("click", () => {
    if (offset == deleteNotDigits(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += deleteNotDigits(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex - 1;
    } else {
      slideIndex++;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    dots.forEach((dot) => (dot.style.opacity = ".5"));
    dots[slideIndex - 1].style.opacity = 1;
  });

  prev.addEventListener("click", () => {
    if (offset == 0) {
      offset = deleteNotDigits(width) * (slides.length - 1);
    } else {
      offset -= deleteNotDigits(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    dots.forEach((dot) => (dot.style.opacity = ".5"));
    dots[slideIndex - 1].style.opacity = 1;
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");
      slideIndex = slideTo;

      offset = +deleteNotDigits(width) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }

      dots.forEach((dot) => (dot.style.opacity = ".5"));
      dots[slideIndex - 1].style.opacity = 1;
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);


/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs() {
  // TABS

  const tabs = document.querySelectorAll(".tabheader__item"),
    tabContent = document.querySelectorAll(".tabcontent"),
    headerParents = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabContent.forEach((item) => {
      item.style.display = "none";
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  headerParents.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/data */ "./js/modules/data.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/form */ "./js/modules/form.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/loader */ "./js/modules/loader.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/accordion */ "./js/modules/accordion.js");
"use scrict";











window.addEventListener("DOMContentLoaded", () => {
  const modalTimer = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)(".modal", modalTimer), 5000);
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])("[data-modal]", ".modal", modalTimer);
  (0,_modules_data__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_form__WEBPACK_IMPORTED_MODULE_4__["default"])(modalTimer);
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_loader__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_7__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map