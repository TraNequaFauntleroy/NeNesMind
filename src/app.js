let randomNumGen = {
    method: 'GET',
    url: 'https://www.random.org/integers/?num=4&min=1&max=8&col=1&base=10&format=plain&rnd=newn',
}

const computer = []
const guessHistory = []
let guessCount = 10
let matchCount = 0

axios.get(randomNumGen.url)
  .then(response => {
    for (let data of response.data.split("\n")) {
        if (data.length > 0) {
            computer.push(Number(data))
        }
    }
    console.log('computer:', computer)
  })
  .catch(error => {
    console.log(error);
  })

const play = () => {
    const user = Array.from(document.getElementById('guess').value, Number)
    if (computer) {
        const guessedNums = document.getElementById('guessedNums')
        const guessCounter = document.getElementById('guessCounter')
        const matchCounter = document.getElementById('matchCounter')
        if (user.length > 4 || user.length < 4) {
            swal("Hold on!", "Please enter 4 digits", "warning");
        } else {
            guessHistory.push(document.getElementById('guess').value)
            
            for (let i = 0; i < user.length; i++) {
                console.log(user[i], computer[i])
                    if (user[i] === computer[i]) {
                        // // matchCount += 1
                        // console.log('match count:', matchCount)
                    } else {
                        pass
                        // here I want to just scan the arrays and see if there are matching values
                        // if so, display the matchCount here 
                    }
            }
            guessCounter.textContent = `You have ${guessCount} guesses left!`
            matchCounter.textContent = `You matched ${matchCount} digits.`
            guessedNums.textContent = `Guessed numbers are: ${guessHistory}` 
        }
    }
    
}

const guessingGame = () => {
    guessCount -= 1
    if (guessCount == 0) {
        swal("Sorry,", "No more guesses available!", "error");
    } else {
        let userGuess = play() 
        if (matchCount == 4) {
            swal("Great Work!", "You Won The Game!", "success");
        }
    }
}


