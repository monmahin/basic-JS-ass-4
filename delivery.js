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

deliveryCost(220);
console.log(deliveryCost(220))


