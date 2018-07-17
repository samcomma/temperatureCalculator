const expect = require('chai').expect
const calculator = require('../calculator')


describe('calculator', ()=> {
	
	it('should exist', ()=> {
		expect('calculator').to.be.ok
	});

	describe('convertToFfromC', ()=> {
		it('should convert Fahrenheit to Celsius', ()=> {
			expect(calculator.convertToFfromC(10)).to.eql(50)
		});
	});

	describe('convertToCfromF', ()=> {
		it('should convert Fahrenheit to Celsius', ()=> {
			expect(calculator.convertToCfromF(50)).to.eql(10)
		});
	});

});