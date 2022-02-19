$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing-2", {
        strings: ["Full Stack Developer", "Programmer", "Music Lover", "Piano Player"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});

var quotes = [
    'It\'s all about People, Place, Money and Love of your choice!',
    'You are what you feed your mind!',
    'There is nothing either good or bad but your thinking makes it so!',
    'Your actions are the results of your thoughts & your thoughts are the results of the information you feed your mind with!',
    'Bless yourself with peace, positivity & purity!',
    'You have the power to make your problem aggravate or diminish with the help of the thoughts you create in your mind associated with your problems.',
    'It\'s not an end, there is always yet more to come!',
    'अनुशासन के बिना कोई शासन नहीं कर सकता ।',
    'Self help is the best help!',

    ]
    
function newQuote() {
    var randomNo = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomNo];
}

    

