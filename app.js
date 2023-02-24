const Web3 = require('web3');

const config = require('./config');

const dexRouterAddresses = ['0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D','0x10ED43C718714eb63d5aA57B78B54704E256024E','0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F']


web3 = new Web3(new Web3.providers.HttpProvider(config.evmNodeLink));
web3Ws = new Web3(new Web3.providers.WebsocketProvider(config.evmWSNodeLink));


async function main() { 
    try {   
            web3Ws.onopen = function(evt) {
                web3Ws.send(JSON.stringify({ method: "subscribe", topic: "transfers"}));
                console.log('connected')
            }
            subscription = web3Ws.eth.subscribe('pendingTransactions', function (error, result) {
            }).on("data", async function (transactionHash) {
                 let transaction = await web3.eth.getTransaction(transactionHash);
                 if (transaction != null && (dexRouterAddresses.includes(transaction['to']) || dexRouterAddresses.includes(transaction['from'])))
                 {
                    console.log(transaction,'------------');
                 }
            })
    } catch (error) {
        console.log('failed to fetch mempool data:')
        process.exit();
    }
}

main();

