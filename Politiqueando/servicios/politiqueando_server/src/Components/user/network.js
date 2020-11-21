const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controllers");
// const validation = require("../security/controllers");

router.get("/registro", (req, res) => {
    controller.getUser(req.query.user)
        .then((data) => {
            response.success(req, res, data, 200);
            console.log ("aqui")
        })
        .catch((e) => {
            response.error(req, res, e, 500);
            console.log ("error")
        });
});

router.post("/registro", (req, res) => {
    controller.addUser(req.body)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((data) => {
            response.error(req, res, data, 500);
        });
});

router.put("/registro :id", (req, res) => {
    controller.updateUser(req.params.id, req.body)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((data) => {
            response.error(req, res, "Error interno", 500);
        });
});

router.delete("/registro :id", (req, res) => {
    controller.delUser(req.params.id)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((data) => {
            response.error(req, res, "Error interno", 500);
        });
})

module.exports = router;