const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const DataScherma = new mongoose.Schema(
  {
    user_id: { type: Number, default: 1 },
    nome: String,
    username: String,
    password: String,
    email: String,
    ORG_id: { type: Number },
    is_active: Boolean,
  },
  {
    timestamp: true,
  }
);

DataScherma.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

const usuarios = mongoose.model("Usuarios", DataScherma);
module.exports = usuarios;
