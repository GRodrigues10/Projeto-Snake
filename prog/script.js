const canvas = document.querySelector('canvas');

// O CONSTEXTO É IMPORTANTE DIZER SEMPRE.
const ctx = canvas.getContext('2d');

// tamnho da combrinha(cada quadrado)
const size = 30;

const snake = [
    {x: 200, y: 200 },
    {x: 230, y: 200 },
];

let direction;
let loopId;

const drawSnake = () => {
    ctx.fillStyle = '#ddd'
    //desenha o retângulo no meio:

    snake.forEach((position, index)=>{
        if(index == snake.length - 1){
            ctx.fillStyle = 'white';
        }


        ctx.fillRect(position.x, position.y, size, size);
    })
}

const moveSnake = ()=>{
    if(!direction){
        return;
    }
    const head = snake[snake.length - 1]; //passando o último elemento;

    if(direction == 'right'){
        snake.push({x:head.x + size, y: head.y});
    }

    if(direction == 'left'){
        snake.push({x:head.x - size, y: head.y});
    }

    if(direction == 'down'){
        snake.push({x:head.x, y: head.y + size});
    }

    if(direction == 'up'){
        snake.push({x:head.x, y: head.y - size});
    }

    snake.shift();
}

const gameLoop = () =>{
    clearInterval(loopId);
    ctx.clearRect(0 ,0, 600, 600);
    moveSnake()
    drawSnake();

    loopId = setTimeout(()=>{
        gameLoop();
    },300);
}

gameLoop()






