function solution(word) {
    const chars = ['A', 'E', 'I', 'O', 'U'];
    let idx = 0;
    let currWord = chars[idx];
    let count = 1;

    while (true) {
        // 길이가 1인 경우 5가 될때까지 같은 문자 붙이기
        let j = 1;
        while (j < 5) {
            currWord += chars[idx];
            j++;
            count++;
        }
        console.log("1단계: ", currWord, count);
        if (currWord == 'UUUUU') return;
        // 길이가 5인 경우 마지막 문자 핸들링하며 1로 줄이기 -> 재귀
        function handleWord(currWord) {
            console.log(currWord);
            if (currWord.length == 1) return currWord;
            let leftside = currWord.substring(0, currWord.length - 1);
            for (i = 0; i < chars.length; i++) {
                let char = chars[i];
                currWord = leftside.concat(...char);
                console.log("currWord1", currWord);
            }
            currWord = currWord.substring(0, currWord.length - 1);
            handleWord(currWord);
        }
        handleWord(currWord);
        idx++;
        currWord = chars[idx];
        console.log("my turn: ", currWord);
    }
}

console.log(solution("AAAAE")); // 6
// console.log(solution("AAAE")); // 10
// console.log(solution("I")); // 1563
// console.log(solution("EIO")); // 1189