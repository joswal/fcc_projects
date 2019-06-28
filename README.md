# My FreeCodecamp projects

This repository contains my solved [freeCodeCamp](https://www.freecodecamp.org) projects that are required for certification

## Table of Contents

### freeCodeCamp Certifications

- [ ] [Responsive web design projects](https://github.com/joswal/fcc_projects/tree/master/responsive_web_projects)
- [x] [JavaScript algorithm and data structure projects](https://github.com/joswal/fcc_projects/tree/master/algorithm_projects)
- [ ] [Api and micro-services projects](https://github.com/joswal/fcc_projects/tree/master/api_projects)
- [ ] data visualization projects
- [ ] front end library projects
- [ ] Information Security and Quality Assurance

## Javascript Algorithms and data structure

- [**Caesars Cipher**](https://github.com/joswal/fcc_projects/blob/master/algorithm_projects/caesars_cipher.js)

  <sup>_#JavaScript, #ROT13, #Algorithms_</sup>

- [**Cash Register**](https://github.com/joswal/fcc_projects/blob/master/algorithm_projects/cash_register.js)

  <sup>_#JavaScript, #Algorithms_</sup>

- [**Palindrome Checker**](https://github.com/joswal/fcc_projects/blob/master/algorithm_projects/cash_register.js)

  <sup>_#JavaScript, #Algorithms_</sup>

- [**Roman Numerals**](https://github.com/joswal/fcc_projects/blob/master/algorithm_projects/roman_numerals.js)

  <sup>_#JavaScript, #Algorithms_</sup>

- [**Telephone Validator**](https://github.com/joswal/fcc_projects/blob/master/algorithm_projects/telephone_validator.js)

  <sup>_#JavaScript, #Algorithms_</sup>

## Api and Microservices

- [**Timestamp Microservice**](https://github.com/joswal/fcc_projects/tree/master/api_projects/timestamp)

  > usage : you can test it out [here](https://golden-licorice.glitch.me/api/timestamp/2013-10-10) using this example baseurl/api/timestamp/2018-05-04

  <sup>_#JavaScript, #Node.js, #cors, #express.js_</sup>

- [**Request Header Microservice**](https://github.com/joswal/fcc_projects/tree/master/api_projects/request_header)

  > usage : you can test it out on [right-anchovy.glitch.me/api/whoami](https://right-anchovy.glitch.me/api/whoami)

  <sup>_#JavaScript, #Node.js, #cors, #express.js_</sup>

- [**Url Shortner Microservice**](https://github.com/joswal/fcc_projects/tree/master/api_projects/url_shortner)

  > usage :

  <sup>_#JavaScript, #Node.js, #cors, #express.js, #mongodb, #mongoose_</sup>

- [**Exercise Tracker Microservice**](https://github.com/joswal/fcc_projects/tree/master/api_projects/exercise_tracker)

  <sup>_#JavaScript, #Node.js, #cors, #express.js, #mongodb, #mongoose_</sup>

  > User Stories

  1. I can create a user by posting form data username to /api/exercise/new-user and returned will be an object with username and \_id.
  1. I can get an array of all users by getting api/exercise/users with the same info as when creating a user.
  1. I can add an exercise to any user by posting form data userId(\_id), description, duration, and optionally date to /api/exercise/add. If no date supplied it will use current date. Returned will the the user object with also with the exercise fields added.
  1. I can retrieve a full exercise log of any user by getting /api/exercise/log with a parameter of userId(\_id). Return will be the user object with added array log and count (total exercise count).
  1. I can retrieve part of the log of any user by also passing along optional parameters of from & to or limit. (Date format yyyy-mm-dd, limit = int)
