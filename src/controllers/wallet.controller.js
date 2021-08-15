const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { walletService } = require('../services');

const createWallet = catchAsync(async (req, res) => {
  const wallet = await walletService.createWallet(req.body);
  res.status(httpStatus.CREATED).send(wallet);
});

const getWallets = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await walletService.queryWallets(filter, options);
  res.send(result);
});

const getWallet = catchAsync(async (req, res) => {
  const wallet = await walletService.getWalletById(req.params.walletId);
  if (!wallet) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Wallet not found');
  }
  res.send(wallet);
});


module.exports = {
    createWallet,
    getWallets,
    getWallet,
};
