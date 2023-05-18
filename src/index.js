import loadHome from "./modules/home"
import loadMenu from "./modules/menu"
import pageLoad from "./modules/pageLoad"
import loadContact from "./modules/contact"

function initialize() {
  pageLoad()

  navigationEvents()
}
initialize()

function navigationEvents() {
  const main = document.getElementById("main")

  const homeBtn = document.getElementById("homebtn")
  const menuBtn = document.getElementById("menubtn")
  const contactBtn = document.getElementById("contactbtn")

  menuBtn.addEventListener("click", loadMenu)
  homeBtn.addEventListener("click", loadHome)
  contactBtn.addEventListener("click", loadContact)

  const tabs = document.querySelectorAll(".tab")
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      main.classList.add("active")
    })
  })
}
