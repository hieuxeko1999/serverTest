class Card {
    
    constructor(title, number, image){

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '';
            for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
          }
        var num = parseInt(Math.random()*1000);
        this.title = title;
        this.number = number;
        // this.image = "https://via.placeholder.com/1200/"+getRandomColor()+"/000000?text="+num;
        this.image = image;
    }
}

module.exports = Card;