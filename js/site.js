// Анимация пятна света
let hl = document.getElementById('hover-light');
function moveLight(x, y){
  hl.style.left = x + 'px';
  hl.style.top = y + 'px';
}

function resizeButtonsArea() {
  var bnsArea = document.getElementById('buttons-area');
  var menu = document.getElementById('menu-content');
  var widthToHeight = 0.478;
  var newWidth = menu.offsetWidth;
  var newHeight = menu.offsetHeight;
  var newWidthToHeight = newWidth / newHeight;
  
  if (newWidthToHeight > widthToHeight) {
      newWidth = newHeight * widthToHeight;
      bnsArea.style.height = newHeight + 'px';
      bnsArea.style.width = newWidth + 'px';
  } else {
      newHeight = newWidth / widthToHeight;
      bnsArea.style.width = newWidth + 'px';
      bnsArea.style.height = newHeight + 'px';
  }
  console.log(newHeight);
  bnsArea.style.fontSize = Math.max((newHeight / 60), 10) + 'px';
  
  // var gameCanvas = document.getElementById('gameCanvas');
  // gameCanvas.width = newWidth;
  // gameCanvas.height = newHeight;
}

// Движение мыши (свет на фоне)
document.addEventListener('mousemove', e => {
  var x = e.clientX, y = e.clientY;
  
  moveLight(x, y);
});


// Анимация меню
$('#menu-button')[0].addEventListener('click', e => {
  $('#menu-close').toggleClass('open');
  $('#main-menu').toggleClass('open');
  var menuContent = $('#menu-content')[0];
  
  if (open == 1) {
    for (var item of $('#main-menu #menu-grid .row .pattern')) {
      item.classList.add('open');
    }
    menuContent.classList.add('open');
    open = 2;
  } else if (open == 2) {
    for (var item of $('#main-menu #menu-grid .row .pattern')) {
      item.classList.remove('open');
      item.classList.add('close');
    }
    menuContent.classList.remove('open');
    open = 3;
  } else {
    for (var item of $('#main-menu #menu-grid .row .pattern')) {
      item.classList.remove('close');
      item.offsetWidth = item.offsetWidth;
      item.classList.add('open');
    }
    menuContent.classList.add('open');
    open = 2;
  }
});

// Настройка размера и позиции кнопок меню
resizeButtonsArea();
window.addEventListener('resize', resizeButtonsArea, false);


// Слежение за наведением на кнопки сайдбара
document.addEventListener('mouseover', function (event) {
  if (!event.target.closest('#menu-content #buttons .button svg .hover')) return;
	event.target.parentElement.classList.add('run');
}, false);
document.addEventListener('mouseout', function (event) {
  if (!event.target.closest('#menu-content #buttons .button svg .hover')) return;
	event.target.parentElement.classList.remove('run');
}, false);


// 
// $("#menu-content").mCustomScrollbar({
//   theme:"my-theme",
//   axis:"y",
//   mouseWheel: { scrollAmount: 500 },
//   autoHideScrollbar: true,
//   scrollInertia: 100
// });
// $(".content").mCustomScrollbar("disable",true);