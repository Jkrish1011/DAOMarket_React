import React, { useState , useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// Ethereum
import { ethers } from 'ethers';
import GovernanceToken from '../abi/goerli/GovernanceToken.json';

// Context API
import { useStateValue } from '../contextapi/StateProvider';

// CSS
import './styles/Navbar.css';

const Navbar = () => {
    console.log('connecting ...');
    const [{Wallet} , dispatch] = useStateValue();

    const [connectButtonText, setConnectButtonText] = useState("Connect Wallet");
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [balance, setBalance] = useState(null);
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [contract, setContract] = useState(null);

	const fetchAccount = async () => {
		if(window.ethereum && window.ethereum.isMetaMask){

                let req = await window.ethereum.request({method: 'eth_requestAccounts'});
                let account = req[0];
                console.log(account);
                accountChangedHandler(req[0]);
                setConnectButtonText('Wallet Connected');

            }
            else{
                alert('Please install Metamask');
            }
	}

    const accountChangedHandler = (newAddress) => {
        dispatch({
            type: 'CONNECTED_TO_WALLET',
            item: newAddress
        });

        setDefaultAccount(newAddress);
        console.log(newAddress);
    }

    const connectToContract = (e) => {
        try{
            e.preventDefault();

            let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
            let tempSigner = tempProvider.getSigner();
            let tempContract = new ethers.Contract(GovernanceToken['address'], GovernanceToken['abi'], tempSigner);
            setProvider(tempProvider);
            setSigner(tempSigner);
            setContract(tempContract);

        }catch(error){
            console.log(error);
        }
        
    }
 
    // useEffect(()=> {
    //     // setClient(useAeternitySDK());
    //     useAeternitySDK();
    // }, [clicked]);
	

    const ConnectWallet = (e) => {
        e.preventDefault();
        console.log('clicked!');
        fetchAccount();
    }

  return (
    
    <div className='skillheader'>
        <div className='logo'>
            DAOMARKET
        </div>
        <nav className='item'>
            <ul className='ul'>
                <li className="connectWallet" onClick={ConnectWallet}>
                    <Button>{connectButtonText}</Button>
                </li>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/propose'>Propose</NavLink>
                </li>
                <li>
                    <NavLink to='/mintToken'>Mint Token</NavLink>
                </li>
                <li>
                    <NavLink to='/proposals'>Proposals</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About Us</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;