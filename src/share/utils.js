export function translator(word, vocabluary) {
	let isFind = '';
	const word1 = word.toLowerCase();
	vocabluary.forEach((el) => {
		for (let key in el) {
			if (key === word1) {
				return (isFind = el[key])
			}
			if (el[key] === word1) {
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


const filterItem = (item, arr) => {
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

export const firstToUpper = (inStr) => {
	return (inStr[0].toUpperCase() + inStr.slice(1))
}

export function getArrList(isAllQuests, previewList, translationName) {
	let asd = [];
	if (isAllQuests) {
		asd = previewList;
	} else {
		asd = filterItem(translationName, previewList)
	}
	return asd
}