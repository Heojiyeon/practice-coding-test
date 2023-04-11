function solution(s) {
    let result = [0, 0];

    function handleStr(str) {
        console.log("curr str", str);
        const finds = (str, target) => str.split("").filter((x) => x == target);
        let findOne = finds(str, 1);
        let findZero = finds(str, 0);
        result[1] += findZero.length;
        let curr = findOne.length;
        let binaryResult = calBinary(curr);
        result[0] += 1;
        return binaryResult == 1 ? result : handleStr(binaryResult);
    }
    handleStr(s);
    return result;
}

function calBinary(curr) {
    let answer = [];
    if (curr == "1") return curr;
    while (curr != 1) {
        let quot = Math.floor(curr / 2);
        let remain = curr % 2;
        quot != 1 ? answer.push(remain) : answer.push(remain, quot);
        curr = quot;
    }
    return answer.reverse().join("");
}

console.log(solution("110010101001")); //[3,8]