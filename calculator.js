// NB The order of the 2 below 'return' lines are different and important for each function. 
// The test with 0 C to 32 F and vice versa fail if the order of operations on the return lines are switched 
// (i.e. multiply after the +32 doesn't work, multiply before the -32 doesn't work.)

const convertToFfromC = (temp)=> {
// add 32 and multiply by 9/5
	return (temp*9/5)+32
}


const convertToCfromF = (temp)=> {
// subtract 32 and multiply by 5/9
	return (temp-32)*5/9
}


module.exports = {
	convertToFfromC,
	convertToCfromF
}