class _ {
	static chunk(array, size = 1) {
		let newArray = [];
		for (let i = 0; i < array.length; i += size) {
			let chunk = array.slice(i, i + size);
			newArray.push(chunk);
		}
		return newArray;
	}

	static compact(array) {
		// Returns an array of all falsy elements removed
		// undefined, null, '', false, 0
		let newArray = [];

		for (let i = 0; i < array.length; i++) {
			if (array[i]) {
				newArray.push(array[i]);
			}
		}

		return newArray;
	}
}

module.exports = _;
