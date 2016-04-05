angular.module('App').factory('materiasService', 
        function(FURL, $firebaseArray, $firebaseObject, utilityService,$rootScope) {

	var ref = new Firebase(FURL);
	//var questoesRef = $firebaseArray(ref.child('questoes'));
var materiasRef = ref.child('materias');
var  arrayMaterias = $firebaseArray(materiasRef);
	var service = {

    add: function(materia) {
       
      var pushRef = materiasRef.push();
      var id = pushRef.key();
      materia.id=id;
      materiasRef.push(materia);
     
      
    },
    update:function(materia){
         arrayMaterias.$save(materia);
    },
    remove:function(materia){
        arrayMaterias.$remove(materia);
    },
     list:function(){
       
        return arrayMaterias;
     }
	};





	return service;

});
