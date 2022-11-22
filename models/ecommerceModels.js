const mongoose = require("mongoose");

const ecommerceSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	image: {
		type: String,
		require: true,
	},

	subItems: [
		{
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
		},
	],
});

module.exports = mongoose.model("Ecommerce", ecommerceSchema);

// image: String,
// 	subFoodItemData: {
// 		name: String,
// 		subItems: [
// 			{
// 				name: String,
// 				image: String,
// 				price: Number,
// 				description: String,
// 				isAdded: Boolean,
// 			},
// 		],
// 	},

// const ecommerceSchema = new mongoose.Schema({
// 	food: {
// 		name: {
// 			type: "String",
// 		},
// 		image: {
// 			type: "String",
// 		},
// 		subFoodItemData: {
// 			name: {
// 				type: "String",
// 			},
// 			subItems: {
// 				type: ["Mixed"],
// 			},
// 		},
// 	},
// });
