import loadHome from "./modules/home"
import loadMenu from "./modules/menu"
import pageLoad from "./modules/pageLoad"
import contactLoad from "./modules/contact"
initialize()

function navigationEvents() {
  const homeBtn = document.getElementById("homebtn")
  const menuBtn = document.getElementById("menubtn")
  const contactBtn = document.getElementById("contactbtn")

  menuBtn.addEventListener("click", loadMenu)
  homeBtn.addEventListener("click", loadHome)
  menuBtn.addEventListener("click", loadMenu)
}

// pageLoad()
// loadHome()

// loadMenu()

function initialize() {
  pageLoad()
  loadMenu()
  loadHome()
  navigationEvents()
}
