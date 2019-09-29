class Card {
    
    constructor(title, number, image){
        var num = parseInt(Math.random()*1000);
        this.title = title;
        this.number = number;
        this.image = "https://via.placeholder.com/1200/FFFF00/000000?text="+num;
    }
}

module.exports = Card;