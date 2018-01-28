'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var textHeight = 30;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - (CLOUD_Y + GAP) * 3 - textHeight;
var BAR_GAP = 50;

function renderCloud(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
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
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 3);
}

window.renderStatistics = function (ctx, names, times) {
  var maxTime = getMaxElement(times);

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderTitle(ctx);

  for (var i = 0; i < names.length; i++) {
    var time = Math.floor(times[i]);
    var YOUR_COLOR = 'rgba(255, 0, 0, 1)';
    var PLAYERS_COLOR = 'rgba(0, 0, 255, ' + Math.random() + ' )';

    ctx.fillStyle = ((names[i] === 'Вы') ? YOUR_COLOR : PLAYERS_COLOR);

    ctx.fillText(time, CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - (barHeight * times[i]) / maxTime - textHeight);
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - (barHeight * times[i]) / maxTime - textHeight + GAP, BAR_WIDTH, (barHeight * times[i]) / maxTime);
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT);
  }
};
