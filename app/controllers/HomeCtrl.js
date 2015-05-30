frontEnd.controller('HomeCtrl', ["$scope", "$location", "authFact", function($scope, $location, authFact) {
    $scope.FBLogin = function() {
        FB.login(function(response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function(response) {
                    var FBAccessToken = FB.getAuthResponse().accessToken;
                    console.log('access token', FBAccessToken);
                    authFact.setAccessToken(FBAccessToken);
                    $location.path('/dashboard');
                    $scope.$apply();
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    }
}]);