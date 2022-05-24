function findOrder(currOrder, orders) {
    currOrder = currOrder.split('');
    let realResult = 0;

    for (i = 0; i < orders.length; i++) {
        let count = 0;
        for (j = 0; j < currOrder.length; j++) {
            if (orders[i].includes(currOrder[j])) {
                count++;
            }
        }
        if (count == currOrder.length) {
            realResult++;
        }
        if (realResult == 2) return currOrder.join('');
    }
    return 0;
}

// console.log(findOrder('AC', ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "HEDCA"]))

function solution(orders, course) {
    // 1. 주어진 course의 수에 맞는 order 찾기
    let currOrders = [];
    course.forEach((c) => {
        for (i = 0; i < orders.length; i++) {
            if (orders[i].length == c) {
                currOrders.push(orders[i]);
            }
        }
    });
    console.log(currOrders);

    // 2. 해당 order가 orders에 있는 지 확인하기
    let answer = [];
    currOrders.forEach((currOrder) => {
        let a = findOrder(currOrder, orders);
        answer.push(a);
    });
    console.log(answer);
}

console.log(solution(
    ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "HEDCA"],
    [2, 3, 4]));
// ["AC", "ACDE", "BCFG", "CDE"]

console.log(solution(
    ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"],
    [2, 3, 5]));
//["ACD", "AD", "ADE", "CD", "XYZ"]

// console.log(solution(
//     ["XYZ", "XWY", "WXA"],
//     [2, 3, 4]));
//["WX", "XY"]