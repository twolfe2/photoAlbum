'use strict';

const mongoose = require('mongoose');


let Album = mongoose.model('Album', {
  name: {type: String, require: true},
  images: [{type: mongoose.Schema.Types.ObjectId, ref: 'Image'}],
  createdAt: {type: Date, default: Date.now}
});



module.exports = Album;