const bar = document.querySelector(".bar");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const sliding = document.querySelector(".sliding");

bar.addEventListener("click", () => {
    line1.classList.toggle("animated-line1");
    line2.classList.toggle("animated-line2");
    line3.classList.toggle("animated-line3");
    sliding.classList.toggle("drawer");
});
