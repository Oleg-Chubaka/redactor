(function() {
  var canvas = document.getElementById('hudCanvas'),
      context = canvas.getContext('2d');

  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    drawCanvas();
  }
  resizeCanvas();

  function wp(i) {
    return i*canvas.width/100;
  }

  function hp(i) {
    return i*canvas.height/100;
  }

  function m(a, b) {
    return Math.max(a, b);
  }


  function drawCanvas() {
    var ctx = canvas.getContext("2d");
    var cw = canvas.width;
    var ch = canvas.height;
    
    var lh1 = m(hp(17), 80);

    var lw1 = m(wp(20), 200);
    var lw2 = m(wp(4), 40);
    var lw3 = cw - (lw1 + 160 + lw2 + 30)*2;
    
    // BLACK BG

    ctx.beginPath();
    ctx.moveTo(50, 40);
    ctx.lineTo(50, lh1 + 40);
    ctx.lineTo(30, lh1 + 70);
    ctx.lineTo(30, ch - lh1 - 70);
    ctx.lineTo(50, ch - lh1 - 40);
    ctx.lineTo(50, ch - 40);
    ctx.lineTo(0, ch);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0, ch);
    ctx.lineTo(50, ch - 40);
    ctx.lineTo(lw1 + 50, ch - 40);
    ctx.lineTo(lw1 + 80, ch - 20);
    ctx.lineTo(lw1 + 130, ch - 20);
    ctx.lineTo(lw1 + 110, ch);
    ctx.closePath();
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(lw1 + 125, ch);
    ctx.lineTo(lw1 + 160, ch - 35);
    ctx.lineTo(lw1 + 160 + lw2, ch - 35);
    if (lw3 > 100) {
      ctx.lineTo(lw1 + 160 + lw2 + 30, ch - 15);
      ctx.lineTo(lw1 + 160 + lw2 + 30 + lw3, ch - 15);
    }
    ctx.lineTo(lw1 + 160 + lw2 + 30 + lw3 + 30, ch - 35);
    ctx.lineTo(lw1 + 160 + lw2 + 30 + lw3 + 30 + lw2, ch - 35);
    ctx.lineTo(lw1 + 160 + lw2 + 30 + lw3 + 30 + lw2 + 35, ch);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(lw1 + 160 + lw2 + 30 + lw3 + 30 + lw2 + 35 + 15, ch);
    ctx.lineTo(lw1 + 160 + lw2 + 30 + lw3 + 30 + lw2 + 30, ch - 20);
    ctx.lineTo(lw1 + 160 + lw2 + 30 + lw3 + 30 + lw2 + 30 + 50, ch - 20);
    ctx.lineTo(lw1 + 160 + lw2 + 30 + lw3 + 30 + lw2 + 30 + 50 + 30, ch - 40);
    ctx.lineTo(lw1 + 160 + lw2 + 30 + lw3 + 30 + lw2 + 30 + 50 + 30 + lw1, ch - 40);
    ctx.lineTo(cw, ch);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(cw, ch);
    ctx.lineTo(cw - 50, ch - 40);
    ctx.lineTo(cw - 50, ch - lh1 - 40);
    ctx.lineTo(cw - 30, ch - lh1 - 70);
    ctx.lineTo(cw - 30, lh1 + 70);
    ctx.lineTo(cw - 50, lh1 + 40);
    ctx.lineTo(cw - 50, 40);
    ctx.lineTo(cw, 0);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(cw, 0);
    ctx.lineTo(cw - 50, 40);
    ctx.lineTo(cw - lw1 - 70, 40);
    ctx.lineTo(cw - lw1 - 100, 20);
    ctx.lineTo(cw - lw1 - 150, 20);
    ctx.lineTo(lw1 + 100, 20);
    ctx.lineTo(lw1 + 70, 40);
    ctx.lineTo(50, 40);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fill();

    // LIGHT!!!
    ctx.beginPath();
    ctx.lineWidth = m(4, wp(0.3));
    ctx.strokeStyle = 'rgb(36, 185, 255)';
    ctx.lineCap = 'square';
    ctx.lineJoin = 'round';
    ctx.shadowBlur = 8;
    ctx.shadowColor = '#197ba8';

    ctx.moveTo(50, 40);
    
    ctx.lineTo(50, lh1 + 40);
    ctx.lineTo(30, lh1 + 70);
    ctx.lineTo(30, ch - lh1 - 70);
    ctx.lineTo(50, ch - lh1 - 40);
    ctx.lineTo(50, ch - 40);

    ctx.lineTo(lw1 + 50, ch - 40);
    ctx.lineTo(lw1 + 80, ch - 20);
    ctx.lineTo(lw1 + 130, ch - 20);
    ctx.lineTo(lw1 + 110, ch);
    
    ctx.moveTo(lw1 + 125, ch);
    ctx.lineTo(lw1 + 160, ch - 35);
    ctx.lineTo(lw1 + 160 + lw2, ch - 35);
    if (lw3 > 100) {
      ctx.lineTo(lw1 + 160 + lw2 + 30, ch - 15);
      ctx.lineTo(lw1 + 160 + lw2 + 30 + lw3, ch - 15);
    }
    ctx.lineTo(lw1 + 160 + lw2 + 30 + lw3 + 30, ch - 35);
    ctx.lineTo(lw1 + 160 + lw2 + 30 + lw3 + 30 + lw2, ch - 35);
    ctx.lineTo(lw1 + 160 + lw2 + 30 + lw3 + 30 + lw2 + 35, ch);

    ctx.moveTo(lw1 + 160 + lw2 + 30 + lw3 + 30 + lw2 + 35 + 15, ch);
    ctx.lineTo(lw1 + 160 + lw2 + 30 + lw3 + 30 + lw2 + 30, ch - 20);
    ctx.lineTo(lw1 + 160 + lw2 + 30 + lw3 + 30 + lw2 + 30 + 50, ch - 20);
    ctx.lineTo(lw1 + 160 + lw2 + 30 + lw3 + 30 + lw2 + 30 + 50 + 30, ch - 40);
    ctx.lineTo(lw1 + 160 + lw2 + 30 + lw3 + 30 + lw2 + 30 + 50 + 30 + lw1, ch - 40);

    ctx.lineTo(cw - 50, ch - 40);
    ctx.lineTo(cw - 50, ch - lh1 - 40);
    ctx.lineTo(cw - 30, ch - lh1 - 70);
    ctx.lineTo(cw - 30, lh1 + 70);
    ctx.lineTo(cw - 50, lh1 + 40);
    ctx.lineTo(cw - 50, 40);
    
    ctx.lineTo(cw - lw1 - 70, 40);
    ctx.lineTo(cw - lw1 - 100, 20);
    ctx.lineTo(cw - lw1 - 150, 20);
    ctx.lineTo(lw1 + 100, 20);
    ctx.lineTo(lw1 + 70, 40);
    ctx.lineTo(50, 40);

    ctx.stroke();

    // ctx.fill();
  }
})();