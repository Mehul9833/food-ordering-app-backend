const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
	{
		_id: {
			type: String,
			require: true,
		},
		name: {
			type: String,
			require: true,
		},
		image: {
			type: String,
			require: true,
		},
		price: {
			type: Number,
			require: true,
		},
		description: {
			type: String,
			require: true,
		},
		qty: {
			type: Number,
			require: true,
		},
	},
	{
		versionKey: "false",
	}
);

module.exports = mongoose.model("Cart", cartSchema);
