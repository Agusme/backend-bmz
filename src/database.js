import mongoose from 'mongoose'
import 'dotenv/config'
/* 
const url = 'mongodb://127.0.0.1:27017/bmzinmobiliaria';
mongoose.connect(url) 
 */
const URI= process.env.MONGODB_URI_BMZ
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
const connection = mongoose.connection
connection.once('open', ()=>{
    console.log("bd conectada" )
    console.log(URI)
})
