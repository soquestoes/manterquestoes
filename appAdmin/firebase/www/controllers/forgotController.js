'Use Strict';
angular.module('App').controller('forgotController', 
function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, 
                    $firebaseObject, authorizationService, FURL, utilityService) {
  var ref = new Firebase(FURL);
  $scope.resetpassword = function(user) {
      if(angular.isDefined(user)){
      authorizationService.resetpassword(user)
        .then(function() {
          //console.log("Password reset email sent successfully!");
          $location.path('/login');
        }, function(err) {
           //console.error("Error: ", err);
        });
      }
    };
}
);
