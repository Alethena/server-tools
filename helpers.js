var Web3 = require('web3');
var net = require('net');
var fs = require('fs');


//Connects to local "fast-sync" rinkeby node
var web3 = new Web3(new Web3.providers.IpcProvider('/home/benjamin/.ethereum/rinkeby/geth.ipc',net));


// ABI of a contract
 const abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_lostAddress","type":"address"}],"name":"getClaimant","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_lostAddress","type":"address"},{"name":"_nonce","type":"bytes32"}],"name":"declareLost","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_claimerAddress","type":"address"}],"name":"getMsgHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_lostAddress","type":"address"}],"name":"deleteClaim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalShares","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"preClaims","outputs":[{"name":"msghash","type":"bytes32"},{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_shareholders","type":"address[]"},{"name":"_amounts","type":"uint256[]"},{"name":"_message","type":"string"}],"name":"mintMany","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"collateralRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_hashedpackage","type":"bytes32"}],"name":"prepareClaim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"clearClaim","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_claimerAddress","type":"address"}],"name":"getPreClaimTimeStamp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"claimPeriod","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_collateralRate","type":"uint256"},{"name":"_claimPeriodInDays","type":"uint256"}],"name":"setClaimParameters","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_lostAddress","type":"address"}],"name":"resolveClaim","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_lostAddress","type":"address"}],"name":"getCollateral","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"},{"name":"_message","type":"string"}],"name":"unmint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newTotalShares","type":"uint256"}],"name":"setTotalShares","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isPaused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_pause","type":"bool"},{"name":"_message","type":"string"}],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"claims","outputs":[{"name":"claimant","type":"address"},{"name":"collateral","type":"uint256"},{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"shareholder","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_message","type":"string"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_lostAddress","type":"address"}],"name":"getTimeStamp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"preClaimPeriod","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"termsAndConditions","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"shareholder","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"message","type":"string"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"message","type":"string"}],"name":"Unmint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"paused","type":"bool"},{"indexed":false,"name":"message","type":"string"}],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"approver","type":"address"},{"indexed":false,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_lostAddress","type":"address"},{"indexed":true,"name":"_claimant","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"ClaimMade","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_claimer","type":"address"}],"name":"ClaimPrepared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_lostAddress","type":"address"},{"indexed":false,"name":"collateral","type":"uint256"}],"name":"ClaimCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_lostAddress","type":"address"},{"indexed":true,"name":"_claimant","type":"address"},{"indexed":false,"name":"collateral","type":"uint256"}],"name":"ClaimDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_lostAddress","type":"address"},{"indexed":true,"name":"_claimant","type":"address"},{"indexed":false,"name":"collateral","type":"uint256"}],"name":"ClaimResolved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];
 const contrAddress = '0x6351f1c2e6dea96c9c608aa21c89663a3b7ea88e';

// ABI of a contract that has a lot of events for testing purposes
// const abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"services","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_serviceName","type":"bytes32"},{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"payService","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_serviceName","type":"bytes32"},{"name":"_serviceAddress","type":"address"}],"name":"deployService","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_tokenName","type":"string"},{"name":"_tokenSymbol","type":"string"},{"name":"_decimals","type":"uint8"},{"name":"_totalSupply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"}];
// const contrAddress = '0x29317B796510afC25794E511e7B10659Ca18048B';


module.exports.fetchEvents = fetchEvents;

 async function fetchEvents(_abi,_contrAddress){
  // Before doing anything we should check that the node is not syncing currently
  // I.e. call eth.syncing and the answer should be 'false'
  // Else we might end up in a situation where the information we obtain is not up to date but no error is thrown
  var myContract = await new web3.eth.Contract(_abi, _contrAddress);
  console.log('-contract instantiated')
  await web3.eth.isSyncing( (err,resp)=>{
    if(err){
      throw(err)
    }
    else if (resp === false){
      console.log('-ETH node is synced')
    }
    else {
      console.error('Something is wrong with your Ethereum node')
    }

  })

  try{
    console.log('-fetching events')
    pastEvents = await myContract.getPastEvents('allEvents', {fromBlock: 1, toBlock: 'latest'});
    console.log('-writing file')
    fs.writeFileSync('eventlogs.json', JSON.stringify(pastEvents), ()=> {
      console.log('-file written')
      process.exit();
    })
  }
  catch(error){
    console.error(error)}
}



module.exports.transformLog = transformLog;

async function transformLog(_inLogPath, _outLogPath){
    var eventlogs = JSON.parse(fs.readFileSync(_inLogPath));
    var output = [];
    var length = eventlogs.length -1;
    await eventlogs.forEach(async element => {

        if (length == 0){
            output.sort(comp);
            fs.writeFileSync(_outLogPath,JSON.stringify(output));
            console.log('Log was transformed');
            process.exit();
        }
        
        var temp = new Object({
            "address": element.address,
            "blockNumber": element.blockNumber,
            "transactionHash": element.transactionHash,
            "transactionIndex": element.transactionIndex,
            "logIndex": element.logIndex,
            "event": element.event,
            "from": element.returnValues.from,
            "to": element.returnValues.to,
            "value": element.returnValues.value,
            "shareholder": element.returnValues.shareholder,
            "amount": element.returnValues.amount,
            "message": element.returnValues.message
            })
            output.push(temp);            
            length--;
    });
}

function comp(log1,log2){
    if (log1.timestamp !== log2.timestamp){
        return log1.timestamp -log2.timestamp
    } else if (log1.transactionIndex !== log2.transactionIndex){
        return log1.transactionIndex-log2.transactionIndex
    } else if(log1.logIndex !== log2.logIndex){
        return log1.logIndex-log2.logIndex
    } else {
        return 0
    }
}



module.exports.addTimestamp = addTimestamp;

// 

async function addTimestamp(){
    var output = [];
    var eventlogsCleaned = JSON.parse(fs.readFileSync('./eventlogsCleaned.json'));
    var length = eventlogsCleaned.length;

    console.log(length)

    eventlogsCleaned.forEach(async element => {
        length = length -1;
        let block = await web3.eth.getBlock(obj.blockNumber);
        element.timestamp = block.timestamp;
        console.log(length)
        if (length ==0){
            fs.writeFileSync("./eventlogsTimestamped.json",JSON.stringify(output));
            }
        return 0;
        
    })};

    
    