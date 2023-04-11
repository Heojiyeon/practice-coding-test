function solution(name) {
    const changeCode = (str) => str.charCodeAt(0);
    name = name.split("").map((char) => changeCode(char));
    console.log(name);
}

console.log(solution("JAZ")); //11
