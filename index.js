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
  fetch(`${baseApi}/repos${fork}/issues`).
    then(resp => {
      resp.json().
      then(data => {
        for (let i = 0; i < data.length; i++){
          displayIssue(new Issue(data[i]))
        }
      })
    })
}

function displayIssue(issue) {
  $('#issues').append(issue.template())
}

// function showIssues(json) {
// }

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }
  fetch(`blahblah${baseApi}/repos/${fork}/issues`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
}

// function showResults(json) {
// }

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`${baseApi}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(resp => {
    let repo = new Repo(resp);
    showForkedRepo(repo);
  })
}

function showForkedRepo(repo) {
  $('#results').append(repo.template())
}


function getToken() {
  return ''
}
