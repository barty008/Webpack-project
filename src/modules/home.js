function heroPic(src, alt) {
  const HeroPicture = document.createElement("img")
  HeroPicture.setAttribute("src", src)
  HeroPicture.setAttribute("alt", alt)

  return HeroPicture
}

function loadHome() {
  const main = document.getElementById("main")
  main.textContent = ""
  const heroIm = heroPic(
    "../src/img/Restrauntleung-poI7DelFiVA-unsplash.jpg",
    "test"
  )
  main.appendChild(heroIm)
}

export default loadHome
