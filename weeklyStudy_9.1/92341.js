function solution(fees, records) {

    let result = [];
    const map = new Map();

    function calFee(time, fees) {
        if (time < fees[0]) return fees[1];
        else return fees[1] + (Math.ceil((time - fees[0]) / fees[2]) * fees[3])
    }

    function changeMinutes(state, time) {
        let minutes;
        time = time.split(":");
        minutes = time[0] * 60 + time[1] * 1;
        return state == "IN" ? -minutes : minutes;
    }

    for (i = 0; i < records.length; i++) {
        let record = records[i].split(" ");
        let time = record[0];
        let carNum = record[1];
        let state = record[2];
        if (!map.get(carNum)) map.set(carNum, changeMinutes(state, time));
        else {
            let prevMin = map.get(carNum);
            let currMin = changeMinutes(state, time);
            map.set(carNum, prevMin + currMin);
        }
    }

    const cars = [...map.keys()];
    cars.sort((a, b) => a - b);

    cars.map((currCar) => {
        if (map.get(currCar) <= 0) {
            let prevMin = map.get(currCar);
            map.set(currCar, prevMin + 1439);
        }
        let currTime = map.get(currCar);
        result.push(calFee(currTime, fees));
    })

    console.log("after", map);
    return result;
}

// console.log(solution(
//     [120, 0, 60, 591],
//     ["16:00 3961 IN", "16:00 0202 IN", "18:00 3961 OUT",
//         "18:00 0202 OUT", "23:58 3961 IN"]
// )); //[0, 591]

// console.log(solution
//     ([180, 5000, 10, 600],
//         ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT",
//             "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN",
//             "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"])); //[14600, 34400, 5000]

console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"])); //[14841]