function heroPicture(title, subtitle) {
  const heroDiv = document.createElement("div")
  const heroTitle = document.createElement("h1")
  const heroSubtitle = document.createElement("h2")

  heroDiv.setAttribute("class", "hero-container")
  heroTitle.setAttribute("class", "hero-title")
  heroSubtitle.setAttribute("class", "hero-subtitle")
  heroTitle.textContent = title
  heroSubtitle.textContent = subtitle

  const heroInfo = [heroTitle, heroSubtitle]
  heroInfo.forEach((el) => heroDiv.appendChild(el))

  return heroDiv
}

function loadHome() {
  const main = document.getElementById("main")
  main.textContent = ""
  const mainDescription = heroPicture(
    "Where Gastronomic Delights Unite with Timeless Elegance",
    "Welcome to Peels, where culinary artistry meets impeccable elegance. Step into a world of refined indulgence, where every detail is carefully orchestrated to create an extraordinary dining experience."
  )
  main.appendChild(mainDescription)
}

export default loadHome
