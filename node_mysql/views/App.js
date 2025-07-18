import express, { json } from 'express';
const App=express();
import cors from "cors";
App.use(cors())
App.set('view engine', 'ejs');
App.set('views', '../templates');
import { getClient , getClientDetail , createClient } from '../models/db.js';
App.use(express.json())

App.get('/client/', async (req,res)=>{
    // const clientNo=req.params.id;
    const client=await getClient();
    res.send(client);
      

})
App.get('/client/:clientNo/', async (req,res)=>{
    const id=req.params.clientNo;
    const client=await getClientDetail(id);
    res.send(client);
})

App.post('/add/', async (req,res)=>{
    try{
        const {clientNo,fName,Iname,telNo,prefType,maxRent,Email}=req.body
        const newClient=await createClient(clientNo,fName,Iname,telNo,prefType,maxRent,Email);
        res.status(201).redirect('/client/');

    }
    catch(error){
        throw error;
    }

})

App.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send(`something went wrong`);
    
})

const port=process.env.PORT||3000;
App.listen(port,()=>{
    console.log(`loading on ${port} ....`);
    
})

