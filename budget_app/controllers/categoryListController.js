(function () {
    angular.module("budgetApp").constant("categoryListActiveClass", "btn-primary").controller("categoryListController", function ($scope, categoryListActiveClass) {
        
        var selectedCategory = null;
        
        $scope.selectCategory = function (newCategory) {
            selectedCategory = newCategory;
        };
        
        $scope.categoryFilterFn = function(expense) {
            return selectedCategory == null || expense.category == selectedCategory;
        };
        
        $scope.getCategoryClass  = function (category) {
            return selectedCategory == category ? categoryListActiveClass : "";
        };
    })
})();
