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

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found!",
      });
    }

    if (post.owner.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        success: false,
        message: "You are not authorized to delete this post!",
      });
    }

    await post.remove();

    const user = await User.findById(req.user._id);

    const index = user.posts.indexOf(req.params.id);
    user.posts.splice(index, 1);
    await user.save();

    res.status(200).json({
      success: true,
      message: "Post deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Deleting post failed!",
      error: error.message,
    });
  }
};

exports.likeAndUnlikePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found!",
      });
    }

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

exports.getPostOfFollowing = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).populate("following");
    const posts = await Post.find({
      owner: { $in: user.following },
    }).populate("owner");

    res.status(200).json({
      success: true,
      message: "Posts fetched successfully!",
      posts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fetching posts failed!",
      error: error.message,
    });
  }
};

exports.updateCaption = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found!",
      });
    }

    if (post.owner.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        success: false,
        message: "You are not authorized to update this post!",
      });
    }

    post.caption = req.body.caption;
    await post.save();

    res.status(200).json({
      success: true,
      message: "Post updated successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Updating post failed!",
      error: error.message,
    });
  }
};

exports.commentOnPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found!",
      });
    }

    let commentExists = -1;
    // check if comment already exists
    console.log(post.comments);
    post.comments.forEach((comment, index) => {
      if (comment.owner.toString() === req.user._id.toString()) {
        commentExists = index;
      }
    });

    if (commentExists !== -1) {
      post.comments[commentExists].comment = req.body.comment;
      await post.save();
      return res.status(200).json({
        success: true,
        message: "Comment updated successfully!",
      });
    } else {
      post.comments.push({
        text: req.body.text,
        owner: req.user._id,
      });
      console.log(post.comments);
    }

    await post.save();

    res.status(200).json({
      success: true,
      message: "Comment added successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Adding comment failed!",
      error: error.message,
    });
  }
};
