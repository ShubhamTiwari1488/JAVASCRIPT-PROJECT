let num = 0;

let string_message = "Hello Shubham";

console.log("Hello Everyone");

function randomNumber()
{
   num = Math.ceil(Math.random()*10);

   document.getElementById("number-el").innerText = num;

   if(num !== 5)
     document.getElementById("message-el").textContent = "Ohh !! Try Again";

    else
        document.getElementById("message-el").textContent = "Great Job!!!"

   
}


