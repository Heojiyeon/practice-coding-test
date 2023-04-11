function findOrder(currOrder, orders) {
    let count = 0;

    for (i = 0; i < orders.length; i++) {
        if (orders[i].includes(currOrder)) {
            count++;
        }
        if (count == 2) return currOrder;
    }
    return 0;
}

function solution(orders, course) {

    let result = [];

    // ** orders 속 order 정렬해주기
    for (i = 0; i < orders.length; i++) {
        orders[i] = orders[i].split('').sort().join('');
    }

    console.log("정렬해뜸", orders);

    // 1. course 개수에 맞는 주문 찾기
    course.forEach((currCourse) => {
        for (i = 0; i < orders.length; i++) {
            if (orders[i].length == currCourse) {
                result.push(orders[i]);
            }
            // ** currCourse 크기와 맞지 않는 경우도 생각해야 함 **
            // (1) 큰 경우는 그냥 넘어가면 됨 안찾으면 됨
            // (2) 작은 경우는 ...
        }
    });
    console.log(result);

    // 2. 현재 주문이 2개 이상이 되는 지 확인하기
    let answer = [];

    result.forEach((currOrder) => {
        let finded = findOrder(currOrder, orders);
        answer.push(finded);
    })

    console.log(answer);
}

// console.log(solution(
//     ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "HEDCA"],
//     [2, 3, 4]));
// ["AC", "ACDE", "BCFG", "CDE"]

console.log(solution(
    ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"],
    [2, 3, 5]));
//["ACD", "AD", "ADE", "CD", "XYZ"]

// console.log(solution(
//     ["XYZ", "XWY", "WXA"],
//     [2, 3, 4]));
//["WX", "XY"]