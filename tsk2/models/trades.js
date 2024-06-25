// Uncomment the code below to use Sequelize ORM
// const {Sequelize} = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");

// Uncomment the code below to use Mongoose ORM

const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const tradeSchema = new Schema({
  type: {
    type: String,
    enum: ['buy', 'sell'],
    required: true,
  },
  user_id: {
    type: Number,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  shares: {
    type: Number,
    min: 1,
    max: 100,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Number,
    required: true,
  }
}, {
  versionKey: false // Disable the __v version key
});

tradeSchema.plugin(AutoIncrement, { inc_field: 'id' });

tradeSchema.index({ id: 1 });

const Trades = mongoose.model('trades', tradeSchema);

module.exports = { Trades };
