function getCombination(arr, selectNumber) {
    let result = [];
    if (selectNumber == 1) return arr.map((value) => [value]);

    arr.forEach((fixed, idx, origin) => {
        console.log("fixed", fixed);
        let rest = origin.slice(idx + 1);
        console.log("rest", rest);
        let combinations = getCombination(rest, selectNumber - 1);
        console.log("combinations", combinations);
        let attatched = combinations.map((combination) => [fixed, ...combination]);
        result.push(...attatched);
    });
    return result;
}

console.log(getCombination([-1, 0, 1, 2, -1, -4], 3)); //20개 리턴