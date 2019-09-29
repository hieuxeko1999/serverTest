var Card = require('./Card');
var data = [];

for (let index = 0; index < 1000; index++) {
    var newCard = new Card("Card no " +index + 1, index + 1);
    data.push(newCard);
}

module.exports = data;