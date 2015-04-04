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

//////////////////////////////////
///////PAIRWISE///////////////////

function pairwise(arr, arg) {
  var len = arr.length;
  var paired = new Array(len);
  var sum = 0;
  
  for (var i = 0; i < len; i++) {
    for(var j = 0; j < len; j++) {
      if (!paired[i] && !paired[j] && i !=j && arr[i] + arr[j] === arg) {
        paired[i] = 1;
        paired[j] = 1;
        sum = sum + i + j;
      }
    }
  }
  return sum;
}