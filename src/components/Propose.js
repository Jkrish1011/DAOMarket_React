import React from 'react'
// Context API
import { useStateValue } from '../contextapi/StateProvider';

// Ethereum
import { ethers } from 'ethers';
import GovernorTokenContract from '../abi/goerli/GovernanceToken.json';

const Propose = () => {
  const [{wallet}] = useStateValue();
	console.log("Wallet from Propose!")
	console.log(wallet);

  const submitProposal = (e) => {
    try{
      e.preventDefault();
      let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
			let tempSigner = tempProvider.getSigner();
			let governorContract = new ethers.Contract(GovernorTokenContract['address'], GovernorTokenContract['abi'], tempSigner);
      
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
							<h1>Submit A New Proposal For the Commodity</h1>
							<p>A new Proposal can be submitted by users to change the commodity value</p>
						</div>
					</div>
					<div className="col-md-4 col-md-pull-7">
						<div className="booking-form">
							<form>
								<div className="form-group">
									<span className="form-label">Commodity Address</span>
									<input className="form-control" type="text" placeholder="Primary skill" value={GovernorTokenContract['address']} readonly/>
								</div>
                <div className="form-group">
									<span className="form-label">Function Name</span>
									<input className="form-control" type="text" placeholder="Function Name" value="store"/>
								</div>

                <div className="form-group">
									<span className="form-label">Commodity Value</span>
									<input className="form-control" type="number" placeholder="Commodity Value" />
								</div>

                <div className="form-group">
									<span className="form-label">Description</span>
									<input className="form-control" type="text" placeholder="Description" />
								</div>
                
								<div className="form-btn">
									<button className="submit-btn" onClick={submitProposal}>Submit Proposal!</button>
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

export default Propose