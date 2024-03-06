import mongoose from 'mongoose'
import 'dotenv/config'

/* const url = 'mongodb://127.0.0.1:27017/bmzpropiedades';
mongoose.connect(url) */

const URI= process.env.MONGODB_URI_BMZ
mongoose.connect(URI)

const connection = mongoose.connection
connection.once('open', ()=>{
    console.log(" bd conectada")
})