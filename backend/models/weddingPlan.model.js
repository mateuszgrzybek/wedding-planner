const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const weddingPlanSchema = new Schema(
    {
        username: { type: String, required: true },
        description: { type: String, required: true },
        date: { type: Date, required: true },
        guestsAmount: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const WeddingPlan = mongoose.model("WeddingPlan", weddingPlanSchema);

module.exports = WeddingPlan;
