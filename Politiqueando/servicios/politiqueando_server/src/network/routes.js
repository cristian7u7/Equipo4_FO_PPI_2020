const router = require ("express").Router();

const comentarioController = require("../Components/comentario/comentarioController");
const comentario = new comentarioController();

router.route('/agregarComentario').post(comentario.guardar)
router.route('/obtenerComentarios').get(comentario.obtenerComentarios)
router.route('/comentario/:id').get(comentario.obtenerComentario)
router.route('/eliminarComentario/:id').delete(comentario.eliminarComentario)



const userController = require("../Components/user/userController")
const user = new userController

router.route('/registrarUsuario').post(user.guardar)
router.route('/ingresarUsuario').post(user.login)
router.route('/obtenerUsuarios').get(user.obtenerUsuarios)
router.route('/obtenerUsuario/:id').get(user.obtenerUsuario)

module.exports = router;