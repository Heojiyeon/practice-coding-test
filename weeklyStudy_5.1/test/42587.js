// 큐 사용

function solution(priorities, location) {
    // 1. 현재 값보다 큰 값이 priorities에 있다면
    // 2. 일단 빼서 checked 배열에 넣기
    // 3. 없다면 프린트, count++
}

// console.log(solution([2, 1, 3, 2], 2)); //1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); //5

// 문서 [A, B, C, D]
// 중요도 [2, 1, 3, 2] -> 숫자가 클수록 먼저 프린트 해야됨
// BCDA -> CDAB -> 프린트 C -> 프린트 D -> 프린트 A -> 프린트 B
//내가 인쇄를 요청한 문서가 몇 번쨰로 인쇄되는지 리턴