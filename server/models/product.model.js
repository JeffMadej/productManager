const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title Must Be 3 Characters!"]
    },
    price:{
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price Must Be A Positive Number!"]
    },
    description:{
        type: String,
        required: [true, "Description Is Required!"],
        maxlength: [20, "No Life Stories"]
        
    }
}, { timestamps:true })

module.exports = mongoose.model("Product", ProductSchema);

