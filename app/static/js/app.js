const menu = document.querySelector(".menu-btn");
const links = document.querySelector(".nav-links");

const startButton =
    document.querySelector("#startButton");

const toast =
    document.querySelector("#toast");


menu?.addEventListener("click", () => {

    links.classList.toggle("open");

});


links?.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

        links.classList.remove("open");

    });

});


startButton?.addEventListener("click", () => {

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

});


document.querySelector("#year").textContent =
    new Date().getFullYear();
