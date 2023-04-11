/*  가장 가까운 같은 글자 문제
현재 문자보다 앞쪽에 위치한 문자 중 앞쪽에 위치하면서, 
자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는 가? (없는 경우 -1 리턴) 
*/

function solution(s) {
  return s.split("").map((str, idx) => {
    let i = idx - 1;
    while (i >= 0) {
      if (s[i] === str) {
        return idx - i;
      }
      i--;
    }
    return -1;
  });
}

console.log(solution("banana")); //[-1, -1, -1, 2, 2, 2]
