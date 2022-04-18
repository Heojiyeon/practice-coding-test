// n번째 글자를 기준으로 오름차순 정렬
function solution(strings, n) {
    let answer = {
        name: String,
        order: Number,
    };
    let result = [];
    let k;
    let sortResult = [];
    for (i = 0; i < strings.length; i++) {
        answer = {
            name: strings[i],
            order: i
        };
        result.push(answer);
    }
    console.log(result);
    k = result.sort(function (a, b) {
        let x = a.name[n];
        let y = b.name[n];
        if (x < y) return -1;
        if (x > y) return 1;
        return 0;
    })
    console.log(k);
    for (j = 0; j < k.length; j++) {
        sortResult.push(k[j].name);
    }
    return sortResult;
}

//console.log(solution(["sun", "bed", "car"], 1)); //	["car", "bed", "sun"]
//console.log(solution(["abce", "abcd", "cdx"], 2)); //["abcd", "abce", "cdx"]