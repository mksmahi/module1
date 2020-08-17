(function() {
    angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope)
    {
        $scope.message = "";
        $scope.checkLunch = function(){
            var items = $scope.lunchitems.split(",");
            if(items.length<1) { $scope.message = "Please Enter Data First"; }
            else if(items.length<=3){ $scope.message ="Enjoy!"; }
            else { $scope.message = "Too much"; }
        }
    }
})();