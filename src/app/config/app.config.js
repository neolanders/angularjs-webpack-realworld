import authInterceptor from './auth.interceptor'

function AppConfig($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $httpProvider.interceptors.push(authInterceptor);

  /*
    If you don't want hashbang routing, uncomment this line.
  */
  // $locationProvider.html5Mode(true);

  $stateProvider
  .state('app', {
       abstract: true,
       template: require('../layout/app-view.html'),
       resolve: {
        auth: function(User) {
          return User.verifyAuth();
        }
      }
  });

  $urlRouterProvider.otherwise('/');

}

export default AppConfig;
