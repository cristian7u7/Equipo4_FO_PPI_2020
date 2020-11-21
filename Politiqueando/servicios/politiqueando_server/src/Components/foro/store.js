const Connection = require("../../config/db/configDB");

const addForo = async (foro) => {

  let result = null;
  let error = "";
  let sql = `INSERT INTO foros (
    fk_usuario,
    tema,
    descripcion,
    fecha_creacion
  ) values (?,?,?,?)`;
  try {
    result = await Connection(sql, [
      foro.fk_usuario,
      foro.tema,
      foro.descripcion,
      new Date(),
    ]);
  } catch (e) {
    console.log(e)
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

const getForo = async (filter="") => {

  let sql = "SELECT * FROM foros";
  
  const result = await Connection(sql);
  return result;
};

const updateForo = async (id, foro) => {

  let { tema, descripcion } = user;

  let sql = `UPDATE foros SET tema = ?, descripcion = ? WHERE id_foros = ?`;
  let result = await Connection(sql, [tema, descripcion,id]);
  if (!result) {
    return "Error al actualizar"
  }
  return "Foro actualizado";
};

const delForo = async (id) => {
  let sql = `DELETE FROM foros WHERE id_foros = ?`;
  let result = await Connection(sql, [id]);
  if (!result) {
    return "Error al eliminar"
  }
  return "Foro eliminado";
};

module.exports = {
  add: addForo,
  list: getForo,
  del: delForo,
  updateForo,
};