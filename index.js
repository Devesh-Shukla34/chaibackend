require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubData={
  "login": "Devesh-Shukla34",
  "id": 175638053,
  "node_id": "U_kgDOCngGJQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/175638053?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Devesh-Shukla34",
  "html_url": "https://github.com/Devesh-Shukla34",
  "followers_url": "https://api.github.com/users/Devesh-Shukla34/followers",
  "following_url": "https://api.github.com/users/Devesh-Shukla34/following{/other_user}",
  "gists_url": "https://api.github.com/users/Devesh-Shukla34/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Devesh-Shukla34/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Devesh-Shukla34/subscriptions",
  "organizations_url": "https://api.github.com/users/Devesh-Shukla34/orgs",
  "repos_url": "https://api.github.com/users/Devesh-Shukla34/repos",
  "events_url": "https://api.github.com/users/Devesh-Shukla34/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Devesh-Shukla34/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-07-15T16:40:02Z",
  "updated_at": "2024-07-15T16:40:33Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('Its Devesh Shukla')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/chai',(req,res)=>{
    res.send('<h2>Chai aur Code</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get('/github',(req,res)=>{
  res.json(githubData)
})