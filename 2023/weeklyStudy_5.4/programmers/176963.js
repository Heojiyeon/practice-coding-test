// 추억 점수

function solution(name, yearning, photo) {
  const result = [];

  // 이름에 해당하는 추억 점수 값을 가지는 해시 테이블 생성
  const map = new Map();
  name.map((item, idx) => map.set(item, yearning[idx]));

  // 주어진 photo 배열을 돌며 추억 점수 계산
  photo.map(curr => {
    let score = 0;
    curr.map(person => {
      if (map.get(person)) {
        score += map.get(person);
      }
    });
    result.push(score);
  });

  return result;
}
