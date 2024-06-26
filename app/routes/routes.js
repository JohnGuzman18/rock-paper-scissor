module.exports = app => {

    const main = require("../controller/main.controller.js")
    var router = require("express").Router();

    router.get("/records", main.getAll);
    router.post("/records", main.create);

    app.use("/api", router);
}