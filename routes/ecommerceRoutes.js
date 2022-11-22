const { Router } = require("express");

const {
	saveProduct,
	getFood,
	getFoodItem,
	addFoodItemInCart,
	getCartData,
	addToCart,
	removeFromCart,
	removeAllDataFromCart,
} = require("../controllers/ecommerceControllers");
const router = Router();

router.get("/", getFood);

router.get("/cartData", getCartData);

router.get("/:id", getFoodItem);

router.post("/save", saveProduct);

router.post("/update", addFoodItemInCart);

router.post("/addCart", addToCart);

router.post("/deleteItem", removeFromCart);

router.post("/deleteCartData", removeAllDataFromCart);

module.exports = router;
