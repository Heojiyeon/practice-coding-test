function solution(id_list, report, k) {
    // 한 사람이 동일 인물 중복 신고 시, 1회로 계산
    let countReport = [];

    for (i = 0; i < id_list.length; i++) {
        let currUser = id_list[i];
        let count = 0;
        for (j = 0; j < report.length; j++) {
            let currReported = report[j].split(" ")[1];
            if (currUser == currReported) count++;
        }
        if (count >= k) countReport.push(currUser, count);
    }
    console.log(countReport);

    let reporters = [];

    for (i = 0; i < countReport.length; i++) {
        let currStopped = countReport[i];
        for (j = 0; j < report.length; j++) {
            let currReported = report[j].split(" ")[1];
            if (currStopped == currReported) {
                reporters.push(report[j].split(" ")[0]);
            }
        }
    }
    console.log(reporters);

    let result = [];

    for (i = 0; i < id_list.length; i++) {
        let count = 0;
        for (j = 0; j < reporters.length; j++) {
            if (id_list[i] == reporters[j]) count++;
        }
        result.push(count);
    }
    console.log(result);
}

console.log(solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2));
//[2,1,1,0]
// console.log(solution(["con", "ryan"],
//     ["ryan con", "ryan con", "ryan con", "ryan con"], 3));
//[0,0]