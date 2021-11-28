// ......................problem no:02.....................................//

// .....................total sale function............................//

function totalSales(tshirtQty, pantQty, shoeQty) {

    // ..........condition for input valid quantity numbers............//

    if (tshirtQty != parseInt(tshirtQty) || pantQty != parseInt(pantQty) || shoeQty != parseInt(shoeQty)) {
        return 'Please input integer values';
    }
    if (tshirtQty < 0 || pantQty < 0 || shoeQty < 0) {
        return 'Negative values are icorrect';
    }

    //........................each items single prices..............//

    const singleTshirtPrice = 100;
    const singlePantPrice = 200;
    const singleShoePrice = 500;

    // ...................each item prices..........................//

    const totalTshirtPrice = singleTshirtPrice * tshirtQty;
    const totalPantPrice = singlePantPrice * pantQty;
    const totalShoePrice = singleShoePrice * shoeQty;

    //..........................total price........................//

    const totalPrice = totalTshirtPrice + totalPantPrice + totalShoePrice;

    //........................ return totalprice...................//
    return totalPrice;
}

//....................... call function...............................//
totalSales(2, 4, 3);


