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


$("#menu-content").mCustomScrollbar({
  theme:"my-theme",
  axis:"y",
  mouseWheel: { scrollAmount: 500 },
  autoHideScrollbar: true,
  scrollInertia: 100
});
$(".content").mCustomScrollbar("disable",true);