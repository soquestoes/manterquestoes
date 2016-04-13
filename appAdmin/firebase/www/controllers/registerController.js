'Use Strict';
angular.module('App').controller('registerController', 
function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, 
$firebaseObject, authorizationService, FURL, utilityService) {

  $scope.register = function(user) {
    if(angular.isDefined(user)){
    utilityService.show();
    authorizationService.register(user)
      .then(function() {
         utilityService.hide();
        // console.log("Antes de logar:" + JSON.stringify(user));
         utilityService.alertshow("Sucesso","O usuário foi criado corretamente.");
         $location.path('/');
      }, function(err) {
         utilityService.hide();
         utilityService.errMessage(err);
      });
    }
  };

});
