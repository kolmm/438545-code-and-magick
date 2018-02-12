'use strict';

var userDialog = document.querySelector('.setup');
var similiarWizard = userDialog.querySelector('.setup-similar');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

userDialog.classList.remove('hidden');

var WIZARD_FIRSTNAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomItemFromAnArray(arr) {
  var number = Math.floor(Math.random() * arr.length);

  return arr[number];
}

function getMainObject(number) {
  var wizards = [];

  for (var i = 0; i < number; i++) {
    wizards[i] = {
      name: getRandomItemFromAnArray(WIZARD_FIRSTNAME) + ' ' + getRandomItemFromAnArray(WIZARD_LASTNAME),
      coatColor: getRandomItemFromAnArray(WIZARD_COATCOLOR),
      eyesColor: getRandomItemFromAnArray(WIZARD_EYESCOLOR)
    };
  }

  return wizards;
}

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
var mainObject = getMainObject(4);

for (var i = 0; i < mainObject.length; i++) {
  fragment.appendChild(renderWizard(mainObject[i]));
}
similarListElement.appendChild(fragment);

similiarWizard.classList.remove('hidden');
