const router = require("express").Router();
let WeddingPlan = require("../models/weddingPlan.model");

router.route("/").get((req, res) => {
    WeddingPlan.find()
        .then((weddingPlans) => res.json(weddingPlans))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const date = Date.parse(req.body.date);
    const guestsAmount = Number(req.body.guestsAmount);

    const newWeddingPlan = new WeddingPlan({
        username,
        description,
        date,
        guestsAmount
    });

    newWeddingPlan
        .save()
        .then(() => res.json("New Wedding Plan has been added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
