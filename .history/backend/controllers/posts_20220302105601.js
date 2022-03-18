const Post = require("../models/Post");

exports.createPost = async (req, res, next) => {
    try {
        const newPostData = {
            caption: req.body.caption,
            image:{
                public_id: req.file.public_id,
                url: req.file.url,
            },
            owner: req.user_id,
        }

        // const newPost = await Post.create(newPostData);
        // res.status(201).json({
        //     message: "Post created successfully",
        //     post: newPost,
        // });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Creating post failed!",
            error: error.message,
        });
    }
        
    }
};
