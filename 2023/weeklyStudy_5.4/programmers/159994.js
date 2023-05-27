// 카드 뭉치

function solution(cards1, cards2, goal) {
  // 각각의 카드 배열에서 가리키는 값을 따로 다루기 위한 포인터 생성
  let pointer1 = 0;
  let pointer2 = 0;

  for (let i = 0; i < goal.length; i++) {
    const str = goal[i];

    // 조건에 맞게 값이 존재하는 지 확인하는 조건문 실행
    if (cards1[pointer1] === str) {
      pointer1++;
    } else if (cards2[pointer2] === str) {
      pointer2++;
    } else {
      return "No";
    }
  }

  return "Yes";
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); // "Yes"

console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); // "No"
