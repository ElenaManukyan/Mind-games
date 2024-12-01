# Brain Games

## Tests and code analysis:
[![Actions Status](https://github.com/SierraMoiseevna/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/SierraMoiseevna/frontend-project-44/actions)
<a href="https://codeclimate.com/github/SierraMoiseevna/frontend-project-44/maintainability"><img src="https://api.codeclimate.com/v1/badges/6af649e830b701eac8da/maintainability" /></a>

**Brain Games** is a set of five console games designed to train your brain. Each game presents questions that you need to answer correctly. After three correct answers, the game is considered completed. A wrong answer ends the game and offers to start again.

## Games

1. **Calculator**: Solve basic arithmetic expressions.
2. **Progression**: Find the missing number in a sequence.
3. **Even or Odd**: Determine whether a number is even.
4. **Greatest Common Divisor**: Find the GCD of two numbers.
5. **Prime Number**: Check if a number is prime.

---

## Installation

1. Make sure you have Node.js version 14 or higher installed.
2. Clone the repository:
   ```bash
   git clone https://github.com/ElenaManukyan/Mind-games.git
3. Navigate to the project directory:
   ``` bash
   cd Mind-games
4. Install dependencies:
   ``` bash
   npm install

## Linting
The project uses ESLint with Airbnb's configuration. To check code for compliance with coding standards, run:
```bash
npx eslint .

## Usage
Games can be launched from the terminal.

### Game: "Parity check"
A random number is shown to user.
User enters the answer into the console: "yes" if the number is even,
or "no" if it is odd.  
Game start: ```make brain-even```
#### Demonstration: 
<a href="https://asciinema.org/a/635698" target="_blank"><img src="https://asciinema.org/a/635698.svg" /></a>

### Game: "Calculator"
User is shown a random mathematical
expression, for example 35 + 16. User calculates and records
the correct answer is in  console.  
Game start: ```make brain-calc```
#### Demonstration: 
<a href="https://asciinema.org/a/636163" target="_blank"><img src="https://asciinema.org/a/636163.svg" /></a>

### Game "Greatest Common Divisor" 
User is shown two random numbers,
for example, 25 50. User calculates and
enters the greatest common divisor of these numbers into the console.  
Game start: ```make brain-gcd```
#### Demonstration: 
<a href="https://asciinema.org/a/636232" target="_blank"><img src="https://asciinema.org/a/636232.svg" /></a>

### Game "Arithmetic Progression"
Shows user a series of numbers forming an arithmetic
a progression, any of the numbers is replaced by two dots.
User determines this number and writes the response to console.  
Game start: ```make brain-progression```
#### Demonstration: 
<a href="https://asciinema.org/a/636250" target="_blank"><img src="https://asciinema.org/a/636250.svg" /></a>


### Game "Is it a prime number?"
A random number is shown to user. User
answers "yes" if the number is prime, or "no" if
the number is not prime.  
Game start: ```make brain-prime```
#### Demonstration: 
<a href="https://asciinema.org/a/0A1eVHAXCze9Y9ZcqNhMenLrH" target="_blank"><img src="https://asciinema.org/a/0A1eVHAXCze9Y9ZcqNhMenLrH.svg" /></a>
