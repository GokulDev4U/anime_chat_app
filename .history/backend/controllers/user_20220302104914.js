const User = require("../models/Post");

exports.register = async (req, res, next) => {
    try {
        const {name,email,password} = req.body;
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
        
    }
};
