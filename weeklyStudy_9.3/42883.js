function solution(number, k) {

    number = number.split("").map((num) => num * 1);

    let origin = number;
    let count = 0;

    function sliceArr(currIdx, currArr) {
        let prev = currArr.slice(0, currIdx);
        let next = currArr.slice(currIdx + 1);
        let result = prev.concat(next);
        return result;
    }

    while (count < k) {
        let min = Math.min(...number);
        let idx = number.findIndex((num) => num == min);

        let currNum = sliceArr(idx, origin);

        let nxtMin = Math.min(...currNum);
        let nxtIdx = origin.findIndex((num) => num == nxtMin);

        let selectedIdx = idx >= nxtIdx ? nxtIdx : idx;
        let selectedNum = sliceArr(selectedIdx, origin);

        number = selectedNum;
        origin = number;
        count++;
    }
    return number.join("");
}

// console.log(solution("1924", 2)); //"94"
console.log(solution("1231234", 3)); //"3234"
// console.log(solution("4177252841", 4)); //"775841"