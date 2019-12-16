function cariModus(arr) {
    // you can only write your code here!
    var set_arr=Array.from(new Set(arr));
    if(set_arr.length===1 || set_arr.length===arr.length )
        return -1;
    else{
       var curr_modus=0;
       var modus_index=0;
       for(var i=0;i<set_arr.length;i++){
           var c=set_arr[i];
           var counter=0;
           for(var j=0;j<arr.length;j++){
               var c2=arr[j];
               if(c===c2)
                    counter++;
           }
           if(counter>curr_modus){
                curr_modus=counter;
                modus_index=i;
           }
          
       }
      return set_arr[modus_index];
    }
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5,5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1