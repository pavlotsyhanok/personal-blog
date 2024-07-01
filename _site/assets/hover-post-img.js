document.addEventListener("DOMContentLoaded", function () {
  // Check if the device is touch-based or mobile
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice) {
    const contentDivs = document.querySelectorAll('li'); // Target all li elements

    contentDivs.forEach(contentDiv => {
      const hoverImage = contentDiv.querySelector(".hover-image");
      const homepagePost = contentDiv.querySelector("a.homepage-post");

      if (hoverImage && homepagePost) {
        homepagePost.addEventListener("mouseover", function (event) {
          hoverImage.style.display = "block";
          hoverImage.style.top = `${event.clientY - hoverImage.offsetHeight - 10}px`; // Position above cursor
          hoverImage.style.left = `${event.clientX}px`; // Position at cursor's x position
        });

        homepagePost.addEventListener("mousemove", function (event) {
          hoverImage.style.top = `${event.clientY - hoverImage.offsetHeight - 10}px`; // Position above cursor
          hoverImage.style.left = `${event.clientX}px`; // Position at cursor's x position
        });

        homepagePost.addEventListener("mouseout", function () {
          hoverImage.style.display = "none";
        });
      }
    });
  }
});
