// a월 b일은 무슨 요일일까요?
// 2016년 1월 1일 금요일
function solution(a, b) {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let currDate = new Date(`${a} ${b}, 2016`);
    return days[currDate.getDay()];
}

console.log(solution(5, 24)); //"TUE"