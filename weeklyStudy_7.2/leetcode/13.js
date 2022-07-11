var romanToInt = function (s) {
    const map = new Map();

    map.set("I", 1);
    map.set("V", 5);
    map.set("X", 10);
    map.set("L", 50);
    map.set("C", 100);
    map.set("D", 500);
    map.set("M", 1000);

    let result = 0;
    let i = 0;

    while (i < s.length) {
        let j = i + 1;
        let currVal = map.get(s[i]);
        let nxtVal = map.get(s[j]);
        console.log("currVal", currVal, "nxtVal", nxtVal);
        if (!nxtVal) {
            result += currVal;
            return result;
        }
        // 1. 왼쪽 오른쪽 비교
        // 1-1. 왼쪽 값이 큰 경우
        if (currVal >= nxtVal) {
            // j 값이 s.length-1 이 되는 경우 리턴 
            result += currVal;
            i++;
            console.log("larger than nxt", result);
        }
        // 1-2. 오른쪽 값이 큰 경우
        else {
            result += (nxtVal - currVal);
            i += 2;
            console.log("smaller than nxt", result);
        }
    }
    return result;
};

console.log(romanToInt("III")); //3
console.log(romanToInt("LVIII")); //58
console.log(romanToInt("MCMXCIV")); //1994
console.log(romanToInt("MDCXCV")); //1695