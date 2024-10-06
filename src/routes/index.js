import users from './user.js'
import express from 'express';
import platform from './platform.js';

const routes = (app) =>{

    app.get('/', (req, res)=>{
        res.status(200).send("home page");
    })

    app.use(express.json(), users, platform);

}


export default routes;
