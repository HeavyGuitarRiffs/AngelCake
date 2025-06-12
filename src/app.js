var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when("/blog", {
      templateUrl: "blog.html",  // ✅ This will load blog.html inside <ng-view>
      controller: "BlogController"
    })
    .otherwise({
      redirectTo: "/" // Redirect to homepage if route is unknown
    });
});

app.controller("BlogController", function($scope) {
  $scope.message = "Welcome to the Blog Page!";
});
