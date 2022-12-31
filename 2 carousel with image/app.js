var app = angular.module("CarouselApp", []);

app.controller("ImageController", function($scope) {
   
    $scope.imgCount = 0;

    $scope.images = [
        "images/1.png",
        "images/2.png",
        "images/3.png",
        "images/4.png",
        "images/5.png",
        "images/6.png",
    ]

    $scope.previous = function() {
        if($scope.imgCount!=0) {
            $scope.imgCount = $scope.imgCount-1;
        }
        
    }

    $scope.next = function() {
        if($scope.imgCount < $scope.images.length-1) {
            $scope.imgCount = $scope.imgCount +1;
        }
        
    }

});