// open style switcher on click on on toggler



const StyleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");

StyleSwitcherToggle.addEventListener("click", () => {
  styleSwitcher.classList.toggle("open");
});




// hide style switcher on scroll



window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})



// change the theme color




const alternateStyles = document.querySelectorAll(".alternate-style");
function setActivestyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}


// change daynight theme


const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("bxs-sun");
    dayNight.querySelector("i").classList.toggle("bxs-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains(".dark"))
    {
        dayNight.querySelector("i").classList.add("bxs-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("bxs-moon");
    }
})


