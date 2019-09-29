
const mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  url: {
    type: String,
    require: true,
    index: true
  },
  name: {
    type: String,
    require: true,
    index: true
  },
  id: {
    type: String,
    // require: true
    unique: true
  }
});

// export default mongoose