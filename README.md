# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```


## Process
> npx create-react-app full-mint-website

> npm i -D hardhat

> npx hardhat ==> yes to all popups

> npm i @openzeppelin/contracts

From ChakraUI: https://chakra-ui.com/guides/getting-started/cra-guide
> npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6

> npm I -D doting

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


