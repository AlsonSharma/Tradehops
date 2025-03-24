const { model } = require("mongoose");

const {WatchListSchema} = require('../schemas/WatchListSchema');
const WatchListsModel = new model('watchlist', WatchListSchema);

module.exports = {WatchListsModel};