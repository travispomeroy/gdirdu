(function () {
    angular.module("uniqueFilter", []).filter("unique", function () {
        return function (data, propertyName) {
            if(angular.isArray(data) && angular.isString(propertyName)) {
                var results = [];
                var keys = {};
                for(var i = 0; i < data.length; i++) {
                    var value = data[i][propertyName];
                    if(angular.isUndefined(keys[value])) {
                        keys[value] = true;
                        results.push(value);
                    }
                }

                return results;
            }
            else {
                return data;
            }
        }
    })
})();
