const express=require('express')
const App=express()
// const express=require('express')
// const App=express()

App.get('/',(req,res)=>{
    res.send("hello");
})

App.listen(5000)