const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const walletSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    balance: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: new Date(),
    }
  },
  {
    timestamps: true
  }
);

// add plugin that converts mongoose to json
walletSchema.plugin(toJSON);
walletSchema.plugin(paginate);
/**
 * @typedef Wallet
 */
const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;
