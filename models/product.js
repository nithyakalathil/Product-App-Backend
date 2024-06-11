
const mongoose=require("mongoose")
const schema = mongoose.schema(
    {
        "name":String,
        "cat":String,
        "pri":String,
        "image":String,
    }
)

let productmodel=mongoose.Model("products",schema)

module.exports={productmodel}