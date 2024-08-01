document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // Initialize Lenis
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Hamburger menu part
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Smooth scroll with Lenis
  document.querySelectorAll(".nav-links a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      // Smooth scroll using Lenis
      lenis.scrollTo(targetElement, {
        behavior: "smooth",
      });

      navLinks.classList.remove("active");
    });
  });

  // Card second page
  const cardsContainer = document.querySelector(".cards");
  const cardData = [
    {
      Icon: "./Assests/ambulance-icon.png",
      title: "Emergency Care",
      content:
        "In urgent situations, quick access to medical help is crucial. Our platform connects you with emergency care services fast, ensuring you get the support you need when time is of the essence.",
    },
    {
      Icon: "./Assests/heart-beaticon.png",
      title: "Heart",
      content:
        "Heart health is crucial. Our platform connects you with cardiology experts for timely consultations and care. Schedule your heart check-ups easily and get expert advice with just a few clicks.",
    },
    {
      Icon: "./Assests/tooth-icon.png",
      title: "Dental Care",
      content:
        "Keep your smile bright and healthy. Our platform connects you with top dental professionals for check-ups, treatments, and emergencies. Book appointments easily and maintain optimal dental health.",
    },
  ];

  const createCard = (card) => {
    return `
      <div class="card">
        <img src="${card.Icon}" alt="${card.title}" class="card-icon">
        <div class="card-title">${card.title}</div>
        <div class="card-content">${card.content}</div>
      </div>
    `;
  };

  if (cardsContainer) {
    cardsContainer.innerHTML = cardData.map(createCard).join("");
  } else {
    console.error("Cards container not found");
  }

  const legalLinks = document.querySelectorAll(".legal-link");

  legalLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const page = link.getAttribute("data-page");
      window.location.href = "./legalpage.html";
    });
  });
});
