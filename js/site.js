let hl = document.getElementById('hover-light');

document.addEventListener('mousemove', e => {
  var x = e.clientX, y = e.clientY;
  
  // Сдвиг света
  moveLight(x, y);
  
});

function moveLight(x, y){
  hl.style.left = x + 'px';
  hl.style.top = y + 'px';
}

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
    setTimeout(function () {
      $('#menu-content').mCustomScrollbar("update");
    }, 1500);
  } else if (open == 2) {
    for (var item of $('#main-menu #menu-grid .row .pattern')) {
      item.classList.remove('open');
      item.classList.add('close');
    }
    menuContent.classList.remove('open');
    menuContent.classList.add('close');
    open = 3;
    setTimeout(function () {
      $(".content").mCustomScrollbar("disable",true);
    }, 1000);
  } else {
    for (var item of $('#main-menu #menu-grid .row .pattern')) {
      item.classList.remove('close');
      item.offsetWidth = item.offsetWidth;
      item.classList.add('open');
    }
    menuContent.classList.remove('close');
    menuContent.offsetWidth = menuContent.offsetWidth;
    menuContent.classList.add('open');
    open = 2;
    setTimeout(function () {
      $('#menu-content').mCustomScrollbar("update");
    }, 1500);
  }
});

// $('#menu-content #buttons .button svg .back')[0].addEventListener('mouseover', e => {
//   $('#menu-content #buttons .button svg .dashes')[0].toggleClass('run');
// });

document.addEventListener('mouseover', function (event) {
  if (!event.target.closest('#menu-content #buttons .button svg .hover')) return;
	console.log(event.target.parentElement.querySelector('.dashes').classList.add('run'));
}, false);

document.addEventListener('mouseout', function (event) {
  if (!event.target.closest('#menu-content #buttons .button svg .hover')) return;
	console.log(event.target.parentElement.querySelector('.dashes').classList.remove('run'));
}, false);


$("#menu-content").mCustomScrollbar({
  theme:"my-theme",
  axis:"y",
  mouseWheel: { scrollAmount: 500 },
  autoHideScrollbar: true,
  scrollInertia: 100
});
$(".content").mCustomScrollbar("disable",true);