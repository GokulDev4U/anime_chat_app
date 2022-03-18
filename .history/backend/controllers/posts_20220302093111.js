const Post = require("../models/Post");

exports.createPost = async (req, res, next) => {
    try {
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Creating post failed!",
            error: error.message,
        });
    }
        
    }
};
