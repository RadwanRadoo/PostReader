frontEnd.factory('authFact', [function() {
    var authFact = {};

    this.authToken = null;

    authFact.setAccessToken = function(authToken) {
        authFact.authToken = authToken;
        console.log('Token set', authFact.authToken);
    };

    authFact.getAccessToken = function() {
        console.log('Token get', authFact.authToken);
        return authFact.authToken;
    };

    return authFact;
}]);