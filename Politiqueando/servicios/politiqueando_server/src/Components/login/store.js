const Connection = require("../../config/db/configDB");

const getUser = async (user) => {
    let sql = `SELECT * FROM usuario WHERE (usuario = ?)`;
    const rows = await Connection(sql,[user.usuario]);
    return rows;
};

module.exports = {
    singIn: getUser,
}