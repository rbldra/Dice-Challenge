const p1 = Math.floor(Math.random() * 6) + 1
const p2 = Math.floor(Math.random() * 6) + 1
const p1dice = 'images/dice' + p1 + '.png'
const p2dice = 'images/dice' + p2 + '.png'

document.querySelectorAll('img')[0].setAttribute('src', p1dice);
document.querySelectorAll('img')[1].setAttribute('src', p2dice);


if (p1 === p2){
  document.querySelector('h1').innerHTML = '👉Draw👈'
} else if (p1 > p2){
  document.querySelector('h1').innerHTML = '😈Player 1 Wins😈'
} else {
  document.querySelector('h1').innerHTML = '😇Player 2 Wins😇'
}
