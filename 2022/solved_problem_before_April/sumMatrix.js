const arr1 = [[2, 3], [4, 2]];
const arr2 = [[1, 4], [3, 3]];

function solution(arr1, arr2) {
    var answer = [[]];
    for (var i = 0; i < arr1.length; i++) {
        answer[i] = [];
        for (var j = 0; j < arr1[i].length; j++) {
            answer[i].push(arr1[i][j] + arr2[i][j]);
            console.log(answer);
        }
    }
    //return answer;
    console.log(answer);
}

solution(arr1, arr2);


// push function

/*

let curr_x = [];
let curr_y = [];
let answer = [];

const len = x.length;

for (i = 0; i < len; i++) {
    curr_x = x[i];
    curr_y = y[i];
    console.log(curr_x, curr_y);
    while (answer.length != curr_x.length) {
        for (j = 0; j < curr_x.length; j++) {
            answer.push(curr_x[j] + curr_y[j]);
            console.log("answer", answer);
        }
    }
    result[0].push(answer);
    answer=[];
}

console.log("result", result);
*/
