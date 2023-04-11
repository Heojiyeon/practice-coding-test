function solution(k, dungeons) {
    let result = 0;
    const LEN = dungeons.length;
    const permutations = getPermutations(dungeons, LEN);

    for (const permutation of permutations) {
        let currResult = countDungeons(k, permutation);
        if (result == 0) result = currResult;
        else if (result < currResult) result = currResult;
        else if (currResult == LEN) return currResult;
    }
    return result;
}

function countDungeons(k, dungeon) {
    let rest = k;
    let count = 0;
    for (level of dungeon) {
        console.log(level);
        if (rest >= level[0]) {
            rest -= level[1];
            count++;
        } else return count;
    }
    return count;
}

function getPermutations(arr, selectNumber) {
    let result = [];
    if (selectNumber === 1) return arr.map(value => [value]);
    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutations = getPermutations(rest, selectNumber - 1);
        const attatched = permutations.map(permutation => [
            fixed,
            ...permutation,
        ]);
        result.push(...attatched);
    });
    return result;
}

console.log(
    solution(80, [
        [80, 20],
        [50, 40],
        [30, 10],
    ])
); //3
