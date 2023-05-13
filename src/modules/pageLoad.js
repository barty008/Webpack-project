function createHeader(id, text) {
  const header = document.createElement("header")
  header.setAttribute("id", id)
  const logo = document.createElement("h1")
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
  const homeBtn = createBtn("homebtn", "home")
  const menuBtn = createBtn("menubtn", "menu")
  const contactBtn = createBtn("contactbtn", "contact")

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

function pageLoad() {
  const content = document.getElementById("content")
  const header = createHeader("header", "Lovely Food")
  const nav = navBar("nav")
  const main = createMain("main")
  const footer = createFooter("footer", "Have a Lovely Meal")
  const sections = [nav, header, main, footer]
  sections.forEach((section) => content.appendChild(section))
}

export default pageLoad
