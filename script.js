let input = document.getElementById('inputBox'); /*Access through an ID*/
let buttons = document.querySelectorAll('button') /*This will give me my all buttons here , ('button') is a variable*/
let string = ""; /*shows our result*/

/*buttons array*/
let arr = Array.from(buttons); /*this will make the array of buttons , the name which i assigned is "arr"*/
/*On this array i'll apply a loop, I'm taking foreach loop, because our foreach loop will apply on array not buttons*/
arr.forEach(button =>{
    
    button.addEventListener('click', (e) =>{ /*when someone click on this button what will happen*/
      if(e.target.innerHTML == '=' ){ /*is that button click? if yes so is that a key or a equal button,if its equal button so */
        string = eval(string); /*evaluate(in build function of JS) is the function in JAVASCRIPT, any method or operator in the string, it'll evaluate that and give the result */
        input.value = string; /*the string will go in the value , and it'll show the results in above, in input tab*/
    } 
    /*To properly correct the equal buttons functionality*/    
      else if(e.target.innerHTML == 'AC') /*if i click on AC button then wahat will happen*/{
        string = ""; /*string will empty, nothing will show in input tab*/
        input.value = string;
      }
      else if(e.target.innerHTML == 'DEL')/*to click on DEL button what will happen*/{
        string = string.substring(0,string.length-1);/*the remove last digit, suppose if the length is 4, so 4-1 is 3*/
        input.value = string;
      }
      
      
      else{
          /*else this is not equal button so, */
    string += e.target.innerHTML; /*if you press any digit it will add on like 76534..*/
    input.value = string; /*this result will move in result and show the input at the top in input tab*/
      }

    })

})

