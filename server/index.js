import express  from "express";
const app = express();
app.get('/' , (req, res) =>{
res.send('Hello World');
});
app.listen(1983 , (err) => {
    if(err){
        return console.log(err)
    }
        return console.log('Serv OK')
})
