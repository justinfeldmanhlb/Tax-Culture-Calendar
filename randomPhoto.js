// randomPhoto.js
document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "photo1.png",
    "photo2.png",
    "photo3.png"
  ];

  // Pick a random index
  const randomIndex = Math.floor(Math.random() * images.length);

  // Select the image element in your main HTML
  const bottomImage = document.getElementById("bottom-image");

  // Set its src to one of the images
  if (bottomImage) {
    bottomImage.src = images[randomIndex];
  }
});
