const bytesToPercentage = (languageBytes, allRepoBytes) => {
	return (languageBytes / allRepoBytes * 100).toFixed(1);
};

const calculateTotalBytes = (languagePercentage) => {
	let bytesTotal;
	if (languagePercentage) {
		bytesTotal = Object.keys(languagePercentage).reduce((previous, key) => {
			return previous + languagePercentage[key];
		}, 0);
	}
	return bytesTotal;
};

export const extractLanguagesWithPercentageValue = (languages) => {
	if (languages) {
		const totalRepoBytes = calculateTotalBytes(languages);
		const languageWithPercentage = Object.keys(languages).map((languageName) => {
			const currentLanguageBytes = languages[languageName];
			return {
				name: languageName,
				percentage: bytesToPercentage(currentLanguageBytes, totalRepoBytes)
			};
		});
		return languageWithPercentage;
	} else {
		return [];
	}
};

export const isEmpty = (prop) => {
	return (
		prop === null ||
		prop === undefined ||
		(prop.hasOwnProperty('length') && prop.length === 0) ||
		(prop.constructor === Object && Object.keys(prop).length === 0)
	);
};
