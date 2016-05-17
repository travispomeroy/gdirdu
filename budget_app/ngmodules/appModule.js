(function() {
    angular.module("budgetApp", ["uniqueFilter"]).controller("MainController", function ($scope, $http) {

        $http.get("../budget_app/data.json").success(function (data) {
            this.budget = data;
        }.bind(this));
    });

})();
