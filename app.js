'use strict';

var imagesArray = [];
var clicksArray = [];
var counter = 0;
var usedImage = [];
var totalClicks = 0;

// var imageOne = document.getElementById('imageOne');
// var imageTwo = document.getElementById('imageTwo');
// var imageThree = document.getElementById('imageThree');
//var results = document.getElementById('results');

//imageOne.addEventListener('click', )

function Product(name, path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicks = 0;
  //this.display = Display;
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
  for (var i = 0; i < 20; i++) {
    var randomImage = Math.floor(Math.random() * imagesArray.length);
    if (usedImage.includes(imagesArray[randomImage]) === false) {
      usedImage.push(imagesArray[randomImage]);
      return imagesArray[randomImage];
    }
  }
  //console.log(randomImage);
}
// if (usedImage.includes(imagesArray[randomImage])) {}
//console.log(randomizeImage());
//randomizeImage();

function render() {
  var imageTags = document.getElementsByClassName('imagePlace');
  var newUsed = [];

  var firstImg = randomImageIndex();
  newUsed.push(firstImg);

  var secondImg = randomImageIndex();
  newUsed.push(secondImg);

  var thirdImg = randomImageIndex();
  newUsed.push(thirdImg);

  imageTags[0].setAttribute('src', firstImg.path);
  imageTags[1].setAttribute('src', secondImg.path);
  imageTags[2].setAttribute('src', thirdImg.path);

  usedImage = newUsed;
}

function createListener() {
  for (var i = 0; i < usedImage.length; i++) {
    if (this.getAttribute('src') === usedImage[i].path) {
      usedImage[i].clicks += 1;
      break;
    }
  }

  totalClicks += 1;
  render();
  console.log(totalClicks);
}

function attachListener() {
  var imageTags = document.getElementsByClassName('imagePlace');

  imageTags[0].addEventListener('click', createListener);
  imageTags[1].addEventListener('click', createListener);
  imageTags[2].addEventListener('click', createListener);
}

function imageDisplay() {
  render();
  attachListener();
}
imageDisplay();

// function clickCount(clickTracker) {
//   var clicksArray;
//   console.log(clickArray);
//   if(clicksArray == true) {
//     clickedElement = event.srcElement;
//   } else {
//     clickedElement = e.target;
//     }
//     arrayWithElements.push(clicksArray)
// }
// function clickHandler() {

//

// }
// function tallyClicks() {
//   results.style.visibility
// }
