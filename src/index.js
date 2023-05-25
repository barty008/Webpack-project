import loadHome from "./modules/home"
import loadMenu from "./modules/menu"
import pageLoad from "./modules/pageLoad"
import loadContact from "./modules/contact"

function initialize() {
  pageLoad()
  navigationEvents()
}
initialize()

const main = document.getElementById("main")
const nav = document.getElementById("nav")
function navigationEvents() {
  const content = document.getElementById("content")
  const homeBtn = document.getElementById("homebtn")
  const menuBtn = document.getElementById("menubtn")
  const contactBtn = document.getElementById("contactbtn")
  const tabs = document.querySelectorAll(".tab")
  // mobile
  const mobileNav = document.querySelector(".fa-bars")
  mobileNav.addEventListener("click", mobile)

  menuBtn.addEventListener("click", loadMenu)
  homeBtn.addEventListener("click", loadHome)
  contactBtn.addEventListener("click", loadContact)

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      main.classList.add("active")
      flipTheCard()

      // active.classList.add("puff-in-center")
    })
  })
}
function flipTheCard() {
  main.classList.add("scale-in-top")
  setTimeout(() => {
    main.classList.remove("scale-in-top")
  }, 500)
}

function mobile() {
  nav.classList.add("scale-in-top")
  nav.style.display = "flex"
}
