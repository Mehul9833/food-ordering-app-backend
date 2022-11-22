const EcommerceModel = require("../models/ecommerceModels");
const CartModel = require("../models/cartModel");

module.exports.addToCart = async (req, res) => {
	const { item } = req.body;

	CartModel.create(item, (err, data) => {
		if (err) {
			res.send("Error");
		} else {
			console.log("the data is", data);
			res.send(data);
		}
	});
};

module.exports.removeFromCart = async (req, res) => {
	const { id } = req.body;

	CartModel.findOneAndDelete({ _id: id }, (err, data) => {
		if (err) {
			console.log("err");
			res.send("Error");
		} else {
			console.log("deleted");
			res.send("Deleted");
		}
	});
};

module.exports.getCartData = async (req, res) => {
	const cartData = await CartModel.find();
	res.send(cartData);
};

module.exports.saveProduct = async (req, res) => {
	const { name, image, subItems } = req.body;
	EcommerceModel.create({ name, image, subItems }).then((data) => {
		console.log("Added Successfully");
		console.log(data);
		res.send(data);
	});
};

module.exports.getFood = async (req, res) => {
	const foodData = await EcommerceModel.find();
	res.send(foodData);
};

module.exports.getFoodItem = async (req, res) => {
	const { id } = req.params;

	let foodItem = await EcommerceModel.findOne({ name: id });
	res.send(foodItem);
};

module.exports.addFoodItemInCart = async (req, res) => {
	const { itemId, foodId, isAdded } = req.body;

	const query = {
		_id: foodId,
		"subItems._id": itemId,
	};

	const updateDocument = {
		$set: { "subItems.$.isAdded": isAdded },
	};

	const response = await EcommerceModel.updateOne(query, updateDocument);

	if (response.acknowledged === true) {
		res.send(`${isAdded ? "Added Successfully" : "Removed Successfully"}`);
	}
};

module.exports.removeAllDataFromCart = async (req, res) => {
	const response = await CartModel.deleteMany({});

	if (response.acknowledged === true) {
		res.send("Deleted Cart Data");
	}
};
