const wrapper = document.querySelector(".text-wrapper");
const wrapperTop = wrapper.getBoundingClientRect().top;

window.addEventListener("scroll", () => {
  let scroll = scrollY;
  wrapper.style.top = `${wrapperTop + scroll}px`;
});

document.addEventListener("DOMContentLoaded", () => {
  wrapper.classList.add("animate");
});
