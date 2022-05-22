import React, {useState} from 'react';
import { ethers, BigNumber } from 'ethers'; // connect to blockchain
import RoboPunksNFT from '../RoboPunksNFT.json';

const RoboPunksNFTAddress = '0xbd57D65E76cA00Bf150B269180a9F5234CBe178c';

const MainMint = ({ accounts, setAccounts }) => {

  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        RoboPunksNFTAddress,
        RoboPunksNFT.abi,
        signer,
      );
      try {
        const response = await contract.mint( BigNumber.from(mintAmount));
        console.log('response: ', response);
      } catch (err) {
        console.log('error: ', err);
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return
    setMintAmount(mintAmount - 1);
  }

  const handleIncrement = () => {
    if (mintAmount >= 3) return
    setMintAmount(mintAmount + 1);
  }

  return (
      <div>
        <h1>RoboPunks</h1>
        <p>RoboPunks are a collection 6969 droids trying to save humanity as we know it. Join us.</p>
        {isConnected ? (
          <div>
            <div>
              <button onClick={handleDecrement}>-</button>
              <input type="number" value={mintAmount}/>
              <button onClick={handleIncrement}>+</button>
            </div>
            <button onClick={handleMint}>Mint Now</button>
          </div>
        ) : (
          <p>Connect now to mint</p>
        )}
      </div>
  )
}

export default MainMint;