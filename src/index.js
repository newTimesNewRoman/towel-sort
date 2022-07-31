
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {return []};
  const result = matrix.reduce((accumulator, currentValue, index) => {
    return accumulator.concat((index % 2 === 0) ? currentValue : currentValue.reverse());
  }, []);
  return result;
}
