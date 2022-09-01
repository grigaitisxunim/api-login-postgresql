const usuario = require("../models/usuario.model");

module.exports = {
  index(req, res) {
    res.json({ message: "Hello Word from controller usuario" });
  },
  async create(req, res) {
    const { user_id, nome, username, password, email, ORG_id, is_active } =
      req.body;
    let data = {};
    let user = usuario.findOne({ email });

    if (!user) {
      data = { user_id, nome, username, password, email, ORG_id, is_active };
      user = await usuario.create(data);

      return res.status(200).json(user);
    } else {
      return res.status(500).json(user);
    }
  },
};
