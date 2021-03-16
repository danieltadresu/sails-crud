/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  addUser: async (req, res) => {
    const response = await Usuario.create({
      usuarioid: req.body.usuarioid,
      usuarionombre: req.body.usuarionombre
    }).fetch()
    return res.json(response);
  },
  getUser: async (req, res) => {
    const response = await Usuario.find({
      id: req.param('id')
    });
    return res.json(response);
  },
  getAll: async (req, res) => {
    const response = await Usuario.find();
    return res.json(response)
  },
  deleteUser: async (req, res) => {
    const response = await Usuario.destroyOne({
      id: req.param('id')
    })
    return res.json(response)
  }
};

