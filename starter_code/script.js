const canvas = document.querySelector('canvas'),
      ctx = canvas.getContext('2d'),
      player = new Car()

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

function startGame() {
  ctx.clearRect(0,0,canvas.width,canvas.height)

  ctx.fillStyle = 'green'
  ctx.fillRect(0,0,30,500)
  ctx.fillRect(350,0,30,500)

  ctx.fillStyle = 'grey'
  ctx.fillRect(40,0,300,500)
  
  for (let i = 20; i <= 460; i+=40){
  ctx.fillStyle = 'white'
  ctx.fillRect(180,i,5,20)
  }
  drawCar()
  drawObj()
}
function drawCar (){
  const img = new Image()
  img.src = '/starter_code/images/car.png'
  img.onload = function () {
  ctx.drawImage(img, player.position,390,50,100)
  }
}
function drawObj (){
  ctx.fillStyle = '#890000'
  ctx.fillRect(player.objPosition,30,player.objPosition,20)
}
function moveObj (){
for (let i = 30; i < canvas.height; i++) {

}
}
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 39) {
      player.moveRight()  
    } else if (event.keyCode === 37) {
      player.moveLeft()
    }
  })