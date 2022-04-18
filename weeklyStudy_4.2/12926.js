function findIndex(currAlp, n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = alphabet.toUpperCase();
    const lowerAlphabet = alphabet.toLowerCase();

    // n만큼 이동한 인덱스를 저장하는 변수
    let idx;

    if (upperAlphabet.indexOf(currAlp) != -1) {
        idx = upperAlphabet.indexOf(currAlp) + n;
        idx = idx > 25 ? idx - 26 : idx;
        return upperAlphabet[idx];
    } else {
        idx = lowerAlphabet.indexOf(currAlp) + n;
        idx = idx > 25 ? idx - 26 : idx;
        return lowerAlphabet[idx];
    }

    // idx = idx > 25 ? idx - 26 : idx;

    // return upperAlphabet[idx] ? upperAlphabet[idx]
    //     : lowerAlphabet[idx];

}

function solution(s, n) {
    const answer = s.split('');
    let result = '';

    for (i = 0; i < answer.length; i++) {
        result += answer[i] == ' ' ? ' ' : findIndex(answer[i], n);
    }
    return result;
}

// console.log(solution("AB", 1)); //"BC"
// console.log(solution("z", 1)); //"a"
console.log(solution("a B z", 4)); //"e F d"