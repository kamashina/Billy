import mongoose from 'mongoose'
const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true, // обязательность заполнения
    unique: true, // уникальность
  },
  nickname: {
    type: String,
    required: true, // обязательность заполнения
    unique: true, // уникальность
  },
  passwordHash: {
    type: String,
    required: true // обязательность заполнения
  },
  avatar: String
},
{
  timestamps: true
}
)
export default mongoose.model('User', UserSchema)
