'Use Strict';
angular.module('App').controller('changepasswordController', 
            function ($scope, $state,$cordovaOauth, $localStorage, 
            $location,$http,$ionicPopup, $firebaseObject, authorizationService, FURL, utilityService) {
  var ref = new Firebase(FURL);
  var userkey = "";

  $scope.changepassword = function(user) {
    if(angular.isDefined(user)){
    utilityService.show();
    authorizationService.register(user)
      .then(function() {
         utilityService.hide();
        // console.log("Antes de loguear:" + JSON.stringify(user));
         utilityService.alertshow("Sucesso","O usuário foi criado corretamente.");
         $location.path('/');
      }, function(err) {
         utilityService.hide();
         utilityService.errMessage(err);
      });
    }
  };
});
