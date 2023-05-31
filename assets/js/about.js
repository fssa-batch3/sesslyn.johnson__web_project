function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (const reveal of reveals) {
    let windowHeight = window.innerHeight;
    let elementTop = reveal.getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

