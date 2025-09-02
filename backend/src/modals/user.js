const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: { type: String, required: true ,unique:false}, 
  phoneNumber: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,                
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Invalid email address'],
  },
  password: { type: String, required: true },
  companyName: { type: String, required: true },
  agency: {
    type: String,
    enum: ['yes', 'no'],
    required: true,
  },
}, { timestamps: true });





module.exports = mongoose.model('User', userSchema);
