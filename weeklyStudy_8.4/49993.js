function solution(skill, skill_trees) {
    let count = 0;

    skill_trees.map((tree) => {
        skillCheck(skill, tree) ? count++ : null;
    })
    return count;
}

function skillCheck(skill, tree) {
    let result = false;
    let currIdx = 0;

    for (i = 0; i < tree.length; i++) {
        let currTree = tree[i];
        let skillIdx = skill.indexOf(currTree);
        if (skillIdx != -1) {
            if (skillIdx == currIdx) currIdx++;
            else return result;
        }
    }
    return !result;
}

console.log(solution("CBD",
    ["BACDE", "CBADF", "AECB", "BDA"])); //