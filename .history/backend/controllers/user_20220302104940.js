const User = require("../models/Post");

exports.register = async (req, res, next) => {
    try {
        const {name,email,password} = req.body;

        let user = await User.findOne({email:email});

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
        
    }
};
