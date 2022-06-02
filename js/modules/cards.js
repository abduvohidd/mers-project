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

export default cards;
