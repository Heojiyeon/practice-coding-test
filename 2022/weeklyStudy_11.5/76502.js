function solution(s) {
  let result = 0;

  let LEN = s.length;
  if (s.length % 2 === 1) return 0;

  const map = new Map();

  map.set("(", 0);
  map.set("[", 0);
  map.set("{", 0);

  function checkStr(currStr) {
    console.log("currStr in checkStr", currStr);
    map.set("(", 0);
    map.set("[", 0);
    map.set("{", 0);

    LEN = currStr.length;
    let i = 0;
    let isOk = false;

    const forCheck = [];

    const checkTmp = (forCheck, curr) => {
      if (forCheck[forCheck.length - 1] !== curr) return isOk;
      else forCheck.pop();
    };

    while (LEN > 0) {
      let curr = currStr[i];
      let currVal = map.get(curr);
      console.log("last val", forCheck);

      if (currVal !== undefined) {
        map.set(curr, ++currVal);
        forCheck.push(curr);
      } else {
        switch (curr) {
          case ")":
            curr = "(";
            if (forCheck[forCheck.length - 1] !== curr) return isOk;
            else {
              forCheck.pop();
            }
            console.log("curr forCheck", forCheck);
            currVal = map.get(curr);
            map.set("(", --currVal);
            break;
          case "]":
            curr = "[";
            if (forCheck[forCheck.length - 1] !== curr) return isOk;
            else forCheck.pop();
            console.log("curr forCheck", forCheck);
            currVal = map.get(curr);
            map.set("[", --currVal);
            break;
          case "}":
            curr = "{";
            if (forCheck[forCheck.length - 1] !== curr) return isOk;
            else forCheck.pop();
            console.log("curr forCheck", forCheck);
            currVal = map.get(curr);
            map.set("{", --currVal);
            break;

          default:
            break;
        }
      }
      console.log(map);
      // console.log("올바른가요?", map);
      if (map.get(curr) < 0) {
        console.log(map);
        console.log("올바르지 않습니다!", isOk);
        return isOk;
      }
      LEN--;
      i++;
    }
    for ([key, value] of map) {
      console.log(key);
      console.log(map.get(key));
    }
    console.log("올바릅니다!");
    return !isOk;
  }

  // 회전 시키기
  s = s.split("");

  let forHandle = [];

  for (let i = 0; i < LEN; i++) {
    const leftside = s.slice(0, i);
    const rightside = s.slice(i);
    const currStr = rightside.concat(leftside).join("");
    forHandle.push(currStr);
  }

  forHandle.forEach(currStr => {
    if (checkStr(currStr)) {
      result++;
    }
  });
  return result;
}
console.log(solution("[{]}")); //0
// console.log("---------------");
// console.log(solution("[](){}")); //3
// console.log("---------------");
// console.log(solution("}]()[{")); //2
// console.log("---------------");
// console.log(solution("[)(]")); //0
// console.log("---------------");
// console.log(solution("}}}")); //0
