// 서로 다른 옷 조합 경우의 수 계산 함수
function solution(clothes) {

    // 중복을 허용한 카테고리 배열 생성
    let category = [];
    for (i = 0; i < clothes.length; i++) {
        category.push(clothes[i][1]);
    }

    // 중복을 제거한 카테고리 배열 생성
    const set = new Set(category);
    let handleCategory = [];
    for (c of set) {
        handleCategory.push(c);
    }

    // 카테고리가 1개일 경우, 해당 의상 개수 리턴
    if (handleCategory.length == 1) return category.length;

    // 카테고리가 2개 이상인 경우,

    // 카테고리별 개수 
    let count = 0;
    let countArr = [];
    for (i = 0; i < handleCategory.length; i++) {
        for (j = 0; j < category.length; j++) {
            if (handleCategory[i] == category[j]) {
                count++;
            }
        }
        countArr.push(count);
        count = 0;
    }

    // 카테고리별 개수 배열의 조합 계산
    let hadleComb = [];

    for (i = 1; i <= countArr.length; i++) {
        let answer = calComb(countArr, i);
        hadleComb.push(answer);
    }

    let answer = [];
    for (i = 0; i < hadleComb.length; i++) {
        let currReal = hadleComb[i];
        if (currReal[0].length == 1) {
            answer.push(currReal.reduce((prev, curr) => prev * 1 + curr * 1));
        }
        else {
            for (j = 0; j < currReal.length; j++) {
                answer.push(currReal[j].reduce((prev, curr) => prev * curr));
            }
        }
    }
    return answer.reduce((prev, curr) => prev + curr);
}

// 총 조합의 개수를 구하는 함수
function calComb(countArr, i) {
    let result = [];

    if (i == 1) return countArr.map((value) => [value]);
    countArr.forEach((fixed, index, origin) => {
        let rest = origin.slice(index + 1);
        let combinations = calComb(rest, i - 1);
        let attatched = combinations.map((combination) => [fixed, ...combination]);
        result.push(...attatched);
    });
    return result;
}

// console.log(solution([
//     ["crowmask", "face"],
//     ["bluesunglasses", "face"],
//     ["smoky_makeup", "face"]]));//3

console.log(solution([
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
    ["crowmask", "face"],
    ["lip", "face"],
    ["smoky_makeup", "face"]
]));
// 6 + 2 + 6 + 3 + 6 = 18 + 5 = 23