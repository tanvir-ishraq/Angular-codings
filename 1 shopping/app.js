var app = angular.module("ShoppingListApp", []);

app.controller("ListController", function($scope) {
   
    $scope.list = ["eggs","milk", "cheese"];

    $scope.addItem = function(z) {
        $scope.list.push(z);
        $scope.newItem="";
    }

    $scope.remove = function(y) {
        var removeItem = $scope.list.indexOf(y);
        $scope.list.splice(removeItem,1);
    }
});