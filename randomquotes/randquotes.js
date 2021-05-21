var quotes=[
    {quote: "Indonesia merdeka bukan tujuan akhir kita. Indonesia merdeka hanya syarat untuk bisa mencapai kebahagiaan dan kemakmuran rakyat",
    author:"--Bung Hatta--"},
    {quote: "Biarlah pengalaman masa lalu kita menjadi tonggak petunjuk, dan bukan tonggak yang membelenggu kita",
    author:"--Bung Hatta--"},
    {quote: "Berapapun cepatnya kebohongan itu, namun kebenaran akan mengejarnya juga",
    author:"--Tan Malaka--"},
    {quote: "Penjagaan terbaik bagi generasi muda adalah contoh yang baik bagi generasi tua",
    author:"--Cut Nyak Dhien--"}
];
var quoteText=  document.querySelector("#quoteText");
var author= document.querySelector("#author");

window.onload = generateQuote();

function generateQuote(){
    var random= Math.floor(Math.random() * quotes.length);
    quoteText.innerHTML= quotes[random].quote;
    author.innerHTML= quotes[random].author;
}
