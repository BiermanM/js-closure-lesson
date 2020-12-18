# Lesson Introduction

## Why Learn About Closures?
Closures are a very important piece in the puzzle we're learning that is JavaScript. Last week, we explored variables and functions that allow us to perform calculations on an input and then produce an output. This can seem fairly straightforward with a few functions and variables, but when building an entire web application, there will be a lot of functions and variables to keep track of. More importantly, you want to make sure specific variables can only be accessed by certain functions, because it may otherwise lead to some unexpected results. That is what's known as a *logic error*, where your code runs without errors but it doesn't return a result you expect (and because of that, it can be very difficult to track down).

Closures can be thought of as a form of data privacy. Let's say we're making a web application for a bank, where users can log in a deposit or withdraw money from their bank account. Closures help us make sure a given user has access to only their account information, so they can't withdraw money from someone else's account.

## Bonus Material
Interested in learning more about closures and why they're useful? Check out these articles:
* https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36
* For the visual learners: https://miro.medium.com/max/1400/1*NamyWBedolrH4-N3iwUMfw.png
* This one explains it through a real-life example: https://www.freecodecamp.org/news/javascript-closures/

## Lesson Structure
Total expected time: 1 hour 20 minutes

### Part 01: Local Scope (30 minutes)
1. Instructor Demo (10 minutes)
2. Student Activity (15 minutes)
3. Section Review (5 minutes)

### Part 02: Outer Function Scope (25 minutes)
1. Instructor Demo (10 minutes)
2. Student Activity (10 minutes)
3. Section Review (5 minutes)

### Part 03: Global Scope (25 minutes)
1. Instructor Demo (5 minutes)
2. Student Activity (15 minutes)
3. Section Review (5 minutes)

## Prior Knowledge Assumptions
This lesson is structured with the assumption that all students have learned and are comfortable with all of the following concepts:
* Variables
* Functions
* Conditional Logic (and `if` statements)
* Navigating through directories using `cd` on the Terminal (for Mac) or Command Prompt (for Windows)
* Printing to the console using `console.log()`

It's also under the assumption that students have already installed Node on their computer and are familiar with running a JavaScript file using Node through Terminal or Command Prompt. If not, here's a link to install Node: https://nodejs.dev/
