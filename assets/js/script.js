let cardNumber = document.getElementById('input_numb');
let  numberForCard = document.getElementById('card_numb');
let cardName = document.getElementById('input_name');
let nameCard = document.getElementById('card_name');
let cardExpiration = document.getElementById('input_expiration');
let expirationCard = document.getElementById('card_expiration');
let cardCrypto = document.getElementById('input_crypto');
let cryptoCard = document.getElementById('card_crypto');
let card = document.getElementById('backcard');





/******************* NumberCard  ****************/



cardNumber.onkeyup = cardNumber.onkeypress = function(){
  numberForCard.innerHTML = cardNumber.value;

  if (cardNumber.value === "") {
      numberForCard.innerHTML = "●●●● &nbsp; ●●●● &nbsp; ●●●● &nbsp; ●●●●";
  }
  

cardNumber.addEventListener('keypress', function () {

  if (cardNumber.value.length === 4 || cardNumber.value.length === 9 || cardNumber.value.length === 14) {

      cardNumber.value = cardNumber.value += ' ';
  }
  
});
}


/********* CardName **********/


cardName.onkeyup = cardName.onkeypress = function(){
nameCard.innerHTML = cardName.value;

  if (cardName.value === "") {
      nameCard.innerHTML = "FULL NAME";
  }

};


/*********** ExpirationCard ***********/


cardExpiration.onkeyup = cardExpiration. onkeypress = function(){
  expirationCard.innerHTML = cardExpiration.value;
  
    if (cardExpiration.value == "") {
      expirationCard.innerHTML = "MM/YY";
    } 
    
    
};

cardExpiration.addEventListener ('keypress',function() {
  if (cardExpiration.value.length === 2){
    cardExpiration.value = cardExpiration.value += '/';
  }
});
        







/*********** CardCryptogramme **************/
        
cardCrypto.onkeyup = cardCrypto.onkeypress= function () {

  cryptoCard.innerHTML= cardCrypto.value ;
}     
if (cardCrypto.value === "") {
  cryptoCard.innerHTML = "CVC";
};
  


/********* FlipCard  *********/



cardCrypto.onfocus = function () {
  card.style.transform = "rotateY(0deg)";
 
};
cardCrypto.onblur = function () {
  card.style.transform = "rotateY(180deg)";
 
};
        
     


