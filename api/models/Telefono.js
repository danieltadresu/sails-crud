module.exports = {
  attributes: {
    telefonoid: { type: 'string'},
    numero: { type: 'number' },
    owner: {
      model: 'usuario'
    }
  },
};