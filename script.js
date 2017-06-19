$(document).ready(function() {

  
  //When each color is selected its corasponding sound and flash is activated
  $( "#g" ).on( "click", function() {
  	var square = $("#g").css('opacity', '0.3');
    var greenSound = document.getElementById("blueSound");
greenSound.play(); 
	window.setTimeout(function(){
			square.css('opacity', '1.0');
		}, 100);
  });
   $( "#r" ).on( "click", function() {
  	var square = $("#r").css('opacity', '0.3');
    var redSound = document.getElementById("redSound");
redSound.play();
  
	window.setTimeout(function(){
			square.css('opacity', '1.0');
		}, 100);
  });
   $( "#b" ).on( "click", function() {
  	var square = $("#b").css('opacity', '0.3');
    var greenSound = document.getElementById("blueSound");
greenSound.play(); 
	window.setTimeout(function(){
			square.css('opacity', '1.0');
		}, 100);
  });
   $( "#y" ).on( "click", function() {
  	var square = $("#y").css('opacity', '0.3');
    var yellowSound = document.getElementById("yellowSound");
yellowSound.play();
	window.setTimeout(function(){
			square.css('opacity', '1.0');
		}, 100);
  });
  
  //declair all variables
  
var colArr = [];
  var myArr = [];
  var setArr = [];
  var round = 0;
  var stMode = false;
   var yourTurn = false;
  
  
  //if yourTurn is true then the colors you click on are pushed into myArr. When the computer array is the length of myArr the function runds
     $('#score').html(round);
    $( "#g" ).on( "click", function() {
      if(yourTurn === true){
        myArr.push('g');
        if (myArr.length === colArr.length){
          
        return checkIt()
      } 
      //return youPick()
      }else{
        console.log('not turn')
      }
    });
  $( "#b" ).on( "click", function() {
      if(yourTurn === true){
        myArr.push('b');
      if (myArr.length === colArr.length){
        return checkIt()
      } 
      }else{
        console.log('not turn');
      }
   });
  $( "#r" ).on( "click", function() {
      if(yourTurn === true){
        myArr.push('r');
      if (myArr.length === colArr.length){
        return checkIt()
      } 
      }else{
        console.log('not turn')
      }
   });
  $( "#y" ).on( "click", function() {
      if(yourTurn === true){
        myArr.push('y');
      if (myArr.length === colArr.length){
        return checkIt()
      } 
      }else{
        console.log('not turn')
      }
   });

 //Strict mode button
  $( "#strict" ).on( "click", function() {
    if($( "#strict" ).hasClass( "beforeStrict" )){
     stMode = true;
    $( "#strict" ).removeClass( "beforeStrict" )
      $( "#strict" ).addClass( "afterStrict" );
  }else{
        stMode = false;
    $( "#strict" ).removeClass( "afterStrict" )
      $( "#strict" ).addClass( "beforeStrict" );            
                    }
    
});
   //Start game button
  $( "#start" ).on( "click", function() {
     
   return goGame()
});
  //Reset game button, ends game and clears variables
 $( "#resetButton" ).on( "click", function() {
    myArr = [];
    colArr = [];
        setArr = [];
        yourTurn = false;
   round = 0;
    $('#resetButton').html(round);
}); 
 
  
function goGame(){
  
  //Random number chooses each color for the computer.
  
  var picks = Math.floor(Math.random() * 4) + 1; 
  //console.log(picks)
  
 if (picks === 1){
   colArr.push('b');
 } else if (picks === 2){
        colArr.push('g');
    }else if (picks === 3){
        colArr.push('y');
    } else if (picks === 4){
        colArr.push('r');
    }
 // console.log(colArr.length+' '+colArr);
  display(colArr);
}
  
  //every 500m/s each element in the color array with run showing the player their pattern to follow
 function display (arr) {
		var i = 0;
		var interval = setInterval(function(){
			flash(colArr[i]);
			i++;
			if (i>= colArr.length) {
				clearInterval(interval);
			}
		}, 500);
   
   yourTurn = true;
   console.log(yourTurn)
	} 
  //the function that flasher the color and plays the sound that cooralates with each color
   function flash (squareID) {
     if(squareID === 'g'){
       window.setTimeout(function(){
			var wrongSound = document.getElementById("greenSound");
wrongSound.play();
		}, 100);
      
        } else if(squareID === 'b'){
                 var greenSound = document.getElementById("blueSound");
greenSound.play(); 
                  } else if(squareID === 'y'){
          var yellowSound = document.getElementById("yellowSound");
yellowSound.play(); 
        } else if(squareID === 'r'){
                  var redSound = document.getElementById("redSound");
redSound.play();
                  }
		var square = $("#"+squareID).css('opacity', '0.3');
    
	window.setTimeout(function(){
			square.css('opacity', '1.0');
		}, 100);
   // return youPick();
	}
  
  function youPick(){
   if (myArr.length === colArr.length){
       
        checkIt();
      } else {
        console.log(myArr.length);
      }

  }
 //Check if the array the player choose is the same as the array chosen by the computee.
  function checkIt(){
    
  for (var i = 0; i< myArr.length; i++){
    
    if(myArr[i] !== colArr[i]){
      
       setArr.push(myArr[i])
    }
    }
    console.log(myArr);
    if(stMode === true){
       if(setArr.length > 0){
         myArr = [];
    colArr = [];
        setArr = [];
        yourTurn = false;
        round = 0;
    $('#score').html(round);
          
         } else{
           yourTurn = false;
    myArr = [];
    setArr = [];
           round += 1;
           $('#score').html('');
    $('#score').html(round);
          return goGame();
         }
    } else {
       if(setArr.length > 0){
         myArr = [];
    
        setArr = [];
        //yourTurn = false;
       return display(colArr);
         } else{
           yourTurn = false;
    myArr = [];
    setArr = [];
           round += 1;
         
    $('#score').html(round);
          return goGame();
         }
    }
    
     
      
  
    
}
    
});
