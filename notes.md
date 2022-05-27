Steps:
1. Write smart contract in RoboPunksNFT.sol
2. Get Infura, metamask, and Etherscan keys/account info
3. Add .env
4. Update hardhat.config.js with values
	
	> npx hardhat clean
	> npx hardhat compile
	> npx hardhat run scripts/deployRoboPunksNFT.js --network rinkeby 
	(deployer)

5. Verify contract on etherscan
	> npm i -D @nomiclabs/hardhat-ether scan
	> npx hardhat verify --network rinkeby <contractAddress>

6. Get the contract ABI from ./artifacts/contracts/RoboPunksNFT.json and copy and past all into a new file in ./src called RoboPunksNFT.json

7. Code frontend in ./src/App.js

8. Style in src/App.css

9. import Chakra to help style components in Navbar.js