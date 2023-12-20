'use strict';

let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let current0El = document.querySelector('#current--0');
let current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let counter, activePlayer, score;


const diceEl = document.querySelector('.dice');

// Starting phase
const defaultGame= function (){
  score =[0, 0];
  counter = 0;
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden')
  btnHold.disabled = true;
  btnRoll.disabled = false;
  
}

const playerToggel = function(){
  activePlayer=activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

defaultGame();
//generating dice number

btnRoll.addEventListener('click', function(){
  btnHold.disabled = false;
  const dice = Math.floor(Math.random() * 6) + 1;
  // console.log(dice); 
  diceEl.classList.remove('hidden')
  diceEl.src = `dice-${dice}.png`;
  if(dice !== 1){
    counter += dice;
    console.log(counter);
    document.querySelector(`#current--${activePlayer}`).textContent = counter;
    btnHold.disabled = false;

  }else {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    counter = 0 ;
    // activePlayer=activePlayer === 0 ? 1 : 0;
    // player0El.classList.toggle('player--active');
    // player1El.classList.toggle('player--active');
    playerToggel();
    btnHold.disabled = true;
  }
});


btnHold.addEventListener('click', function(){
  btnHold.disabled = true;
  document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer]+= counter;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  
  counter = 0 ;
  
    console.log(score);

    if(score[activePlayer] >= 100){
      console.log(`player ${activePlayer} is winner`);
      diceEl.classList.add('hidden')
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
      btnRoll.disabled = true;
      btnHold.disabled = true;
    }
    else{
      // activePlayer=activePlayer === 0 ? 1 : 0;
      // player0El.classList.toggle('player--active');//   player1El.classList.toggle('player--active');
      playerToggel();
    }
})


btnNew.addEventListener('click', function(){
  
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
 defaultGame();
 document.querySelector(`.player--${activePlayer}`).classList.add('player--active')

})



