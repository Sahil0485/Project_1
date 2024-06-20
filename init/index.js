const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust1";
main()
.then(()=>{

    console.log("db is connected");
})
.catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async () =>{
    await Listing.deleteMany({});
    initData.data= initData.data.map((obj)=>({...obj,owner:"6671b7f3dfd28380842da66a"}))
    await Listing.insertMany(initData.data);
    console.log("data was initaialze")

}

initDB();