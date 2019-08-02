
        let storedGuess = ""; //creating a string to store computers letter choice
        let userGuess = "";
        let score = 0;
        let totalLosses = 0;
        let guessCountDown = 9;
        let allGuessesString = "";

        //
        const computerGuess = {
        alphabet : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

        makeGuess: function() {
            
            var i = Math.floor(Math.random() * this.alphabet.length);
            return this.alphabet[i];
        },

      };

      function anotherGuess(){            
          var i = Math.floor(Math.random() * this.alphabet.length);
            return this.alphabet[i];
        };

      storedGuess = computerGuess.makeGuess();

      alert(storedGuess); //value check
    
      storedGuess = storedGuess.toLowerCase();
      //alert(storedGuess); value check

      

     // get user guess

    document.onkeyup = function (event) {
        userGuess = event.key.toLowerCase();
        allGuessesString = allGuessesString.concat(userGuess + ", ")
        document.getElementById("allGuesses").innerHTML = "Your Guesses So Far: " + allGuessesString;

        if(storedGuess === userGuess){
        score++;
        document.getElementById("wins").innerHTML = "Wins: " + score;
        storedGuess = anotherGuess();
        }
        else{

        guessCountDown--;
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessCountDown;
        
            if(guessCountDown === 0){
                totalLosses++;
                guessCountDown = 9;
                document.getElementById("losses").innerHTML = "Losses:  " + totalLosses;
                storedGuess = anotherGuess();
            }
        };
        
    
        


    };
      

    /*
        Pseudo Code

        1. Have computer generate a random letter 
        2. compare user input letter with computer choice
        3. if wrong then decrease chances left, if right go straight to incrementing win and inform user that they won
        4. if wrong 9times then inrease loses by one


    */


    