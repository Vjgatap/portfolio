// Smooth scrolling for navbar links
document.querySelectorAll(".scroll-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault()
    const targetId = this.getAttribute("href")
    const targetSection = document.querySelector(targetId)

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Close mobile menu if open
      const navbarCollapse = document.querySelector(".navbar-collapse")
      if (navbarCollapse.classList.contains("show")) {
        const navbarToggler = document.querySelector(".navbar-toggler")
        navbarToggler.click()
      }
    }
  })
})

// Active navbar link highlighting on scroll
window.addEventListener("scroll", () => {
  let current = ""

  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active")
    }
  })
})

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(10, 14, 39, 0.98)"
    navbar.style.boxShadow = "0 5px 20px rgba(0, 212, 255, 0.1)"
  } else {
    navbar.style.backgroundColor = "rgba(10, 14, 39, 0.95)"
    navbar.style.boxShadow = "none"
  }
})

// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear()

// Add animation on scroll for cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeIn 0.6s ease forwards"
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

document.querySelectorAll(".skill-card, .experience-card, .education-card, .contact-card").forEach((card) => {
  card.style.opacity = "0"
  observer.observe(card)
})

console.log("Portfolio loaded successfully!")
