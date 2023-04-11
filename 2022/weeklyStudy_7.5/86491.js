function solution(sizes) {
    sizes.map((size) => {
        if (size[0] < size[1]) {
            let tmp = size[0];
            size[0] = size[1];
            size[1] = tmp;
        }
    })
    let row = Math.max(...sizes.map((size) => size[0]));
    let col = Math.max(...sizes.map((size) => size[1]));
    return row * col;
}


console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]])); //4000
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])); //120
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])); //133