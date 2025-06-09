document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  })

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const mobileNav = document.querySelector(".mobile-nav")

  mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active")

    // Change icon
    const icon = mobileMenuBtn.querySelector("i")
    if (mobileNav.classList.contains("active")) {
      icon.classList.remove("fa-bars")
      icon.classList.add("fa-times")
    } else {
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  })

  // Navigation Active State
  const sections = document.querySelectorAll("section, footer")
  const navItems = document.querySelectorAll(".nav-item")

  function setActiveNavItem() {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionHeight = section.offsetHeight

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id")
      }
    })

    navItems.forEach((item) => {
      item.classList.remove("active")
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active")
      }
    })
  }

  window.addEventListener("scroll", setActiveNavItem)

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      // Close mobile menu if open
      if (mobileNav.classList.contains("active")) {
        mobileNav.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("i")
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      }

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })

  // Parallax effect for hero section
  const heroSection = document.querySelector(".hero-section")

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY
    if (scrollPosition < 600) {
      heroSection.style.backgroundPositionY = scrollPosition * 0.5 + "px"
    }
  })

  // Add hover effect to cards
  const cards = document.querySelectorAll(".card")

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
})

// Function to load the map (to be implemented in map.html)
function loadMap() {
  // This function will be implemented in the map page
  console.log("Map loading functionality will be implemented here")
}
