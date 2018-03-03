const assert = require('assert');

//Local test network old test RPC 
//Deploy your test contract to this network 
const ganache = require('ganache-cli');

//constructor of web3
//Connect ABI interface with ganache network
const Web3 = require('web3');

//provider of eth network, interface between Ganache and web3
//constructor of web3 gets interface and link to network
const web3 = new Web3(ganache.provider());

class Car {

	park() {
		return "stop";
	}

	drive() {
		return "wrooom";
	}

}

describe('car', () => {
	it ('can park', () => {
		const car = new Car();
		assert.equal(car.park(), "stop");
	})
})