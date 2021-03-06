const Post = require('./model')();

async function findAll(req, res) {
  const posts = await Post.accessibleBy(req.ability);
  res.send({ posts });
}


async function create(req, res) {
  const post = new Post({
    ...req.body.post,
    author: req.user._id
  });

  req.ability.throwUnlessCan('create', post);
  await post.save();
  res.send({ post });
}



module.exports = {
  create,
  findAll
};
