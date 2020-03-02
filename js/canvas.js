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
    var lw4 = 30;
    var lw5 = lw4 - 15;
    var lw3 = cw - (lw1 + lw4 + 60 - lh3 + 15 + lh2 + 5 + lw2 + 30)*2;

    // BLACK BG

    ctx.beginPath();
    ctx.moveTo(lw4, lh2);
    ctx.lineTo(lw4, lh1 + lh2);
    ctx.lineTo(lw5, lh1 + lh2 + 20);
    ctx.lineTo(lw5, ch - lh1 - lh2 - 20);
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
    ctx.lineTo(cw - lw5, ch - lh1 - lh2 - 20);
    ctx.lineTo(cw - lw5, lh1 + lh2 + 20);
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
    ctx.lineTo(lw5, lh1 + lh2 + 20);
    ctx.lineTo(lw5, ch - lh1 - lh2 - 20);
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
    ctx.lineTo(cw - lw5, ch - lh1 - lh2 - 20);
    ctx.lineTo(cw - lw5, lh1 + lh2 + 20);
    ctx.lineTo(cw - lw4, lh1 + lh2);
    ctx.lineTo(cw - lw4, lh2);
    
    ctx.lineTo(cw - (lw1 + lw4), lh2);
    ctx.lineTo(cw - (lw1 + lw4 + 15), lh3);
    ctx.lineTo(lw1 + lw4 + 15, lh3);
    ctx.lineTo(lw1 + lw4, lh2);
    ctx.lineTo(lw4, lh2);

    ctx.stroke();


    // ORANGE!!!

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = '#ffa200';
    ctx.lineCap = 'square';
    ctx.lineJoin = 'round';
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#d47e0f';
    
    // TOP LEFT
    ctx.arc(lw4/2 + lw1*0.9, lh2*0.4, 3.5, 0, Math.PI*2);
    ctx.moveTo(lw4/2 + lw1*0.9 - 4, lh2*0.4);
    ctx.lineTo(lw4/2 + lw1*0.4, lh2*0.4);
    ctx.lineTo(lw4/2 + lw1*0.4 - 5, lh2*0.4 + 5);
    ctx.lineTo(lw4/3, lh2*0.4 + 5);
    ctx.lineTo(lw4/3, lh2*2);
    ctx.lineTo(lw4/3 + 8, lh2*2 + 8);
    ctx.lineTo(lw4/3 + 8, lh1*0.9);
    ctx.arc(lw4/3 + 8, lh1*0.9 + 5, 3.5, 0, Math.PI*2);

    ctx.stroke();

    // TOP RIGHT
    ctx.beginPath();
    ctx.arc(cw - (lw4/2 + lw1*0.9), lh2*0.4, 3.5, 0, Math.PI*2);
    ctx.moveTo(cw - (lw4/2 + lw1*0.9 - 4), lh2*0.4);
    ctx.lineTo(cw - (lw4/2 + lw1*0.4), lh2*0.4);
    ctx.lineTo(cw - (lw4/2 + lw1*0.4 - 5), lh2*0.4 + 5);
    ctx.lineTo(cw - lw4/3, lh2*0.4 + 5);
    ctx.lineTo(cw - lw4/3, lh2*2);
    ctx.lineTo(cw - (lw4/3 + 8), lh2*2 + 8);
    ctx.lineTo(cw - (lw4/3 + 8), lh1*0.9);
    ctx.arc(cw - (lw4/3 + 8), lh1*0.9 + 5, 3.5, 0, Math.PI*2);
    ctx.stroke();

    // LEFT
    ctx.beginPath();
    ctx.arc(lw4/2 - 4, ch - (lh1*0.9 + lh2), 3.5, 0, Math.PI*2);
    ctx.moveTo(lw4/2 - 4, ch - (lh1*0.9 + lh2) + 5);
    ctx.lineTo(lw4/2 - 4, ch - (lh1*0.7 + lh2));
    ctx.lineTo(lw4/2 + 2, ch - (lh1*0.7 + lh2) + 6);
    ctx.lineTo(lw4/2 + 2, ch - (lh2*1.5));
    ctx.arc(lw4/2 + 2, ch - (lh2*1.5) + 5, 3.5, 0, Math.PI*2);
    ctx.stroke();

    // RIGHT
    ctx.beginPath();
    ctx.arc(cw - (lw4/2 - 4), ch - (lh1*0.9 + lh2), 3.5, 0, Math.PI*2);
    ctx.moveTo(cw - (lw4/2 - 4), ch - (lh1*0.9 + lh2) + 5);
    ctx.lineTo(cw - (lw4/2 - 4), ch - (lh1*0.7 + lh2));
    ctx.lineTo(cw - (lw4/2 + 2), ch - (lh1*0.7 + lh2) + 6);
    ctx.lineTo(cw - (lw4/2 + 2), ch - (lh2*1.5));
    ctx.arc(cw - (lw4/2 + 2), ch - (lh2*1.5) + 5, 3.5, 0, Math.PI*2);
    ctx.stroke();

    // BOTTOM LEFT 1
    ctx.beginPath();
    ctx.arc(lw4*1.5, ch - lh2*0.6, 3.5, 0, Math.PI*2);
    ctx.moveTo(lw4*1.5 + 5, ch - lh2*0.6);
    ctx.lineTo(lw4*2.5, ch - lh2*0.6);
    ctx.lineTo(lw4*2.5 + 7, ch - lh2*0.6 + 7);
    ctx.lineTo(lw4*4, ch - lh2*0.6 + 7);
    ctx.moveTo(lw4*4 + 8, ch - lh2*0.6 + 7);
    ctx.arc(lw4*4 + 5, ch - lh2*0.6 + 7, 3.5, 0, -Math.PI*2);
    ctx.stroke();
    
    // BOTTOM RIGHT 1
    ctx.beginPath();
    ctx.arc(cw - (lw4*1.5), ch - lh2*0.6, 3.5, 0, Math.PI*2);
    ctx.moveTo(cw - (lw4*1.5 + 5), ch - lh2*0.6);
    ctx.lineTo(cw - (lw4*2.5), ch - lh2*0.6);
    ctx.lineTo(cw - (lw4*2.5 + 7), ch - lh2*0.6 + 7);
    ctx.lineTo(cw - (lw4*4), ch - lh2*0.6 + 7);
    ctx.arc(cw - (lw4*4 + 5), ch - lh2*0.6 + 7, 3.5, 0, Math.PI*2);
    ctx.stroke();

    // BOTTOM LEFT 2
    ctx.beginPath();
    ctx.arc(lw4*5.5, ch - lh2*0.5, 3.5, 0, Math.PI*2);
    ctx.moveTo(lw4*5.5 + 5, ch - lh2*0.5);
    ctx.lineTo(lw4*7.5, ch - lh2*0.5);
    ctx.moveTo(lw4*7.5 + 8, ch - lh2*0.5);
    ctx.arc(lw4*7.5 + 5, ch - lh2*0.5, 3.5, 0, -Math.PI*2);
    ctx.stroke();
    
    // BOTTOM RIGHT 2
    ctx.beginPath();
    ctx.arc(cw - (lw4*5.5), ch - lh2*0.5, 3.5, 0, Math.PI*2);
    ctx.moveTo(cw - (lw4*5.5 + 5), ch - lh2*0.5);
    ctx.lineTo(cw - (lw1*0.9), ch - lh2*0.5);
    ctx.arc(cw - (lw1*0.9), ch - lh2*0.5, 3.5, 0, -Math.PI*2);
    ctx.stroke();

  }
})();