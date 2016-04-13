// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('App', ['ionic', 'ngStorage', 'ngCordova','firebase','ngMessages'])
.constant('FURL', 'https://soquestoes.firebaseio.com/')
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
      /*
          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
       */
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "views/menu.html",
      controller: 'appController'
    })

    .state('app.questoes', {
      url: "/questoes",
      views: {
        'menuContent' :{
          templateUrl: "views/questoes.html",
          controller:"questoesController"
        }
      }
    })
    .state('app.materias', {
      url: "/materias",
      views: {
        'menuContent' :{
          templateUrl: "views/materias.html",
          controller:"materiasController"
        }
      }
    })
    .state('app.forgot', {
      url: "/forgot",
      views: {
        'menuContent' :{
          templateUrl: "views/forgot.html",
          controller:"forgotController"
        }
      }
    })
    .state('app.register', {
      url: "/register",
      views: {
        'menuContent' :{
          templateUrl: "views/register.html",
          controller: 'registerController'
        }
      }
    })
        .state('app.login', {
      url: "/login",
      views: {
        'menuContent' :{
          templateUrl: "views/login.html",
          controller: 'loginController'
        }
      }
    })
     .state('app.changepassword', {
      url: "/changepassword",
      views: {
        'menuContent' :{
          templateUrl: "views/changepassword.html",
          controller: 'changepasswordController'
        }
      }
    });
    /*
    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "views/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
    */
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
