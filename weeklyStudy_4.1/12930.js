function handleWord(sentence) {
    let result = [];
    let word = '';
    let answer = '';

    for (i = 0; i < sentence.length; i++) {
        word = sentence[i];
        if (word == ' ') {
            result.push(word);
        } else {
            for (j = 0; j < word.length; j++) {
                answer += j % 2 == 0 ? word[j].toUpperCase() : word[j].toLowerCase();
            }
            result.push(answer);
            answer = '';
        }
    }
    return result.join('');
}

function solution(s) {
    let sentence = [];
    let word = '';
    for (i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            word.length != 0 ? sentence.push(word, s[i]) : sentence.push(s[i]);
            word = '';
        } else {
            word += s[i];
            if (i == (s.length - 1)) {
                sentence.push(word);
            }
        }
    }
    return handleWord(sentence);
}

console.log(solution("try try")); // "TrY TrY"
console.log(solution("try hello world ")); //"TrY HeLlO WoRlD "
console.log(solution("  bye world")); // "  ByE WoRlD"
console.log(solution(" bye my love ")); // "ByE My LoVe "
console.log(solution("Hello eVeryone")); //"HeLlO EvErYoNe"
console.log(solution("A    ")); //"A    "
console.log(solution(" aaaa ")); // " AaAa "