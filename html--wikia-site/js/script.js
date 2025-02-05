const year = new Date().getFullYear();

const successfulMessage = () => {
  return `<p class=message>message sended!!</p>`;
};

document.querySelector(".logo-container").addEventListener("click", () => {
  document.getElementById("navbar").classList.remove("navbar--show");
  document.querySelector("aside.left-menu").classList.toggle("left-menu--show");
});

document.querySelector(".menu-bars-container").addEventListener("click", () => {
  document.querySelector("aside.left-menu").classList.remove("left-menu--show");
  document.getElementById("navbar").classList.toggle("navbar--show");
});

document.getElementById("footprint").textContent += " " + year;

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const objectData = Object.fromEntries(data);
  console.log(objectData);
  event.target.insertAdjacentHTML("beforeend", successfulMessage());
});
