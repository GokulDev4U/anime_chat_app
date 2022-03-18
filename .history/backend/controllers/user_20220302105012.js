const User = require("../models/Post");

exports.register = async (req, res, next) => {
    try {
        const {name,email,password} = req.body;

        let user = await User.findOne({email:email});
        if(user){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
        
    }
};
