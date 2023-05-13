function loadMenu() {
  const menuContent = document.getElementById("content")
  const listMenu = document.createElement("ul")
  const menu1 = document.createElement("p")
  const menu2 = document.createElement("p")
  const menu3 = document.createElement("p")
  menu1.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, ratione"
  menu2.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, ratione"
  menu3.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, ratione"

  const menuItems = [menu1, menu2, menu3]

  menuItems.forEach((menu) => {
    listMenu.appendChild(menu)
  })

  menuContent.appendChild(listMenu)
}

export default loadMenu
