var app = angular.module("APP", ["ngRoute"])
.config(["$routeProvider", function ($routeProvider) {

    $routeProvider

    /* ADD NEW ROUTES HERE */

    .when("/welcome", {
        templateUrl: 'html/welcome.html',
        controller: welcomeController
    })

    .when("/test", {
        templateUrl: 'html/test.html',
        controller: testController
    })

    /* THE DEFAULT ROUTE IS HERE */

    .otherwise({redirectTo: "/welcome"});

}])
.directive("holderSrc", function() {
    return {
        link: function(scope, element, attrs) {
            attrs.$set("data-src", attrs.holderSrc);
            Holder.run({images:element[0]});
        }
    };
});

app.run(function ($rootScope) {
    
    $rootScope.$on('$routeChangeSuccess', function (event, args) {
        
        /* TASKS TO DO ON EACH VIEW CHANGE */
        
        // set the appropriate document title
        switch (args.$$route.controller) {
            case welcomeController:
                document.title = "Smart Vote - Welcome";
                break;
            case testController:
                document.title = "Smart Vote - Test";
                break;
            default:
                document.title = "Smart Vote";
        }

        // NOTE: Uncomment the line below to scroll to top on page change
        // window.scrollTo(0, 0);

        $("header li").removeClass("active");
        $("header li a[href='" + window.location.hash + "']").parent().addClass("active");
        $("header li a").blur();
        
    });

    /* GLOBAL VARIABLES (OH, SO BAD!) */
    
    $rootScope.year = (new Date()).getFullYear();
    
});
