import Web3 from 'web3';

let web3;
if(typeof window!=='undefined'&& typeof window.web3!=='undefined'){
			//inside brower and metamask is running
	web3=new Web3(window.web3.currentProvider);

}else{
	//we are on server or not runnning metamask
const provider =new Web3.providers.HttpProvider(
	'https://rinkeby.infura.io/v3/4e8110a142bb4ff189cfb3741fb8985a'
	);
web3=new Web3(provider);
}
export default web3;

