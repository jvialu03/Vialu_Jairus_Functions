(() => {
  // variable stack first
  let theBox = document.querySelector(".box"),
      colorButtons = document.querySelectorAll(".colors");

  // functions in the middle
  function changeColor(elem, color) {
    // theBox.style.backgroundColor = this.dataset.color;
    console.log(elem, color);
    document.querySelector(`${elem}`).style.backgroundColor = color;

    reportChange(elem, color);
  }

  function reportChange(el, col) {
    console.log(`You changed the background color of ${el} to ${col}`);
  }

  // event handling at the bottom
  colorButtons.forEach(button => button.addEventListener("click", function() {
    changeColor(button.dataset.target, button.dataset.color);
  }));
})()
