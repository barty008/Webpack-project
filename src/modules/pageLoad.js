function createHeader(id, text) {
  const header = document.createElement("header")
  header.setAttribute("id", id)
  const logo = document.createElement("h1")
  logo.setAttribute("class", "header-title")
  logo.textContent = text
  header.appendChild(logo)
  return header
}
function createBtn(id, text) {
  const btn = document.createElement("button")
  btn.setAttribute("id", id)
  const span = document.createElement("span")
  span.textContent = text
  btn.appendChild(span)
  btn.classList.add("tab")
  return btn
}
function navBar(id) {
  const nav = document.createElement("nav")
  nav.setAttribute("id", id)
  const homeBtn = createBtn("homebtn", "Home")
  const menuBtn = createBtn("menubtn", "Menu")
  const contactBtn = createBtn("contactbtn", "Contact")

  const buttons = [homeBtn, menuBtn, contactBtn]
  buttons.forEach((button) => nav.appendChild(button))

  return nav
}

function createMain(id) {
  const main = document.createElement("main")
  main.setAttribute("id", id)
  return main
}

function createFooter(id, text) {
  const footer = document.createElement("footer")
  footer.setAttribute("id", id)
  const h3 = document.createElement("h3")
  h3.textContent = text
  footer.appendChild(h3)
  return footer
}

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

function pageLoad() {
  const content = document.getElementById("content")

  const header = createHeader("header", "Peels")
  const nav = navBar("nav")
  const main = createMain("main")
  main.classList.add("active")
  const mainDescription = heroPicture(
    "Where Gastronomic Delights Unite with Timeless Elegance",
    "Welcome to Peels, where culinary artistry meets impeccable elegance. Step into a world of refined indulgence, where every detail is carefully orchestrated to create an extraordinary dining experience."
  )

  const footer = createFooter("footer", "Copyright © 2023 Bartrum")
  const gitHubLink = document.createElement("a")
  gitHubLink.setAttribute("href", "https://github.com/barty008")
  const githubLogo = document.createElement("i")
  githubLogo.setAttribute("class", "fa-brands fa-github")
  gitHubLink.appendChild(githubLogo)

  footer.appendChild(gitHubLink)
  const sections = [header, nav, main, footer]
  sections.forEach((section) => content.appendChild(section))
  main.appendChild(mainDescription)
}

export default pageLoad
