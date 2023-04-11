function findElement(str) {
    let currEl = '';
    let resultEl = [];

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let lowStr = str.toLowerCase();

    for (i = 0; i < lowStr.length; i++) {
        currEl += lowStr[i];
        if (currEl.length == 2) {
            if (alphabet.split('').find((e) => e == currEl[0]) && alphabet.split('').find((e) => e == currEl[1])) {
                resultEl.push(currEl);
            }
            currEl = currEl[1];
        }
    }
    return resultEl;
}

function jaccard(str1Arr, str2Arr) {
    // 교집합 크기
    let sameSet = 0;
    let currStr2Arr = str2Arr;

    for (i = 0; i < str1Arr.length; i++) {
        for (j = 0; j < currStr2Arr.length; j++) {
            if (str1Arr[i] == currStr2Arr[j]) {
                sameSet++;
                currStr2Arr[j] = 0;
                break
            }
        }
    }
    // 합집합 크기
    const sumSet = str1Arr.length + str2Arr.length - sameSet;
    console.log("sameset", sameSet, "sumset", sumSet);
    let jaccardResult;
    if (sameSet == 0 || sumSet == 0) return jaccardResult = 65536;
    else return jaccardResult = Math.floor((sameSet / sumSet) * 65536);
}

function solution(str1, str2) {
    let str1Arr, str2Arr, answer;
    str1Arr = findElement(str1);
    str2Arr = findElement(str2);

    console.log(str1Arr, str2Arr);
    return answer = jaccard(str1Arr, str2Arr);
}

console.log(solution("FRANCE", "french")); //16384
console.log(solution("handshake", "shake hands")) //65536
console.log(solution("aa1+aa2", "AAAA12"));//43690
console.log(solution("E=M*C^2", "e=m*c^2")); //65536