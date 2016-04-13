angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('sQuestEs.principal', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/principal.html',
        controller: 'principalCtrl'
      }
    }
  })

  .state('sQuestEs.simulado', {
    url: '/simulado',
    views: {
      'side-menu21': {
        templateUrl: 'templates/simulado.html',
        controller: 'simuladoCtrl'
      }
    }
  })

  .state('sQuestEs.configuraO', {
    url: '/config',
    views: {
      'side-menu21': {
        templateUrl: 'templates/configuraO.html',
        controller: 'configuraOCtrl'
      }
    }
  })

  .state('sQuestEs', {
    url: '/side-menu',
    templateUrl: 'templates/sQuestEs.html',
    abstract:true
  })

  .state('prova', {
    url: '/simulado2',
    templateUrl: 'templates/prova.html',
    controller: 'provaCtrl'
  })

$urlRouterProvider.otherwise('/side-menu/home')

  

});