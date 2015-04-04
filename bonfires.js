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