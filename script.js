var piccies;


piccies = ['https://image.shutterstock.com/image-photo/behrai-kabab1-600w-154637972.jpg', 'https://image.shutterstock.com/image-photo/chicken-biryani-showing-leg-piece-600w-353098577.jpg', 'https://image.shutterstock.com/image-photo/samosa-on-plate-sauce-tomatoes-600w-255644446.jpg', 'https://image.shutterstock.com/image-photo/closeup-mince-paratha-600w-84751744.jpg', 'https://image.shutterstock.com/image-photo/tasty-butter-chicken-curry-dish-600w-1153329448.jpg', 'https://image.shutterstock.com/image-photo/hot-spicy-soup-chickpeas-onions-600w-1869258109.jpg'];
let element_carousel = document.getElementById('carousel');
element_carousel.setAttribute("src", 'https://image.shutterstock.com/image-photo/behrai-kabab1-600w-154637972.jpg');


document.getElementById('nex').addEventListener('click', (event) => {
  let element_carousel2 = document.getElementById('carousel');
  element_carousel2.setAttribute("src", piccies[0]);

});

document.getElementById('pre').addEventListener('click', (event) => {
  let element_carousel3 = document.getElementById('carousel');
  element_carousel3.setAttribute("src", piccies.slice(-1)[0]);

});



