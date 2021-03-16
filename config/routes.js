/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'GET /get-all': { action: 'Usuario/getAll' },
  'GET /get-user/:id': { action: 'Usuario/getUser' },
  'POST /add-user': { action: 'Usuario/addUser' },
  'DELETE /delete-user/:id': { action: 'Usuario/deleteUser' }
};
