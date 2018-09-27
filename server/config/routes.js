const posts_controller = require("../controllers/posts.js")

module.exports = function(app){

  app.get('/posts', posts_controller.renderAll);
  app.get('/posts/:id', posts_controller.renderOne);
  app.post('/posts/new', posts_controller.createPost);
  app.get('/posts/:id/upvote', posts_controller.upvotePost);
  app.get('/posts/:id/downvote', posts_controller.downvotePost);
  app.get('/posts/:id/commentscount', posts_controller.renderCommentsCount);

}
