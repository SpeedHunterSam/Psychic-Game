
        let storedGuess = ""; //creating a string to store computers letter choice
        let userGuess = ""; //creating a string to store users letter choice
        let score = 0; // setting initial score to zero
        let totalLosses = 0; //setting inital losses to zero
        let guessCountDown = 9; // user gets 9 tries before 1st loss
        let allGuessesString = ""; //empty string used to concatenate user inputs and display to viewport

        //creating an object with an array and a random letter function (method)
        const computerGuess = {
        alphabet : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

        makeGuess: function() {
            
            var i = Math.floor(Math.random() * this.alphabet.length);
            return this.alphabet[i];
        },

      };
      //creating another random guess function 
      function anotherGuess(){            
          var i = Math.floor(Math.random() * this.alphabet.length);
            return this.alphabet[i];
        };

        // calling method to compare it later
      storedGuess = computerGuess.makeGuess();
    
    
      alert(storedGuess); //value check just to confirm that user can acually win
    
      storedGuess = storedGuess.toLowerCase(); //converting array to lowercase...could have just made it lowercase to begin with ;-)
      

     // get user guess from keyboard input

    document.onkeyup = function (event) {
        userGuess = event.key.toLowerCase();

        allGuessesString = allGuessesString.concat(userGuess + ", ") // concatenating string
        document.getElementById("allGuesses").innerHTML = "Your Guesses So Far: " + allGuessesString; //displaying complete string to html

        if(storedGuess === userGuess){
        score++;
        document.getElementById("wins").innerHTML = "Wins: " + score; //showing wins to html

            
        }
        else{

        guessCountDown--;
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessCountDown; //showing guesses to html
        
            if(guessCountDown === 0){
                totalLosses++;
                guessCountDown = 9;
                document.getElementById("losses").innerHTML = "Losses:  " + totalLosses; // showing losses to html
               
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


    