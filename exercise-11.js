function shoppingTime(memberId, money) {
    // you can only write your code here!
    const barang=[
        {
            name:'Sepatu Stacattu',
            price:1500000
        },
        {
            name:'Baju Zoro',
            price:500000
        },
        {
            name:'Baju H & N',
            price:250000
        },
        {
            name:'Sweater Uniklooh',
            price:175000
        },
        {
            name:'Casing Handphone',
            price:50000
        }
    ];
    
    if(!memberId)
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    else{
        var listPurchased=[];
        var prevMoney=money;
        var countThing=0;
        for(var i=0;i<barang.length;i++){
            var curr_barang=barang[i];
            if(curr_barang.price <= money){
                listPurchased[countThing++]=curr_barang.name;
                money-=curr_barang.price;
            }
        }
        if(listPurchased.length===0)
            return 'Mohon maaf, uang tidak cukup';
        else
            return {
                memberId:memberId,
                money:prevMoney,
                listPurchased:listPurchased,
                changeMoney:money
            };
    }
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja