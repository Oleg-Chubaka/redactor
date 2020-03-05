function m(a, b) {
  return Math.max(a, b);
}

(function() {
  var canvasHud = document.getElementById('hudCanvas');
  // var canvasMenu = document.getElementById('menuCanvas');
  var black1 = 'rgba(0, 0, 0, 0.9)';
  var black2 = 'rgba(0, 0, 0, 0.7)';
  var blue1 = 'rgb(36, 185, 255)';
  var blue2 = '#197ba8';
  var orange1 = '#ffa200';
  var orange2 = '#d47e0f';

  var ch = canvasHud.height;

  var lh1 = 0;
  var lh2 = 25;
  var lh3 = lh2 - 10;

  var lw1 = 0;
  var lw2 = 0;
  var lw4 = 30;
  var lw5 = lw4 - 27;
  
  window.addEventListener('resize', resizeCanvasHud, false);
  window.addEventListener('resize', recalc, false);
  window.addEventListener('resize', redrawCanvas, false);
  
  // Help functions
  function wp(i) {
    return i*canvasHud.width/100;
  }
  
  function hp(i) {
    return i*canvasHud.height/100;
  }

  // Resize and redraw canvases
  function resizeCanvasHud() {
    canvasHud.width = window.innerWidth;
    canvasHud.height = window.innerHeight;
  }
  resizeCanvasHud();

  function recalc(){
    ch = canvasHud.height;

    lh1 = m(hp(17), 80);

    lw1 = m(wp(20), 200);
    lw2 = m(wp(4), 40);
  }
  recalc();

  function redrawCanvas() {
    drawBorder();
    drawButton();
  }
  redrawCanvas();

  // Draw parts of canvases
  function drawBorder() {
    var ctx = canvasHud.getContext("2d");
    var cw = canvasHud.width;

    var lw3 = cw - (lw1 + lw4 + 60 - lh3 + 15 + lh2 + 5 + lw2 + 30)*2;
    // BLACK BG
    ctx.fillStyle = black1;

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
    ctx.lineTo(cw - (lw1 + lw4 + 15 + 13), lh3 - 13);
    ctx.lineTo(lw1 + lw4 + 15 + 13, lh3 - 13);
    ctx.lineTo(lw1 + lw4, lh2);
    ctx.lineTo(lw4, lh2);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fill();

    // LIGHT!!!
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = blue1;
    ctx.lineCap = 'square';
    ctx.lineJoin = 'round';
    ctx.shadowBlur = 8;
    ctx.shadowColor = blue2;

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
    ctx.lineTo(cw - (lw1 + lw4 + 15 + 13), lh3 - 13);
    ctx.lineTo(lw1 + lw4 + 15 + 13, lh3 - 13);
    ctx.lineTo(lw1 + lw4, lh2);
    ctx.lineTo(lw4, lh2);

    ctx.stroke();


    // ORANGE!!!
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = orange1;
    ctx.lineCap = 'square';
    ctx.lineJoin = 'round';
    ctx.shadowBlur = 10;
    ctx.shadowColor = orange2;
    
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
    ctx.lineTo(lw1*0.9, ch - lh2*0.5);
    ctx.moveTo(lw1*0.9 + 8, ch - lh2*0.5);
    ctx.arc(lw1*0.9 + 5, ch - lh2*0.5, 3.5, 0, -Math.PI*2);
    ctx.stroke();
    
    // BOTTOM RIGHT 2
    ctx.beginPath();
    ctx.arc(cw - (lw4*5.5), ch - lh2*0.5, 3.5, 0, Math.PI*2);
    ctx.moveTo(cw - (lw4*5.5 + 5), ch - lh2*0.5);
    ctx.lineTo(cw - (lw1*0.9), ch - lh2*0.5);
    ctx.arc(cw - (lw1*0.9 + 8), ch - lh2*0.5, 3.5, 0, -Math.PI*2);
    ctx.stroke();

    // BOTTOM CENTRE
    ctx.beginPath();
    ctx.arc(lw1 + lw4 - lh3 + lh2 + 85, ch - lh2*0.75, 3.5, 0, Math.PI*2);
    ctx.lineTo(lw1 + lw4 - lh3 + lh2 + 80 + lw2, ch - lh2*0.75);
    ctx.lineTo(lw1 + lw4 + lh2 + 80 + lw2, ch - lh3*0.5);
    ctx.lineTo(cw - (lw1 + lw4 + lh2 + 80 + lw2), ch - lh3*0.5);
    ctx.lineTo(cw - (lw1 + lw4 - lh3 + lh2 + 80 + lw2), ch - lh2*0.75);
    ctx.lineTo(cw - (lw1 + lw4 - lh3 + lh2 + 85) - 5, ch - lh2*0.75, 3.5, 0, Math.PI*2);
    ctx.moveTo(cw - (lw1 + lw4 - lh3 + lh2 + 85) + 3, ch - lh2*0.75, 3.5, 0, Math.PI*2);
    ctx.arc(cw - (lw1 + lw4 - lh3 + lh2 + 85), ch - lh2*0.75, 3.5, 0, Math.PI*2);
    // ctx.moveTo(cw - (lw4*5.5 + 5), ch - lh2*0.5);
    
    // ctx.arc(cw - (lw1*0.9 + 8), ch - lh2*0.5, 3.5, 0, -Math.PI*2);
    ctx.stroke();

  }

  function drawHex(ctx, n, bx, by, hex) {
    
    var h = n*Math.sqrt(3)/2;
    var a = {x: bx, y: by - n},
        b = {x: bx + h, y: by - n/2},
        c = {x: bx + h, y: by + n/2},
        d = {x: bx, y: by + n},
        e = {x: bx - h, y: by + n/2},
        f = {x: bx - h, y: by - n/2};
    
    // Hexagon
    ctx.lineWidth = 4;
    ctx.strokeStyle = blue1;
    ctx.lineCap = 'square';
    ctx.lineJoin = 'round';
    ctx.fillStyle = black2;
    ctx.shadowBlur = 4;
    ctx.shadowColor = blue2;
    
    hex.moveTo(a.x, a.y);
    hex.lineTo(b.x, b.y);
    hex.lineTo(c.x, c.y);
    hex.lineTo(d.x, d.y);
    hex.lineTo(e.x, e.y);
    hex.lineTo(f.x, f.y);
    hex.closePath();

    ctx.stroke(hex);
    ctx.fill(hex);

    // Orange
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = orange1;
    ctx.lineCap = 'square';
    ctx.lineJoin = 'round';
    ctx.fillStyle = 'none';
    ctx.shadowBlur = 2;
    ctx.shadowColor = orange2;
    
    var n2 = n - 3;
    var h = n2*Math.sqrt(3)/2;
    var a = {x: bx, y: by - n2},
        b = {x: bx + h, y: by - n2/2},
        c = {x: bx + h, y: by + n2/2},
        d = {x: bx, y: by + n2},
        e = {x: bx - h, y: by + n2/2},
        f = {x: bx - h, y: by - n2/2};
    
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.lineTo(c.x, c.y);
    ctx.lineTo(d.x, d.y);
    ctx.lineTo(e.x, e.y);
    ctx.lineTo(f.x, f.y);
    ctx.closePath();
    ctx.stroke();
    
  }

  function drawButton() {
    var ctx = canvasHud.getContext("2d");
    
    var n = 20;
    var h = n*Math.sqrt(3)/2;
    var bx = h + 15, by = ch/2;
    var hex = new Path2D();
    drawHex(ctx, n, bx, by, hex);

    document.addEventListener('mousedown', e => {
      if (ctx.isPointInPath(hex, e.clientX, e.clientY)) {
        $('#menu-close').toggleClass('open');
        $('#main-menu').toggleClass('open');
        
      }
    });
  }
})();