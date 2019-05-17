class Carousel {
  constructor(element) {
    this.element = element;
    this.images = Array.from(this.element.querySelectorAll('img'));
    this.images.forEach((img) => img.classList.add('img-hidden'));
    this.images[0].classList.remove('img-hidden');

    this.leftButton = this.element.querySelector('.left-button');
    this.rightButton = this.element.querySelector('.right-button');
    this.leftButton.addEventListener('click', () => this.moveLeft());
    this.rightButton.addEventListener('click', () => this.moveRight());
  }

  moveLeft() {
    this.images[0].classList.add('img-hidden');
    this.images.push(this.images.shift());
    this.images[0].classList.remove('img-hidden');
  }

  moveRight() {
    this.images[0].classList.add('img-hidden');
    this.images.unshift(this.images.pop());
    this.images[0].classList.remove('img-hidden');
  }

}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
  1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
  2. You will need to grab a reference to all of the images
  3. Create a current index
  4. Those buttons are gonna need some click handlers.
  5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
  6. Have fun!
*/
