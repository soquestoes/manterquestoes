'Use Strict';
angular.module('App').controller('loginController', 
            function ($scope, $state, $localStorage, 
            $location,$http,$ionicPopup, $firebaseObject, authorizationService, FURL, utilityService) {
  var ref = new Firebase(FURL);
  var userkey = "";
  $scope.signIn = function (user) {
   // console.log("Enviado");
    if(angular.isDefined(user)){
        /*
    utilityService.show();
    authorizationService.login(user)
      .then(function(authData) {
        //console.log("id del usuario:" + JSON.stringify(authData));
        // ref.child('profile').orderByChild("id")
        // .equalTo(authData.uid)
        //  .on("child_added", function(snapshot) {
        ref.child('profile').equalTo(authData.uid).on("child_added", function(snapshot) {
        //  console.log(snapshot.key());
        userkey = snapshot.key();
        var obj = $firebaseObject(ref.child('profile').child(userkey));
        obj.$loaded()
          .then(function(data) {
            //console.log(data === obj); // true
            //console.log(obj.email);
            $localStorage.email = obj.email;
            $localStorage.userkey = userkey;

              utilityService.hide();
              $location.path('/app/questoes');
          })
          .catch(function(error) {
            console.error("Error:", error);
          });
          
      });

      }, function(err) {
        utilityService.hide();
         utilityService.errMessage(err);
      });*/
        $location.path('/app/questoes');
    }
  };
  $scope.register = function(user) {
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
