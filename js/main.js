function scrollToTop() {
  window.scrollTo(0, 0);
  hideNavSlide();
}

function scrollToCenter(id) {
  const element = document.getElementById(id);
  const elementRect = element.getBoundingClientRect();
  const elementHeight = elementRect.height;
  const viewportHeight = window.innerHeight;
  const offset = elementRect.top + window.pageYOffset;

  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });

  hideNavSlide();
}


function expandSlide() {
  const screenWidth = screen.width;

  if (screenWidth <= 576) {
    return;
  }

  let slider = document.getElementById("projectSlider");

  if (!document.fullscreenElement) {
    if (slider.requestFullscreen) {
      slider.requestFullscreen();
    } else if (slider.mozRequestFullScreen) {
      // Firefox
      slider.mozRequestFullScreen();
    } else if (slider.webkitRequestFullscreen) {
      // Chrome, Safari and Opera
      slider.webkitRequestFullscreen();
    } else if (slider.msRequestFullscreen) {
      // IE/Edge
      slider.msRequestFullscreen();
    }
  }
}

function exitFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    // Firefox
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    // Chrome, Safari and Opera
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    // IE/Edge
    document.msExitFullscreen();
  }
}

document.addEventListener("fullscreenchange", function () {
  let slider = document.getElementById("projectSlider");
  if (!document.fullscreenElement) {
    slider.classList.remove("slider-image-fullscreen");
  } else {
    slider.classList.add("slider-image-fullscreen");
    console.log("Entered full-screen mode");
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const scrollButton = document.getElementById("scrollToTopBtn");
  let scrollTimeOut;

  function showScrollButton() {
      scrollButton.style.display = "block";
      setTimeout(() => {
          scrollButton.classList.add("show-button");
          scrollButton.classList.remove("hide-button");
      }, 10); // Short delay to ensure display:block takes effect
  }

  function hideScrollButton() {
      scrollButton.classList.remove("show-button");
      scrollButton.classList.add("hide-button");

      setTimeout(() => {
          scrollButton.style.display = "none";
      }, 500); // Match the duration of the CSS transition
  }

  window.addEventListener("scroll", function () {
      clearTimeout(scrollTimeOut);
      showScrollButton();

      scrollTimeOut = setTimeout(hideScrollButton, 2000);
  });
});

function hideNavSlide() {
  const nav = document.querySelector(".nav");
  const logo = document.querySelector(".image-logo");
  const toggleMenu = document.querySelector(".toggle-menu");

  toggleMenu.classList.remove("close-toggle-menu");
  nav.classList.remove("nav-active");
  logo.classList.remove("image-logo-hidden");
}

// Nav Mobile
const navSlide = () => {
  const toggleMenu = document.querySelector(".toggle-menu");
  const nav = document.querySelector(".nav");
  const logo = document.querySelector(".image-logo");

  toggleMenu.addEventListener("click", function () {
    nav.classList.toggle("nav-active");

    toggleMenu.classList.toggle("close-toggle-menu");
    logo.classList.toggle("image-logo-hidden");
  });
};

// Animate Text Banner Mobile
const animatedText = () => {
  const screenWidth = screen.width;

  if (screenWidth < 577) {
    setTimeout(function () {
      document.querySelector(".banner-content .heading").classList.add("text-animated");
      document.querySelector(".banner-content .desc").classList.add("text-animated");
    }, 2000);
  }
};

// Lazy load Mobile
document.addEventListener("DOMContentLoaded", function () {
  const screenWidth = screen.width;

  if (screenWidth > 576) {
    return;
  }

  const fadeElements = document.querySelectorAll(".section-fade-in");

  function checkViewport() {
    fadeElements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    });
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    // Calculate the bottom 1/3 of the viewport
    const viewportThreshold = viewportHeight - viewportHeight / 3;

    return rect.top <= viewportThreshold;
  }

  // Initial check when page loads
  checkViewport();

  // Check when scrolling
  document.addEventListener("scroll", checkViewport);
});

animatedText();
navSlide();
buttonScrollToTopMobile();
