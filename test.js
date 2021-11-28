// ......................problem no:01.....................................//
// ...........convert seer to mon function...............................//
function seerToMon(seer) {
    const mon = seer / 40;
    //....................... return function...............................//
    if (mon >= 0) { return mon; }
    else { return 'please input non-negative number'; }
}
//....................... call function...............................//
seerToMon(500);
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
// ......................problem no:03.....................................//
// ...............function of total delivery Cost ......................//
function deliveryCost(delivery) {
    //.................... input data type condition.........................//
    if (delivery < 0 || delivery != parseInt(delivery)) {
        return 'please input positive integer number';
    }
    //.................... delivery charges........................//
    const first100Charge = 100;
    const above100Charge = 80;
    const above200Charge = 50;
    //.................... delivery between 1 to 100.........................//
    if (delivery <= 100) {
        const totalFirst100Cost = delivery * first100Charge;
        return totalFirst100Cost;
    }
    //....................... above 100 delivery.............................//
    else if (delivery <= 200) {
        const first100Cost = 100 * first100Charge;
        const second100Cost = (delivery - 100) * above100Charge;
        const totalSecond100Cost = first100Cost + second100Cost;
        return totalSecond100Cost;
    }
    //....................... above 200 delivery.............................//
    else {
        const first100Cost = 100 * first100Charge;
        const second100Cost = 100 * above100Charge;
        const third100Cost = (delivery - 200) * above200Charge;
        const totalThird100Cost = first100Cost + second100Cost + third100Cost;
        return totalThird100Cost;
    }
}
//.............................. call function.............................//
deliveryCost(101);
// ......................problem no:04.....................................//
//....... function of first perfect Friend's name of five characters.......................//
function perfectFriend(friends) {
    // ..............array of perfect friends.......................................//
    const perfectFive = [];
    for (const friend of friends) {
        if (friend.length == 5) {
            perfectFive.push(friend);
        }
    }
    // ..................return first 1st friend from perfect array.................//
    return perfectFive[0];
}
//..................... call function..............................................//
const totalfriend = ['kalamul', 'salamul', 'rahim', 'jabirs', 'sakib'];
perfectFriend(totalfriend);