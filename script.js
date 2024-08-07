let menuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x")
  navbar.classList.toggle("active")
}

let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY
    let offset = section.offsetTop - 150
    let height = section.offsetHeight
    let id = section.getAttribute("id")

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active")
      })
    }
  })

  let header = document.querySelector("header")

  header.classList.toggle("sticky", window.scrollY > 100)

  menuIcon.classList.remove("bx-x")
  navbar.classList.remove("active")
}

ScrollReveal({ distance: "80px", duration: 2000, delay: 200 })

ScrollReveal().reveal(".home-content, .heading", { origin: "top" })
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-container, .portfolio-container-alt, .contact form",
  { origin: "bottom" }
)
ScrollReveal().reveal(".home-content h1", { origin: "left" })
ScrollReveal().reveal(".home-content p, .home-content ul, .about-content", {
  origin: "right",
})

const typed = new Typed(".multiple-text", {
  strings: ["Full Stack Developer", "Designer", "Programmer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
})
