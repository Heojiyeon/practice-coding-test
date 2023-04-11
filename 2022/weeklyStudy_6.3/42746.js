// function solution(numbers) {

//     function swap(arr, i, j) {
//         let tmp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = tmp;
//         return arr;
//     }

//     for (i = numbers.length - 1; i >= 0; i--) {
//         for (j = 0; j < i; j++) {

//             let curr = numbers[j] + '';
//             let nxt = numbers[j + 1] + '';

//             if ((curr[0] * 1) < (nxt[0] * 1)) {
//                 swap(numbers, j, j + 1);
//             }
//             else if ((curr[0] * 1) == (nxt[0] * 1)) {
//                 if (curr < nxt) {
//                     swap(numbers, j, j + 1);
//                     console.log("앞자리가 같아!", numbers);
//                 }
//                 if ((nxt + '')[nxt.length - 1] == '0') {
//                     console.log('나나나', nxt);
//                     swap(numbers, j, j + 1);
//                 }
//             }
//         }
//         console.log(numbers);
//     }
//     return numbers.join('');
// }

// function sortNums(arr) {
//     let sortBuckets = Array.from({ length: 10 }, () => []);
//     let sortResult = '';
//     for (i = 0; i < arr.length; i++) {
//         let currNum = arr[i];
//         let lastNum = currNum[currNum.length - 1];
//         sortBuckets[lastNum].push(currNum);
//     }
//     console.log("sortBuckets", sortBuckets);
//     sortResult = [].concat(...sortBuckets).reverse();
//     return sortResult;
// }
// function solution(numbers) {
//     let buckets = Array.from({ length: 10 }, () => []);
//     let result = '';
//     for (i = 0; i < numbers.length; i++) {
//         let currNum = numbers[i] + '';
//         buckets[currNum[0]].push(currNum);
//     }
//     console.log(buckets);
//     for (i = 0; i < buckets.length; i++) {
//         if (buckets[i].length >= 2) {
//             buckets.splice(i, 1, sortNums(buckets[i]));
//         }
//     }
//     console.log(buckets);
//     result = [].concat(...buckets.reverse()).join('');
//     return result;
// }

// function solution(numbers) {
//     numbers = numbers.map((num) => num + '');
//     let handled = handleBuckets(numbers);
//     console.log(handled);
//     for (i = 0; i < handled.length; i++) {
//         if (handled[i].length >= 2) {
//             console.log("한번더", handleBuckets(handled[i]));
//             // handled.splice(i, 1, handleBuckets(handled[i]));
//         }
//     }
//     console.log(handled);
// }

// function handleBuckets(arr) {
//     let buckets = Array.from({ length: 10 }, () => []);

//     for (i = 0; i < arr.length; i++) {
//         let currNum = arr[i];
//         let target = currNum[currNum.length - 1];
//         console.log("target", target);
//         buckets[target].push(currNum);
//     }
//     return buckets;

// handleResult = [].concat(...buckets).reverse();
// return handleResult;
// }

// function solution(numbers) {
//     let buckets = Array.from({ length: 10 }, () => []);
//     for (i = 0; i < numbers.length; i++) {
//         let currNum = numbers[i] + '';
//         let lastNum = currNum[currNum.length - 1];
//         buckets[lastNum].push(currNum);
//     }
//     console.log(buckets);
//     buckets.reverse();
//     return [].concat(...buckets).join('');
// }

// function getDigit(num, i) {
//     if (num === 0) return 0;
//     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// }

// function digitCount(num) {
//     if (num === 0) return 1;
//     return Math.floor(Math.log10(Math.abs(num))) + 1;
// }

// function mostDigits(arr) {
//     let currMax = 0;
//     for (i = 0; i < arr.length; i++) {
//         currMax = Math.max(currMax, digitCount(arr[i]));
//     }
//     return currMax;
// }

// function radixSort(nums) {
//     let maxlen = mostDigits(nums);
//     for (k = 0; k < maxlen; k++) {
//         let bucket = Array.from({ length: 10 }, () => []);
//         for (j = 0; j < nums.length; j++) {
//             let digit = getDigit(nums[j], k);
//             bucket[digit].push(nums[j]);
//         }
//         nums = [].concat(...bucket);
//     }
//     return nums;
// }

// function solution(numbers) {
//     console.log(numbers);
//     let maxlen = mostDigits(numbers);
//     console.log(maxlen);
//     for (k = 0; k < maxlen - 1; k++) {
//         let bucket = Array.from({ length: 10 }, () => []);
//         for (j = 0; j < numbers.length; j++) {
//             let digit = getDigit(numbers[j], k);
//             console.log(numbers[j], digit);
//             bucket[digit].push(numbers[j]);
//             console.log(bucket);
//         }
//         numbers = [].concat(...bucket);
//     }
//     console.log(numbers);
//     return numbers.reverse().join('');
// }

function solution(numbers) {
    var answer = '';
    numbers.sort(sortFunc);
    console.log(numbers);
    answer = numbers.join('');
    if (answer[0] === '0') return '0';
    return answer;
}
const sortFunc = (a, b) => {
    const compareA = parseInt(a.toString() + b.toString());
    console.log(compareA);
    const compareB = parseInt(b.toString() + a.toString());
    console.log(compareB);
    console.log(compareB - compareA);
    return compareB - compareA
}

console.log(solution([0, 100, 101])); //1011000
// console.log(solution([1000, 100])); //1001000
// console.log(solution([0, 6, 10, 2])); //62100
// console.log(solution([3, 30, 34, 5, 9]));//"9534330"