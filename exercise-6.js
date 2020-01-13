function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var minDig;
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
            }
            c1++;
        }

        minDig=list[0][0].toString().length+list[0][1].toString().length;
        for(var i=1;i<list.length;i++){
            var l=list[i];
            var temp1=l[0].toString();
            var temp2=l[1].toString();
            if(temp1.length+temp2.length<minDig)
                minDig=temp1.length+temp2.length;
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