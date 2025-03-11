const galerie = [
    {
        Image: "./img/01.jpg"
    },
    {
        Image: "./img/02.jpg"
    },
    {
        Image: "./img/03.jpg"
    },
    {
        Image: ".img/03.jpg"
    }
]

let index = 0;

const imgElement =document.querySelector(".")


const imgElement = document.querySelector(".img-wrapper img");
const textElement = document.querySelector(".testimonial-text");
const authorElement = document.querySelector(".testimonial-author");
const positionElement = document.querySelector(".testimonial-position");
const prevButton = document.querySelector(".icons-wrapper img:first-child");
const nextButton = document.querySelector(".icons-wrapper img:last-child");

function updateTestimonial() {
  imgElement.src = testimonials[index].image;
  textElement.textContent = testimonials[index].text;
  authorElement.textContent = testimonials[index].author;
  positionElement.textContent = testimonials[index].position;
}

function nextTestimonial() {
  index = (index + 1) % testimonials.length;
  updateTestimonial();
}

// Changement automatique toutes les 10 secondes
const autoSlide = setInterval(nextTestimonial, 10000);

// Changement manuel et réinitialisation du timer
nextButton.addEventListener("click", () => {
  nextTestimonial();
  resetInterval();
});

prevButton.addEventListener("click", () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
  resetInterval();
});

function resetInterval() {
  clearInterval(autoSlide);
  setInterval(nextTestimonial, 6000);
}

// Initialiser le premier témoignage
updateTestimonial();