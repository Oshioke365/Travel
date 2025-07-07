const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content img", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__signature", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".tour__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

const banner = document.querySelector(".banner__wrapper");
const bannerImages = Array.from(banner.children);

bannerImages.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});


//darkmode section
// Select the button and body
// Select the button, body, navbar, and all sections (including About)
const darkModeButton = document.getElementById('darkModeToggle');
const body = document.body;
const nav = document.querySelector('nav');
const sections = document.querySelectorAll('section');
const aboutSection = document.getElementById('about'); // Assuming the About section has this ID

// Check if dark mode is already enabled in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  nav.classList.add('dark-mode');
  sections.forEach(section => section.classList.add('dark-mode'));
  aboutSection.classList.add('dark-mode'); // Make sure About section is also toggled
  darkModeButton.innerHTML = '🌞'; // Change to sun icon for light mode
}

// Toggle dark mode on button click
darkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  nav.classList.toggle('dark-mode');
  sections.forEach(section => section.classList.toggle('dark-mode'));
  aboutSection.classList.toggle('dark-mode'); // Ensure About section is toggled
  
  // Save the dark mode preference in localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
    darkModeButton.innerHTML = '🌞'; // Change to sun icon for light mode
  } else {
    localStorage.removeItem('darkMode');
    darkModeButton.innerHTML = '🌙'; // Change to moon icon for dark mode
  }
});
