const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createTransaction = {
  params: Joi.object().keys({
    walletId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    amount: Joi.number().required(),
    description: Joi.string().optional(),
    type: Joi.string().required().valid('DEBIT', 'CREDIT'),
  }),
};

const getTransactions = {
  query: Joi.object().keys({
    walletId: Joi.string().custom(objectId).optional(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getTransaction = {
  params: Joi.object().keys({
    transactionId: Joi.string().custom(objectId),
  }),
};

module.exports = {
    createTransaction,
    getTransactions,
    getTransaction
};
