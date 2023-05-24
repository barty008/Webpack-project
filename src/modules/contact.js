function contactLoad(info) {
  // containers
  const contactContainer = document.createElement("div")

  const addressContainer = document.createElement("div")

  // elements address
  const addressDetails = document.createElement("h3")
  addressDetails.setAttribute("class", "address-details")
  addressDetails.textContent = info
  addressContainer.appendChild(addressDetails)
  //  elements map

  contactContainer.appendChild(addressContainer)

  return contactContainer
}

function loadContact() {
  const main = document.getElementById("main")
  main.textContent = ""
  // setActiveBtn("main")
  const contactDetails = [
    contactLoad("t: 0121 446 080"),
    contactLoad("Shadow Brook Lane, B75 21N"),
  ]
  //
  const mapContainer = document.createElement("div")
  mapContainer.setAttribute("class", "map-container")
  mapContainer.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19399.28562262357!2d-1.8235824499999997!3d52.5712261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1684920408366!5m2!1sen!2suk" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

  const slideContact = document.createElement("div")
  slideContact.setAttribute("class", "contact-container")
  main.appendChild(slideContact)
  contactDetails.forEach((el) => slideContact.appendChild(el))
  slideContact.appendChild(mapContainer)
}

export default loadContact
