/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================


const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================

const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================

test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");
prettify.toHTML(run(), console);
*/


document.getElementById('add1').addEventListener('click', (event) => {
  let element_cart = document.getElementById('cart');
  let new_li = document.createElement('li');
  new_li.innerText = 'Bracelet';
 
  element_cart.appendChild(new_li);
 
});
 
document.getElementById('add2').addEventListener('click', (event) => {
  let element_cart2 = document.getElementById('cart');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'Earrings';
 
  element_cart2.appendChild(new_li2);
 
});
 
document.getElementById('add3').addEventListener('click', (event) => {
  let element_cart3 = document.getElementById('cart');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'Ring';
 
  element_cart3.appendChild(new_li3);
 
});
 
document.getElementById('add4').addEventListener('click', (event) => {
  let element_cart4 = document.getElementById('cart');
  let new_li4 = document.createElement('li');
  new_li4.innerText = 'Necklace';
 
  element_cart4.appendChild(new_li4);
 
});
 
document.getElementById('add5').addEventListener('click', (event) => {
  let element_cart5 = document.getElementById('cart');
  let new_li5 = document.createElement('li');
  new_li5.innerText = 'Anklet';
 
  element_cart5.appendChild(new_li5);
 
});




var foodimgs;


foodimgs = ['https://image.shutterstock.com/image-photo/tasty-butter-chicken-curry-dish-600w-1153329448.jpg', 'https://image.shutterstock.com/image-photo/hot-spicy-soup-chickpeas-onions-600w-1869258109.jpg', 'https://image.shutterstock.com/image-photo/chicken-biryani-showing-leg-piece-600w-353098577.jpg', 'https://image.shutterstock.com/image-photo/samosa-on-plate-sauce-tomatoes-600w-255644446.jpg', 'https://image.shutterstock.com/image-photo/closeup-mince-paratha-600w-84751744.jpg', 'https://image.shutterstock.com/image-photo/behrai-kabab1-600w-154637972.jpg'];
let element_carousel = document.getElementById('carousel');
element_carousel.setAttribute("src", foodimgs[0]);


document.getElementById('nex').addEventListener('click', (event) => {
  let element_carousel2 = document.getElementById('carousel');
  foodimgs.push(foodimgs.shift());
  element_carousel2.setAttribute("src", foodimgs[0]);

});

document.getElementById('pre').addEventListener('click', (event) => {
  let element_carousel3 = document.getElementById('carousel');
  foodimgs.unshift(foodimgs.pop());
  element_carousel3.setAttribute("src", foodimgs[0]);

});
