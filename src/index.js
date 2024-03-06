import express from 'express'
import morgan from 'morgan';
import cors from "cors";
import './database';
import router from './routes/property.routes';
import 'dotenv/config'

const app = express()

app.set('port', process.env.PORT || 4003);

app.listen(app.get('port'), ()=>{console.log("desde el puerto " + app.get('port'))
})

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.use('/api', router)