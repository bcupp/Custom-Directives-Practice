var app = angular.module('directiveLab', []);

app.directive('headingDir', function(){
  return {
    restrict:'EA',
    templateUrl:'views/headingDir.html',
    replace: false
  };
});

app.directive('navDir', function(){
  return {
    restrict:'EA',
    replace: true,
    templateUrl:'views/navDir.html',
  };

});

app.directive('footerDir', function(){
  return {
    restrict:'EA',
    replace: true,
    templateUrl:'views/footerDir.html',
  };

});

app.directive('bodyDir', function(){
  return {
    restrict:'EA',
    replace: true,
    templateUrl:'views/bodyDir.html',
  };

});
app.directive('leftViewDir', function(){
  return {
    restrict:'EA',
    replace: true,
    templateUrl:'views/leftViewDir.html',
  };

});
app.directive('welcomeDir', function(){
  return {
    restrict:'EA',
    replace: true,
    templateUrl:'views/welcomeDir.html',
  };

});
app.directive('aboutInputDir', function(){
  return {
    restrict:'EA',
    replace: true,
    templateUrl:'views/aboutInputDir.html',
  };

});
