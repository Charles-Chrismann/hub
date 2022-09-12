"use strict"

async function getAllRepos(userName){
    await fetch(`https://api.github.com/users/${userName}/repos`)
    .then(function(response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.json();
      }).then(function(data) {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
      });
}

let userName = "Charles-Chrismann"

let repos = getAllRepos(userName)
console.log("tt")

// console.log(fetch(`https://api.github.com/users/${userName}/repos`))