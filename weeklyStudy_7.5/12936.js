function solution(n, k) {
    let people = [];
    for (i = 1; i <= n; i++) people.push(i);

    function permutation(arr, num) {
        let result = [];
        if (num === 1) return arr.map((element) => [element]);
        arr.forEach((curr, idx, arr) => {
            const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
            const permutations = permutation(rest, num - 1);
            const attach = permutations.map((permutation) => [curr, ...permutation]);
            result.push(...attach);
        })
        return result;
    }
    let orders = permutation(people, people.length);
    return orders[k - 1];
}

console.log(solution(3, 5)); //[3, 1, 2]