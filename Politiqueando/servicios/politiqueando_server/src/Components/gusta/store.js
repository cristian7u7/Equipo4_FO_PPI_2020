const Connection = require("../../config/db/configDB");

const addGusta = async (gusta) => {

  let result = null;
  let error = "";
  let sql = `INSERT INTO gusta (
    fk_usuario,
    fk_comentario
    gusta_nogusta
  ) values (?,?,?)`;
  try {
    result = await Connection(sql, [
      gusta.fk_usuario,
      gusta.fk_comentario,
      gusta.gusta_nogusta
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

const getGustaById = async (id) => {

  let sql = "SELECT * FROM gusta WHERE id = ?";
  
  const result = await Connection(sql,[id]);
  return result;
};

const updateGusta = async (id, gusta) => {

  let { gusta_nogusta } = gusta;

  let sql = `UPDATE gusta SET gusta_nogusta = ? WHERE id_gusta = ?`;
  let result = await Connection(sql, [gusta_nogusta, id]);
  if (!result) {
    return "Error al actualizar"
  }
  return "Comentario actualizado";
};

const delGusta = async (id) => {
  let sql = `DELETE FROM gusta WHERE id_gusta = ?`;
  let result = await Connection(sql, [id]);
  if (!result) {
    return "Error al eliminar"
  }
  return "Gusta eliminado";
};

module.exports = {
  add: addGusta,
  list: getGustaById,
  del: delGusta,
  updateGusta,
};
