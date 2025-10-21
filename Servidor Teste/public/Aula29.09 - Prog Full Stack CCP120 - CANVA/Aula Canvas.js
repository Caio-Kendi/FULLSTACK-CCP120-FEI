let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Casa Marrom
ctx.beginPath();
ctx.fillStyle = 'SaddleBrown'
ctx.fillRect(180,200,150,150);
ctx.closePath();

// Janela Azul
ctx.beginPath();
ctx.fillStyle = '#61BBFB';
ctx.fillRect(200,230,40,40)
ctx.fillStyle = '#61BBFB';
ctx.fillRect(270,230,40,40)
ctx.closePath();

// Porta
ctx.beginPath();
ctx.fillStyle = "#5F4525";
ctx.fillRect(240,270,30,80)
ctx.closePath();

// Asfalto
ctx.beginPath();
ctx.fillStyle = "Grey";
ctx.fillRect(0,350,600,500);
ctx.closePath();

// Telhado
ctx.beginPath();
ctx.fillStyle = "#EC6E52"
ctx.moveTo(180,200);
ctx.lineTo(330,200);
ctx.lineTo(255,120);
ctx.fill();
ctx.closePath();


//Arvores
ctx.beginPath();
ctx.fillStyle = "SaddleBrown";
ctx.fillRect(70,280,35,70)
ctx.fillStyle = "SaddleBrown";
ctx.fillRect(410,370,35,70)

// Folhas Arvores 1
ctx.beginPath();
ctx.fillStyle = "Green"
ctx.strokeStyle = "Green"
ctx.arc(88, 260, 50, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// Folhas Arvores 2
ctx.beginPath();
ctx.fillStyle = "Green";   
ctx.strokeStyle = "Green"; 
ctx.arc(426, 350, 50, 0, 2 * Math.PI); 
ctx.fill();   
ctx.stroke(); 
ctx.closePath();

// Sol
ctx.beginPath();
ctx.fillStyle = "Yellow";
ctx.strokeStyle = "Yellow";
ctx.arc(390, 100, 65, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// Cachoeira
ctx.beginPath
ctx.fillStyle = "#598CFA";
ctx.fillRect(0,350,70,200)
ctx.closePath();

ctx.beginPath
ctx.fillStyle = "#598CFA";
ctx.fillRect(0,420,180,200);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#598CFA";
ctx.strokeStyle = "#598CFA";
ctx.arc(-5, 360, 75, 0, 2.5 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#598CFA";
ctx.strokeStyle = "#598CFA";
ctx.arc(180, 495, 75, 0, 2.5 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();
