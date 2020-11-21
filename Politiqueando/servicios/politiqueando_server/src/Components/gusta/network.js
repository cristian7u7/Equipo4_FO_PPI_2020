const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controllers");

router.get("/", (req, res) => {
    controller.getGusta(req.params.id)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((e) => {
            response.error(req, res, e, 500);
        });
});

router.post("/", (req, res) => {
    controller.addGusta(req.body)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((data) => {
            response.error(req, res, data, 500);
        });
});

router.put("/:id", (req, res) => {
    controller.updateGusta(req.params.id, req.body)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((data) => {
            response.error(req, res, "Error interno", 500);
        });
});

router.delete("/:id", (req, res) => {
    controller.delGusta(req.params.id)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((data) => {
            response.error(req, res, "Error interno", 500);
        });
})

module.exports = router;