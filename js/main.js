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




// window.addEventListener("load", function () {
//   const menuToggle = document.getElementById("menuToggle");

//   const dropDownMenu = document.getElementById("dropDownMenu");

//   menuToggle.addEventListener("click", () => {
//     if (
//       dropDownMenu.style.display === "none" ||
//       dropDownMenu.style.display === ""
//     ) {
//       dropDownMenu.style.display = "flex";
//     } else {
//       dropDownMenu.style.display = "none";
//     }
//   });

//   let images = Array.from(document.getElementsByClassName("gallaryCard"));
//   let imagesParent = document.getElementById("wrapper-container");
//   let imagesContent = imagesParent.children;
//   let slideIndex = 1
  
//   console.log(imagesContent)


//   // for (let counter = 0; counter < images.length; counter++) {
//   //   let elem = imagesContent[counter];
//   //   imagesContent[counter].remove();
//   // }

//   // const renderImageSlider = (imagesList) => {
//   //   for (let counter = 0; counter < imagesList.length; counter++) {
//   //     if (counter < 4) {
//   //       imagesList[counter].style.display = "flex";
//   //       requestAnimationFrame(() => {
//   //         imagesList[counter].classList.add("visible");
//   //       });
//   //     } else {
//   //       imagesList[counter].classList.remove("visible");
//   //       imagesList[counter].addEventListener("transitionend", () => {
//   //         this.style.display = "hidden";
//   //       }, { once: true });
//   //       // imagesList[counter].style.display = "none";
//   //     }
//   //   }
//   // };

//   // renderImageSlider(images);


//   // const shuffleCards = () => {
//   //   let removedElement = imagesContent[slideIndex - 1].remove()
//   //   imagesParent.appendChild(removedElement);
//   //   slideIndex++;

//   //   if (slideIndex > imagesContent.length)
//   //     {
//   //       slideIndex = 1;
//   //     }
//   // };

//   // setInterval(shuffleCards, 1000);
// });
