const letters = document.getElementsByClassName("jump");
const subtitle = document.getElementById("subtitle");

// ||||||||||||||||| recurring animation on title |||||||||||||||||
setInterval(() => {
  for (let i = 0; i < letters.length; i++) {
    setTimeout(() => {
      letters[i].classList.add("jump-animation");
      setTimeout(() => {
        letters[i].classList.remove("jump-animation");
      }, 1000);
    }, i * 100);
  }
}, 5000);

// ||||||||||||||| "hover" animation on title |||||||||||||||
for (let i = 0; i < letters.length; i++) {
  letters[i].addEventListener("mouseenter", () => {
    letters[i].classList.add("jump-animation");
    setTimeout(() => {
      letters[i].classList.remove("jump-animation");
    }, 400);
  });
}

// ||||||||||||||| intro animation on subtitle ||||||||||||||||
subtitle.classList.add("title__subtitle-intro-animation");
setTimeout(() => {
  subtitle.classList.remove("title__subtitle-intro-animation")
  subtitle.classList.add("title__subtitle-after-intro")
}, 1500)

// |||||||||||||||| scroll animations |||||||||||||||||||
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section_title-animation");
      return
    }

    //entry.target.classList.remove("section_title-animation")
  })
})

document.querySelectorAll(".section_title").forEach((element) => {
  if (element) {
    observer.observe(element)
  }
})

document.querySelectorAll(".description").forEach((element) => {
  if (element) {
    observer.observe(element)
  }
})

document.querySelectorAll(".project").forEach((element) => {
  if (element) {
    observer.observe(element)
  }
})
