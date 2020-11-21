const jwt = require("jsonwebtoken");
const store = require("./store");
const crypto = require("crypto");

const getUser = (data) => {
  return new Promise(async (resolve, reject) => {
    const loginDB = await store.singIn(data);
    if (!loginDB.length > 0) {
      reject({message: "Ingrese usuario y contraseña válidos", status:400});
      return false;
    }

    const contraseña = crypto.createHmac('sha256', process.env.SEED)
    .update(data.contraseña)
    .digest('hex');
    
    if (contraseña != loginDB[0].contraseña) {
      reject({message: "Ingrese usuario y contraseña válidos", status:400});
      return false;
    }
    let token = jwt.sign(
      {
        login: loginDB[0],
      },
      process.env.SEED,
      { expiresIn: process.env.CADUCIDAD_TOKEN }
    );
    resolve({
      user: loginDB[0],
      token,
    });
  });
};

const checkToken = async (token) => {
  return new Promise(async (resolve, reject) => {
    let user = null;
    jwt.verify(token, process.env.SEED, (err, decoded) => {
      if (err) {
        return reject(err);
      }
      user = decoded;
    });
    let Today = Math.round(new Date().getTime() / 1000);
    const { exp } = user;
    if (Today < exp) {
      let getUser = await store.singIn({usuario:user.login.usuario});
      resolve(getUser[0]);
    }
    reject("token expirado.");
  });
};

module.exports = {
  getUser,
  checkToken,
};
