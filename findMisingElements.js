var myApp = function() {
  function findMissingElements(arr, low, high) {
    let items = {};
    let output = [];
    arr.forEach(elem => {
      items[elem] = true;
    })

    while(low < high) {
      if(!items[low]) {
        output.push(low);
      }
      low++
    }
    return output;
  }

  return {findMissingElements}
}();


let test1 = myApp.findMissingElements([4,1,9,23, 92], 0, 5)
console.log('test1:', test1[0] === 0);

let test2 = myApp.findMissingElements([1, 14, 11, 51, 15], 50, 55)
console.log('test2:', test2[1] === 52);