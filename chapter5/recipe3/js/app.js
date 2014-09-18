var app = angular.module("MyApp", ["ngResource"]);

function MyCtrl($scope, $resource) {
  $scope.twitterAPI = $resource("https://api.twitter.com/1.1/search/tweets.json",
    { callback: "JSON_CALLBACK" },
    { get: { method: "JSONP" }});

  $scope.search = function() {
    $scope.searchResult = $scope.twitterAPI.get({ q: $scope.searchTerm });
  };
}
