 'use strict';


const express = require('express');
var async = require('async');




// api/cruds
let router = express.Router();

let Album = require('../models/album');








router.route('/')
  .get((req,res) => {
  Album.find({})
  .populate('images') 
  .exec((err, album)=> {
    if(err) return res.status(400).send(err);
    res.send(album);

  });
})
  .post((req,res) => {

    Album.create(req.body, (err, savedDoc) => {
      if(err) return res.status(400).send(err);

      res.send(savedDoc);
    });
   
});
  
  router.route('/:id')
    .delete((req,res) => {
      Album.findByIdAndRemove(req.params.id, (err) => {
        if(err) return res.status(400).send(err);

        res.send();
      });
    })
    .get((req,res) => {
      Album.findById(req.params.id, (err, album) => {
        if(err) return res.status(400).send(err);

        res.send(album);
      });
    })
    .put((req, res) => {
      Album.findByIdAndUpdate(req.params.id, req.body,{new: true}, (err, album) => {
        if(err) return res.status(400).send(err);

        res.send(album);
      });
    });


router.put('/:albumId/addImage/:imageId', (req, res) => {
  Album.findById(req.params.albumId, (err, album) => {
    if(err || !album) return res.status(400).send(err || {error: "Album does not exist"});
    album.images.push(req.params.imageId);

    album.save((err, savedAlbum) => {
      if(err) return res.status(400).send(err);
      res.send(savedAlbum);
    });
    
  });
});

router.delete('/:albumId/deleteImage/:imageId', (req,res) => {
  Album.findById(req.params.albumId, (err, album) => {
    if(err || !album) return res.status(400).send(err || {error: "Album does not exist"});

    album.update({$pull: {images: req.params.imageId}}, (err, result) => {
      if(err) res.status(400).send(err);
      res.send(result);
    })
  })
})



 // if(err || !album) return res.status(400).send(err || {error: "Album does not exist"});
 //        async.each(album.images, function(image, cb) {
 //          Image.findByIdAndRemove(image._id, (err) => {
 //            if(err) cb(err);
 //          });
 //        })

module.exports = router;
