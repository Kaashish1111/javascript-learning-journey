function sayMyName(){
    console.log("k");
    console.log("a");
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("s");
    console.log("h");
}

sayMyName()

function addition(number1,number2){
    console.log(number1+number2);
}
addition(2,3)
const result =addition(2,3)
console.log(result); // output:undefined, because it is not rerturning the value.

function add(n1,n2){
    let ans=n1+n2
    return ans
}

const answer=add(4,5)
console.log(answer);  // output:9 

function loginUserMessage(userName){
    if(userName===undefined){         // or if(!userName)
        console.log("Please Enter a Username");
        return NaN;
    }
    else{
        return `${userName} just logged in`
    }
}
console.log(loginUserMessage());
console.log(loginUserMessage("Kashish"));

function calculteCartPrice(num1){
    return num1
}