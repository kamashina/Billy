import express  from "express";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";
mongoose
 .connect('mongodb+srv://admin:<12345>@cluster0.f3hdq.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>console.log('DB ok'))
    .catch((err)=>console.log('db error' , err))
const app = express();
app.use(express.json());
app.get('/' , (req, res) =>{
res.send(' Hello World');
});
app.post('/Reg', (req, res) => {
    console.log(req.body)
    const token = jwt.sign({
 nick: req.body.nick,
country: req.body.country
    }, 
    '123', 
    );
 res.json({
    parol: true,
    token,
 })
})
app.listen(1983 , (err) => {
    if(err){ 
        return console.log(err)
    }
        return console.log('Serv OK')
})
