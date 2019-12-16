function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var newStr='';
    for(var i=0;i<kalimat.length;i++){
        var curr=kalimat[i];
        var charCode=kalimat.charCodeAt(i);

        if(charCode>=65 && charCode<=90)
            curr=String.fromCharCode(charCode+32);
        else if(charCode>=97 && charCode<=122)
            curr=String.fromCharCode(charCode-32);   
        newStr+=curr;
    }

    return newStr;
    
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"