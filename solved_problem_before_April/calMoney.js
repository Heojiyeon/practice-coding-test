// money : 공장이 생산해야 하는 금액
// cost : 6종류 동전의 생산 단가 '배열'

function solution(money, costs) {
    let money_arr = [];
    let result = [];
    let makeMon = [1, 5, 10, 50, 100, 500];

    const mon = String(money);

    // (1) 자릿수대로 숫자 끊기
    for (i = 0; i < mon.length; i++) {
        money_arr.push(mon[i]);
    }
    money_arr.reverse();

    for (j = 0; j < money_arr.length; j++) {
        result.push(money_arr[j] * Math.pow(10, j));
    }

    console.log(money_arr);
    console.log(result);

    // (2) 주어진 화폐 단위로 계산될 수 있는 모든 경우
    // 1, 5, 10, 50, 100, 500
    let count = [];

    for (i = 0; i < result.length; i++) {
        for (j = 0; j < makeMon.length; j++) {
            if (result[i] / makeMon[j] > 1) {

            }
        }
    }

}

solution(4578, [1, 4, 99, 35, 50, 1000]);
//solution(1999, [2, 11, 20, 100, 200, 600]);