

    let previousNumbers = [];

    function getRandomQuote() {
        const quotes = [
        "Be the change you wish to see in the world. - hamo beka",
        "In three words I can sum up everything I've learned about life: it goes on. - sasa",
        "The only way to do great work is to love what you do. - albert afshakhtain",
        "Live as if you were to die tomorrow. Learn as if you were to live forever. - 3am mohamed",
        "We must not allow other people's limited perceptions to define us. - mohamed 3amo",
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. - tante om mohamed",
        "If you want to live a happy life, tie it to a goal, not to people or things. - mohamed zat nafso",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - a passer by",
        "Be yourself; everyone else is already taken. - Oscar Wilde",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
        "You only live once, but if you do it right, once is enough. - Mae West",
        "Don't cry because it's over, smile because it happened. - Dr. Seuss",
        "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost"
        ];

      var randomNumber = Math.floor(Math.random() * quotes.length);

        if (previousNumbers.length == quotes.length) {
        previousNumbers = []; 
        }

        while (previousNumbers.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * quotes.length);
        }

        previousNumbers.push(randomNumber);

        return quotes[randomNumber];
    }

    var quoteElement = document.getElementById("quote");

    function generateRandomQuote() {
        var quote = getRandomQuote();
        quoteElement.textContent = quote;
    };



    
    // const quotes = [
    //     "Be yourself; everyone else is already taken. - Oscar Wilde",
    //     "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
    //     "You only live once, but if you do it right, once is enough. - Mae West",
    //     "Don't cry because it's over, smile because it happened. - Dr. Seuss",
    //     "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost"
    //   ];
  
    //   let previousNumbers = [];
    //   let currentQuote = "";
    //   const quoteElement = document.getElementById("quote");
  
    //   function getRandomQuote() {
    //     let randomNumber;
    //     do {
    //       randomNumber = Math.floor(Math.random() * quotes.length);
    //     } while (previousNumbers.includes(randomNumber));
    //     previousNumbers.push(randomNumber);
    //     currentQuote = quotes[randomNumber];
    //     return currentQuote;
    //   }
  
    //   function generateRandomQuote() {
    //     const quote = getRandomQuote();
    //     quoteElement.textContent = quote;
    //   }