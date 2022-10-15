
//Per click of boxes
allBoxes.forEach(item =>{
    item.addEventListener('click', e =>{
           
        const userChoice = parseInt(e.target.textContent) 
        e.target.disabled=true
        totGuesses++
        totGuessesArea.innerHTML = `Total guesses: ${totGuesses}`

        if(userChoice === randNum && guessCount === 0){
            guessResults.innerHTML = `You guessed: ${userChoice}.<br>
             The number was ${randNum}. It took you ${guessCount + 1} try.<br>
              You Win!<br> <span id="resPrompt">Restarting. . .</span>`, guessResults.style.color='green', 
              
              guessCount = 0, fTry++, fTryArea.innerHTML = `Number of first tries: ${fTry}`, numRight++,
                e.target.style.color ='purple' , e.target.style.outlineColor ='purple', 
              randNum = Math.floor(Math.random() * 6) + 1, gameWinTimeout(), boxesDisabled(),
              document.querySelector('#resPrompt').style.color ="white", roundCount++, roundArea.innerHTML = `Round ${roundCount}`,
              addPoints()
        } 
        
        else if(userChoice === randNum){
            guessResults.innerHTML = `You guessed: ${userChoice}.<br>
             The number was ${randNum}. It took you ${guessCount + 1} tries.<br>
              You Win!<br> <span id="resPrompt">Restarting. . .</span>`, guessResults.style.color='green', guessCount = 0, numRight++, e.target.style.color ='green' , e.target.style.outlineColor ='green',
              randNum = Math.floor(Math.random() * 6) + 1, gameWinTimeout(), boxesDisabled(), roundCount++, roundArea.innerHTML = `Round ${roundCount}`,
              document.querySelector('#resPrompt').style.color ="white", addPoints() 
        } 
        else if(userChoice !== randNum && triesLeft === 0){
            guessResults.innerHTML = `Out of tries! You made it to Round ${roundCount}<br>
            The number was: ${randNum}`, gameOver(), roundArea.innerHTML = "GAME OVER!"
            roundArea.style.color="red"
        }
        else{
            guessResults.innerHTML = `You guessed: ${userChoice}<br>
             Wrong number! Tries left: ${triesLeft}`,
              guessResults.style.color='red', guessCount++, e.target.style.color ='red' , e.target.style.outlineColor ='red', 
              triesLeft--, roundArea.innerHTML = `Round ${roundCount}`, pointsCount--   
        }
        
        correctArea.innerHTML = `Correct guesses: ${numRight}`
        const guessPercent =  (numRight / totGuesses) *100
        luckArea.innerHTML = `Percentage of correct guesses: ${Math.round(100*guessPercent) / 100}%`
        pointsArea.innerHTML= `Points: ${playerPoints}`
       
})
})

