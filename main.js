    
    var wrong = []


$(document).ready(() => {

    $('#newgame').click(function() {
        location.reload()
    })

    $('#newgame2').click(function() {
        location.reload()
    })

   
                

    $("#guessesleft").html(guesses)

    var commonWords = [
        "the","of","and","a","to","in","is","you","that","it","he",
        "was","for","on","are","as","with","his","they","I","at","be",
        "this","have","from","or","one","had","by","word","but","not",
        "what","all","were","we","when","your","can","said","there",
        "use","an","each","which","she","do","how","their","if","will",
        "up","other","about","out","many","then","them","these","so",
        "some","her","would","make","like","him","into","time","has",
        "look","two","more","write","go","see","number","no","way",
        "could","people","my","than","first","water","been","call",
        "who","oil","its","now","find","long","down","day","did","get",
        "come","made","may","part"
      ];

        var mySound =  new Audio("ahahah.mov")
   
        var threeCommonWords = commonWords.filter(function(array){
        return (array.length >= 3);
        });
        
        var currentRandomWord = threeCommonWords[Math.floor(Math.random()*threeCommonWords.length)]

        var guessWord = [];

        for (var i = 0; i < currentRandomWord.length; i++){
            guessWord[i]="_";
        }

        console.log(currentRandomWord)
       

        $("#word").html(guessWord)

        var guesses = 8
        usedguesses = []
        $("#guessesleft").html('Remaining lives: '+ guesses)

        $('#submitguess').click(function() {

            $('#info').html('')

            console.log(currentRandomWord);
            var value = $("#guessLetter").val()
            wrong = []

            var n = currentRandomWord.includes(value)
            console.log(n)

            if (n === false) {
                --guesses;
                mySound.play()
            }

            
            var g = usedguesses.includes(value)
            console.log('used' + g)

            for (var j = 0; j < currentRandomWord.length; j++){
                if (value === ""){
                    $('#info').html('Hey! You gotta enter something!')
                    break;
                } else if (value.length !== 1) {
                    $('#info').html('Guess one at a time!')
                    ++guesses;
                    break;
                } else if (g === true) {
                    $('#info').html('You chose this one already!')
                    ++guesses;
                    break;

                }
                
                if (currentRandomWord[j] === value){
                    guessWord[j] = value;
                    $("#word").html(guessWord)
                    $("#info").html('')
                    
                    
                } 

            }
            console.log(guessWord)
            console.log(guesses)
            if (guesses < 1) {
            $('#info').html('you lose!')
            $('#lose').addClass("show")
            
            }
            var w = guessWord.includes("_")
            console.log(w)
            if (w === false) {
                $('#info').html('you win!')
                $("#win").addClass("show")
            }

            if (g === false && value.length === 1) {
            usedguesses.push(value)
            

            }

            if (guesses > 8) {
                guesses = 8
            }

            if (guesses === 7){
                $("#heart8").addClass('show')
            } else if (guesses === 6) {
                $("#heart7").addClass('show')
            } else if (guesses === 5) {
                $("#heart6").addClass('show')
            } else if (guesses === 4) {
                $("#heart5").addClass('show')
            } else if (guesses === 3) {
                $("#heart4").addClass('show')
            } else if (guesses === 2) {
                $("#heart3").addClass('show')
            } else if (guesses === 1) {
                $("#heart2").addClass('show')
            } else if (guesses === 1) {
                $("#heart1").addClass('show')
            }
            
            console.log("used guesses = " + usedguesses)
            $('#guessedarr').html(usedguesses)

            $("#guessesleft").html('Remaining lives: '+ guesses)
            
    })
    })

    

  
    





