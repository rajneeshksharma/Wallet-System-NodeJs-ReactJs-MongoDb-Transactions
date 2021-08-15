const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { transactionService, walletService } = require('../services');

const createTransaction = catchAsync(async (req, res) => {
    const wallet = await walletService.updateWalletById(req.params.walletId, req.body);
    res.status(httpStatus.CREATED).send(wallet);
});

const getTransactions = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['walletId']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await transactionService.queryTransactions(filter, options);
  res.send(result);
});

const getTransaction = catchAsync(async (req, res) => {
  const transaction = await transactionService.getTransactionById(req.params.transactionId);
  if (!transaction) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Transaction not found');
  }
  res.send(transaction);
});


module.exports = {
  createTransaction,
  getTransactions,
  getTransaction
};
