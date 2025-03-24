require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const { HoldingsModel } = require("./model/HoldingsModel");
const {PositionsModel} = require("./model/PositionsModel");
const {OrdersModel} = require("./model/OrdersModel");
const {Signup, Login} = require("./Controller/AuthController");
const { userVerification } = require("./Middleware/AuthMiddleware");
// const {WatchListsModel} = require("./model/WatchListsModel");
// const {fetchStockData} = require("./util/alphaVantage");

const PORT = process.env.PORT || 3000;
const URL = process.env.MONGO_URL;

const app = express();

app.use(cors({
    origin: ["http://localhost:5173","http://localhost:5174", "https://tradehops-1.onrender.com",  "https://radiant-sable-4e0007.netlify.app"], // Allow only your frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  }));
app.use(bodyParser.json());

app.get("/allHoldings", async(req, res) => {
    let allHoldings = await HoldingsModel.find({})
    res.json(allHoldings);
});
app.get("/allPositions", async(req, res) => {
    let allPositions = await PositionsModel.find({})
    res.json(allPositions);
});

app.post("/signup", Signup);
app.post("/login", Login);
app.get("/verify", userVerification);

app.post("/newOrder", async(req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    newOrder.save();
    res.send("Order Saved!");
})
app.get("/allOrders", async(req, res) => {
    let allOrders = await OrdersModel.find({})
    res.json(allOrders);
})
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
  mongoose.connect(URL);
  console.log("Connected to DB");
});
