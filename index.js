for (let i = 0; i < 10; i++) {
    if (i % 3 === 0) {
        console.log('fizBuz')
        continue;
    }
    if (i % 2 !== 0) {
        console.log('Buz')
        continue;
    }
    if (i % 2 === 0) {
        console.log('fiz')
    }
}


// 2

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
        return answer;
    }else{
        for(let i = n; i >= 1; i--){
            answer = answer * i;
        }
        return answer;
    }
}
let n = 7;
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);


//3

function f() {
    const sheetsInReamPaper = 500;
    const consumptionPerWeek = 1200;
    const weeksAmount = 8;
    const last = (consumptionPerWeek * weeksAmount) % sheetsInReamPaper;
    console.log(last)
}

f()