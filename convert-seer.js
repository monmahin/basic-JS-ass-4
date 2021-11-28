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


