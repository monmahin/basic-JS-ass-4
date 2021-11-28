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



