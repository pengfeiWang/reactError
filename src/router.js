import { PropTypes } from 'react';
import { Router, Route } from 'dva/router';
import App from './app/';

const cached = {};

const registerModel = (app, model) => {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
};

const CourseRoute = {
  'path': '/course',
  getIndexRoute(nextState, callback) {
    require.ensure([], (require) => {
      callback(null, {component:require('./components/Example')});
    });
  },
  childRoutes: [
    {
      'path': ':id',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, {component:require('./components/Example')});
        }, 'test');
      }
    },
  ],




  // getComponents(nextState, callback) {
  //   require.ensure([], (require) => {
  //     callback(null, require('./components/Example'));
  //   });
  // }
};

const Routers = function ({ history, app }) {
  const routes = [
    {
      'path': '/',
      'component': App,
      getIndexRoute(nextState, cb) {
        require.ensure([], (require) => {
          // registerModel(app, require('./app/model/'));
          cb(null, { 'component': require('./routes/index') });
        }, 'index');
      },
      'childRoutes': [
        {
          'path': 'main',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/index'));
            }, 'main');
          }
        },
        CourseRoute
      ]
    }
  ];

  return <Router history={history} routes={routes} />;
};

Routers.propTypes = {
  'history': PropTypes.object,
  'app': PropTypes.object
};

export default Routers;
