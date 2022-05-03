function getCombination(arr, selectNumber) {
    let result = [];
    if (selectNumber == 1) return arr.map((value) => [value]);
    arr.forEach((fixed, index, origin) => {
        let rest = origin.slice(index + 1);
        let combinations = getCombination(rest, selectNumber - 1);
        let attatched = combinations.map((combination) => [fixed, ...combination]);
        console.log("attatched", attatched);
        result.push(...attatched);
    });
    return result;
}

console.log(getCombination([1, 2, 2, 3], 3));
//[1,2,2], [1,2,3], [2,2,3]