'Use Strict';
angular.module('App').controller('materiasController', 
    function ($scope, $state, $localStorage, $location,$ionicPopup, 
                                $firebaseObject, materiasService,$ionicModal) {
       
  $scope.frmHome={};
  // MODAL DA QUESTAO
  $scope.modalMateria={};
  $scope.modalMateria.acao="Adicionar Questão";
  $scope.modalMateria.data={};
  $scope.modalMateria.data.materia={};
 
  $scope.materias=materiasService.list(); 
 
// *********************************************************
/*  MODAL       PREPARA PARA EXISTIR OS MODAIS  DE QUESTAO E OPCOES      */
  $ionicModal.fromTemplateUrl('/controllers/subviews/modalMateria.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
  $scope.modal = modal;

  });
  /*  MODAL               */
  
   // *********************************************************
   // HOME
 $scope.frmHome.editarMateria=function(materia){
   //  $scope.modalMateria.data.materia = materia;
     $scope.frmHome.openModalMateria(materia); 
 };
  $scope.frmHome.removerMateria = function (materia) {
       var modalConfirm = $ionicPopup.confirm({
        title: "ATENÇÃO!",
        template: "Tem certeza que quer remover este item?",
        okText: "REMOVER",
        okType: "button-assertive",
        cancelText:"Cancelar"
        });
// PROMISE
        modalConfirm.then(function(res) {
                if(res){
                    materiasService.remove(materia);
                }else{
                    console.log('poderia colocar codigo no cancel');
                }
            });
    //  console.info("dentro de remover materia");

 };
 $scope.frmHome.openModalNovaMateria = function() { 
      $scope.frmHome.openModalMateria();
 };
 $scope.frmHome.openModalMateria = function(materia) {   
 
    $scope.modalMateria.data.materia=materia;
    $scope.modal.show();
  };

   // *********************************************************
  // EVENTOS DOS MODAIS  -- SO PAPRA EXEMPLO
  // NAO FORAM COLOCADOS OS EVENTOS DO MODAL DE OPCOES
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
  //  console.info("modal is hidden");
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
 //   console.info("modal is removed");
  });   
//  MODAL                         
                                
                                
                                
                            });