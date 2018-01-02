$(document).ready(function() {
      $("#Shoot").click(function() {
           var choices =["rock", "paper", "scissors"];
           var RPS = Math.floor(Math.random()*3);
           console.log(choices[RPS]);
           var Crandom = choices[RPS];
            $("#CMP").html(Crandom);
            
         var red= $("input").val();
        $("#UC").html(red);
        if (red === "paper"  ||red === "scissors"  ||red === "rock" )
       {
        if(red === Crandom){
              $("#W").html("no one wins");
        }
         if(red === "paper" && Crandom === "rock"){
              $("#W").html("User Wins");
        }
         if(red === "rock" && Crandom === "paper"){
              $("#W").html("Computer Wins");
        }
         if(red === "rock" && Crandom === "scissors"){
              $("#W").html("User Wins");
        }
        if(red === "scissors" && Crandom === "rock"){
              $("#W").html("Computer Wins");
        }
        if(red === "paper" && Crandom === "rock"){
              $("#W").html("User Wins");
        }
        if(red === "rock" && Crandom === "paper"){
              $("#W").html("Computer Wins");
        }
        if(red === "paper" && Crandom === "scissors"){
              $("#W").html("Computer Wins");
        }
        if(red === "scissors" && Crandom === "paper"){
              $("#W").html("User Wins");
        }
       }
       else{
           $("#W").html("?????");
       }       
      });
      
});
