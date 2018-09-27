const knex = require("../db/knex.js");

module.exports = {
  renderAll: (req, res) => {
    knex('posts')
      .orderBy('upvotes', 'desc')
      .then((response) => {
        res.json({
          posts: response
        })
      })
  },
  renderOne: (req, res) => {
    let promiseArr = [];

    const postsPromise = knex('posts')
      .where('id', req.params.id)
    promiseArr.push(postsPromise);

    const commentsCountPromise = knex('comments')
      .where('parent_post_id', req.params.id)
      .count('id');
    promiseArr.push(commentsCountPromise);

    const commentsPromise = knex('comments')
      .where('parent_post_id', req.params.id);
    promiseArr.push(commentsPromise);

    Promise.all(promiseArr)
      .then((response)=>{
        res.json({
          post: response[0],
          comments_amount: response[1],
          comments: response[2]
        })
      })
  },
  createPost: (req, res) => {
    knex('posts')
      .insert({
        title: req.body.title,
        categories: req.body.categories,
        content: req.body.content
      }, '*')
      .then((postBody) => {
        res.json(postBody);
      })
  },
  upvotePost: (req, res) => {
    knex('posts')
      .where('id', req.params.id)
      .increment('upvotes', 1)
      .then(() => {
        res.send(req.params.id)
      })
  },
  downvotePost: (req, res) => {
    knex('posts')
      .where('id', req.params.id)
      .increment('upvotes', -1)
      .then(() => {
        res.send(req.params.id)
      })
  },
  renderCommentsCount: (req, res) => {
    knex('comments')
      .where('parent_post_id', req.params.id)
      .count('id')
      .then((response)=>{
        let countObj = response[0];
        countObj.count= Number(countObj.count);
        res.json(countObj)
      })
  }

}