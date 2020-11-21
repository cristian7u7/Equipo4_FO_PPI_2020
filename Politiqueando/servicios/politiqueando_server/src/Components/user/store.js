const Connection = require("../../config/db/configDB");
const crypto = require("crypto");

const addUser = async (user) => {
  const contraseña = crypto.createHmac('sha256', process.env.SEED)
    .update(user.contraseña)
    .digest('hex');

  let result = null;
  let error = "";
  let sql = `INSERT INTO usuario (
    nombre,
    apellido,
    usuario,
    contraseña
  ) values (?,?,?,?)`;
  try {
    result = await Connection(sql, [
      user.nombre,
      user.apellido,
      user.usuario,
      contraseña,
    ]);
  } catch (e) {
      error = "Error al registrarse.";
  }
  if (error) {
    return {
      ok: false,
      error
    };
  }
  return {
    ok: true,
    body: "¡Registro exitoso!"
  };
};

const getUser = async (filter) => {
  let config = "";

  let sql = "SELECT * FROM usuario " + config;
  
  const result = await Connection(sql);
  console.log("=> ",result[0])
  console.log("=> 2 ",result)
  return result;
};

const updateUser = async (id, user) => {

  let { nombre, apellido } = user;

  let sql = `UPDATE usuario SET nombre = ?, apellido = ? WHERE id_usuario = ?`;
  let result = await Connection(sql, [nombre, apellido,id]);
  if (!result) {
    return "Error al actualizar"
  }
  return "Usuario actualizado";
};

const delUser = async (id) => {
  let sql = `DELETE FROM usuario WHERE id_usuario = ?`;
  let result = await Connection(sql, [id]);
  if (!result) {
    return "Error al eliminar"
  }
  return "Usuario eliminado";
};

module.exports = {
  add: addUser,
  list: getUser,
  del: delUser,
  updateUser,
};
