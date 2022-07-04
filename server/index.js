import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import { regiValidation } from './validations/Reg.js'
import { body, validationResult } from 'express-validator'
import  UserModel  from './models/User.js'
import checkAuth from './utils/checkAuth.js'
import bcrypt from "bcrypt"

mongoose
  .connect('mongodb+srv://admin:12345@cluster0.f3hdq.mongodb.net/blog?retryWrites=true&w=majority')
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('db error', err))
const app = express()
app.use(express.json())



///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.post('/auth/Reg', regiValidation, async (req, res) => {    // РЕГИСТРАЦИЯ 
  try{
    const error = validationResult(req)
    if (!error.isEmpty()) {
      return res.status(400).json(error.array())
    };

    const password = req.body.password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
  
    const doc = new UserModel({
      email: req.body.email,
      nickname: req.body.nickname,
      passwordHash: hash,
      avatar: req.body.avatar,
    })
    const user = await doc.save()
const token = jwt.sign({
  _id: user._id,
}, 'secret123', 
{
  expiresIn: '30d'
},)

const {passwordHash, ...userData} = user._doc
    res.json({
      ...userData,
      token,
    })
  } catch(err){
res.status(500).json({
  message: 'Не удалось зарегистрироваться',
})
  }
})

//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.post('/auth/login', async (req, res) =>{   // АВТОРИЗАЦИЯ
try{
const user = await UserModel.findOne({email: req.body.email})
if (!user){
  return res.status(404).json({
    message: 'Пользователь не найден',
  });
}

const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash)
if(!isValidPass){
  return res.status(404).json({
    message: 'Неверый логин или пароль',
  });
}

const token = jwt.sign({
  _id: user._id,
}, 'secret123', 
{
  expiresIn: '30d'
},)
const {passwordHash, ...userData} = user._doc
    res.json({
      ...userData,
      token,
    })
}catch(err){
  res.status(500).json({
    message: 'Не удалось аторизоваться',
  })
}
})

//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/auth/me' , checkAuth, (req, res) => {   //ПОЛУЧЕНИЕ ИНФЫ О ЧЕЛЕ
  try{
    res.json({
      success: true,
    })
  }catch(err){}
})

//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.listen(1983, (err) => {
  if (err) {
    return console.log(err)
  }
  return console.log('Serv OK')
})
