let computer = {
    method: 'GET',
    url: 'https://www.random.org/integers/?num=4&min=1&max=8&col=1&base=10&format=plain&rnd=newn',
}

let numbers = []

axios.get(computer.url)
  .then(response => {
    for (let data of response.data.split("\n")) {
        if (data.length > 0) {
            numbers.push(Number(data))
        }
    }
  })
  .catch(error => {
    console.log(error);
  })

let guessCount = 0
let guessIndex = {
    guess0: {
        success: false,
        guesses: []
    },
    guess1: {
        success: false,
        guesses: []
    },
    guess2:  {
        success: false,
        guesses: []
    },
    guess3:  {
        success: false,
        guesses: []
    }
}

function play(guess) {
    const guessSlot = guessIndex[`guess${guess}`]
    if (!guessSlot.success) {
        const msg1 = document.getElementById(`message1-${guess}`)
        const msg2 = document.getElementById("message2")
        const msg3 = document.getElementById("message3")
        const user = Number(document.getElementById(`guess-${guess}`).value)
    
        if (user < 1 || user > 8) {
            swal("Hold on!", "Please enter a number 1 through 8", "warning");
        } else {
            guessSlot.guesses.push(user)

            if (user < numbers[guess]) {
                msg1.textContent = "Too low!"
                msg2.textContent = `Number of guesses: ${guessCount}`
                msg3.textContent = `Guessed Numbers are: ${guessSlot.guesses}`

            } else if (user > numbers[guess]) {
                msg1.textContent = "Too high!"
                msg2.textContent = `Number of guesses: ${guessCount}`
                msg3.textContent = `Guessed Numbers are: ${guessSlot.guesses}`

            } else if (user == numbers[guess]) {
                msg1.textContent = "🔒";
                guessSlot.success = true
            } 
        }
    }
    return guessSlot.success
}

function guessNumbers() {
    guessCount += 1
    if (guessCount == 10) {
        swal("Sorry,", "No more guesses available!", "error");

    } else {
        let g0 = play(0) 
        let g1 = play(1)
        let g2 = play(2)
        let g3 = play(3)

        if (g0 && g1 && g2 && g3) {
            swal("Great Work!", "You Won The Game!", "success");
        }
    }
}
