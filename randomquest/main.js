const quotes= [
    {quote:"Many of life’s failures are people who did not realize how close they were to success when they gave up",
    author: "Thomas A. Edison"},
    {quote:"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking",
    author: "Steve Jobs"},
    {quote:"The whole secret of a successful life is to find out what is one’s destiny to do, and then do it",
    author: "Henry Ford"},
    {quote:"Turn your wounds into wisdom",
    author: "Oprah Winfrey"},
    {quote:"The two most important days in your life are the day you are born and the day you find out why",
    author: "Mark Twain"},
    {quote:"When proven wrong, the wise man will correct himself and the ignorant will keep arguing.",
    author: "Ali ibn Abi Talib"},
    {quote:"As long as you are performing prayer, you are knocking at the door of Allah, and whoever is knocking at the door of Allah, Allah will open it for him.",
    author: "Ibn Qayyim Al-Jawziyya"},
    {quote:"Sabr is not remaining quiet and allowing anger to build up inside you. Sabr is to talk about what's bothering you without losing control of your emotions.",
    author: "Nouman Ali Khan"},
    {quote:"To be alone means that you avoid bad company. But to have a true friend is better than being alone.",
    author: "Umar"},
    {quote:"Don’t depend too much on anyone in this world because even your own shadow leaves you when you are in darkness.",
    author: "Ibn Taymiyyah"},
];

const btn = document.querySelector('.generate');
btn.addEventListener('click', ()=>{
    let random= Math.floor(Math.random()*quotes.length);
    // console.log(random);

    document.querySelector('.quote').innerHTML= quotes[random].quote;
    document.querySelector(".author").innerHTML= quotes[random].author;
});
