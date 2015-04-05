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

///////////////////////////////////
/////MAP THE DEBRIS//////////////

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var results = [];
  
  results = arr.map(function(item) {
    var axis = item.avgAlt + earthRadius;
    var period = Math.PI*2*Math.sqrt(Math.pow(axis,3)/GM);
    return {name: item.name, orbitalPeriod: Math.round(period)};
  });
  return results;
}

////////////////////////////////////
//////TELEPHONE CHECK//////////////

function telephoneCheck(str) {
  // Good luck!
  var re = /^1* *\(*[2-9]{3}\)*[\s-]*[2-9]{3}[\s-]*[2-9]{4}$/g;
  if (str.match(re)) return true;
  else return false;
}


///////////////////////////////
///CASH REGISTER////////////////

function drawer(price, cash, cid) {
  var change;
  // Here is your change, ma'am.
  var cashValues = {"ONE HUNDRED": 100,
                    "TWENTY": 20,
                    "TEN": 10,
                    "FIVE": 5,
                    "ONE": 1,
                    "QUARTER": 0.25,
                    "DIME": 0.1,
                    "NICKEL": 0.05,
                    "PENNY": 0.01
                   };
  
  var reverseValues = {"100": "ONE HUNDRED",
                    "20": "TWENTY",
                    "10": "TEN",
                    "5": "FIVE",
                    "1": "ONE",
                    "0.25": "QUARTER",
                    "0.1": "DIME",
                    "0.05":"NICKEL",
                    "0.01": "PENNY"
                   };
  var searchValues = [];
  var total = 0;
  
  //create helper array
  for (var key in cashValues) {
   if (cashValues.hasOwnProperty(key)) {
  
     searchValues.push(cashValues[key]);
       
     }
    }
 
  //calculate total cash in cash register
    cid.forEach(function(arr) {
      total += arr[1];
    });
    
  change = cash - price;  

  //check if closed or insufficient funds
  if (change > total) {
    return "Insufficient Funds";
  } else if (change === total) {
    return "Closed";
  } else {
    
    // sort cash-in-drawer by bill type (descending)
    cid.sort(function(a,b) {
      if (cashValues[a[0]] > cashValues[b[0]]) {return -1;}
      else {return 1;}
    });
    
    
    // find largest bill type in the returned change
    var maxBillVal = 0.01;
    //position of largest bill in the helper array
    var startIndex;
    
    searchValues.forEach(function(value, index) {
      if (value > maxBillVal && value <= change) {
        maxBillVal = value;
        startIndex = index;
      }
    });
    
    //initialize array for returned change
    var changeInBills = [];
    var remainingChange = change;
    var val;
    var name;
    var k = -1;
    for (var i = startIndex; i < searchValues.length; i++) {
      //as long as the amount of change remaining is bigger than the current bill/coin type
      // get bill value and name;
      val = searchValues[i];
      name = reverseValues[val];
      
      //if change to give is larger than the bill type, take a bill/coin out of the drawer
      if(remainingChange >= val) {
      changeInBills.push([name,0]); 
      k++;}
      
      //take bills out of the same drawer until the value to be returned is smaller than the bill type value
      while (remainingChange >= val && cid[i][1] > 0) {
        remainingChange -= val;
        
        remainingChange = remainingChange.toPrecision(4);
       
        cid[i][1] -= val;
        cid[i][1] = cid[i][1].toPrecision(2);
        
        changeInBills[k][1] += val; 
    
        
        
        if(remainingChange == 0) {return changeInBills;}
        
      }
      
      if(remainingChange == 0) {return changeInBills;}
    }

  }    
    
    
}

//////////////////////////////////////
/////INVENTORY UPDATE////////////////

function findIndex (item, arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][1] == item) {return i;}
        
      }
    return -1;
    }

function inventory(arr1, arr2) {
    
   arr1.forEach(function(inventoryPair) {
       var item = inventoryPair[1];
       var val = inventoryPair[0];
       var foundIndex = findIndex(item, arr2);
     
      if (foundIndex != -1) {
        console.log(arr2[foundIndex]);
        arr2[foundIndex][0]  += val;
      }  
     else {
       arr2.push(inventoryPair);
     }
   });
  
  //sort results
  arr2.sort(function(a,b) {
    if (a[1] > b[1]) { return 1;}
    else if (a[1] === b[1]) {return 0;}
    else {return -1;}
  });
 
  return arr2;
}