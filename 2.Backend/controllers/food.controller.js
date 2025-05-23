import foodModel from "../models/food.model.js"
import fs from 'fs';
const addFood = async (req , res) =>{
        //create new Food Model
        let image_filename = `${req.file.filename}`;
        const food = new foodModel({
            name : req.body.name,
            description: req.body.description,
            price:req.body.price,
            category:req.body.category,
            image:image_filename
        })
        //save food in database
        try{
            await food.save();
            res.json({ 
                success : true,
                message : "Food Added"
            })
        } catch(error){
            console.log(error);
            res.json({
                success : false,
                message : "Some Error Occured"
            })
        }
}

// list all food in database
const listFood = async(req ,res) =>{
    try{
        const foods = await foodModel.find({});
        res.json({
            success:true ,
            data : foods
        })
    }catch(error){
        console.log(error);
        res.json({
            success : false ,
            message : "Error in listing"
        })
    }
}

//remove food items from database

const removeFood = async(req , res) =>{
    try{
        //find food from db
        const food = await foodModel.findById(req.body.id);

        //delete image from uploads folder
        fs.unlink(`uploads/${food.image}` , ()=>{})

        //delet food from database
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({
            success : true,
            message : "Food Removed"
        })
    }catch(error){
        console.log(error)
        res.json({
            success : false , 
            message : "Error in removing"
    })
    }
}

export {addFood , listFood , removeFood}; 