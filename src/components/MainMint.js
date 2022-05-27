import React, {useState} from 'react';
import { ethers, BigNumber } from 'ethers'; // connect to blockchain
import RoboPunksNFT from '../RoboPunksNFT.json';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';

// Address
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
        const response = await contract.mint( BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
        });
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
      <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
        <Box>
          <div>
            <Text fontSize="48px" textShadow="0 5px #000000">RoboPunks</Text>
            <Text
              fontSize="30px" 
              textShadow="0 2px 2px #000000" 
              fontFamily="VT323" 
              letterSpacing="-5.5"
            >
              RoboPunks are a collection 6969 droids trying to save humanity as we know it. Join us.
            </Text>
          </div>
          
          {isConnected ? (
            <div>
              <Flex justify="center" align="center">
                <Button 
                  backgroundColor="#D5517D"
                  borderRadius="5px"
                  boxShadow="0px 2px 2px 1px #0F0F0F"
                  color="white"
                  cursor="pointer"
                  fontFamily="inherit"
                  padding="15px"
                  marginTop="10px"
                  onClick={handleDecrement}
                >
                  -
                </Button>
                <Input
                  readOnly
                  fontFamily="inherit"
                  width="100px"
                  height="40px"
                  textAlign="center"
                  paddingLeft="19px"
                  marginTop="10px"
                  type="number" 
                  value={mintAmount}
                />
                <Button 
                  backgroundColor="#D5517D"
                  borderRadius="5px"
                  boxShadow="0px 2px 2px 1px #0F0F0F"
                  color="white"
                  cursor="pointer"
                  fontFamily="inherit"
                  padding="15px"
                  marginTop="10px"
                  onClick={handleIncrement}
                >
                  +
                </Button>
              </Flex>
              <Button 
                backgroundColor="#D5517D"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                marginTop="10px"
                onClick={handleMint}
              >
                Mint Now
              </Button>
            </div>
          ) : (
            <p>Connect now to mint</p>
          )}
        </Box>
      </Flex>
  )
}

export default MainMint;