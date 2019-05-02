/*
    Author: Victor Lucas
    Author site: victorlucss.com
*/

const nav = document.getElementById("nav");
const menuBars = document.getElementById("nav-bars");
const navItems = document.getElementById("nav-items");
const controller = document.getElementById("controller");

menuBars.addEventListener("click", () => nav.classList.toggle("opened"));

let currentlyPage = 0;

Array.from(document.querySelectorAll("[data-page]")).map((node) => {
    node.addEventListener("click", () => {
        let page = node.dataset.page;
        let marginLeft = page * -100;

        if(currentlyPage == page){

            controller.style.transform = `scale(1.1)`;
            setTimeout(() => controller.style.transform = `scale(1)`, 500)

            return;
        }

        currentlyPage = page;
        
        controller.style.marginLeft = `${marginLeft}%`;
    })
})
