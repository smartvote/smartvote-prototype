// The Welcome Controller
var welcomeController = ["$scope", function ($scope, $http) {
    // NOTE: Nothing needed here
    
        var heights = $(".feature-nav-container .col-sm-3").map(function() {
            return $(this).height();
        }).get(),

        maxHeight = Math.max.apply(null, heights);

        $(".feature-nav-container .col-sm-3").height(maxHeight);

}];

// The TODO Controller
var testController = ["$scope", "$http", function ($scope, $http) {

}];
