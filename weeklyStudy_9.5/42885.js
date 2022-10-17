function solution(people, limit) {
    people = people.sort((a, b) => a - b);
    console.log(people);
    let p1 = 0;
    let p2 = people.length - 1;

    let count = 0;
    let completed = 0;
    let checked = [];

    while (p1 < people.length) {
        console.log("p1", p1, "p2", p2, "completed", completed);
        if (completed == people.length) return count;
        if (p1 == p2) {
            count++;
            p1++;
            completed++;
            p2 = people.length - 1;
            console.log("same p1", p1, "p2", p2, "completed", completed, "count", count);
            if (p1 == people.length - 1) return count + 1;
        }
        if (people[p1] + people[p2] <= limit) {
            count++;
            p1++;
            completed += 2;
            checked.push(p2);
            p2 = people.length - 1;
            while (checked.findIndex((idx) => idx == p1) != -1) {
                p1++;
            }
            while (checked.findIndex((idx) => idx == p2) != -1) {
                p2--;
            }
        }
        else {
            p2--;
        }
    }
    return count;
}

console.log(solution([30, 40, 50, 60], 100)); //2
console.log(solution([70, 50, 80, 50], 100)); //3
console.log(solution([70, 80, 50], 100)); //3