/**
 * Testnet & Mainnet nodeConfig
 * 
 * @returns {Object} æ node config
 */
const nodeConfig = {
	networks: {
		hardhat: {
		  chainId: 31337,
		  allowUnlimitedContractSize: true,
		},
		localhost: {
		  chainId: 31337,
		  allowUnlimitedContractSize: true,
		},
		goerli: {
		  // @ts-ignore
		  url: process.env.GOERLI_RPC_URL,
		  // @ts-ignore
		  accounts: [process.env.PRIVATE_KEY],
		  chainId: 5,
		}
}	
}

export default nodeConfig;
