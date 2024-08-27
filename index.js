import express from 'express'
import morgan from 'morgan';
import cors from "cors";
import path from "path";
import './src/database';
import router from './src/routes/property.routes';
import 'dotenv/config'

const app = express()

app.set('port', process.env.PORT || 4003);

app.listen(app.get('port'), ()=>{console.log("desde el puerto " + app.get('port'))
})

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/api', router)