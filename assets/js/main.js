let cart = document.querySelectorAll(".cart");
let heart = document.querySelectorAll(".fa-heart");

cart.forEach((cart, i) => {
  cart.addEventListener("click", () => {
    heart[i].classList.toggle("fa-regular");
    heart[i].classList.toggle("fa-solid");
  });
});



