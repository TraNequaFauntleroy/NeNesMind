# NeNe's Mind: The Game

# How To Run Project
- Clone the repo to your machine
- Select the folder named "NeNe's Mind"
- Open the '"src" folder
- Click "index.html"
- Enter the mind of NeNe

# About 

NeNe's Mind is a game that allows you to escape your mind by diving into hers ... through numbers. The numbers generated resembles the many thoughts in her head that run wild. The game allows you to help her make sense of the chaos by guessing the numbers she is thinking. 

# How To Play 

When the page loads, NeNe's Mind will generate a random 4-digit number. It is YOUR job to guess that number, one digit at a time, within 10 guesses. Because NeNe really desires mental clarity, she will provide feedback to help you guess correctly. You will see hints such as, 'Too low!' or 'Too High!' to guide you, as well as a history of numbers guessed. Once you guess all 4 number correctly, you will be notified! Happy Guessing!

# The Process *
- Research
    I needed to know what was hot in the UI world for 2021. This project wasn't only about what I thought was cool, but I wanted my choices to be relevant to what users are using/loving nowadays. I found that 3D components, bold and blocky fonts, gradients were all the range in 2021, so i decided to use that info to design my wire frames.
- Design wire frames using Canva based off research
    I love Canva, so I use it for all of my design needs. I always like to sketch out my thoughts, so I did. I created a couple options (you can find those in the "wireframes" folder). I really got inspired by something I saw on Canva, so I decided to go with that.
- Build html bones
    Once I had a visual idea of what I wanted, it was time to build out the bones. I did that using HTML, one element at a time. As you know, at this point my webpage was pretty blah. Nothing but a few headers, and input field and a button.
- Add javascript functionality
    Here is where it started to get interesting. Without JavaScript, this webpage would be a stataic webpage and no one wants that. Everyone wants drama, dynamic sites with cool interactions, so thats what they will get. I had to get the button to work. And I built out the functionality, and move onto the more integral parts of the game ... making it function, as per the directions.
- Get the game to work for one number using Math.Floor()
    I was able to get the game working using Math.Floor() with only one number. My mindset was if I can get the game to work with one number, I should be abe to guess 4 numbers. So I thought.
- Implement random number generator using given API
    I haven't used vanilla JavaScript in months. In school, I was creating REACTjs apps and doing backend stuff so I purposely chose to challenge myself by using vanilla JS, just so I can test myself on the basics and fundamentals. I feel like anyone can create something using a bunch of libraries, I wanted to show that I understand the basics. If I can birth something beautiful with vanilla JS, imagine what I can come up with using different frameworks and libraries. Sounds great and all, util I realized I don't think I ever made an API call without using REACT. So I had to google my heart away until I was able to get the API call to work properly. I was able to do so ... yay! But it was a feat.
- Add more input fields 
    Okay, now that I was able to get the API working with one number, I haf to figure out how to do it with 4. I though this would be as easy as pie but definitely not. I had to play with the play() function and even create another function that allows the play() to be called 4 times, one for each guess. Plus the I had to move some <p> around because I did not need to see "number of guesses" and "guessed numbers" on each input field. All I need each input to have was a hint of "too hight or too low" and a way to show if that number is correct.
- Style using CSS based on my wire frame
    This is my favorite part. This is where I light some candles and throw on 90's R&B music and just go. No much to say here, you can see thr final result, but I LOVE design. At first though, the background was plan yellow and I have everything yu see in wire frame, but I felt something was missing. So i created a background image for it. On top of that, I tried to do a numeric keypad (also seen in the wire frame) but I was spending too much time with that and it wasn't turning out how I imagined, I i took that out completely. I was sad at first but it looks sooo good without it.
- Customized alerts
    I wanted the final touch of the game to be the popups. I wanted cool popup for when you enter a number high that 8, run out of guesses and when you win the game. The build-in alerts did not fit my aesthetic so I had to outsource. I found a library called SweetAlert which allows me to create custom alerts. I did, it was very easy with huge impact to my site. I wanted to have a gif pop up when you won the game, but I could not figure that out.
- Play game for quality control reasons
    I had to play a million times to make sure everything was working properly and looking how I would like and I was able get it running smoothly. This whole process took me 5 days.


* The code was tested many times. I love to test my code (or see what my code is doing) after 3 lines of code. I like to write bite sized pieces of code to make debugging easier. It's much easier to find mistakes in 3 lines of code rather than 300 lines. I can't even imagine why one would torture themselves in such a way.

CHANGES (initial thought dump)
- Take away 4 input boxes and use only one
- Convert the user's answer (4 digit number) into an array
- Since the computer's response is also an array, we can just compare the values at each index- only iterating through each array one time per guess
- If the values match, a message pops up to say 'You have matched n Numbers' n = the number of matches and increment matchCount
- If not, just increment the guessCount and add the number to the numbersGuessed array and display it
- Once the arrays match, a popup appears letting the user know they won