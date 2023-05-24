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
function navigationEvents() {
  const content = document.getElementById("content")
  const homeBtn = document.getElementById("homebtn")
  const menuBtn = document.getElementById("menubtn")
  const contactBtn = document.getElementById("contactbtn")
  const tabs = document.querySelectorAll(".tab")

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
  }, 1500)
}
