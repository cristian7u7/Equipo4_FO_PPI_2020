const router = require ("express").Router();

const comentarioController = require("../Components/comentario/comentarioController");

const comentario = new comentarioController();

router.route('/agregarComentario').post(comentario.guardar)
router.route('/obtenerComentarios').get(comentario.obtenerComentarios)

module.exports = router;