// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix) {
        for (let index = 0; index < matrix.length; index++) {
            if (index % 2 == 0) {
                console.log(index);
                matrix[index].map((el) => result.push(el));
            } else {
                matrix[index].reverse().map((el) => result.push(el));
            }
        }
    }
    return result;
};
