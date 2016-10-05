var itineraryApp = function(){

  function itineraryFinder(unorderedItinerary) {
    let start = findStart(unorderedItinerary);
    console.log('start:', start);
    let orderedItin = ''; 
    let curr = start;

    while(curr) {
      orderedItin += `${curr} -> ${unorderedItinerary[curr] || '?'}, `;
      curr = unorderedItinerary[curr];
    }
    return orderedItin;
  }

  function findStart(itinerary) {
    // need to find the element that is NOT a destination but is a start point

    let destinations = {};
    let startPoint = '';

    // create reverse hash
    Object.keys(itinerary).forEach(start => {
      let dest = itinerary[start];
      destinations[dest] = true;
    });

    // if the item is missing from the reverse hash than that is our start
    Object.keys(itinerary).forEach(start => {
      if(!destinations[start]) {
        startPoint = start;
      }
    });
    return startPoint;
  }

  return {itineraryFinder}
}();


let unorderedItinerary = {C: 'BA', BO: 'D', G: 'C', D:'G'};
let output = itineraryApp.itineraryFinder(unorderedItinerary);
console.log('output:', output);