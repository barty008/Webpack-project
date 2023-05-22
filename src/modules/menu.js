import pageLoad from "./pageLoad"

function createLovelyFoods(h3, li1, li2, li3, li4, li5) {
  // append to
  const menuContainer = document.createElement("div")
  menuContainer.setAttribute("class", "menu-container")
  menuContainer.style.width = "500px"
  menuContainer.style.height = "400px"
  // ul
  const ulMenu = document.createElement("ul")
  ulMenu.setAttribute("class", "ul-menu")
  //   title
  const menuTitle = document.createElement("h3")
  menuTitle.setAttribute("class", "menu-title")
  menuTitle.textContent = h3

  // liOne
  const liMenuOne = document.createElement("li")
  liMenuOne.setAttribute("class", "menu-list")
  liMenuOne.textContent = li1
  // liTwo
  const liMenuTwo = document.createElement("li")
  liMenuTwo.setAttribute("class", "menu-list")
  liMenuTwo.textContent = li2
  // liThree
  const liMenuThree = document.createElement("li")
  liMenuThree.setAttribute("class", "menu-list")
  liMenuThree.textContent = li3
  // liFour
  const liMenuFour = document.createElement("li")
  liMenuFour.setAttribute("class", "menu-list")
  liMenuFour.textContent = li4
  // liFive
  const liMenuFive = document.createElement("li")
  liMenuFive.setAttribute("class", "menu-list")
  liMenuFive.textContent = li5

  // li > ul
  const menuList = [
    menuTitle,
    liMenuOne,
    liMenuTwo,
    liMenuThree,
    liMenuFour,
    liMenuFive,
  ]
  menuList.forEach((list) => {
    ulMenu.appendChild(list)
  })

  // append to main menu div
  menuContainer.appendChild(ulMenu)

  return menuContainer
}
function loadMenu() {
  const main = document.getElementById("main")
  main.textContent = ""

  // setActiveBtn("main")

  const foods = [
    createLovelyFoods(
      "Breakfast",
      "List-1",
      "list-2",
      "list-3",
      "list-4",
      "list-5"
    ),
    createLovelyFoods(
      "Lunch",
      "List-1",
      "list-2",
      "list-3",
      "list-4",
      "list-5"
    ),
    createLovelyFoods(
      "Dinner",
      "List-1",
      "list-2",
      "list-3",
      "list-4",
      "list-5"
    ),
  ]
  // next
  const nextLogo = document.createElement("i")
  nextLogo.setAttribute("class", "fa-solid fa-chevron-right")
  main.appendChild(nextLogo)
  // previous
  const previousLogo = document.createElement("i")
  previousLogo.setAttribute("class", "fa-solid fa-chevron-left")
  main.appendChild(previousLogo)

  //set width and height of slides
  let slide = document.createElement("div")
  slide.setAttribute("class", "slide")
  slide.style.width = "500px"
  slide.style.height = "400px"
  // main.appendChild(slide)
  let count = 0
  main.appendChild(slide)
  slide.appendChild(foods[2])

  nextLogo.onclick = () => {
    slide.appendChild(foods[count])
    count++
    //add 1 to current index
    if (count > foods.length - 1) {
      // slide.appendChild(foods[count])
      //if current index passes last photo in array
      count = 0
    }

    slide.appendChild(foods[count])
  }
  previousLogo.onclick = () => {
    if (count >= 0) {
      slide.appendChild(foods[count])
      count--
    }
  }
}

export default loadMenu
