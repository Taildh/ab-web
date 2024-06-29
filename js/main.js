$(document).ready(function () {
  // $('.scroll-link').click(function(e){
  //     e.preventDefault();
  //     var target = $(this).data('target');
  //     $('html, body').animate({
  //         scrollTop: $('#' + target).offset().top
  //     }, 500);
  // });
});

function scrollToTop() {
  window.scrollTo(0, 0);
  hideNavSlide()

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

  hideNavSlide()

}

// function toggleMenu () {
//     $(".nav").toggleClass("nav-active");
// }

function expandSlide() {

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
  } else {
    exitFullScreen();
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


const buttonScrollToTopMobile = () => {
  let scrollTimeOut;

  function showScrollButton() {
    const scrollButton = document.getElementById('scrollToTopBtn');;
    scrollButton.classList.add('show-button');
    scrollButton.classList.remove('hide-button');
  }
  
  function hideScrollButton() {
    const scrollButton = document.getElementById('scrollToTopBtn');;
    scrollButton.classList.remove('show-button');
    scrollButton.classList.add('hide-button');

    setTimeout(() => {
      scrollButton.classList.remove('hide-button');
      scrollButton.style.display = 'none';
  }, 500); // Match the duration of the CSS transition
  }
  
  window.addEventListener("scroll", function () {
    this.clearTimeout(scrollTimeOut);
    showScrollButton();
  
    scrollTimeOut = this.setTimeout(hideScrollButton, 2000);
  })
}

function hideNavSlide() {
  const nav = document.querySelector(".nav");
  const logo = document.querySelector(".image-logo");
  const toggleMenu = document.querySelector(".toggle-menu");

  toggleMenu.classList.remove("close-toggle-menu");
  nav.classList.remove("nav-active"); 
  logo.classList.remove("image-logo-hidden");

}

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


navSlide();
buttonScrollToTopMobile();