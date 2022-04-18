function findCourse(orders, order) {
    let curr_order;
    const order_split = order.split('');
    for (i = 0; i < order_split.length; i++) {

    }

}

function solution(orders, course) {
    let curr_course;

    for (i = 0; i < course.length; i++) {
        curr_course = course[i];
        orders.find((order) => curr_course == order.length ?
            findCourse(orders, order) : i++);
    }
}

console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]));
//["AC", "ACDE", "BCFG", "CDE"]
