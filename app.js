'use strict';

var imagesArray = [];

// var imageOne = document.getElementById('imageOne');
// var imageTwo = document.getElementById('imageTwo');
// var imageThree = document.getElementById('imageThree');
//imageOne.addEventListener('click', )
//var results = document.getElementById('results');

//var counter = 0;

function Product(name, path) {
  this.name = name;
  this.path = path;
  // this.shown = shown;
  // this.clicks = clicks;
  // this.canDisplay = canDisplay;
}

var bag = new Product('bag', './images/bag.jpg');
var banana = new Product('banana', './images/banana.jpg');
var bathroom = new Product('bathroom', './images/bathroom.jpg');
var boots = new Product('boots', './images/boots.jpg');
var breakfast = new Product('breakfast', './images/breakfast.jpg');
var bubblegum = new Product('bubblegum', './images/bubblegum.jpg');
var chair = new Product('chair', './images/chair.jpg');
var cthulhu = new Product('cthulhu', './images/cthulhu.jpg');
var dogDuck = new Product('dog-duck', './images/dog-duck.jpg');
var dragon = new Product('dragon', './images/dragon.jpg');
var pen = new Product('pen', './images/pen.jpg');
var petSweep = new Product('pet-sweep', './images/pet-sweep.jpg');
var scissors = new Product('scissors', './images/scissors.jpg');
var shark = new Product('shark', './images/shark.jpg');
var sweep = new Product('sweep', './images/sweep.png');
var tauntaun = new Product('tauntaun', './images/tauntaun.jpg');
var unicorn = new Product('unicorn', './images/unicorn.jpg');
var usb = new Product('usb', './images/usb.gif');
var waterCan = new Product('water-can', './images/water-can.jpg');
var wineGlass = new Product('wineGlass', './images/wine-glass.jpg');

imagesArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass);
  //console.log(imagesArray);

function randomImageIndex() {
  var randomImage = Math.floor(Math.random() * imagesArray.length);
  return imagesArray[randomImage];
}
//console.log(randomizeImage());
//randomizeImage();

function imageDisplay () {
  var imageOneDisplay = document.getElementById('imageOne');
  var randomOneImage = randomImageIndex();
  imageOneDisplay.setAttribute('src', randomOneImage.path);

  var imageTwoDisplay = document.getElementById('imageTwo');
  var randomTwoImage = randomImageIndex();
  imageTwoDisplay.setAttribute('src', randomTwoImage.path);

  var imageThreeDisplay = document.getElementById('imageThree');
  var randomThreeImage = randomImageIndex();
  imageThreeDisplay.setAttribute('src', randomThreeImage.path);
}
imageDisplay();
// imageOne.addEventListener('click', function() {
//   trackClicks(first);
//   randomizeImages();
// });
//
// imageTwo.addEventListener('click', function() {
//   trackClicks(second);
//   randomizeImages();
// });
//
// imageThree.addEventListener('click', function() {
//   trackClicks(third);
//   randomizeImages();
// });
//
// function tallyClicks() {
//   results.style.visibility
// }
