const axios = require("axios");

const fetchStockData = async(symbol) => {
    try {
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${process.env.ALPHA_VANTAGE_KEY}`;

    const response = await axios.get(url, {
      headers: { "User-Agent": "request" }, // Required by Alpha Vantage
    });

    // Debug: Log the full API response
    console.log("API Response:", JSON.stringify(response.data, null, 2));

    if (response.data.Note) {
      console.error("Rate limit reached:", response.data.Note);
      return null;
    }

    if (!response.data["Time Series (5min)"]) {
      console.error("No intraday data found for symbol:", symbol);
      return null;
    }

    // Get the latest data point
    const timeSeries = response.data["Time Series (5min)"];
    const latestTimestamp = Object.keys(timeSeries)[0]; // Most recent timestamp
    const latestData = timeSeries[latestTimestamp];

    return {
      price: parseFloat(latestData["1. open"]), // Use opening price for the interval
      percent: "0.00%", // You can calculate this if needed
      isDown: false, // You can calculate this based on previous data
    };
  } catch (error) {
    console.error("API Error:", error.message);
    return null;
  }
}

module.exports = {fetchStockData};