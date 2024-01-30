const mongoose= require("mongoose");



const listSehcma= mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    image:{
        type:String,
        default:"https://unsplash.com/photos/a-couple-of-people-standing-on-top-of-a-hill-5jBY78hkqto",
        set:(v)=> v === ""? "https://unsplash.com/photos/a-couple-of-people-standing-on-top-of-a-hill-5jBY78hkqto":v
    },
    price:Number,
    location:String,
    country:String
});

const Listing = mongoose.model("Listing",listSehcma);

module.exports=Listing;