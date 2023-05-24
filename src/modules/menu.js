import pageLoad from "./pageLoad"

function createLovelyFoods(h3, li1, li2, li3, li4, li5) {
  // append to
  const menuContainer = document.createElement("div")
  menuContainer.setAttribute("class", "menu-container")

  // ul

  //   title
  const menuTitle = document.createElement("h3")
  menuTitle.setAttribute("class", "menu-title")
  menuTitle.textContent = h3

  // liOne
  const liMenu = document.createElement("li")
  liMenu.setAttribute("class", "menu-list")
  liMenu.textContent = li1

  // append to main menu div
  menuContainer.appendChild(menuTitle)
  menuContainer.appendChild(liMenu)

  return menuContainer
}
function loadMenu() {
  const main = document.getElementById("main")
  main.textContent = ""

  // setActiveBtn("main")

  const foods = [
    createLovelyFoods("Dinner", "FOUR COURSE £50"),
    createLovelyFoods("BROTH", "Smoked bone marrow, chive"),
    createLovelyFoods("BEETROOT", "Berkswell cheese, nasturtium"),
    createLovelyFoods("CHICKEN LIVER PARFAIT", "quince, lemon verbena"),
    createLovelyFoods("LOBSTER", "XO sauce, sea vegetables"),
    createLovelyFoods("APPLE", "Calvados, vanilla"),
    createLovelyFoods("HAZELNUT", "Chocolate, lime"),
  ]
  //set width and height of slides
  let slide = document.createElement("div")
  slide.setAttribute("class", "slide")

  // main.appendChild(slide)

  main.appendChild(slide)
  foods.forEach((li) => slide.appendChild(li))
}

export default loadMenu
