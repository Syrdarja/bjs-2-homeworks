function compareArrays(arr1, arr2) {
	if (
		arr1.length === arr2.length &&
		arr1.every((element, index) => element === arr2[index])
	) {
		return true;
	}
	return false;
}

function getUsersNamesInAgeRange(users, gender) {
	let arr = users.filter(user => user.gender === gender).map(user => user.age)
	let result = arr.reduce((sum,age) => sum += age,0);
	if (result > 0) {
		return result/arr.length;
} else {
	return 0;
}
}