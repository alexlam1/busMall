'use strict';

var imagesArray = [];
var clicksArray = [];
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

if (localStorage.imagesArray) {
  imagesArray = JSON.parse(localStorage.imagesArray);
  console.log('loaded imagesArray: ', imagesArray);
  totalClicks = JSON.parse(localStorage.totalClicks);
  console.log('loaded totalClicks: ', totalClicks);
} else {
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
}
function randomImageIndex() {
  for (var i = 0; i < 20; i++) {
    var randomImage = Math.floor(Math.random() * imagesArray.length);
    if (usedImage.includes(imagesArray[randomImage]) === false) {
      usedImage.push(imagesArray[randomImage]);  // <-- This & return
      return imagesArray[randomImage];
    }
  }
}
  //console.log(randomImage);

// if (usedImage.includes(imagesArray[randomImage])) {}
//console.log(randomizeImage());
//randomizeImage();
// question render methods ************
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
      break;    // break?
    }
  }
  totalClicks += 1;
  save();
  stop();
  render();
  console.log(totalClicks);
}
function save() {
  localStorage.totalClicks = JSON.stringify(totalClicks);
  localStorage.imagesArray = JSON.stringify(imagesArray);
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

function results() {
  makeChart();
  var list = document.getElementById('results');
  var resultsArray = [];
  for (var i = 0; i < 20; i++) {
    resultsArray.push('<li>Total number of clicks for ' + imagesArray[i].name + ': ' + imagesArray[i].clicks + '</li>');

  }
  list.innerHTML = resultsArray.join(',');
}

function stop() {
  if (totalClicks >= 25) {
    results();
    var imageTags = document.getElementsByClassName('imagePlace');

    imageTags[0].removeEventListener('click', createListener);
    imageTags[1].removeEventListener('click', createListener);
    imageTags[2].removeEventListener('click', createListener);
  }
  if (totalClicks > 25) {
    totalClicks = 0;
  }
}

function makeChart() {
  var nameArray=[];
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');
  for (var i = 0; i < imagesArray.length; i++) {
    nameArray.push(imagesArray[i].name);
    clicksArray.push(imagesArray[i].clicks);
  }
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: nameArray,
      datasets: [{
        label: 'Click',
        data: clicksArray,
        backgroundColor: 'blue',
        borderWidth: 1
      }]
    },
    options: {
      responsive: false
    }
  }
  );
}
