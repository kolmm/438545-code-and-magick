'use strict';

var userDialog = document.querySelector('.setup');
var similiarWizard = document.querySelector('.setup-similar');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

userDialog.classList.remove('hidden');
similiarWizard.classList.remove('hidden');

var WIZARD_FIRSTNAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [
  {
    name: WIZARD_FIRSTNAME[Math.floor(Math.random() * WIZARD_FIRSTNAME.length)] + ' ' + WIZARD_LASTNAME[Math.floor(Math.random() * WIZARD_LASTNAME.length)],
    coatColor: WIZARD_COATCOLOR[Math.floor(Math.random() * WIZARD_COATCOLOR.length)],
    eyesColor: WIZARD_EYESCOLOR[Math.floor(Math.random() * WIZARD_EYESCOLOR.length)]
  },
  {
    name: WIZARD_FIRSTNAME[Math.floor(Math.random() * WIZARD_FIRSTNAME.length)] + ' ' + WIZARD_LASTNAME[Math.floor(Math.random() * WIZARD_LASTNAME.length)],
    coatColor: WIZARD_COATCOLOR[Math.floor(Math.random() * WIZARD_COATCOLOR.length)],
    eyesColor: WIZARD_EYESCOLOR[Math.floor(Math.random() * WIZARD_EYESCOLOR.length)]
  },
  {
    name: WIZARD_FIRSTNAME[Math.floor(Math.random() * WIZARD_FIRSTNAME.length)] + ' ' + WIZARD_LASTNAME[Math.floor(Math.random() * WIZARD_LASTNAME.length)],
    coatColor: WIZARD_COATCOLOR[Math.floor(Math.random() * WIZARD_COATCOLOR.length)],
    eyesColor: WIZARD_EYESCOLOR[Math.floor(Math.random() * WIZARD_EYESCOLOR.length)]
  },
  {
    name: WIZARD_FIRSTNAME[Math.floor(Math.random() * WIZARD_FIRSTNAME.length)] + ' ' + WIZARD_LASTNAME[Math.floor(Math.random() * WIZARD_LASTNAME.length)],
    coatColor: WIZARD_COATCOLOR[Math.floor(Math.random() * WIZARD_COATCOLOR.length)],
    eyesColor: WIZARD_EYESCOLOR[Math.floor(Math.random() * WIZARD_EYESCOLOR.length)]
  }
];

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}
