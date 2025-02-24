const PostModel = require("../models/post.model");

module.exports.getPosts = async (req, res) => {
  const posts = await PostModel.find();
  res.status(200).json(posts);
};

module.exports.setPots = async (req, res) => {
  if (!req.body.message) {
    res.status(400).json({ message: "Veillez ajouter un message !" });
  }

  const post = await PostModel.create({
    message: req.body.message,
    author: req.body.author,
  });

  res.status(200).json(post);
};

module.exports.editPost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);

  if (!post) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }

  const updatePost = await PostModel.findByIdAndUpdate(post, req.body, {
    new: true,
  });

  res.status(200).json(updatePost);
};

module.exports.deletePost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);

  if (!post) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }
  await post.deleteOne({ _id: post });
  res.status(200).json("Message supprimé " + req.params.id);
};
