# History Quiz App (client side)

## App
https://reddy-client-12-joel-7mq3.onrender.com/


## About
This repository contains files that comprise the front end of our web application. The application is a quiz website where users are tested on history questions. The two categories are british history and american history. All questions are multiple choice with 4 options to choose from. Please visit https://github.com/jgooday48/Lap1Project_Server for the server side of this application.

## Setup 
1. Firstly set up the server side by following the instructions in the following Git repository: https://github.com/jgooday48/Lap1Project_Server
2. Now with the server running, open a new terminal and fork and clone this repository
3. In the terminal run ```npm run```
4. Open index.html
5. Right click and select the ```Open with default browser``` option 
6. Enjoy our app!

## Technologies
- HTML
- CSS
- Bootstrap
- JavaScript

## Process
- Started by creating an API via express.js.
- On the front end, html pages were created before the js, this made writing the js easier and gave a skeleton to start on, from which css and js could be implemented.
- The js for the practice rounds was created first, so that we could then build on this code for the test round.
- The CSS was developed from a design planned out on Figma. 
- The app was continously tested to make sure it worked as it should.
- Bugs were spotted and fixed.

## Bugs
- Connecting to the server is not instantaneous. When a quiz is loaded it may take 30s for the server and client side to connect. This is due to the server being slow to start up.

## Wins and Challenges

### Wins 
- Managed to get the answers displayed on the quiz pages to shuffle 
- Managed to get the questions to not repeat in the test rounds

### Challenges
- The shuffle answers function had a bug, which we did not realise until after the CSS was implemented. This was solved in the js file.

## Future Features
- Add more specific categories such as the English Civil War.
- Optimise for mobile devices.
- Provide explanations of answers such as facts.
- Keep content fresh by updating questions.
- Could add a confirm answer button and function so that less mistakes are made if an incorrect answer is accidently chosen.


