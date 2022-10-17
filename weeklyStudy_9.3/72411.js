function solution(orders, course) {
    let result = [];
    for (size of course) {
        let checkLen = 0;
        orders.forEach((order) => order.length >= size ? checkLen++ : null);
        if (checkLen < 2) break;
        const map = new Map();
        orders.map((order) => {
            order = order.split("");
            let findComb = getCombination(order, size);
            findComb.forEach((comb) => {
                let countResult = checking(comb, orders);
                if (countResult >= 2) map.set(comb, countResult);
            })
        })
        console.log(map);
        let largest = Math.max(...map.values());
        for ([key, value] of map.entries()) {
            if (value == largest) result.push(key.sort().join(''));
        };
    }
    const set = new Set(result);
    return [...set].sort();
}

function checking(comb, orders) {
    let count = 0;
    orders.map((order) => {
        order = order.split("");
        let filtered = order.filter((curr) => comb.findIndex((char) => char == curr) != -1);
        if (filtered.length == comb.length) count++;
    })
    return count;
}

function getCombination(menu, targetNum) {
    let comb = [];
    if (targetNum == 1) return menu.map((el) => [el]);
    menu.forEach((fixed, idx, origin) => {
        const rest = origin.slice(idx + 1);
        const combinations = getCombination(rest, targetNum - 1);
        const attatched = combinations.map((combination) => [fixed, ...combination]);
        comb.push(...attatched);
    });
    return comb;
}




// console.log(solution(
//     ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"],
//     [2, 3, 4])); //["AC", "ACDE", "BCFG", "CDE"]
// console.log(solution(
//     ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"],
//     [2, 3, 5])); //["ACD", "AD", "ADE", "CD", "XYZ"]
console.log(solution(
    ["XYZ", "XWY", "WXA"],
    [2, 3, 4])); //["WX", "XY"]