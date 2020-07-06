import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance =new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x636DB078127F4C0ca31B5AC42921598c0f6cF196'
	);

export default instance;