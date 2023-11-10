var input = document.getElementById("enterednumber");

var result = document.getElementById("result");

var score = document.getElementById("score");

var random = Math.floor(Math.random()*10)+1;

var totalscore =10;


function check(){

    var enterednum = parseInt(input.value)

    if ( enterednum === input ) {
     
        console.log("right");

        result.textContent=  "right";

        result.style.color="green"

        alert("correct")


    }

    else{


        console.log("wrong");

        result.textContent= "wrong";

        totalscore--;
        result.style.color="red";
        score.textContent = "score:" + totalscore;
        alert("wrong");


    }


}