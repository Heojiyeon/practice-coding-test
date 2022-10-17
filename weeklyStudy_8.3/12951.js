function handleChar(word) {
    if (!(word[0] * 1)) {
        let firstChar = word[0].toUpperCase()
        let rest = word.slice(1).toLowerCase()
        return firstChar.concat(rest)
    }
    else {
        return word.toLowerCase()
    }
}

function solution(s) {
    let currWord = ''
    let result = ''

    for (i = 0; i < s.length; i++) {
        let currChar = s[i]
        if (currChar == ' ') {
            if (currWord.length != 0) {
                result += handleChar(currWord)
                currWord = ''
            }
            result += currChar
        }
        else currWord += currChar
        if (i == s.length - 1) {
            if (currWord.length != 0) result += handleChar(currWord)
        }
    }
    return result
}

console.log(solution("3people unFollowed me")); // "3people Unfollowed me"
// console.log(solution("for the last week")); //"For The Last Week"
// console.log(solution("   for 3the lAST week")); //"   For 3the Last Week"
console.log(solution("a a a ")); //"A A A "