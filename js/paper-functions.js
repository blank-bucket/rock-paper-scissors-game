let score = JSON.parse(localStorage.getItem('score')) 
|| {
  wins: 0,
    losses: 0,
    ties: 0
};

document.querySelector('.js-score')
.innerHTML =`Win: ${score.wins} Loses: ${score.losses} Ties: ${score.ties}`;

/*
if( score === null){
  const score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
}
*/

//function that starts after click, this function get value from computerMove and compare it with playerMove 

function playGame(playerMove){

  computerMove = pickComputerMove();
  let result = '';
if (playerMove === 'Scissors'){

    if (computerMove === 'Scissors'){
      result = `It's a Tie`;
    }
    if (computerMove === 'Rock'){
      result = 'You Lose!';
    }
    if (computerMove === 'Paper'){
      result = 'You Win!!';
    }
  }

  else if (playerMove === 'Paper'){

    if (computerMove === 'Paper'){
      result = `It's a Tie`;
    }
    if (computerMove === 'Rock'){
      result = 'You Win!!';
    }
    if (computerMove === 'Scissors'){
      result = 'You Lose!';
    }
  }
  
  else if (playerMove === 'Rock'){

      if (computerMove === 'Rock'){
      result =  `It's a Tie`;
      }
      else if (computerMove === 'Paper'){
      result = 'You Lose!';
      }
      else if (computerMove === 'Scissors'){
      result = 'You Win!!';
}
  }
  if(result === 'You Win!!'){
    score.wins += 1;
  }
  else if(result === 'You Lose!'){
    score.losses += 1;
  }
  else if(result === `It's a Tie`){
    score.ties += 1;
  }

  localStorage.setItem('score' , JSON.stringify(score));

  //this shows player and computerMove on page

  // function that shows player and computer move on page
function jsMove(){
  document.querySelector('.js-move')
    .innerHTML = `You 
    <img src="Paper_files/${playerMove}-emoji.png" alt="Rock">
    
      <img src="Paper_files/${computerMove}-emoji.png" alt="Rock"> 
      Computer`;
    }

// calling jsMove function
  jsMove(); 

  //this shows score in the page

document.querySelector('.js-score')
.innerHTML =`Win: ${score.wins} Loses: ${score.losses} Ties: ${score.ties}`;

//this code shows result on the page
document.querySelector('.js-result').innerHTML = result;

//     alert(`You Picked ${playerMove} And Computer Picked ${computerMove}. ${result}
// Win: ${score.wins} Loses: ${score.losses} Ties: ${score.ties}`);

}

// Function for computerMove
function pickComputerMove(){
  randomNumber = Math.random();

   let computerMove;
if (randomNumber >= 2/3 && randomNumber < 1)
{
  computerMove = 'Scissors';
}

else if (randomNumber >= 1/3 && randomNumber < 2/3)
{
  computerMove = 'Paper';
}
else if (randomNumber >= 0 && randomNumber < 1/3)
{
  computerMove = 'Rock';
}
  return computerMove;
}



//THIS FUNCTION REST SCORE!!

function resetScore(){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  document.querySelector('.js-score').innerHTML = document.querySelector('.js-score')
    .innerHTML =`Win: ${score.wins} Loses: ${score.losses} Ties: ${score.ties}`;
}
