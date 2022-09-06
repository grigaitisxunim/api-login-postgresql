const usuario = require("../models/usuario.model");

module.exports = {
  async index(req, res) {
    const user = await usuario.find();
    res.json(user);
  },
  async create(req, res) {
    const { nome, username, password, email, ORG_id, is_active } = req.body;
    let data = {};
    let user = await usuario.findOne({ email });

    if (!user) {
      data = { nome, username, password, email, ORG_id, is_active };
      user = await usuario.create(data);

      return res.status(200).json(user);
    } else {
      return res.status(500).json(user);
    }
  },
  async details(req, res) {
    const { _id } = req.params;
    const user = await usuario.findOne({ _id });
    res.json(user);
  },
  async delete(req, res) {
    const { _id } = req.params;
    const user = await usuario.findByIdAndDelete({ _id });
    delete user.password;
    return res.json(user);
  },
  async update(req, res) {
    const { _id, nome, username, password, email, ORG_id, is_active } =
      req.body;
    const data = { nome, username, password, email, ORG_id, is_active };
    const user = await usuario.findOneAndUpdate({ _id }, data, { new: true });
    res.json(user);
  },
};
