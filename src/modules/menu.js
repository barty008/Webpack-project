import pageLoad from "./pageLoad"

function createLovelyFoods(src, text, price, alt) {
  // append to
  const foodItem = document.createElement("div")
  //   picture
  const foodPicture = document.createElement("img")
  foodItem.setAttribute("class", "menu-details")
  foodItem.setAttribute("class", "menu-details")

  foodPicture.setAttribute("src", src)
  foodPicture.setAttribute("class", "menu-pic")
  foodPicture.setAttribute("alt", alt)
  const foodInfo = document.createElement("div")
  const foodName = document.createElement("h3")
  foodName.textContent = text
  const foodPrice = document.createElement("h2")
  foodPrice.textContent = price
  foodInfo.appendChild(foodName)
  foodInfo.appendChild(foodPrice)
  foodItem.appendChild(foodPicture)
  foodItem.appendChild(foodInfo)
  return foodItem
}
function loadMenu() {
  const main = document.getElementById("main")
  main.textContent = ""

  // setActiveBtn("main")

  const foods = [
    createLovelyFoods(
      "../src/img/amit-lahav-3oDQKoKPMng-unsplash.jpg",
      "£1",
      "Sweeties",
      "test"
    ),
    createLovelyFoods(
      "../src/img/amit-lahav-3t07n27XK-w-unsplash.jpg",
      "£1",
      "Sweeties",
      "test"
    ),
    createLovelyFoods(
      "../src/img/karsten-winegeart-PL5FZkW0Qkk-unsplash.jpg",
      "£1",
      "Sweeties",
      "test"
    ),
  ]

  const nextLogo = document.createElement("i")
  nextLogo.setAttribute("class", "fa-solid fa-chevron-right")
  main.appendChild(nextLogo)
  // main.appendChild(foods[0])

  let count = 0

  nextLogo.addEventListener("click", () => {
    if (count < foods.length) {
      main.appendChild(foods[count])
      count++
    } else {
      count = 0
    }
  })
}

export default loadMenu
