
const assert = require('assert');

//Local test network old test RPC 
//Deploy your test contract to this network 
const ganache = require('ganache-cli');

//constructor of web3
//Connect ABI interface with ganache network
const Web3 = require('web3');

const provider = ganache.provider();
//provider of eth network, interface between Ganache and web3
//constructor of web3 gets interface and link to network
const web3 = new Web3(provider);

const {interface, bytecode} = require('../compile.js');

let accounts;
let inbox;

beforeEach(async () => {
	//Get list of accounts
	accounts = await web3.eth.getAccounts();

	inbox = await new web3.eth.Contract(JSON.parse(interface))
	.deploy({ data: bytecode, arguments: ['HI!'] })
	.send({ from: accounts[1], gas: '1000000'})

	inbox.setProvider(provider);
	});
	


describe('Inbox', () => {
	it('deploys contract', () => {
		//check if contract get address
		assert.ok(inbox.options.address);
	});

	it('message', async() => {
		const message = await inbox.methods.message().call();
		assert.equal('HI!', message)
	});

	it('set message', async () => {
		const new_message = "elo"
		await inbox.methods.setMessage(new_message).send({ from: accounts[1] })
		const message = await inbox.methods.message().call();
		assert.equal(message, new_message);
	});
});