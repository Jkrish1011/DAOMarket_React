import React from 'react'
import './styles/MintToken.css';

// Context API
import { useStateValue } from '../contextapi/StateProvider';

// Ethereum
import { ethers } from 'ethers';
import GovernorTokenContract from '../abi/goerli/GovernanceToken.json';

const MintToken = () => {
	const [{wallet}] = useStateValue();
	console.log("Wallet from MintToken!")
	console.log(wallet);
	const mint = async (e) => {
		try{
			e.preventDefault();
			let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
			let tempSigner = tempProvider.getSigner();
			let governorToken = new ethers.Contract(GovernorTokenContract['address'], GovernorTokenContract['abi'], tempSigner);
			let tokenAmount = document.getElementById('tokenAmount').value;
			console.log(governorToken);
			console.log(tokenAmount);
			let result = await governorToken.mint(wallet, tokenAmount);
			result.wait(1);
			console.log(result);
			let string = "";
			string = `Hash of the Tx : ${result['hash']}`;
			document.getElementById('MintResult').innerHTML = string;
			
			document.getElementById('delegateResult').innerHTML = `Delegating to User: [${wallet}]`;
			console.log('Delegating!....');
			let delegateTx = await governorToken.delegate(wallet);
			console.log('delegateTx');
			console.log(delegateTx);
			delegateTx.wait(1);
			let chckPoint = await governorToken.numCheckpoints(wallet);
			console.log(
				`Checkpoints: ${chckPoint}`
			  );
			  document.getElementById('delegateResult').innerHTML = `Delegation Completed! Checkpoints: ${chckPoint}`;
		}catch(error){
			console.log(error);
		}
	}
	
	return (
		<>
		<div id="booking" className="section">
			<div className="section-center">
				<div className="container">
					<div className="row">
						<div className="col-md-7 col-md-push-5">
							<div className="booking-cta">
								<h1>Mint DAO Market Token</h1>
								<p>The DAO Market Token implements ERC20Votes and owning them gives you the opportunity to vote in a Proposal.</p>
							</div>
						</div>
						<div className="col-md-4 col-md-pull-7">
							<div className="booking-form">
								<form>
									<div className="form-group">
										<span className="form-label">Token Amount</span>
										<input className="form-control" type="text" placeholder="Token Amt in ethers" id='tokenAmount'/>
									</div>
									<div className="form-btn">
										<button className="submit-btn" onClick={mint}>Mint!</button>
									</div>
									<div className="form-group">
										<span className="form-label">MintResult:</span>
										<div id='MintResult' style={{color:'black'}}>

										</div>
									</div>

									<div className="form-group">
										<span className="form-label">Delegate Result:</span>
										<div id='delegateResult' style={{color:'black'}}>
										</div>
									</div>
									
								</form>
						</div>
						</div>
				</div>
			</div>
		</div>
		</div>
		</>
	)
}

export default MintToken