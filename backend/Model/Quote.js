
const mongoose =require('mongoose');
  

const quotesSchema=new mongoose.Schema(
    {
        author:{
            type:String
        },
        quote:{
          type:String
        },
    }
)




const quotes=mongoose.model('quotes',quotesSchema);

module.exports=quotes