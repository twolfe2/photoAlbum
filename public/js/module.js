'use strict';


var app = angular.module('myApp', ['ui.router']);



app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html'
    })
    .state('albums', {
      url: '/albums', 
      templateUrl: '/html/albums.html',
      controller: 'albumsCtrl'
    })
    .state('addAlbum', {
      url: '/addAlbum', 
      templateUrl: '/html/addAlbum.html',
      controller: 'addAlbumCtrl'
    })
    .state('album', {
      url: '/album', 
      templateUrl: '/html/album.html', 
      controller: 'albumCtrl', 
      params: {album: null}
    })
    .state('editAlbum', {
      url:'/editAlbum', 
      templateUrl: '/html/editAlbum.html',
      controller: 'editAlbumCtrl',
      params: {album: null}
    })
    
    .state('images', {
      url: '/images',
      templateUrl: '/html/images.html'
    })
    .state('addImage', {
      url: '/addImage', 
      templateUrl: '/html/addImage.html',
      controller: 'addImageCtrl',
      params: {album: null}
    })
    .state('imageInfo', {
      url: '/imageInfo/:imageId', 
      templateUrl: '/html/imageInfo.html',
      controller: 'imageInfoCtrl',
      params: {image: null, album: null}
    })


  $urlRouterProvider.otherwise('/');
})