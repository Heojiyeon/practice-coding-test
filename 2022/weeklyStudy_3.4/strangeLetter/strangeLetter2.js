// 단어별 짝, 홀수 인덱스 판단
function forIndex(words) {
    let word;
    for (i = 0; i < words.length; i++) {
        word = words[i];
        if (words[i] != ' ') {
            // 대, 소문자
            for (j = 0; j < word.length; j++) {
                if (j % 2 == 0) {
                    word = word.replace(word[j], word[j].toUpperCase());
                } else {
                    word[j];
                }
            }
            words.splice(i, 1, word);
        }
    }
    answer = words.join('');
    console.log(words);
    return answer;
}

function solution(s) {
    console.log(s.length);
    let answer = '';
    let words = [];
    let word = '';

    // 공백 기준으로 단어를 만들어 배열에 대입
    for (i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            words.push(s[i]);
        } else {
            while (s[i] != ' ') {
                word += s[i];
                i++;
            }
            words.push(word);
            word = '';
        }
    }

    console.log(words);
    // 단어별 짝, 홀수 인덱스 판단 함수
    answer = forIndex(words);
    return answer;
}

console.log(solution(" try  hello world  "));