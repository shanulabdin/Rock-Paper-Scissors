function computerMove(){
  const moves = ['✊', '✋', '✌️'];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
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