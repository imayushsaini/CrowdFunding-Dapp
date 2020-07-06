const HDWalletProvider=require('truffle-hdwallet-provider');
const Web3=require('web3');
const compiledFactory=require('./build/CampaignFactory.json');

const provider=new HDWalletProvider(
	'other connect tired genre top bomb chronic heart insect spike around tail','https://rinkeby.infura.io/v3/4e8110a142bb4ff189cfb3741fb8985a'
	);

const web3=new Web3(provider);

const deploy= async()=>{
 const accounts =await web3.eth.getAccounts();
 console.log("attempting to deploy from account",accounts[0]);

 const result=await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
 .deploy({ data:compiledFactory.bytecode})
 .send({gas:'1000000',from:accounts[0] });

console.log('Contract deployed to',result.options.address);
};

deploy();