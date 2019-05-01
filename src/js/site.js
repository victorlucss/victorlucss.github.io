/*
    Author: Victor Lucas
    Author site: victorlucss.com
*/

const nav = document.getElementById("nav");
const menuBars = document.getElementById("nav-bars");
const navItems = document.getElementById("nav-items");

let once = 0;

menuBars.addEventListener("click", (event) => {
    nav.classList.toggle("opened");

    if(once){
        document.getElementById("controller").style.marginLeft = 0
        once=0;
    }else {
        once=1
        document.getElementById("controller").style.marginLeft = '-200%'
    }

    

});


