const burger = document.querySelector("#burger");
const navMenu = document.querySelector("#navMenu");

burger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const postits = document.querySelectorAll(".postit");

postits.forEach((postit) => {
  postit.addEventListener("click", () => {
    postits.forEach((note) => {
      if (note !== postit) {
        note.classList.remove("active");
      }
    });

    postit.classList.toggle("active");
  });
});

const mainImage = document.querySelector("#mainImage");
const thumbnails = document.querySelectorAll(".thumb");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentImage = 0;

if (mainImage && thumbnails.length > 0) {
  const images = Array.from(thumbnails).map((thumb) => thumb.src);

  function showImage(index) {
    mainImage.src = images[index];

    thumbnails.forEach((thumb) => {
      thumb.classList.remove("active");
    });

    thumbnails[index].classList.add("active");
  }

  showImage(0);

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      currentImage = index;
      showImage(currentImage);
    });
  });

  prevBtn.addEventListener("click", () => {
    currentImage = currentImage === 0 ? images.length - 1 : currentImage - 1;
    showImage(currentImage);
  });

  nextBtn.addEventListener("click", () => {
    currentImage = currentImage === images.length - 1 ? 0 : currentImage + 1;
    showImage(currentImage);
  });
}
