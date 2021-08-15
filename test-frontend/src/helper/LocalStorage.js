
var CryptoJS = require("crypto-js");
const secretKey = 'my-secret-key@123'; // Save in env or any other secret place not here

const setWalletId = (id) => {
    const encWalletID = CryptoJS.AES.encrypt(`${id}`, `${secretKey}`).toString()
    console.log(encWalletID);
    localStorage.setItem('walletId', encWalletID);
}
const getWalletId = () => {
    if(localStorage.getItem('walletId')){
        const bytes = CryptoJS.AES.decrypt(`${localStorage.getItem('walletId')}`, `${secretKey}`);
        return bytes.toString(CryptoJS.enc.Utf8) 
    } else {
        return false;
    }
}

exports.setWalletId = setWalletId;
exports.getWalletId = getWalletId;