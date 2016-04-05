angular.module('App').directive('helloWorld', function() {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl:'/directives/subviews/testDirective.html',

    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        elem.css('background-color', 'white');
        scope.$apply(function() {
          scope.color = "white";
        });
      });
      elem.bind('mouseover', function() {
        elem.css('cursor', 'pointer');
      });
    }
  };
});