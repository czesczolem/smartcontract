// get wallet to auth and net connection
const HDWalletProvider = require('truffle-hdwallet-provider');

// instant of web3 
const Web3 = require('web3');

const {interface, bytecode} = require('./compile');

const mnemonic = '';
const network_link = '';

const provider = new HDWalletProvider(
	mnemonic,
	network_link
	);

const web3 = new Web3(provider);


