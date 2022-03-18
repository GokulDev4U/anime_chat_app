const Post = require("../models/Post");

exports.createPost = async (req, res, next) => {
    try {
        const newPostData = {
            caption: req.body.caption,
            image:{
                public_id: req.file.public_id,
                url: req.file.url,
            }
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Creating post failed!",
            error: error.message,
        });
    }
        
    }
};
