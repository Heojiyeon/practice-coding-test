function solution(files) {
    return files.sort((a, b) => {
        const headerA = a.match(/^\D+/g)[0].toLowerCase();
        const headerB = b.match(/^\D+/g)[0].toLowerCase();
        console.log(headerA, headerB);

        if (headerA > headerB) return 1;
        if (headerB > headerA) return -1;

        const numberA = a.match(/\d+/g)[0].replace(/^0+/, "");
        const numberB = b.match(/\d+/g)[0].replace(/^0+/, "");
        console.log(numberA, numberB);

        return numberA - numberB;

    })
}

console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]));
// ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
console.log(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]));
// ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]