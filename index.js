// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office')    {
   return `This Monday, I will ${activity}.`
}

function wrapAdjective(string = '*') {
    return function(adj='special')   {
        return `You are ${string}${adj}${string}!`
    }
}

let encouragingPromptFunction = wrapAdjective("!!!")

wrapAdjective("%")("a dedicated programmer") //=> "You are %a dedicated programmer%!"

let Calculator = {
    add: function(x, y) {
        return x + y;
    },
    subtract: function (x, y) {
        return x - y;
    },
    multiply: function (x, y)  {
        return x * y;
    },
    divide: function (x, y) {
        return x / y;
    }
}

// function actionApplyer(a, arrayOfTransforms=[]) {
//     if (arrayOfTransforms.length === 0) {
//         return a;
//     }
    
//     else    {
    // (function(int){return int * arrayOfTransforms[0]}),
    // (function(int){return int + arrayOfTransforms[1]}),
    // (function(int){return int % arrayOfTransforms[2]})

    // let n = ((int * arrayOfTransforms[0] + arrayOfTransforms[1]) % arrayOfTransforms[2]); 

    // let message = `${int}, multiplied by ${arrayOfTransforms[0]}, added to ${arrayOfTransforms[1]} and then modulo ${arrayOfTransforms[2]} on the given base (${int}) OR on the result of the use of the previous function to get this result`
        
    // return n, message;
// }

//second attempt - still no good
function actionApplyer(int, actions) {
    if (actions.length === 0) {
        return int;
    }

    else {
        for (let i = 0; i < actions.length; i++) {
            const func = actions[i];

            return func();
        }
    }
}