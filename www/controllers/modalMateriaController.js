'Use Strict';
angular.module('App').controller('modalMateriaController', 
    function ($scope, $state, $localStorage, $location,$ionicPopup, 
                                $firebaseObject, materiasService,$ionicModal) {


  $scope.modalMateria.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.modalMateria.atualizarMateria = function(materia){
      materiasService.update(angular.fromJson(angular.toJson(materia))) ;
      $scope.modalMateria.data.materia={};
      $scope.modalMateria.closeModal();
  }
  $scope.modalMateria.adicionarMateria = function () {
     // console.info("dentro do adicionar questao");

      var materia =$scope.modalMateria.data.materia;
  //    console.info(angular.fromJson(angular.toJson(materia)));                
      materiasService.add(angular.fromJson(angular.toJson(materia))) ;
      $scope.modalMateria.data.materia={};
      $scope.modalMateria.closeModal();
     // console.info("dentro e saindo do adicionar");
  }; 
                                });