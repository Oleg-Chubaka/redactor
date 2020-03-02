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
    var lh2 = 25;
    var lh3 = lh2 - 10;

    var lw1 = m(wp(20), 200);
    var lw2 = m(wp(4), 40);
    var lw4 = 40;
    var lw5 = lw4 - 20;
    var lw3 = cw - (lw1 + lw4 + 60 - lh3 + 15 + lh2 + 5 + lw2 + 30)*2;

    // BLACK BG

    ctx.beginPath();
    ctx.moveTo(lw4, lh2);
    ctx.lineTo(lw4, lh1 + lh2);
    ctx.lineTo(lw5, lh1 + lh2 + 30);
    ctx.lineTo(lw5, ch - lh1 - lh2 - 30);
    ctx.lineTo(lw4, ch - lh1 - lh2);
    ctx.lineTo(lw4, ch - lh2);
    ctx.lineTo(0, ch);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0, ch);
    ctx.lineTo(lw4, ch - lh2);
    ctx.lineTo(lw1 + lw4, ch - lh2);
    ctx.lineTo(lw1 + lw4 + 15, ch - lh3);
    ctx.lineTo(lw1 + lw4 + 60, ch - lh3);
    ctx.lineTo(lw1 + lw4 + 60 - lh3, ch);
    ctx.closePath();
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(lw1 + lw4 + 60 - lh3 + 15, ch);
    ctx.lineTo(lw1 + lw4 + 60 - lh3 + 15 + lh2 + 5, ch - lh2 - 5);
    ctx.lineTo(lw1 + lw4 + 60 - lh3 + 15 + lh2 + 5 + lw2, ch - lh2 - 5);
    if (lw3 > 100) {
      ctx.lineTo(lw1 + lw4 + 60 - lh3 + 15 + lh2 + 5 + lw2 + 30, ch - lh3);
      ctx.lineTo(lw1 + lw4 + 60 - lh3 + 15 + lh2 + 5 + lw2 + 30 + lw3, ch - lh3);
    }
    ctx.lineTo(cw - (lw1 + lw4 + 60 - lh3 + 15 + lh2 + 5 + lw2), ch - lh2 - 5);
    ctx.lineTo(cw - (lw1 + lw4 + 60 - lh3 + 15 + lh2 + 5), ch - lh2 - 5);
    ctx.lineTo(cw - (lw1 + lw4 + 60 - lh3 + 15), ch);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(cw - (lw1 + lw4 + 60 - lh3), ch);
    ctx.lineTo(cw - (lw1 + lw4 + 60), ch - lh3);
    ctx.lineTo(cw - (lw1 + lw4 + 15), ch - lh3);
    ctx.lineTo(cw - (lw1 + lw4), ch - lh2);
    ctx.lineTo(cw - lw4, ch - lh2);
    ctx.lineTo(cw, ch);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(cw, ch);
    ctx.lineTo(cw - lw4, ch - lh2);
    ctx.lineTo(cw - lw4, ch - lh1 - lh2);
    ctx.lineTo(cw - lw5, ch - lh1 - lh2 - 30);
    ctx.lineTo(cw - lw5, lh1 + lh2 + 30);
    ctx.lineTo(cw - lw4, lh1 + lh2);
    ctx.lineTo(cw - lw4, lh2);
    ctx.lineTo(cw, 0);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(cw, 0);
    ctx.lineTo(cw - lw4, lh2);
    ctx.lineTo(cw - (lw1 + lw4), lh2);
    ctx.lineTo(cw - (lw1 + lw4 + 15), lh3);
    ctx.lineTo(lw1 + lw4 + 15, lh3);
    ctx.lineTo(lw1 + lw4, lh2);
    ctx.lineTo(lw4, lh2);
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

    ctx.moveTo(lw4, lh2);
    
    ctx.lineTo(lw4, lh1 + lh2);
    ctx.lineTo(lw5, lh1 + lh2 + 30);
    ctx.lineTo(lw5, ch - lh1 - lh2 - 30);
    ctx.lineTo(lw4, ch - lh1 - lh2);
    ctx.lineTo(lw4, ch - lh2);

    ctx.lineTo(lw1 + lw4, ch - lh2);
    ctx.lineTo(lw1 + lw4 + 15, ch - lh3);
    ctx.lineTo(lw1 + lw4 + 60, ch - lh3);
    ctx.lineTo(lw1 + lw4 + 60 - lh3, ch);
    
    ctx.moveTo(lw1 + lw4 + 60 - lh3 + 15, ch);
    ctx.lineTo(lw1 + lw4 + 60 - lh3 + 15 + lh2 + 5, ch - lh2 - 5);
    ctx.lineTo(lw1 + lw4 + 60 - lh3 + 15 + lh2 + 5 + lw2, ch - lh2 - 5);
    if (lw3 > 100) {
      ctx.lineTo(lw1 + lw4 + 60 - lh3 + 15 + lh2 + 5 + lw2 + 30, ch - lh3);
      ctx.lineTo(lw1 + lw4 + 60 - lh3 + 15 + lh2 + 5 + lw2 + 30 + lw3, ch - lh3);
    }
    ctx.lineTo(cw - (lw1 + lw4 + 60 - lh3 + 15 + lh2 + 5 + lw2), ch - lh2 - 5);
    ctx.lineTo(cw - (lw1 + lw4 + 60 - lh3 + 15 + lh2 + 5), ch - lh2 - 5);
    ctx.lineTo(cw - (lw1 + lw4 + 60 - lh3 + 15), ch);

    ctx.moveTo(cw - (lw1 + lw4 + 60 - lh3), ch);
    ctx.lineTo(cw - (lw1 + lw4 + 60), ch - lh3);
    ctx.lineTo(cw - (lw1 + lw4 + 15), ch - lh3);
    ctx.lineTo(cw - (lw1 + lw4), ch - lh2);
    ctx.lineTo(cw - lw4, ch - lh2);

    ctx.lineTo(cw - lw4, ch - lh2);
    ctx.lineTo(cw - lw4, ch - lh1 - lh2);
    ctx.lineTo(cw - lw5, ch - lh1 - lh2 - 30);
    ctx.lineTo(cw - lw5, lh1 + lh2 + 30);
    ctx.lineTo(cw - lw4, lh1 + lh2);
    ctx.lineTo(cw - lw4, lh2);
    
    ctx.lineTo(cw - (lw1 + lw4), lh2);
    ctx.lineTo(cw - (lw1 + lw4 + 15), lh3);
    ctx.lineTo(lw1 + lw4 + 15, lh3);
    ctx.lineTo(lw1 + lw4, lh2);
    ctx.lineTo(lw4, lh2);

    ctx.stroke();

    // ctx.fill();
  }
})();