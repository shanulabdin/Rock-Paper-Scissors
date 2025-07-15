function computerMove(){
  const moves = ['✊', '✋', '✌️'];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];

  const randomNumber = Math.random();


  if (randomNumber >= 0 && randomNumber < 1/3){
    return '✊';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3){
    return '✋';
  } else if (randomNumber >= 2/3 && randomNumber < 1){
    return '✌️';
  }

}

function playGame(move){
  const computer = computerMove();
  let result = ''

  if (computer === move){
    result = 'Tie';
  } else if (
    (computer === '✊' && move === '✋') ||
    (computer === '✋' && move === '✌️') ||
    (computer === '✌️' && move === '✊')
  ){
    result = 'You Win';
  } else {
    result = 'You Lose';
  }

  document.getElementById("computerMoveEmoji").innerText = computer;
  document.getElementById("results").innerText = result;
}