// 대충 만든 자판

function solution(keymap, targets) {
  const map = new Map();
  const result = Array.from({ length: targets.length }, (v, _) => (v = -1));

  // 주어진 자판의 키 입력 횟수를 저장하는 해시 테이블 생성 (중복의 경우 더 작은 값 저장)
  keymap.forEach((key) => {
    key.split("").map((item, idx) => {
      if (map.get(item) && map.get(item) < idx + 1) return;
      map.set(item, idx + 1);
    });
  });

  // 주어진 타겟의 각 입력 값의 해시 테이블 내 존재 유무를 isSaved로 체크하며 계산
  targets.forEach((target, idx) => {
    let count = 0;
    let isSaved = true;

    target = target.split("");

    // 기존에 forEach나 map을 사용하고자 했지만 순회 중 중단 불가로 for문 사용
    for (let i = 0; i < target.length; i++) {
      const item = target[i];

      if (!map.get(item)) {
        isSaved = false;
        break;
      }
      count += map.get(item);
    }

    if (isSaved && count !== 0) {
      result[idx] = count;
    }
  });

  return result;
}
