window.addEventListener("scroll", function() {
    var projectsSection = document.getElementById("projects");
    var projectBox = document.querySelector(".project-box");
    var projectImage = document.querySelector(".project-image");

    var scrollPosition = window.scrollY;

    // Adjust these values based on your design and content
    var animationStart = projectsSection.offsetTop - window.innerHeight;
    var animationEnd = projectsSection.offsetTop + projectsSection.offsetHeight;

    if (scrollPosition > animationStart && scrollPosition < animationEnd) {
      projectBox.classList.add("slide-left");
      projectImage.classList.add("slide-right");
    } else {
      projectBox.classList.remove("slide-left");
      projectImage.classList.remove("slide-right");
    }

    // Fade out when scrolling away
    if (scrollPosition > animationEnd || scrollPosition < animationStart) {
      projectImage.classList.add("fade-out-right");
      projectBox.classList.add("fade-out-left");
    } else {
      projectImage.classList.remove("fade-out-right");
      projectBox.classList.remove("fade-out-left");
    }
});