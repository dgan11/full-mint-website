// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

// import openzeppelin contract we can use for minting
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// define functions only owner can use
import "@openzeppelin/contracts/access/Ownable.sol"; 
import "@openzeppelin/contracts/utils/Strings.sol";

contract RoboPunksNFT is ERC721, Ownable {
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    address public withdrawWallet;
    mapping (address => uint256) public walletMints;

    constructor() payable ERC721('RoboPunks', 'RP') {
        mintPrice = 0.02 ether;
        totalSupply = 0;
        maxSupply = 1000;
        maxPerWallet = 3;
        withdrawWallet = msg.sender;
    }

    function setIsPublicMintEnabled(bool _isPublicMintEnabled) external onlyOwner{
        isPublicMintEnabled = _isPublicMintEnabled;
    }

    function setBaseTokenUri(string calldata _baseTokenUri) external onlyOwner {
        // This is a url of where the images are going to be located.
        baseTokenUri = _baseTokenUri;
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        require(_exists(_tokenId));
        return string(abi.encodePacked(baseTokenUri, Strings.toString(_tokenId), ".json"));
    }

    function withdraw() external onlyOwner {
        // Withdraw the funds to the wallet specified
        (bool success, ) = withdrawWallet.call{ value: address(this).balance }('');
        require(success, 'withdraw failed');
    }

    function mint(uint256 _quantity) public payable {
        require(isPublicMintEnabled, 'minting not enabled');
        require(msg.value == _quantity * mintPrice, 'wrong mint value');
        require(totalSupply + _quantity <= maxSupply, 'sold out');
        require(walletMints[msg.sender] + _quantity <= maxPerWallet, 'exceeded limit per wallet');

        // actually perform the mint
        for (uint256 i = 0; i < _quantity; i++) {
            uint256 newTokenId = totalSupply + 1;
            totalSupply++;
            // Call safemint on OZ ERC721 -- pass in address receiving nft and latest token id
            _safeMint(msg.sender, newTokenId);
        }
    }

}



