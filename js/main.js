window.addEventListener("load", function () {
  const menuToggle = document.getElementById("menuToggle");

  const dropDownMenu = document.getElementById("dropDownMenu");

  menuToggle.addEventListener("click", () => {
    if (
      dropDownMenu.style.display === "none" ||
      dropDownMenu.style.display === ""
    ) {
      dropDownMenu.style.display = "flex";
    } else {
      dropDownMenu.style.display = "none";
    }
  });

  let images = Array.from(document.getElementsByClassName("gallaryCard"));


  for (let counter = 0; counter < images.length; counter++) {
    images[counter].style.display = "none";
  }

  const renderImageSlider = (imagesList) => {
    for (let counter = 0; counter < imagesList.length; counter++) {
      if (counter < 4) {
        imagesList[counter].style.display = "flex";
        requestAnimationFrame(() => {
          imagesList[counter].classList.add("visible");
        });
      } else {
        imagesList[counter].classList.remove("visible");
        imagesList[counter].addEventListener("transitionend", () => {
          this.style.display = "hidden";
        }, { once: true });
        // imagesList[counter].style.display = "none";
      }
    }
  };

  renderImageSlider(images);


  const shuffleCards = () => {
    let firstCard = images.shift();
    images.push(firstCard);
    renderImageSlider(images);
  };

  setInterval(shuffleCards, 1000);
});
