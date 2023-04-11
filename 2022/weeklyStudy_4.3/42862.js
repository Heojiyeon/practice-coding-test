function solution(n, lost, reserve) {
    let count = n;
    let reserved_p = [];

    // 1. 무조건 작은 수 확인
    for (i = 0; i < lost.length; i++) {

        let curr = lost[i];

        if (reserve.find((e) => e == curr)) {
            reserved_p.push(curr);
        }
        else {
            if (lost[i] == 1) curr += 1;
            else curr = lost[i] - 1;

            if (reserve.find((e) => e == curr)) {
                if (lost.find((e) => e == curr)) count--;
                else reserved_p.push(curr);
            }
        }
    }
    console.log(reserved_p);
    if (reserved_p != lost.length) count = count - (lost.length - reserved_p.length);
    // 2. reserve, lost 동시에 존재하는 경우
    // 3. 작은 수가 없는 경우(해결 완료)

    return count;
}
// console.log(solution(5, [2, 4], [1, 3, 5])); // 5
// console.log(solution(5, [2, 4], [3])); //4
console.log(solution(3, [1], [1])); //3!!!!!!!!!!!!
// console.log(solution(3, [1], [2])); //3
console.log(solution(5, [1, 2, 4], [2, 3, 4, 5])); //4