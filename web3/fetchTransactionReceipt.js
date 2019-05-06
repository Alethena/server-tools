const web3 = require('./gethConnection').web3;

async function fetchTransactionReceipt(txHash) {
    return new Promise(async function(resolve, reject) {
        try {
            const receipt = await web3.eth.getTransactionReceipt(txHash);
            resolve(receipt);
        } catch (error) {
            reject(error);
        }
    })
}

module.exports.fetchTransactionReceipt = fetchTransactionReceipt;
