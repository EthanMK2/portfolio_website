const letters = document.getElementsByClassName("jump");

// recurring animation
setInterval(() => {
  for (let i = 0; i < letters.length; i++) {
    setTimeout(() => {
      letters[i].classList.add("jump-animation");
      setTimeout(() => {
        letters[i].classList.remove("jump-animation");
      }, 1000);
    }, i * 100);
  }
}, 6000);

// "hover" animation
for (let i = 0; i < letters.length; i++) {
  letters[i].addEventListener("mouseenter", () => {
    letters[i].classList.add("jump-animation");
    setTimeout(() => {
      letters[i].classList.remove("jump-animation");
    }, 400);
  });
}
