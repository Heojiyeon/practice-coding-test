// 정수 x와 자연수 n을 받아 x부터 시작해 x씩 증가하는 n개의 수 리스트를 반환하는 함수
// x=2, n=3 => answer=[2, 4, 6]

function solution(x, n) {
    /*var answer = [];
    if (n <= 1000) {
        for (i = 1; i <= n; i++) {
            answer.push(i * x);
        }
        console.log(answer);
    }
    else {
        console.log("N value is more than 1000");
    }*/
    let answer = Array(n).fill(x).map((v, i) => {
        console.log("v", v, "i", i);
        (i + 1) * v;
    });
    console.log(answer);
}

solution(2, 3);
solution(-4, 2);