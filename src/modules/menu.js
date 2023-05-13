function setActiveBtn() {
  const main = document.getElementById("main")
  const menuBtn = document.querySelector("#menubtn")
  menuBtn.addEventListener("click", () => {
    main.classList.toggle("not-active")
  })
}
function createLovelyFoods(src, text, price, alt) {
  // append to
  const foodItem = document.createElement("div")
  //   picture
  const foodPicture = document.createElement("img")
  foodPicture.setAttribute("src", src)
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
  setActiveBtn("main")

  const foods = [
    createLovelyFoods(
      "https://unsplash.com/photos/j07KEb81xa4",
      "£1",
      "Sweeties",
      "£1",
      "Sweeties",
      "test"
    ),
    createLovelyFoods("Lovely Sweeties", "£1", "Sweeties", "test"),
    createLovelyFoods("Lovely Sweeties", "£1", "Sweeties", "test"),
    createLovelyFoods("Lovely Sweeties", "£1", "Sweeties", "test"),
  ]
  foods.forEach((food) => main.appendChild(food))
}
export default loadMenu
