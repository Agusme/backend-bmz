import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import './src/database';
import router from './src/routes/property.routes'; // Asegúrate de que el nombre de la ruta es correcto
import 'dotenv/config';

const app = express();

app.set('port', process.env.PORT || 4004);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router); 

app.listen(app.get('port'), () => {
  console.log("desde el puerto " + app.get('port'));
});
