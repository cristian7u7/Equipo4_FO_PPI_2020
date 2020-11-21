const Connection = require("../../config/db/configDB");

const addForo = async (comentario) => {

  let result = null;
  let error = "";
  let sql = `INSERT INTO comentario (
    fk_usuario,
    fk_foro,
    descripcion,
    me_gusta,
    no_gusta
  ) values (?,?,?,?)`;
  try {
    result = await Connection(sql, [
      comentario.fk_usuario,
      comentario.fk_foro,
      comentario.descripcion,
      0,
      0
    ]);
  } catch (e) {
      error = "Error al guardar.";
  }
  if (error) {
    return {
      ok: false,
      error
    };
  }
  return {
    ok: true,
    body: "¡Guardado exitoso!"
  };
};

const getForo = async (filter) => {

  let sql = "SELECT * FROM comentario";
  
  const result = await Connection(sql);
  return result;
};

const updateForo = async (id, comentario) => {

  let { descripcion } = comentario;

  let sql = `UPDATE comentario SET descripcion = ? WHERE id_comentario = ?`;
  let result = await Connection(sql, [descripcion, id]);
  if (!result) {
    return "Error al actualizar"
  }
  return "Comentario actualizado";
};

const delForo = async (id) => {
  let sql = `DELETE FROM comentario WHERE id_comentario = ?`;
  let result = await Connection(sql, [id]);
  if (!result) {
    return "Error al eliminar"
  }
  return "Comentario eliminado";
};

module.exports = {
  add: addForo,
  list: getForo,
  del: delForo,
  updateForo,
};
