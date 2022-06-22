//get element by its id user defined function
function $(id){
    return document.getElementById(id);
}
//random numbers
let random=Math.ceil(Math.random()*6);
//get the guess button,listen for click event ,call the function
$('btn_guess').addEventListener('click', function(){
    //user input
    const userInput=$ ('user_guess').value;
    //userinfo
    const userInfo=$('hints');
    //validation
    if(isNaN(userInput)|| userInput===''){
        userInfo.innerHTML='enter only number!';
        return;
    }
    if(userInput>=1&&userInput<=6){
        //game logic here
        if(userInput>random){
            userInfo.innerHTML='Gave the user 2 points';
        }
        if(userInput<random-1){
            userInfo.innerHTML='Gave the user 1 points';
        }
        if(userInput<random-0){
            userInfo.innerHTML='Gave the user 0 points';
        }
        if(userInput==random){
            userInfo.innerHTML='Your guess is right.It was '+ random;
        }
        
    }else{
        userInfo.innerHTML='enter number between 1 to 6';

    }
}
);