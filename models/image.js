'use strict';

const mongoose = require('mongoose');


let Image = mongoose.model('Image', {
  url: {type: String, require: true},
  name: {type: String, require: true},
  createdAt: {type: Date, default: Date.now}
});



module.exports = Image;