/*
function solution(s) {
    //1. 공백기준으로 단어 나누기
    const words = s.split(" ");
    //2. 단어 index별 대, 소문자 
    let letter = '';
    let answer = '';

    // 문자열 -> 단어로 나누어 배열로 나타냄
    for (i = 0; i < words.length; i++) {
        letter = words[i];
        // 단어 -> 문자 인덱스별 결과 나타냄
        for (j = 0; j < letter.length; j++) {
            switch (j % 2) {
                case 0:
                    answer += letter[j].toUpperCase();
                    break;

                case 1:
                    answer += letter[j];
                    break;

                default:
                    break;
            }
        }
        words.splice(i, 1, answer);
        answer = '';
    }
    console.log(words);
    console.log(words.join(" "));
}
*/

function solution(s) {

}

solution(" try hello   world");