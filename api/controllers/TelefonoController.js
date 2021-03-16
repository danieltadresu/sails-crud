module.exports = {
  addTelefono: async (req, res) => {
    const response = await Telefono.create({
      telefonoid: req.body.telefonoid,
      numero: req.body.numero,
      owner: req.body.usuarioid
    }).fetch()
    return res.json(response);
  },
  getAll: async (req, res) => {
    const response = await Telefono.find();
    return res.json(response)
  },
  deleteTelefono: async (req, res) => {
    const response = await Telefono.destroyOne({
      id: req.param('id')
    })
    return res.json(response);
  }
};