// function setActiveBtn() {
//   const main = document.getElementById("main")
//   const contactBtn = document.querySelector("#contactbtn")
//   contactBtn.addEventListener("click", () => {
//     main.classList.add("not-active")
//   })
// }

function contactLoad(title, h3, description) {
  const contactContainer = document.createElement("div")
  // title
  const TitleContainer = document.createElement("div")
  const titleContact = document.createElement("h1")
  titleContact.textContent = title
  TitleContainer.appendChild(titleContact)
  // contact
  const OneContainer = document.createElement("div")
  const OneSubTitle = document.createElement("h3")
  const OneParagraph = document.createElement("p")
  OneSubTitle.textContent = h3
  OneParagraph.textContent = description
  OneContainer.appendChild(OneSubTitle)
  OneContainer.appendChild(OneParagraph)

  const contactEl = [titleContact, OneContainer]
  contactEl.forEach((el) => contactContainer.appendChild(el))
  return contactContainer
}

function loadContact() {
  const main = document.getElementById("main")
  main.textContent = ""
  // setActiveBtn("main")
  const contactDetails = [
    contactLoad("This is a Title"),
    contactLoad("", "Subtitle", "Description"),
    contactLoad("", "Subtitle", "Description"),
    contactLoad("", "Subtitle", "Description"),
    // contactLoad(),
    // contactLoad(),
  ]
  contactDetails.forEach((detail) => main.appendChild(detail))
}

export default loadContact
