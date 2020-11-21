const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controllers");

router.get("/foro", (req, res) => {
    controller.getForo(req.query.player)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((e) => {
            response.error(req, res, e, 500);
        });
});

router.post("/foro", (req, res) => {
    controller.addForo(req.body)
        .then((data) => {
            console.log("data => ", data)
            response.success(req, res, data, 200);
        })
        .catch((data) => {
            console.log("data => ", data)
            response.error(req, res, data, 500);
        });
});

router.put("/:id", (req, res) => {
    controller.updateForo(req.params.id, req.body)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((data) => {
            response.error(req, res, "Error interno", 500);
        });
});


router.delete("/:id", (req, res) => {
    controller.delForo(req.params.id)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((data) => {
            response.error(req, res, "Error interno", 500);
        });
})

module.exports = router;