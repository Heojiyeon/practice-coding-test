function solution1(participant, completion) {
    let obj = {};
    participant.forEach((e) => {
        if (obj[e] > 0) {
            obj[e]++;
        } else {
            obj[e] = 1;
        }
        console.log(obj[e]);
    });
    console.log(participant);
    console.log(obj);
    completion.forEach((e) => {
        obj[e]--;
        console.log(obj[e]);
    });
    console.log(completion);
    console.log(obj);
    return Object.keys(obj).filter(e => obj[e] > 0).toString('');
}

function solution2(participant, completion) {
    let map = new Map();

    for (let i = 0; i < participant.length; i++) {
        let a = participant[i];

        map.set(a, (map.get(a) || 0) + 1);
        console.log(map);
    }
    console.log("--------------");
    for (let j = 0; j < completion.length; j++) {
        let b = completion[j];
        map.set(b, (map.get(b) || 0) - 1);
        console.log(map);
    }

    for (let [k, v] of map) {
        if (v > 0) console.log(k);
    }
}


console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); //"leo"
// console.log("-----------------------------");
// console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"],
//     ["josipa", "filipa", "marina", "nikola"])); //"vinko"
// console.log("-----------------------------");
// console.log(solution(["mislav", "stanko", "mislav", "ana"],
//     ["stanko", "ana", "mislav"])); //"mislav"