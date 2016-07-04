 'use strict';


const express = require('express');



// api/cruds
let router = express.Router();

let Image = require('../models/image');








router.route('/')
  .get((req,res) => {
  Image.find({}, (err, image)=> {
    if(err) return res.status(400).send(err);
    res.send(image);

  });
})
  .post((req,res) => {


    Image.create(req.body, (err, savedDoc) => {
      if(err) return res.status(400).send(err);

      res.send(savedDoc);
    });
   
});
  
  router.route('/:id')
    .delete((req,res) => {
      Image.findByIdAndRemove(req.params.id, (err) => {
        if(err) return res.status(400).send(err);

        res.send();
      });
    })
    .get((req,res) => {
      Image.findById(req.params.id, (err, image) => {
        if(err) return res.status(400).send(err);

        res.send(image);
      });
    })
    .put((req, res) => {
      Image.findByIdAndUpdate(req.params.id, req.body,{new: true}, (err, image) => {
        if(err) return res.status(400).send(err);

        res.send(image);
      });
    });
module.exports = router;
