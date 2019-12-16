function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var minDig=0;
    var dump=[];
    var c1=1;
    var c2=1;
    var list=[];

    if(angka===1)
        return 2;
    else{
        while(dump.indexOf(c1)===-1){
            if(angka % c1===0){
                c2=angka / c1;
                dump.push(c2);
                list.push([c1,c2]);
                console.log(list);
                if(c2.toString().length===1 && c1.toString().length===1 )
                    minDig++; 
            }
            c1++;
        }
    }

    return minDig;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2