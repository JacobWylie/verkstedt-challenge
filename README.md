# Verkstedt Coding Challenge

## Exercise

The idea of this project is to implement a small client application for discovering
trending repositories on GitHub.

A list of the most popular repositories of the last week should be displayed and the
user should be able to star them. The starred repositories, should be visible either
through a filter or in a different tab. Some basic info of the repo should be displayed,
such as: repo name, link to GitHub, description and number of stars. To keep things
simple, the starring won’t be sent back to GitHub’s servers but just stored in
localStorage.

Bonus task: if time allows, a language filter would be an awesome addition to have.

## Implementation Details

GitHub provides a public search endpoint which you can use for fetching the most
popular repositories:

https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc

We will really value: concise and clean code, use of semantic HTML, CSS naming
conventions and unit tests.

# My solution

* Note that the URL routing is not perfect because it's static hosted on Github Pages
* Refreshing the page will cause error if URL is not set properly 

#### Live Demo: [https://jacobwylie.github.io/verkstedt-challenge](https://jacobwylie.github.io/verkstedt-challenge)

## Install and run locally

#### Clone repo

```

git clone https://github.com/JacobWylie/verkstedt-challenge.git
cd SPO-form

```

#### Install modules and start webpack server

```

npm install
npm start

```

#### Navigate to http://localhost:8080/ in your browser





















