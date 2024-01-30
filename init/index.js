const mongoose= require("mongoose");
const Listing=require("../models/listing/listing");
const initData=require("./data.js")

mongoose.connect("mongodb://localhost:27017/worldLust").then((res)=>{
    console.log("Server is started");
}).catch((e)=>{
    console.log(e);
})

const initDb=async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("DataStore");
}
initDb();

