'use strict';



var app = angular.module('myApp');


app.controller('mainCtrl', function() {
  console.log('hello!');
});



app.controller('albumsCtrl', function($scope, $state, Album) {
  // console.log('albumsCtrl!');
  init();

  function init() {
    Album.getAlbums()
      .then((res) => {
        console.log(res.data);
        $scope.albums = res.data;
      })
  }
  let flag = 0;
  $scope.deleteAlbum = (albumId) => {
     flag ||alert('This action will delete the album and all photos in the album. Press ok and delete again to confim');
     if(!flag) {
      flag++;
      return;
     }

    
    Album.deleteAlbum(albumId)
      .then(() => {
        alert('Album Deleted');
        flag=0;
        $state.reload('albums');

      })
  }
});


app.controller('albumCtrl', function($state, $stateParams, $scope) {
    
    init();
    console.log($stateParams.album)
    function init() {
      $scope.album = $stateParams.album;
    }


});



app.controller('addAlbumCtrl', function($scope, $state, Album) {
  // console.log('addAlbumCtrl!');
  $scope.addAlbum = () => {
    Album.addAlbum($scope.newAlbum)
      .then(() => {
        alert('Album Added');
        $state.go('albums');
      })



  }


});

app.controller('imageInfoCtrl', function($state,$scope,$stateParams, Image, Album) {
  // console.log('imageInfoCtrl!');

  $scope.image = $stateParams.image;

  $scope.deleteImage = (imageId, albumId) => {
    Image.deleteImage(imageId)
      .then(() => {
        return Album.removeImageFromAlbum(albumId, imageId)
      })
      .then(() => {
        console.log('image removed');
        $state.go('albums')
      })
  }


});


app.controller('addImageCtrl', function($scope,$state,$stateParams, Image, Album) {
  // console.log('addImageCtrl!');
  $scope.addImage = () => {
    Image.addImage($scope.newImage)
      .then((res) => {
        // console.log(savedImage)
        return Album.addImageToAlbum($stateParams.album._id, res.data._id);

      })
      .then((result) => {
        console.log(result);
        $state.go('albums');
      })
  }


  $scope.removeImage = (imageId) => {
    Image.deleteImage(imageId)
      .then(() => {
        return Album.removeImageFromAlbum($stateParams.album._id, imageId);
      })
      .then(() => {
        console.log('deleted');
        $state.reload('album');
      })
  } 


});

app.controller('editAlbumCtrl', function($stateParams, $scope, Album, $state) {
  $scope.newAlbum = $stateParams.album;

  $scope.editAlbum = () => {
    Album.editAlbum($stateParams.album._id, $scope.newAlbum)
      .then(() => {
        console.log('edit saved');
        $state.go('albums');
      })
  }
  // console.log('editAlbumCtrl!');
});
