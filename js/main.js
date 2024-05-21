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

const shuffleCards = () => {
  const imagesCards = Array.from(document.querySelectorAll(".gallaryCard"));
  let firstCard = imagesCards.shift();
  imagesCards.push(firstCard);
  
};

setInterval(shuffleCards, 1000);
