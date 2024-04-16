const express = require("express");
const {
  setPots,
  getPosts,
  editPost,
  deletePost,
} = require("../controllers/post.controllers");
const router = express.Router();

//zGENsS98jmWmxzLm : MongoDB atlas user access
//bikJ7OZsgxHleDVE I5gcJYBjvcBdCahu MongoDB atlas user access with my onegromayinzi@gmail.com account

router.get("/", getPosts);
router.post("/", setPots);
router.put("/:id", editPost);
router.delete("/:id", deletePost);

router.patch("/like-post/:id", (req, res) => {
  res.json({ message: "Post liké id " + req.params.id });
});

module.exports = router;
