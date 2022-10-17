// function solution(bridge_length, weight, truck_weights) {

//     function handleFinished() {
//         finished.push(onBridge[0]);
//         onBridge.shift();
//     }

//     function emptyBridge(currTruck) {
//         onBridge.push(currTruck);
//         wait.shift();
//         console.log("도로가 비어있었어", onBridge);
//     }

//     let totalTimes = 0;
//     let onBridge = [];
//     let finished = [];
//     let wait = truck_weights.map((el) => [el, 0]);
//     let i = 1;

//     while (finished.length != truck_weights.length) {
//         console.log("지금은 ", i, "번째 루프");
//         let currTruck = wait[0];
//         console.log("currTruck", currTruck);

//         // 현재 트럭이 대기중 값인 경우
//         if (currTruck) {
//             if (onBridge.length == 0) {
//                 //     onBridge.push(currTruck);
//                 //     wait.shift();
//                 //     console.log("도로가 비어있었어", onBridge);
//                 emptyBridge(currTruck);
//             }
//             else {
//                 console.log("도로에 트럭이 있어", onBridge);
//                 onBridge.map((truck) => truck[1]++);
//                 let currWeight = calWeight(onBridge);
//                 console.log("현재 다리 위 무게는 ", currWeight);
//                 // 다리 위에 트럭 올리기
//                 if (weight - currWeight >= currTruck[0]) {
//                     console.log("더 올릴 수 있어!");
//                     onBridge.push(currTruck);
//                     wait.shift();
//                     console.log("다리 위에 올라간 트럭은 ", onBridge);
//                     console.log("대기 중인 트럭들은 ", wait);
//                 }
//                 else {
//                     console.log("더 못올려!");
//                     console.log("다리 위에 트럭들은 ", onBridge);
//                 }
//                 if (checkTime(onBridge, bridge_length)) {
//                     handleFinished();
//                     console.log("완주한 트럭이야", finished);
//                     if (onBridge.length == 0) {
//                         emptyBridge(currTruck);
//                         // onBridge.push(currTruck);
//                         // wait.shift();
//                         // console.log("도로가 비어있었어", onBridge);
//                     }
//                     else {
//                         if (weight - currWeight >= currTruck[0]) {
//                             console.log("더 올릴 수 있어!");
//                             onBridge.push(currTruck);
//                             wait.shift();
//                             console.log("다리 위에 올라간 트럭은 ", onBridge);
//                         }
//                     }
//                 }
//             }
//         }
//         // 현재 트럭이 대기중이 아닌 경우
//         else {
//             if (onBridge.length != 0) {
//                 onBridge.map((truck) => truck[1]++);
//             }
//             if (checkTime(onBridge, bridge_length)) {
//                 handleFinished();
//                 console.log("완주한 트럭이야", finished);
//             }
//         }
//         totalTimes++;
//         console.log("전체 시간은 ", totalTimes);
//         i++;
//         console.log("----------------------------");
//     }
//     return totalTimes;
// }

// function checkTime(onBridge, bridge_length) {
//     let result = true;
//     let timeouts = onBridge.find((e) => e[1] == bridge_length);
//     if (timeouts) return result;
//     else return !result;
// }

// function calWeight(arr) {
//     let totalWeight = 0;
//     for (i of arr) {
//         totalWeight += i[0];
//     }
//     return totalWeight;
// }


function checkTime(onBridge, bridge_length) {
    let result = true;
    let timeouts = onBridge.find((e) => e[1] == bridge_length);
    return timeouts ? result : !result;
}

function calWeight(arr) {
    let totalWeight = 0;
    for (i of arr) {
        totalWeight += i[0];
    }
    return totalWeight;
}

function solution(bridge_length, weight, truck_weights) {

    function handleFinished() {
        finished.push(onBridge[0]);
        onBridge.shift();
    }

    function emptyBridge(currTruck) {
        onBridge.push(currTruck);
        wait.shift();
    }

    function handleBridge(currWeight, currTruck, wait, onBridge) {
        if (weight - currWeight >= currTruck[0]) {
            onBridge.push(currTruck);
            wait.shift();
        }
    }

    let totalTimes = 0;
    let onBridge = [];
    let finished = [];
    let wait = truck_weights.map((el) => [el, 0]);

    while (finished.length != truck_weights.length) {
        let currTruck = wait[0];
        console.log("currTruck", currTruck);
        console.log("바뀌기 전", onBridge);

        // 1. 대기 트럭이 있는 경우
        if (currTruck) {
            // 1-1. 다리 위에 트럭이 없는 경우
            if (onBridge.length == 0) emptyBridge(currTruck);
            // 1-2. 다리 위에 트럭이 있는 경우
            else {
                // 다리 위 트럭 시간 증가
                onBridge.map((truck) => truck[1]++);
                let currWeight = calWeight(onBridge);
                // 다리 위 무게 계산 및 트럭 이동(대기 => 트럭)
                handleBridge(currWeight, currTruck, wait, onBridge);

                // 다리 위 시간 계산
                if (checkTime(onBridge, bridge_length)) {
                    handleFinished();
                    currWeight = calWeight(onBridge);
                    if (onBridge.length == 0) emptyBridge(currTruck);
                    else handleBridge(currWeight, currTruck, wait, onBridge);
                }
                console.log("바뀐 후", onBridge);
            }
        }
        // 2. 대기 트럭이 없는 경우
        else {
            // 2-1. 다리 위 트럭이 있는 경우 시간 증가
            if (onBridge.length > 0) {
                onBridge.map((truck) => truck[1]++);
            }
            // 2-2. 다리 위 트럭 시간 체크 
            if (checkTime(onBridge, bridge_length)) handleFinished();
        }
        totalTimes++;
        console.log("onBridge", onBridge);
        console.log("totalTimes", totalTimes);
        console.log("finished", finished);
        console.log("--------------------------");
    }
    return totalTimes;
}

console.log(solution(2, 10, [7, 4, 5, 6])); //8
console.log(solution(5, 5, [2, 2, 2, 2, 1, 1, 1, 1, 1])); //19
// console.log(solution(100, 100, [10])); //101
// console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); //110
// console.log(solution(5, 5, [1, 1, 1, 1, 1, 2, 2]));//14
// console.log(solution(5, 5, [1, 1, 1, 1, 1, 2, 2, 2, 2])); //19