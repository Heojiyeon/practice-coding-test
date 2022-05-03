// 서로 다른 옷의 조합 경우의 수 리턴
function solution(clothes) {
    const map = new Map();
    for (i = 0; i < clothes.length; i++) {
        map.set(clothes[i][0], clothes[i][1]);
    }
    console.log("처음 생성된 map", map);
    let result = clothes.length;
    console.log("한개만 선택하면? ", result);
    // 2개 이상의 조합 경우의 수 구하기
    console.log(" 처음 map 카테고리:", map.values());
    let category = [];
    for (value of map.values()) {
        category.push(value);
    }
    console.log("배열에 넣은 카테고리: ", category);
    const set = new Set(category);
    let handleCategory = [];
    for (c of set) {
        handleCategory.push(c);
    }
    console.log("중복을 처리한 카테고리: ", handleCategory);

    // 카테고리별 개수 (조합 개수 리턴하기 위해)
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
    console.log("중복 처리한 카테고리 별 의상 개수: ", countArr);

    let real = [];

    for (i = 1; i <= countArr.length; i++) {
        let answer = calComb(countArr, i);
        real.push(answer);
    }
    console.log(real);
    let arrrr = [];
    for (i = 0; i < real.length; i++) {
        let currReal = real[i];
        if (currReal[0].length == 1) {
            console.log(currReal.reduce((prev, curr) => prev * 1 + curr * 1));
            arrrr.push(currReal.reduce((prev, curr) => prev * 1 + curr * 1));
        }
        else {
            for (j = 0; j < currReal.length; j++) {
                console.log(currReal[j].reduce((prev, curr) => prev * curr));
                arrrr.push(currReal[j].reduce((prev, curr) => prev * curr));
            }
        }
    }
    console.log("이제 진짜 결과: ", arrrr.reduce((prev, curr) => prev + curr));
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
// console.log(calComb([2, 1, 3], 1));
// console.log("-------");
// console.log(calComb([2, 1, 3], 2));
// console.log("-------");
// console.log(calComb([2, 1, 3], 3)); //23

console.log(solution([
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"]]));
// yellowhat, bluesunglasses, green_turban,
// [yellowhat, bluesunglasses], [green_turban, bluesunglasses]
// 5

// console.log(solution([
//     ["crowmask", "face"],
//     ["bluesunglasses", "face"],
//     ["smoky_makeup", "face"]]));//3

// console.log(solution([
//     ["yellowhat", "headgear"],
//     ["bluesunglasses", "eyewear"],
//     ["green_turban", "headgear"],
//     ["crowmask", "face"],
//     ["lip", "face"],
//     ["smoky_makeup", "face"]
// ])); // 6 + 2 + 6 + 3 + 6 = 18 + 5 = 23