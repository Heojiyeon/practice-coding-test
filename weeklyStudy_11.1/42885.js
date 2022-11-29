function solution(people, limit) {
  let p1 = 0;
  let p2 = people.length - 1;
  let result = 0;

  people = people.sort((a, b) => b - a);
  console.log(people);

  while (p1 <= p2) {
    if (people[p1] + people[p2] <= limit) p2--;
    p1++;
    result++;
  }
  return result;
}

// console.log(solution([70, 50, 80, 50], 100)); //3
console.log(solution([70, 80, 50], 100)); //3
