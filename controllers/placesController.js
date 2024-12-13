const Places =require("../models/placesModels")
const{v4:uuidv4} = require('uuid');
exports.getPlaces =async(req,res)=>{
    try{
        const places =await Places.find();
        res.send(places);
    }catch(err){
        console.error(err);
    }
};

exports.createPlaces =async(req,res)=>{
    const {title,description,image,location,rating}=req.body;
    const places =new Places({
        id:uuidv4(),
        title,
        description,
        image,
        location,
        rating,
        
    })
    await places.save();
    res.status(200).json("Places Created Successfully");
};










