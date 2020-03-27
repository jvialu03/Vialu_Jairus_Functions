(() => {
  // variable stack first
  let theBox = document.querySelector(".box"),
      colorButtons = document.querySelectorAll(".colors");

  // functions in the middle
  function changeColor() {
    theBox.style.backgroundColor = this.dataset.color;
  }

  // event handling at the bottom
  colorButtons.forEach(button => button.addEventListener("click", changeColor));

})()
