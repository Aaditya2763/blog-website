const mongoose=require('mongoose');
const Quote=require('./Model/Quote')



const Dummy_Quotes=[{
 
    author:"Mahatma Gandhi",
    quote:"The best way to find yourself is to lose yourself in the service of others."
},
{
   author:"Nelson Mandela",
   quote:"The best way to find yourself is to lose yourself in the service of others."
},

{
   author:"Abraham Linkon",
   quote:"The best way to find yourself is to lose yourself in the service of others."
},

{
   author:"Sardar Patel",
   quote:"The best way to find yourself is to lose yourself in the service of others."


   
}]


async function seedDb(){
    await Quote.deleteMany({});
    await Quote.insertMany(Dummy_Quotes);
    console.log('DB Seeded SuccessFully');

}

module.exports=seedDb;