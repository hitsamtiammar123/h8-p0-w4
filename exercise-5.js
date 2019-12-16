function ubahHuruf(kata) {
    // you can only write your code here!
    var new_str='';
    for(var i=0;i<kata.length;i++){
        var charCode=kata.charCodeAt(i);
        var newCharCode=charCode+1;
        var newChar=String.fromCharCode(newCharCode);
        new_str+=newChar;
    }
    return new_str;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu