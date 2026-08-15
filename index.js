// console.log("Maheen");
require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;

const githubData = {
  "login": "maheenfarooqui",
  "id": 169533376,
  "node_id": "U_kgDOChrfwA",
  "avatar_url": "https://avatars.githubusercontent.com/u/169533376?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/maheenfarooqui",
  "html_url": "https://github.com/maheenfarooqui",
  "followers_url": "https://api.github.com/users/maheenfarooqui/followers",
  "following_url": "https://api.github.com/users/maheenfarooqui/following{/other_user}",
  "gists_url": "https://api.github.com/users/maheenfarooqui/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/maheenfarooqui/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/maheenfarooqui/subscriptions",
  "organizations_url": "https://api.github.com/users/maheenfarooqui/orgs",
  "repos_url": "https://api.github.com/users/maheenfarooqui/repos",
  "events_url": "https://api.github.com/users/maheenfarooqui/events{/privacy}",
  "received_events_url": "https://api.github.com/users/maheenfarooqui/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Maheen Zuhra",
  "company": null,
  "blog": "",
  "location": "Pakistan ",
  "email": null,
  "hireable": null,
  "bio": "I'm Maheen Zuhra — a passionate learner on a mission to turn curiosity into real-world skills, one line of code at a time.",
  "twitter_username": null,
  "public_repos": 97,
  "public_gists": 0,
  "followers": 14,
  "following": 5,
  "created_at": "2024-05-11T11:49:53Z",
  "updated_at": "2026-05-13T06:46:12Z"
}

app.get('/githubdata',(req , res) => {
  res.json(githubData)
})
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/github',(req, res) => {
    res.send('maheenfarooqui');
})
app.get('/login',(req, res) => {
    res.send('<h1>please login first</h1>');
})

app.get('/youtube' , (req , res) => {
res.send('<h1>Maheen zuhra<h1/>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});