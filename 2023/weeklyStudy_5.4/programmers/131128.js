// 숫자 짝궁

function solution(X, Y) {
  const result = [];

  // 주어진 배열 중 하나를 수의 개수를 값으로 하는 해시 테이블 생성
  const map = new Map();

  Y.split("").map(val => {
    if (map.get(val) === undefined) {
      map.set(val, 1);
    } else {
      map.set(val, map.get(val) + 1);
    }
  });

  // 나머지 배열의 수를 순회하면서 해시 테이블에 존재하는 지 확인 후 result 변경
  X.split("").map(val => {
    if (map.get(val) !== undefined && map.get(val) > 0) {
      result.push(val);
      map.set(val, map.get(val) - 1);
    }
  });

  // result를 내림차순으로 정렬
  result.sort((a, b) => b - a);

  // 주어진 조건에 맞는 결과 리턴하는 조건문 실행
  if (result.length === 0) {
    return "-1";
  } else if (result[0] === "0") {
    return "0";
  } else {
    return result.join("");
  }
}
