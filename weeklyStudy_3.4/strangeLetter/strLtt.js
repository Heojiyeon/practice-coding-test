function forIndex(words) {
    let word2;
    for (i = 0; i < words.length; i++) {
        word2 = words[i];
        if (words[i] != ' ') {
            for (j = 0; j < word2.length; j++) {
                if (j % 2 == 0) {
                    word2 = word2.replace(word2[j], word2[j].toUpperCase());
                } else {
                    word2[j];
                }
                words.splice(i, 1, word2);
            }
        }
    }
    return words.join(' ');
}

function solution(s) {
    let answer;
    let words = [];
    let word = '';

    for (i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            words.push(s[i]);
        }
        while (s[i] != ' ') {
            word += s[i];
            i++;
        }
        words.push(word);
        word = '';
    }
    answer = forIndex(words);
    return answer;
}

console.log(solution(" try  hello world  "));
