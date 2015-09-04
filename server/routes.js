// Load modules

var User      = require('./controllers/user'),
  Static    = require('./controllers/static');

var v1 = '/api/v1';

// API Server Endpoints
exports.endpoints = [

  { method: 'GET',  path: '/{somethingss*}', config: Static.get },
  { method: 'POST', path: '/users', config: User.create},
  { method: 'GET', path: '/users', config: User.getAll},
  { method: 'GET', path: '/users/{userId}', config: User.getOne},
  { method: 'PUT', path: '/users/{userId}', config: User.update},
  { method: 'DELETE', path: '/users/{userId}', config: User.remove},
];