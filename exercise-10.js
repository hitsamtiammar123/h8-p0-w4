function changeMe(arr) {
    // you can only write your code here!
    
    for(var i=0;i<arr.length;i++){
        var obj={};
        var curr=arr[i];
        obj.firstName=curr[0];
        obj.lastName=curr[1];
        obj.gender=curr[2];
        obj.age=curr[3]?new Date().getFullYear()-curr[3]:'Invalid Birth Date';

        var name=obj.firstName+' '+obj.lastName;
        console.log((i+1)+'. '+name);
        console.log(obj);
    }

  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""