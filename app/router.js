import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('homepage');
  this.route('details');
  this.route('result');

  this.route('login');
  this.route('firstproperty');
});

export default Router;
