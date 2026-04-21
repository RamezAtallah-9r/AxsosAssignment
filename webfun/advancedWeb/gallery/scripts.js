// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// Character Database
const characterDatabase = [
  { img: "https://4kwallpapers.com/images/walls/thumbs_3t/26040.jpg", name: "Kakashi Hatake", category: "Naruto" },
  { img: "https://4kwallpapers.com/images/walls/thumbs_2t/25550.jpg", name: "Itachi Uchiha", category: "Naruto" },
  { img: "https://4kwallpapers.com/images/walls/thumbs/15469.jpg", name: "Sakura Haruno", category: "Naruto" },
  { img: "https://4kwallpapers.com/images/walls/thumbs_3t/18690.jpg", name: "Naruto Uzumaki", category: "Naruto" },
  { img: "https://4kwallpapers.com/images/walls/thumbs_3t/10831.jpg", name: "Sasuke Uchiha", category: "Naruto" },
  { img: "https://4kwallpapers.com/images/walls/thumbs_3t/19704.png", name: "Ichigo Kurosaki", category: "Bleach" },
  { img: "https://4kwallpapers.com/images/walls/thumbs_3t/19719.png", name: "Uryu Ishida", category: "Bleach" },
  { img: "https://4kwallpapers.com/images/walls/thumbs_3t/10509.png", name: "Rukia Kuchiki", category: "Bleach" },
  { img: "https://4kwallpapers.com/images/walls/thumbs_3t/25499.jpg", name: "Monkey D. Luffy", category: "One Piece" },
  { img: "https://4kwallpapers.com/images/walls/thumbs_3t/18358.jpg", name: "Roronoa Zoro", category: "One Piece" },
  { img: "https://4kwallpapers.com/images/walls/thumbs_3t/17879.png", name: "Shanks", category: "One Piece" },
  { img: "https://4kwallpapers.com/images/walls/thumbs_3t/16690.jpg", name: "Sanji", category: "One Piece" },
  { img: "https://4kwallpapers.com/images/walls/thumbs_3t/25220.jpg", name: "Yuji Itadori", category: "Jujutsu Kaisen" },
  { img: "https://4kwallpapers.com/images/walls/thumbs_3t/16721.jpg", name: "Satoru Gojo", category: "Jujutsu Kaisen" },
  { img: "https://4kwallpapers.com/images/walls/thumbs_3t/9294.jpg", name: "Sukuna", category: "Jujutsu Kaisen" },
  { img: "https://4kwallpapers.com/images/walls/thumbs_3t/14604.jpg", name: "Yuta Okkotsu", category: "Jujutsu Kaisen" }
];

// State Variables
let currentCharacterIndex = 0;
let isModalOpen = false;
let scrollTriggerInstance = null;

/**
 * Initialize Modal Gallery Images
 */
function initializeModalGallery() {
  const container = document.querySelector(".modal-images-container");
  container.innerHTML = "";
  
  characterDatabase.forEach((char, index) => {
    const img = document.createElement("img");
    img.src = char.img;
    img.alt = char.category;
    img.setAttribute("data-index", index);
    img.setAttribute("data-character", char.name);
    img.style.setProperty("--index", index);
    container.appendChild(img);
  });
}

/**
 * Open Modal with Animation
 */
function openModal(element) {
  const modal = document.querySelector(".modal");
  const titleElement = element.querySelector(".story-title");
  const categoryElement = element.querySelector(".story-series");
  
  // Find character in database
  const charIndex = characterDatabase.findIndex(
    char => char.name === titleElement.innerText
  );
  
  if (charIndex === -1) return;
  
  currentCharacterIndex = charIndex;
  isModalOpen = true;
  
  // Update modal state
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  
  // Set initial active image
  updateActiveImage(charIndex);
  
  // Setup gradient mask animation
  setupGradientMaskAnimation(charIndex);
  
  // Add keyboard listener
  document.addEventListener("keydown", handleKeyboard);
}

/**
 * Close Modal
 */
function closeModal() {
  const modal = document.querySelector(".modal");
  
  gsap.to(modal, {
    opacity: 0,
    duration: 0.3,
    ease: "power2.out",
    onComplete: () => {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
      isModalOpen = false;
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyboard);
      
      // Kill scroll triggers
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
        scrollTriggerInstance = null;
      }
    }
  });
}

/**
 * Update Active Image
 */
function updateActiveImage(index) {
  const images = document.querySelectorAll(".modal-images-container img");
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
  
  updateCharacterInfo(index);
}

/**
 * Update Character Info Display
 */
function updateCharacterInfo(index) {
  const char = characterDatabase[index];
  document.querySelector(".character-name").textContent = char.name;
  document.querySelector(".character-series").textContent = char.category;
}

/**
 * Setup Gradient Mask Reveal Animation with GSAP ScrollTrigger
 */
function setupGradientMaskAnimation(startIndex) {
  const modal = document.querySelector(".modal");
  const images = document.querySelectorAll(".modal-images-container img");
  
  // Kill previous trigger if exists
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
  }
  
  let wheelDelta = 0;
  
  // Create custom scroll animation for modal
  const handleWheel = (e) => {
    if (!isModalOpen) return;
    
    e.preventDefault();
    wheelDelta += e.deltaY;
    
    // Calculate progress (0 to 1)
    const progress = Math.min(Math.max(wheelDelta / 500, 0), 1);
    
    // Determine which image should be shown
    const nextIndex = (startIndex + 1) % characterDatabase.length;
    const prevIndex = (startIndex - 1 + characterDatabase.length) % characterDatabase.length;
    
    // Apply gradient mask animation
    images.forEach((img, index) => {
      if (index === startIndex) {
        // Current image disappears from bottom
        const maskPercentage = progress * 100;
        const maskSize = 30 + progress * 20;
        
        img.style.maskImage = `linear-gradient(to bottom, 
          black 0%, 
          black ${Math.max(0, 100 - maskPercentage - maskSize)}%, 
          transparent ${Math.max(0, 100 - maskPercentage)}%, 
          transparent 100%)`;
        img.style.webkitMaskImage = `linear-gradient(to bottom, 
          black 0%, 
          black ${Math.max(0, 100 - maskPercentage - maskSize)}%, 
          transparent ${Math.max(0, 100 - maskPercentage)}%, 
          transparent 100%)`;
        img.style.opacity = Math.max(0, 1 - progress);
      } else if (index === nextIndex) {
        // Next image reveals from bottom
        const revealPercentage = Math.max(0, (progress - 0.3) * 150);
        
        img.style.maskImage = `linear-gradient(to bottom, 
          transparent 0%, 
          transparent ${Math.max(0, 100 - revealPercentage - 30)}%, 
          black ${Math.max(0, 100 - revealPercentage)}%, 
          black 100%)`;
        img.style.webkitMaskImage = `linear-gradient(to bottom, 
          transparent 0%, 
          transparent ${Math.max(0, 100 - revealPercentage - 30)}%, 
          black ${Math.max(0, 100 - revealPercentage)}%, 
          black 100%)`;
        img.style.opacity = progress > 0.3 ? 1 : 0;
      } else {
        img.style.maskImage = "none";
        img.style.webkitMaskImage = "none";
        img.style.opacity = "0";
      }
    });
    
    // Update character info on transition
    if (progress > 0.7) {
      updateCharacterInfo(nextIndex);
      currentCharacterIndex = nextIndex;
    } else {
      updateCharacterInfo(startIndex);
    }
  };
  
  // Listen for wheel events with custom scroll behavior
  let isAnimating = false;
  const throttledWheel = (e) => {
    if (isAnimating || !isModalOpen) return;
    
    isAnimating = true;
    
    if (e.deltaY > 0) {
      // Scroll down - next character
      const nextIndex = (currentCharacterIndex + 1) % characterDatabase.length;
      animateToCharacter(nextIndex);
    } else {
      // Scroll up - previous character
      const prevIndex = (currentCharacterIndex - 1 + characterDatabase.length) % characterDatabase.length;
      animateToCharacter(prevIndex);
    }
    
    setTimeout(() => {
      isAnimating = false;
    }, 800);
  };
  
  window.addEventListener("wheel", throttledWheel, { passive: false });
  
  // Store cleanup function
  scrollTriggerInstance = {
    kill: () => {
      window.removeEventListener("wheel", throttledWheel);
    }
  };
}

/**
 * Smooth Animation Between Characters
 */
function animateToCharacter(newIndex) {
  const images = document.querySelectorAll(".modal-images-container img");
  const currentImg = images[currentCharacterIndex];
  const nextImg = images[newIndex];
  
  // Create smooth transition timeline
  const tl = gsap.timeline();
  
  // Fade out current image and info
  tl.to(".character-name", {
    opacity: 0,
    y: -20,
    duration: 0.3,
  }, 0);
  
  // Animate mask reveal
  tl.to({}, {
    duration: 0.8,
    onUpdate: function() {
      const progress = this.progress();
      const maskPercentage = progress * 100;
      const maskSize = 30 + progress * 20;
      
      currentImg.style.maskImage = `linear-gradient(to bottom, 
        black 0%, 
        black ${Math.max(0, 100 - maskPercentage - maskSize)}%, 
        transparent ${Math.max(0, 100 - maskPercentage)}%, 
        transparent 100%)`;
      currentImg.style.webkitMaskImage = currentImg.style.maskImage;
      currentImg.style.opacity = Math.max(0, 1 - progress);
      
      const revealPercentage = Math.max(0, (progress - 0.3) * 150);
      nextImg.style.maskImage = `linear-gradient(to bottom, 
        transparent 0%, 
        transparent ${Math.max(0, 100 - revealPercentage - 30)}%, 
        black ${Math.max(0, 100 - revealPercentage)}%, 
        black 100%)`;
      nextImg.style.webkitMaskImage = nextImg.style.maskImage;
      nextImg.style.opacity = progress > 0.3 ? 1 : 0;
    }
  }, 0);
  
  // Fade in new info
  tl.call(() => {
    currentCharacterIndex = newIndex;
    updateActiveImage(newIndex);
  }, null, 0.4);
  
  tl.to(".character-name", {
    opacity: 1,
    y: 0,
    duration: 0.4,
  }, 0.6);
}

/**
 * Keyboard Navigation
 */
function handleKeyboard(e) {
  if (!isModalOpen) return;
  
  switch(e.key) {
    case "Escape":
      closeModal();
      break;
    case "ArrowDown":
      e.preventDefault();
      animateToCharacter((currentCharacterIndex + 1) % characterDatabase.length);
      break;
    case "ArrowUp":
      e.preventDefault();
      animateToCharacter((currentCharacterIndex - 1 + characterDatabase.length) % characterDatabase.length);
      break;
  }
}

/**
 * Category Filtering with GSAP
 */
function filterByCategory(category) {
  const cards = document.querySelectorAll(".story-card");
  
  cards.forEach((card, index) => {
    const seriesElement = card.querySelector(".story-series");
    const cardCategory = seriesElement?.textContent?.trim();
    const shouldShow = category === "all" || cardCategory === category;
    
    if (shouldShow) {
      gsap.to(card, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.4,
        delay: index * 0.05,
      });
    } else {
      gsap.to(card, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.4,
        delay: index * 0.05,
      });
    }
  });
}

/**
 * Initialize Event Listeners
 */
function initializeEventListeners() {
  // Modal close button
  document.querySelector(".modal-close").addEventListener("click", closeModal);
  
  // Category filters
  document.querySelectorAll(".category-item").forEach(btn => {
    btn.addEventListener("click", function() {
      const category = this.getAttribute("data-category");
      
      // Update active state
      document.querySelectorAll(".category-item").forEach(b => {
        b.classList.remove("active");
      });
      this.classList.add("active");
      
      // Filter gallery
      filterByCategory(category);
    });
  });
  
  // Story card keyboard access
  document.querySelectorAll(".story-card").forEach(card => {
    card.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        openModal(card);
      }
    });
  });
}

/**
 * Stagger Animation for Gallery on Load
 */
function animateGalleryOnLoad() {
  const cards = document.querySelectorAll(".story-card");
  
  gsap.from(cards, {
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: {
      amount: 0.4,
      from: "start"
    },
    ease: "power2.out"
  });
}

/**
 * Initialize Application
 */
document.addEventListener("DOMContentLoaded", function() {
  console.log("AnimeWorld Gallery Initialized");
  
  // Initialize modal gallery
  initializeModalGallery();
  
  // Setup event listeners
  initializeEventListeners();
  
  // Animate gallery on load
  animateGalleryOnLoad();
  
  // Prevent default scroll behavior in modal
  document.addEventListener("wheel", (e) => {
    if (isModalOpen) {
      e.preventDefault();
    }
  }, { passive: false });
});

/**
 * Cleanup on page unload
 */
window.addEventListener("beforeunload", () => {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
  }
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});