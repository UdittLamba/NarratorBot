'use strict'
const Snoowrap = require('snoowrap')

/**
 *
 * @return {Snoowrap}
 */
const createRequester = () => {
  return new Snoowrap({
    userAgent: process.env.USER_AGENT,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  })
}

const fetchTopPosts = async (subredditName, period) => {
  let posts
  const response = []
  try {
    const requester = createRequester()
    posts = await requester.getSubreddit(subredditName)
      .getTop({ time: period })
    for (const post of posts) {
      response.push({
        title: post.title,
        score: post.score,
        selfText: post.selftext,
        selfTextHtml: post.selftext_html,
        created: post.created
      })
    }
    return response
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  createRequester,
  fetchTopPosts
}
