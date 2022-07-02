import mongoose from 'mongoose'
const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  avatar: String
},
{
  timestamps: true
}
)
export default mongoose.model('User', UserSchema)
