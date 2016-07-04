'use strict';

var app = angular.module('myApp');





app.service('Album', function($http) {
 
 this.addImageToAlbum = (albumId, imageId) => {
  return $http.put(`/api/albums/${albumId}/addImage/${imageId}`)
    .catch(err => {
      console.log(err);
    })
 }

 this.removeImageFromAlbum = (albumId, imageId) => {
  return $http.delete(`/api/albums/${albumId}/deleteImage/${imageId}`)
    .catch(err => {
      console.log(err);
    })
 }

  this.getAlbums = () => {
    return $http.get('/api/albums')
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  }

  this.getAlbum = (albumId) => {
    return $http.get(`/api/albums/${albumId}`)
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  }

  this.editAlbum = (albumId, albumObj) => {
    return $http.put(`/api/albums/${albumId}`, albumObj)
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  }

  this.addAlbum = albumObj => {
    return $http.post('/api/albums', albumObj)
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  }

  this.deleteAlbum = albumId => {
    return $http.delete(`/api/albums/${albumId}`)
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  }

});



app.service('Image', function($http) {
 

  this.getImages = () => {
    return $http.get('/api/images')
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  }

  this.getImage = (imageId) => {
    return $http.get(`/api/images/${imageId}`)
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  }

  this.editImage = (imageId, imageObj) => {
    return $http.put(`/api/images/${imageId}`, imageObj)
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  }

  this.addImage = imageObj => {
    return $http.post('/api/images', imageObj)
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  }

  this.deleteImage = imageId => {
    return $http.delete(`/api/images/${imageId}`)
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  }

});