import express from 'express';
import routes from './routes/index.js';
import connectionDatabase from './config/DBconnection.js';
import manipulationError from './middleware/manipulationError.js';
import manipulation404 from './middleware/manipulation404.js';
const dbConnect = await connectionDatabase();

//method invoke error. the first parameter is a string with the word key: error
dbConnect.on('error', (error)=>{
    console.log("Error to the connect database");
})

//method invoke success. the first parameter is a string with the word key: open
dbConnect.once('open', ()=>{
    console.log('Database connected');
})



const app = express();
routes(app);

//chama depois de outros middlewares e chamadas de rotas

app.use(manipulation404, manipulationError);




export default app;