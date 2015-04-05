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
  var searchOrder = [];
  var searchValues = [];
  
  //create searchOrder
  for (var key in cashValues) {
   if (cashValues.hasOwnProperty(key)) {
       
     searchOrder.push(key);
     searchValues.push(cashValues[key]);
       
     }
    }
 

 
  var calculateCID = function(cid) {
    cid.reduce(function(a,b) {
      return a[1]+b[1];
    },0);};
    
  change = cash - price;
  var total = calculateCID(cid);
  console.log(total);
  
  if (change > total) {
    return "Insufficient Funds";
  } else if (change === total) {
    return "Closed";
  } else {
    
    // sord cash-in-drawer
    cid.sort(function(a,b) {
      if (cashValues[a[0]] > cashValues[b[0]]) {return -1;}
      else {return 1;}
    });
    
    
    // find largest bill type in change
    var maxBillVal = 0.01;
    var startIndex;
    
    searchValues.forEach(function(value, index) {
      if (value > maxBillVal && value <= change) {
        maxBillVal = value;
        startIndex = index;
      }
    });
   
    
    
    var changeInBills = [];
    var remainingChange = change;
    var val;
    var name;
    for (var i = startIndex; i < searchValues.length; i++) {
      //as long as the amount of change remaining is bigger than the current bill/coin type
      
      val = searchValues[i];
      name = reverseValues[val];
      
      
      
      changeInBills.push([name,0]);
      while (remainingChange >= val && cid[i][1] >= 0) {
        remainingChange -= val;
        remainingChange = remainingChange.toPrecision(2);
        console.log(remainingChange);
        cid[i][1] -= val;
        cid[i][1] = cid[i][1].toPrecision(2);
        
        changeInBills[i-startIndex][1] += val;
        console.log(changeInBills[i-startIndex]);
        console.log(remainingChange);
        
        
        if(remainingChange == 0) {return changeInBills;}
        
      }
      
      if(remainingChange == 0) {return changeInBills;}
    }

  }    
    
    
}

