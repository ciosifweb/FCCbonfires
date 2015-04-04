///////////////////////////////////
/////////STEAMROLLER////////////

function steamroller(arr) {
  // I'm a steamroller, baby
  var results;
   while (arr.some(function (element) {
          return Array.isArray(element);
          })) {
             results = [];
             arr.forEach(function(element) {
               if (Array.isArray(element)) {
                 results.push.apply(results, element);
               } else {
                 results.push(element);
               }
             });
     arr = results;
     console.log(arr);
          }
         
         
  return arr;
}

/////////////////////////////////
//////BINARY AGENTS///////////////

function binaryAgent(str) {
  var binaryArr = str.split(" ");
  var codes = [];
  binaryArr.forEach(function(binaryCode) {
    codes.push(parseInt(binaryCode,2));
  });
  return String.fromCharCode.apply(String, codes);
}