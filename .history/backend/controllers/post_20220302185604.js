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
      owner: req.user_id,
    };

    console.log(newPostData);

    const newPost = await Post.create(newPostData);
    const user = await User.findById(req.user_id);
    console.log(user);

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
