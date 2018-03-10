const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserSchema = new Schema({
  studentId:{
    type: String,
    required: true
  },
  studentName:{
    type: String,
    required: true
  },
  issued:{
    type: Date,
    default: Date.now
  }
  // validTill:{
  //   type: Date,
  //   default: Date +1
  // }
  // img:{
  //   data: Buffer,
  //   contentType: String
  //  }

});

mongoose.model('users',UserSchema);
