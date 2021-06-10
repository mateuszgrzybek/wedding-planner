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
        guestsAmount,
    });

    newWeddingPlan
        .save()
        .then(() => res.json("New Wedding Plan has been added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    WeddingPlan.findById(req.params.id)
        .then((weddingPlan) => res.json(weddingPlan))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
    WeddingPlan.findByIdAndDelete(req.params.id)
        .then(() => res.json("Wedding Plan has been deleted."))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    WeddingPlan.findById(req.params.id)
        .then((weddingPlan) => {
            weddingPlan.username = req.body.username;
            weddingPlan.description = req.body.description;
            weddingPlan.date = Date.parse(req.body.date);
            weddingPlan.guestsAmount = Number(req.body.guestsAmount);

            weddingPlan
                .save()
                .then(() => res.json("Wedding Plan has been updated!"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
