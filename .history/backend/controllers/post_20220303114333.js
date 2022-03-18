const Post = require("../models/Post");
const User = require("../models/User");

exports.createPost = async (req, res, next) => {
  try {
    const newPostData = {
      caption: req.body.caption,
      image: {
        public_id: "req.body.public_id",
        url: "req.body.url",
      },
      owner: req.user._id,
    };

    const newPost = await Post.create(newPostData);

    const user = await User.findById(req.user._id);

    user.posts.push(newPost._id);
    await user.save();

    res.status(201).json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Creating post failed!",
      error: error.message,
    });
  }
};

exports.likeAndUnlikePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if(!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found!",
      });

    if (post.likes.includes(req.user._id)) {
      const index = post.likes.indexOf(req.user._id);
      post.likes.splice(index, 1);
      await post.save();
      return res.status(201).json({
        message: "Post unliked!",
        success: true,
      });
    } else {
      post.likes.push(req.user._id);
      await post.save();
      return res.status(201).json({
        message: "Post liked!",
        success: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Like post failed!",
      error: error.message,
    });
  }
};
