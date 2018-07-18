const expect = require('chai').expect
const calculator = require('../calculator')


describe('calculator', ()=> {
	
	it('should exist', ()=> {
		expect('calculator').to.be.ok
	});

	describe('convertToFfromC', ()=> {
		it('should convert Fahrenheit to Celsius', ()=> {
			expect(calculator.convertToFfromC(0)).to.eql(32)
		});
		it('should convert Fahrenheit to Celsius', ()=> {
			expect(calculator.convertToFfromC(100)).to.eql(212)
		});
	});

	describe('convertToCfromF', ()=> {
		it('should convert Fahrenheit to Celsius', ()=> {
			expect(calculator.convertToCfromF(32)).to.eql(0)
		});
		it('should convert Fahrenheit to Celsius', ()=> {
			expect(calculator.convertToCfromF(212)).to.eql(100)
		});
	});

});