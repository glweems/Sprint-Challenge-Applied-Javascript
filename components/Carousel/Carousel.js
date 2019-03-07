class Carousel {
  constructor(element) {
    this.element = element;

    this.leftButton = this.element.querySelector(".left-button");
    this.leftButton.addEventListener("click", () => {
      this.selectLeft();
    });

    this.rightButton = this.element.querySelector(".right-button");
    this.rightButton.addEventListener("click", () => {
      this.selectRight();
    });

    this.imgs = this.element.querySelectorAll(".carousel-img");
    Array.from(this.imgs);

    this.position = 0;
    this.showing = this.imgs[this.position].classList.add("show");
  }

  selectLeft() {
    this.imgs.forEach(function(img) {
      img.classList.remove("show");
    });

    if (this.position === 0) {
      this.position = 3;
    } else {
      this.position = this.position - 1;
    }

    this.showing = this.imgs[this.position].classList.add("show");
  }

  selectRight() {
    this.imgs.forEach(function(img) {
      img.classList.remove("show");
    });

    if (this.position === 3) {
      this.position = 0;
    } else {
      this.position = this.position + 1;
    }

    this.showing = this.imgs[this.position].classList.add("show");
  }
}

let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);
