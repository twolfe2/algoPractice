var myApp = function() {

  function countPairsWithSum(arr, sum) {
    let length = arr.length;
    let counts = {};
    let sumCount = 0;
    arr.forEach(elem => {
      counts[elem] = counts[elem] + 1 || 1;
    })
    
    for(let i = 0; i < length; i++) {
      sumCount += counts[sum-arr[i]] || 0;
      // need to check if the value added to itself equals the sum
      if(sum-arr[i] === arr[i]) {
        sumCount--;
      }
    }
    return parseInt(sumCount/2) || 0;
  }

  return {countPairsWithSum};

}();


let test1 = myApp.countPairsWithSum([2,3,-2], 0);
console.log('test1:', test1 === 1);


let test2 = myApp.countPairsWithSum([10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1], 11);
console.log('test2:', test2 === 9);


let test3 = myApp.countPairsWithSum([10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1], 1);
console.log('test2:', test3 !== 2);
