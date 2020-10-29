'use strict'
const serverless = require('serverless-http')
const express = require('express')
const { fetchTopPosts } = require('./src/FetchContent.js')
const app = express()

module.exports.storeNarrationHandler = async () => {
  // try {
  //   return await storeNarration();
  // } catch (e) {
  //   console.error(e)
  // }
  console.log('hello')
}
app.get('/:subreddit/:period', async (req, res) => {
  let posts = []
  try {
    posts = await fetchTopPosts(req.params.subreddit, req.params.period)
    res.json(posts)
  } catch (e) {
    console.log(e)
  }
})

module.exports.apiHandler = serverless(app)
