const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createWallet = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    balance: Joi.number().required().optional()
  }),
};

const getWallets = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getWallet = {
  params: Joi.object().keys({
    walletId: Joi.string().custom(objectId),
  }),
};

module.exports = {
    createWallet,
    getWallets,
    getWallet
};
