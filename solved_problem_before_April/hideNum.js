// 번호를 받으면 뒷 4자리를 제외한 나머지 수를 전부 *로 가린 문자열 리턴
function solution(phone_number) {
    let answer = '';
    const num = phone_number.slice(-4);
    for (i = 0; i < phone_number.length - num.length; i++) {
        answer += '*';
    }
    answer += num;
    return answer;
}

solution('01033334444');