const canvas = document.getElementById('labirintoCanvas');
const ctx = canvas.getContext('2d');

const cellSize = 20; 
const mazeWidth = canvas.width / cellSize;
const mazeHeight = canvas.height / cellSize;


const maze = [];

let playerX = 0;
let playerY = 0;


const finishX = mazeWidth - 1;
const finishY = mazeHeight - 1;


document.addEventListener('keydown', function(event) {

    switch (event.key) {
        case 'ArrowUp':
            if (playerY > 0 && maze[playerY - 1][playerX] === 0) {
                playerY--;
                checkFinish();
                drawMaze();
                drawPlayer();
            }
            break;
        case 'ArrowDown':
            if (playerY < mazeHeight - 1 && maze[playerY + 1][playerX] === 0) {
                playerY++;
                checkFinish();
                drawMaze();
                drawPlayer();
            }
            break;
        case 'ArrowLeft':
            if (playerX > 0 && maze[playerY][playerX - 1] === 0) {
                playerX--;
                checkFinish();
                drawMaze();
                drawPlayer();
            }
            break;
        case 'ArrowRight':
            if (playerX < mazeWidth - 1 && maze[playerY][playerX + 1] === 0) {
                playerX++;
                checkFinish();
                drawMaze();
                drawPlayer();
            }
            break;
    }
});


function checkFinish() {
    if (playerX === finishX && playerY === finishY) {
        alert('Você chegou à linha de chegada! O jogo acabou.');
   
    }
}


function generateMaze() {
    for (let i = 0; i < mazeHeight; i++) {
        maze[i] = [];
        for (let j = 0; j < mazeWidth; j++) {
            maze[i][j] = Math.random() < 0.3 ? 1 : 0; 
        }
    }

    maze[0][0] = 0; 
}


function drawMaze() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < mazeHeight; i++) {
        for (let j = 0; j < mazeWidth; j++) {
            if (maze[i][j] === 1) {
                drawWall(j * cellSize, i * cellSize);
            }
        }
    }
    drawFinish();
}


function drawWall(x, y) {
    ctx.fillStyle = 'gray';
    ctx.fillRect(x, y, cellSize, cellSize);

   
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x, y, cellSize, cellSize);
}


function drawFinish() {
    ctx.fillStyle = 'green'; 
    ctx.fillRect(finishX * cellSize, finishY * cellSize, cellSize, cellSize);
}


function drawPlayer() {
    ctx.fillStyle = 'red'; 
    ctx.fillRect(playerX * cellSize, playerY * cellSize, cellSize, cellSize);
}


generateMaze();
drawMaze();
drawPlayer();