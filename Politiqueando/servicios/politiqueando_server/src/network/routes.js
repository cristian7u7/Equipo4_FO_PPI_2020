const login = require("../components/login/network");
const user = require("../components/user/network");
const foro = require("../components/foro/network");
const comentario = require("../components/comentario/network");

const routes = (server) => {
    server.use("/registro", user);
    server.use("/login", login);
    server.use("/foro", foro);
    server.use("/comentario", comentario);
}

module.exports = routes;