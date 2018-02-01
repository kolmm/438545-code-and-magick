'use strict';

var overlay = document.querySelector('.overlay');

overlay.classList.remove('hidden');

var WIZARD_FIRSTNAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];

// var friends = [
//   {
//     name: sd,
//     coatColor: ds,
//     eyesColor: ds
//   }
// ];

console.log(WIZARD_FIRSTNAME[Math.floor(Math.random() * WIZARD_FIRSTNAME.length)]);
console.log(WIZARD_FIRSTNAME[Math.floor(Math.random() * WIZARD_FIRSTNAME.length)]);