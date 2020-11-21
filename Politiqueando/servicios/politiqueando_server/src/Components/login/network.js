const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controllers");

router.post("/login", (req, res) => {
    controller.getUser(req.body)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((e) => {
            response.error(req, res, e.message, e.status);
        });
});

router.post("/checkToken", (req, res) => {
    controller.checkToken(req.body.token)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((e) => {
            response.error(req, res, e, 500);
        });
});

module.exports = router;