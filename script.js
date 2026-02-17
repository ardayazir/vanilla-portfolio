const buton = document.getElementById("fazlaBtn");
const skillCards = document.querySelector(".about");

buton.addEventListener("click", () => {
    skillCards.scrollIntoView({
        behavior: "smooth"
    });
});

const hakkimda = document.getElementById("hakkimda");
const hakkimdayön = document.querySelector(".about");

hakkimda.addEventListener("click", () => {
    hakkimdayön.scrollIntoView({
        behavior: "smooth"
    });
});

const Freelance = document.getElementById("freelance");

Freelance.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/yazirarda", "_blank");
});

const linkedin = document.getElementById("linkedin");

linkedin.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/yazirarda", "_blank");
});