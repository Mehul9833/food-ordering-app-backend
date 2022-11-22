const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const app = express();
const PORT = process.env.port || 5000;

// * import
const route = require("./routes/ecommerceRoutes");

app.use(express.json());
app.use(cors());
app.use(route);

mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => console.log("Connected to MongoDB..."))
	.catch((err) => console.log(err));

app.listen(PORT, () => console.log(`listening on ${PORT}`));
