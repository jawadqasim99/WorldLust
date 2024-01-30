const express =  require("express");
const path= require("path");
const mongoose= require("mongoose");
const Listing=require("./models/listing/listing.js");
const { request } = require("express");
const app = express();
const methodOverride=require("method-override");
const { get } = require("https");


// set all addional that connect ejs and other
app.set("view engine", "ejs");
app.set("views" , path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
//.......................................


// connect Database
mongoose.connect("mongodb://localhost:27017/worldLust").then((res)=>{
    console.log("Server is started");
}).catch((e)=>{
    console.log(e);
})
//..........................................


//Start a server with port 8000
app.listen(8000,()=>{
    console.log("Server started");
})
//...............................................


/// just for check server
app.get("/",(req,res)=>{
    res.send("All ok")
})
//.................................................


//Render all listing data
app.get("/listing",async(req,res)=>{
let listingData=await Listing.find({});
res.render("listing/index.ejs",{listingData});

})
//..................................................


// see list ditalis all
app.get("/listing/:id",async(req,res)=>{
    let {id}=req.params;
   let listDetails= await Listing.findById(id);
  res.render("listing/view.ejs",{listDetails});
    
})
//.......................................................

//Edit a post 
// Render edit form
app.get("/listing/:id/edit",async(req,res)=>{
    let {id}=req.params;
   let listDetails= await Listing.findById(id);
  res.render("listing/edit.ejs",{listDetails});
})
// Update form with new data
app.put("/listing/:id",async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,req.body.listing);
   res.redirect(`/listing/${id}`);
})