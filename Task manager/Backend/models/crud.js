const mongoose = require("mongoose")

const CrudSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"provide a name"],
        trim:true,
        maxlength:[50,'Name must be less than 50 chatacters']
    },
    comment:String,
      
    completed:{
        type:Boolean,
        dafault:false
      }  
      
},{
    
          timestamps:true
})


module.exports = mongoose.model('Crud', CrudSchema)