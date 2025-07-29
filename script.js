// ==== Artify AI: script.js ====

// -------------------------------------------
// Utility: Wait for DOM to load
// -------------------------------------------
window.addEventListener("DOMContentLoaded", () => {
  initNavbarAnimation();
  initHeroAnimation();
  initScrollSections();
  initButtonHoverEffect();
  initFeatureHover();
  initTestimonialsScroll();
  initFAQScroll();
  initContactFormAnimation();
  initFooterAnimation();
  initNavScrollLink();
  // Add more initializations if you expand sections
});

// -------------------------------------------
// 1. Navbar Slide-In on Load
// -------------------------------------------
function initNavbarAnimation() {
  gsap.from("nav", {
    duration: 1,
    y: -100,
    ease: "power2.out"
  });
}

// -------------------------------------------
// 2. Hero Animation (Text Entrance Stagger)
// -------------------------------------------
function initHeroAnimation() {
  gsap.from(".hero h1, .hero p, .hero .btn", {
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.5
  });
}

// -------------------------------------------
// 3. Button Hover (Pulse Effect)
// -------------------------------------------
function initButtonHoverEffect() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, { scale: 1.1, duration: 0.3, ease: "elastic.out(1, 0.4)" });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.inOut" });
    });
  });
}

// -------------------------------------------
// 4. Scroll-Triggered Section Reveal
// Applies to all `.fade-section`
// -------------------------------------------
function initScrollSections() {
  const sections = document.querySelectorAll(".fade-section");
  gsap.utils.toArray(sections).forEach(section => {
    gsap.fromTo(section, 
      { opacity: 0, y: 50 }, 
      {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      }
    );
  });
}

// -------------------------------------------
// 5. Feature Cards: Hover Scaling
// -------------------------------------------
function initFeatureHover() {
  const cards = document.querySelectorAll(".feature-card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
        duration: 0.3,
        ease: "power2.out"
      });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        scale: 1,
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        duration: 0.3,
        ease: "power2.inOut"
      });
    });
  });
}

// -------------------------------------------
// 6. Testimonials Section Reveal with Stagger
// -------------------------------------------
function initTestimonialsScroll() {
  const cards = document.querySelectorAll(".testimonial-card");
  gsap.utils.toArray(cards).forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 80,
      duration: 1,
      delay: index * 0.2,
      ease: "power3.out"
    });
  });
}

// -------------------------------------------
// 7. FAQ Items Animate In from Left
// -------------------------------------------
function initFAQScroll() {
  const faqs = document.querySelectorAll(".faq-item");
  gsap.utils.toArray(faqs).forEach((item, idx) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 90%"
      },
      x: -50,
      opacity: 0,
      duration: 0.8,
      delay: idx * 0.1,
      ease: "back.out(1.5)"
    });
  });
}

// -------------------------------------------
// 8. Contact Form Animations
// -------------------------------------------
function initContactFormAnimation() {
  gsap.from(".contact h2", {
    scrollTrigger: {
      trigger: ".contact",
      start: "top 90%"
    },
    y: 40,
    opacity: 0,
    duration: 1
  });
  gsap.from(".contact form", {
    scrollTrigger: {
      trigger: ".contact",
      start: "top 85%"
    },
    scale: 0.95,
    opacity: 0,
    duration: 1,
    delay: 0.3
  });
}

// -------------------------------------------
// 9. Footer Fade-Up on Reach
// -------------------------------------------
function initFooterAnimation() {
  gsap.from("footer", {
    scrollTrigger: {
      trigger: "footer",
      start: "top 90%"
    },
    opacity: 0,
    y: 40,
    duration: 1.2
  });
}

// -------------------------------------------
// 10. Smooth Scroll for Navigation Links
// -------------------------------------------
function initNavScrollLink() {
  document.querySelectorAll("nav a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        gsap.to(window, { duration: 1, scrollTo: target.offsetTop - 80 });
      }
    });
  });
}

// -------------------------------------------
// 11. Optional: Typing Effect on Hero Title
// -------------------------------------------
(function typeText() {
  const el = document.querySelector(".hero h1");
  const text = el.innerText;
  el.innerText = "";
  let idx = 0;
  function type() {
    if (idx < text.length) {
      el.innerText += text[idx++];
      setTimeout(type, 100);
    }
  }
  type();
})();


// -------------------------------------------
// 12. Expand with Custom Interactions
// (Add more functions if you add more sections)
// -------------------------------------------

function initBonusSection() {
  gsap.from(".bonus-section .bonus-card", {
    scrollTrigger: {
      trigger: ".bonus-section",
      start: "top 85%"
    },
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.2
  });
}




