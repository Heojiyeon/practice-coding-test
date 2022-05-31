function solution(record) {
    const map = new Map();
    let result = [];

    for (i = 0; i < record.length; i++) {
        let currRecord = record[i].split(' ');
        if (currRecord[0] == "Enter") {
            map.set(currRecord[1], currRecord[2]);
            result.push(`${currRecord[1]}님이 들어왔습니다.`);
        }
        else if (currRecord[0] == "Change") map.set(currRecord[1], currRecord[2]);
        else result.push(`${currRecord[1]}님이 나갔습니다.`);
    }
    for (i = 0; i < result.length; i++) {
        let currId = result[i].match(/[A-Za-z0-9]+/)[0];
        result[i] = result[i].replace(currId, map.get(currId));
    }
    return result;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo",
    "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]));
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]