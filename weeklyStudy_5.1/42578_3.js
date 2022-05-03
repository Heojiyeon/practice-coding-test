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

    console.log(countArr);
    let answer = countArr.map((count) => count + 1);
    return answer.reduce((prev, curr) => prev * curr) - 1;

}

console.log(solution([
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
    ["crowmask", "face"],
    ["lip", "face"],
    ["smoky_makeup", "face"]
]));