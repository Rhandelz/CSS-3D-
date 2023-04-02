let head_slide = document.querySelector(".head_slide");
let slide = document.querySelector(".contain");
let stopper = document.querySelectorAll(".contain");
let l = document.getElementById("left");
let r = document.getElementById("right");
let move = slide.clientWidth;
let counter = 0;

l.addEventListener("click", () => {
  if (counter >= stopper.length - 1) {
    head_slide.style.transform = "translateX(0)";
    console.log("done");
    counter = 0;
  } else {
    counter++;
    head_slide.style.transform = `translateX(${-move * counter}px)`;
  }
});

r.addEventListener("click", (e) => {
  e.stopPropagation();
  let ll = stopper.length - 1;
  if (counter <= 0) {
    console.log(counter);
    counter = stopper.length - 1;
    head_slide.style.transform = `translateX(${-move * ll}px)`;
  } else {
    counter--;
    head_slide.style.transform = `translateX(${-move * counter}px)`;
  }
});
