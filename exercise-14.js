function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var result=[];
    const biaya=2000;
    for(var i=0;i<arrPenumpang.length;i++){
        var p=arrPenumpang[i];
        var fromIndex=rute.indexOf(p[1]);
        var toIndex=rute.indexOf(p[2]);

        var o={
            penumpang:p[0],
            naikDari:p[1],
            tujuan:p[2],
            bayar:(Math.abs(toIndex-fromIndex))*biaya
        }
        result.push(o);
    }

    return result;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]