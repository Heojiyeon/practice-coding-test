//할인 행사 문제
function solution(want, number, discount) {
  let LEN = discount.length;
  let result = 0;

  // map 생성
  const resetMap = () => {
    const map = new Map();
    for (let i = 0; i < want.length; i++) {
      map.set(want[i], number[i]);
    }
    return map;
  };

  // map 전체 합 계산
  const sumMap = currMap => {
    let sum = 0;
    for (let value of currMap.values()) {
      sum += value;
    }
    return sum;
  };
  // 조건에 만족하는 지 확인할 함수
  const checkCurrDiscount = currDiscount => {
    let count = 0;
    let chance = 10;

    let map = resetMap();

    if (currDiscount.length < sumMap(map)) return false;
    while (chance > 0) {
      let currItem = currDiscount[count];
      let currGetMap = map.get(currItem);

      if (currGetMap !== 0 && currGetMap !== undefined) {
        map.set(currItem, currGetMap - 1);
        count++;
        if (sumMap(map) === 0) {
          return true;
        }
      } else {
        return false;
      }
      chance--;
    }
    return true;
  };

  // 주어진 discount 배열 변형
  for (let i = 0; i < LEN; i++) {
    if (checkCurrDiscount(discount) === true) {
      result++;
    }
    discount.shift();
  }
  return result;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
); //3

console.log(
  solution(
    ["banana"],
    [1],
    [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ]
  )
); //10
