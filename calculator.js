const convertToFfromC = (temp)=> {
// add 32 and divide by .5556
	return Math.round((temp*1.8)+32)
}


const convertToCfromF = (temp)=> {
// subtract 32 and multiply by .5556
	return Math.round((temp-32)*0.5556)
}


module.exports = {
	convertToFfromC,
	convertToCfromF
}