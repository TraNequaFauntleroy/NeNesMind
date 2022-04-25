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

            const matches = user.reduce((prev, curr, i) => {
                if((curr === computer[i] || computer.includes(curr))){
                    return [...prev, curr] //copy of the matches array, adding the curr(user)
                }
                return prev //if no matches are found, return previous match array
            },[]) // to set the type of DS we want to return
            console.log('matches:', matches)
            matchCount = matches.length
            
           if(
               matchCount === 4 && 
               matches.toString() === 
               computer.toString()
               ){
                swal("Congrats!", "You Win!", "success");                
               }

            guessCounter.textContent = `You have ${guessCount} guesses left!`
            matchCounter.textContent = `You matched ${matchCount} digits.`
            guessedNums.textContent = `Guessed numbers are: ${guessHistory.join(', ')}` 
        }
    }
    
}

const guessingGame = () => {
    guessCount -= 1
    if (guessCount == 0) {
        swal("Sorry,", "No more guesses available!", "error");
    } else {
        play() 
    }
}


