import express  from "express";
import jwt from "jsonwebtoken"
const app = express();
app.use(express.json());
app.get('/' , (req, res) =>{
res.send('пидор Hello World');
});
app.post('/auth/login', (req, res) => {
    console.log(req.body)
    const token = jwt.sign({
 email: req.body.email,
 fullname: 'камашина',
    }, 
    '123', 
    )
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
