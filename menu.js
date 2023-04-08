const open = document.querySelector(".mob-open");
const close = document.querySelector(".mob-close");

const wrapper = document.querySelector(".mob-wrapper").classList;

open.addEventListener("click", () => {
  wrapper.toggle("opened");
  wrapper.toggle("close");
});

close.addEventListener("click", () => {
  wrapper.toggle("opened");
  wrapper.toggle("close");
});
