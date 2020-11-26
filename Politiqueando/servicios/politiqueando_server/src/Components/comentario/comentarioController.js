const mysqlConection = require ("../../config/db/configDB");

class comentarioController {
    contructor(){

    }
    async guardar (req, res){

        try {
            let {descripcion} = req.body;

        await mysqlConection.query ('INSERT INTO comentarios SET ?', {descripcion});

        res.status(200).json({auth: true, message: 'Cometario enviado exitosamente'});

        } catch (err) {
            console.log(err)
            res.status(500).json({message: "Error: " + err.toString()});
        }
    }

    async obtenerComentarios(req, res) {

        await mysqlConection.query('SELECT * FROM comentarios', (err, rows) =>{
          if(!err) {
            res.json(rows);
          } else {
            console.log(err);
            res.status(500).json({message: "Error: " + err.toString()});
          }
    
        });
    
      };

}

module.exports = comentarioController;