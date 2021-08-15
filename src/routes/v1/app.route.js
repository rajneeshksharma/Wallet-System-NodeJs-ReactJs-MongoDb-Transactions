const express = require('express');
const validate = require('../../middlewares/validate');
const { walletValidation, transactionValidation } = require('../../validations');
const { walletController, transactionController } = require('../../controllers');

const router = express.Router();

router.post('/setup', validate(walletValidation.createWallet), walletController.createWallet);
router.post('/transact/:walletId', validate(transactionValidation.createTransaction), transactionController.createTransaction);
router.get('/transactions', validate(transactionValidation.getTransactions), transactionController.getTransactions);
router.get('/wallet/:walletId', validate(walletValidation.getWallet), walletController.getWallet)

module.exports = router;