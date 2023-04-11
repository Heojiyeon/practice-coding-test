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
        // 1. 다리 위에 아무것도 없는경우
        if (onBridge.length == 0) emptyBridge(currTruck);
        // 2. 다리 위에 뭔가가 있는 경우
        else {
            onBridge.map((truck) => truck[1]++);
            // 2-1. 트럭 소요시간이 채워진경우 빠진다
            if (checkTime(onBridge, bridge_length)) {
                handleFinished();
            }
            // 2-2. 트럭 무게가 남아서 더 올릴 수 있는 경우
            if (currTruck) {
                let currWeight = calWeight(onBridge);
                handleBridge(currWeight, currTruck, wait, onBridge);
            }
        }
        totalTimes++;
    }
    return totalTimes;
}
