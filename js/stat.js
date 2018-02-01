'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var titleX = CLOUD_X + 20;
var titleY = CLOUD_Y + 30;
var GAP = 10;
var TEXT_HEIGHT = 30;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var barHeight = CLOUD_HEIGHT - titleY - BAR_GAP - TEXT_HEIGHT;
var mainFont = '16px PT Mono';

function renderText(ctx, text, x, y, color) {
  ctx.fillStyle = color || '#000';
  ctx.fillText(text, x, y);
}

function renderRect(ctx, x, y, width, height, color) {
  ctx.fillStyle = color || '#000';
  ctx.fillRect(x, y, width, height);
}

function renderCloud(ctx) {
  renderRect(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
  renderRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#fff');
}

function getMaxElement(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
}

function renderTitle(ctx) {
  ctx.font = mainFont;
  renderText(ctx, 'Ура вы победили!', titleX, titleY);
  renderText(ctx, 'Список результатов:', titleX, titleY + GAP * 2);
}

function renderHistogram(ctx, names, times) {
  var maxTime = getMaxElement(times);
  var MY_COLOR = 'rgba(255, 0, 0, 1)';
  var PLAYERS_COLOR = 'rgba(0, 0, 255, ' + Math.random() + ')';

  for (var i = 0; i < names.length; i++) {
    var roundedTime = Math.round(times[i]);
    var histogramX = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    var calcBarHeight = (barHeight * times[i]) / maxTime;
    var histogramColor = ((names[i] === 'Вы') ? MY_COLOR : PLAYERS_COLOR);

    renderText(ctx, roundedTime, histogramX, CLOUD_HEIGHT - calcBarHeight - TEXT_HEIGHT);
    renderRect(ctx, histogramX, CLOUD_HEIGHT - calcBarHeight - TEXT_HEIGHT + GAP, BAR_WIDTH, calcBarHeight - GAP, histogramColor);
    renderText(ctx, names[i], histogramX, CLOUD_HEIGHT - GAP);
  }
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx);
  renderTitle(ctx);
  renderHistogram(ctx, names, times);
};
