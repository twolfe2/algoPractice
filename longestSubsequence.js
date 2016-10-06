var myApp = function() {
  function findLongestSubsequence(arr) {
    let longestSub = 0;
    let sequences = {};
    arr.forEach(elem => {
      sequences[elem] = [elem];
    })

    for(let key in sequences) {
      // check to see if we are at the start of a subsequence
      if(!sequences[key-1]) {
        let temp = parseInt(key) + 1;
        while(sequences[temp]) {
          sequences[key].push(temp);
          temp += 1;
        }
      }
      if(sequences[key].length > longestSub) {
        longestSub = sequences[key].length;
      }
    }

  
    return longestSub;
  }

  return {findLongestSubsequence};
}();


let test1 = myApp.findLongestSubsequence([1, 9, 3, 10, 4, 20, 2]);
console.log('test1:', test1 === 4);

let test2 = myApp.findLongestSubsequence([36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42]);
console.log('test2:', test2 === 5);