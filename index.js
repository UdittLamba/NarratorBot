const serverless = require('serverless-http');
const express = require('express');
const {fetchTopPosts} = require('./FetchContent');
const app = express();

// API endpoints go here.
app.get('/:subreddit/:period', async (req, res) => {
  let posts = [];
  try {
    posts = await fetchTopPosts(req.params.subreddit, req.params.period);
    res.json(posts);
  } catch (e) {
    console.log(e);
  }
});

module.exports.apiHandler = serverless(app);
