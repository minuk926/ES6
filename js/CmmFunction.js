const CmmFunction = {
	getType: (data) => {
		return Object.prototype.toString.call(data).slice(8, -1);
	},
	random: () => {
 	    return Math.floor(Math.random() * 10);
    }
}

export default CmmFunction;