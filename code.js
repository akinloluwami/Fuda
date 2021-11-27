//Buttons
const burgerBtn = document.querySelector(".burger");
const pizzaBtn = document.querySelector(".pizza");
const cupCakeBtn = document.querySelector(".cupcake");
const ramenBtn = document.querySelector(".ramen");
const iceCreamBtn = document.querySelector(".ice-cream");
const hamburgerBtn = document.querySelector(".hamburger");
//Menus
const burgerMenu = document.querySelector(".burger-menu");
const pizzaMenu = document.querySelector(".pizza-menu");
const cupCakeMenu = document.querySelector(".cupcake-menu");
const ramenMenu = document.querySelector(".ramen-menu");
const iceCreamMenu = document.querySelector(".icecream-menu");

//Other
const headerContent = document.querySelector(".header-content");

hamburgerBtn.addEventListener("click", () => {
  // window.location.href = "../index.html";
  headerContent.classList.toggle("header-content-active");
  console.log("clicked");
});
//Initials

pizzaMenu.style.display = "none";
burgerMenu.style.display = "flex";
cupCakeMenu.style.display = "none";
ramenMenu.style.display = "none";
iceCreamMenu.style.display = "none";

burgerBtn.style.backgroundColor = "#f54749";

//Eventlisteners
burgerBtn.addEventListener("click", () => {
  burgerBtn.style.backgroundColor = "#f54749";
  pizzaBtn.style.backgroundColor = "#feecea";
  cupCakeBtn.style.backgroundColor = "#feecea";
  burgerMenu.style.display = "flex";
  pizzaMenu.style.display = "none";
  cupCakeMenu.style.display = "none";
  ramenMenu.style.display = "none";
  ramenBtn.style.backgroundColor = "#feecea";
  iceCreamMenu.style.display = "none";
  iceCreamBtn.style.backgroundColor = "#feecea";
});
pizzaBtn.addEventListener("click", () => {
  pizzaBtn.style.backgroundColor = "#f54749";
  burgerBtn.style.backgroundColor = "#feecea";
  cupCakeBtn.style.backgroundColor = "#feecea";
  pizzaMenu.style.display = "flex";
  burgerMenu.style.display = "none";
  cupCakeMenu.style.display = "none";
  ramenMenu.style.display = "none";
  ramenBtn.style.backgroundColor = "#feecea";
  iceCreamMenu.style.display = "none";
  iceCreamBtn.style.backgroundColor = "#feecea";
});
cupCakeBtn.addEventListener("click", () => {
  cupCakeBtn.style.backgroundColor = "#f54749";
  burgerBtn.style.backgroundColor = "#feecea";
  pizzaBtn.style.backgroundColor = "#feecea";
  pizzaMenu.style.display = "none";
  burgerMenu.style.display = "none";
  cupCakeMenu.style.display = "flex";
  ramenMenu.style.display = "none";
  ramenBtn.style.backgroundColor = "#feecea";
  iceCreamMenu.style.display = "none";
  iceCreamBtn.style.backgroundColor = "#feecea";
});
ramenBtn.addEventListener("click", () => {
  ramenBtn.style.backgroundColor = "#f54749";
  burgerBtn.style.backgroundColor = "#feecea";
  pizzaBtn.style.backgroundColor = "#feecea";
  cupCakeBtn.style.backgroundColor = "#feecea";
  ramenMenu.style.display = "flex";
  pizzaMenu.style.display = "none";
  burgerMenu.style.display = "none";
  cupCakeMenu.style.display = "none";
  iceCreamMenu.style.display = "none";
  iceCreamBtn.style.backgroundColor = "#feecea";
});
iceCreamBtn.addEventListener("click", () => {
  iceCreamBtn.style.backgroundColor = "#f54749";
  ramenBtn.style.backgroundColor = "#feecea";
  burgerBtn.style.backgroundColor = "#feecea";
  pizzaBtn.style.backgroundColor = "#feecea";
  cupCakeBtn.style.backgroundColor = "#feecea";
  ramenMenu.style.display = "none";
  pizzaMenu.style.display = "none";
  burgerMenu.style.display = "none";
  cupCakeMenu.style.display = "none";
  iceCreamMenu.style.display = "flex";
});
