export function translator(word, vocabluary) {
	let isFind = '';
	word = word.toLowerCase();
	vocabluary.forEach((el) => {
		for (let key in el) {
			if (key === word) {
				return (isFind = el[key])
			}
			if (el[key] === word) {
				return (isFind = key)
			}
		}

	})

	if (isFind) {
		return isFind
	} else {
		return 'слово не найдено'
	}
}


export const filterItem = (item, arr) => {
	const currentTemp = [];
	arr.forEach((el) => {
		for (let key in el) {
			if (el[key] === item) {
				currentTemp.push(el);
			}
		}
	})
	return currentTemp
};