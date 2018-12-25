 var canvas = document.getElementById('canvas');
 var ctx = canvas.getContext('2d');
 canvas.width = window.width;
 canvas.height = window.height;
 var color1 = '#005bea';
 var color2 = '#00c6fb';
 function drawLine(y,color){
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(120,y);
  ctx.lineTo(520,y);
  ctx.stroke();
  ctx.closePath();
 }
