var Card = require('./Card');
var data = [];

for (let index = 0; index < 1000; index++) {
    var newCard = new Card("Card no " + (index + 1), (Math.round(Math.random()*500) + 1), "https://picsum.photos/id/"+(Math.round(Math.random()*500) + 1)+"/200/300");
    data.push(newCard); 
}

module.exports = data;