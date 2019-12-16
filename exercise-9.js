function checkAB(str) {
    // you can only write your code here!
    var indexA=str.lastIndexOf('a');
    var indexB=str.lastIndexOf('b');
    if(indexA===-1 || indexB===-1)
        return false;
    else
        return Math.abs(indexA-indexB)>4?false:true;
    
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false