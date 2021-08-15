const mongoose = require('mongoose');
const {
    toJSON,
    paginate
} = require('./plugins');

const transactionSchema = mongoose.Schema({
    walletId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wallet',
        required: true
    },
    amount: {
        type: Number
    },
    balance: {
        type: Number
    },
    description: {
        type: String,
        trim: true
    },
    date: {
        type: Date,
        default: new Date()
    },
    type: {
        type: String,
        enum: ['DEBIT', 'CREDIT'],
        required: true
    },
}, {
    timestamps: true,
});

// add plugin that converts mongoose to json
transactionSchema.plugin(toJSON);
transactionSchema.plugin(paginate);
/**
 * @typedef Transaction
 */
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
