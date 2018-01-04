const userName = ''
const baseApi = 'https://api.github.com'
const fork = `${userName}/javascript-fetch-lab`

function Issue(attributes) {          //     Issue Object
  this.title = attributes.title
  this.body = attributes.body
  this.url = attributes.url
}

Issue.prototype.template = function(){   // Issue Prototype
   var template = `<li>Title: <a href="${this.url}">${this.title} </a><span> | Body: ${this.body}</span></li>`
   return template;
};

function Repo(attributes) {             //      Repo Object
  this.url = attributes.url
}

Repo.prototype.template = function() {    // Repo Prototype
  var template = `<h3>Forked Successfully!</h3><a href="${this.url}"> ${this.url}</a>`
  return template;
}


function getIssues(data) {
  fetch(`${baseApi}/repos/${fork}/issue`).
    then(resp => {
      resp.json().
      then(data => {
        for (let i = 0; i < data.length; i++){
          displayIssue(new Issue(data[i]))
        }
      })
    })
}

// function showIssues(json) {
// }

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
