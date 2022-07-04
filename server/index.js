import express from 'express'
import mongoose from 'mongoose'
import { regiValidation } from './validations/Reg.js'
import checkAuth from './utils/checkAuth.js'
import cors from 'cors'
import * as UserController from './controllers/UserController.js'

mongoose
  .connect('mongodb+srv://admin:12345@cluster0.f3hdq.mongodb.net/blog?retryWrites=true&w=majority')
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('db error', err))
const app = express()
app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('uploads'));

app.post('/auth/login', UserController.login)

app.post('/auth/register',regiValidation, UserController.register)

app.get('/auth/me', checkAuth, UserController.getMe)

app.listen(1983, (err) => {
  if (err) {
    return console.log(err)
  }
  return console.log('Serv OK')
})
