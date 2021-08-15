const httpStatus = require('http-status');
const { Wallet, Transaction } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a wallet
 * @param {Object} walletBody
 * @returns {Promise<Wallet>}
 */
const createWallet = async (walletBody) => {
  const wallet = await Wallet.create(...walletBody, {amount : Number((walletBody.amount).toFixed(4))});
  return wallet;
};

/**
 * Query for Wallet
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryWallets = async (filter, options) => {
  const wallets = await Wallet.paginate(filter, options);
  return wallets;
};

/**
 * Get wallet by id
 * @param {ObjectId} id
 * @returns {Promise<Wallet>}
 */
const getWalletById = async (id) => {
  return Wallet.findById(id);
};

/**
 * Update wallet by id
 * @param {ObjectId} walletId
 * @param {Object} body
 * @returns {Promise<Wallet>}
 */
const updateWalletById = async (walletId, body) => {
        body.amount = Number((body.amount).toFixed(4));
        const session = await Wallet.startSession();
        session.startTransaction();
        try {
          const opts = { session ,new: true };
          const wallet = await Wallet.findOneAndUpdate({ _id: walletId }, { $inc: { balance: body.type === 'CREDIT' ? Number(body.amount) : Number(-body.amount) } }, opts);
          await Transaction({ walletId, balance: wallet.balance, amount: body.amount, type: body.type, description: body.description }).save(opts);
          await session.commitTransaction();
          session.endSession();
          return wallet;
        } catch (error) {
          // If an error occurred, abort the whole transaction and
          // undo any changes that might have happened
          await session.abortTransaction();
          session.endSession();
          throw error; 
        }
};


module.exports = {
  createWallet,
  queryWallets,
  getWalletById,
  updateWalletById
};
