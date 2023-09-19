import asyncHandler from 'express-async-handler';

const testing = asyncHandler(async (req, res) => {
    try{
        res.status(200).json({
            message:"Success"
        })
    }catch(err){
        res.status(500).json({
            message:"SOmething went wrong"
        })
    }
})

export {testing};
