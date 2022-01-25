// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == undefined) return [];
    else {
        let matrixRevers = [matrix[0]];

        for (let i = 1; i < matrix.length; i++) {
            if (i % 2 != 0) {
                matrix[i] = matrix[i].reverse();
                //matrixRevers.push(matrix[i]);
            }

            // else {
            //    matrix[i] = matrix[i];
            //   // matrixRevers.push(matrix[i]);

            //}
        }

        return matrix.flat();
    }
};
