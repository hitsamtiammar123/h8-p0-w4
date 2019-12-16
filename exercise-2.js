function fpb(angka1, angka2) {
    // you can only write your code here!
    if(angka1>angka2){
        var temp=angka1;
        angka1=angka2;
        angka2=temp;
    }

    while(angka2 % angka1 !==0){
        var temp=angka2;
        angka2=angka1;
        angka1=temp % angka2; 
    }
    return angka1;
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1