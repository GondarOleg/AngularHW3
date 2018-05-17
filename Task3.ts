
var results = [
    'Ничья',
    'Победа',
    'Проигрыш'
]

let teams:[string, string];
let goals:[number, number];

interface type1 {
    teams;
}

interface type2 {
    goals;
    teams;
}

class Type1 implements type1{
    teams;

    constructor(teams) {
        this.teams = teams;
    }
}

class Type2 implements type2{
    goals;
    teams;

    constructor(goals, teams) {
        this.goals = goals;
        this.teams = teams;
    }
}

let obj1 = new Type1(['t1', 't2']);

let obj2 = new Type2([1,2], ['t1', 't2']);

f(obj1);
f(obj2);



function f(chekObj: Type1 | Type2 ) {
    if(chekObj instanceof  Type1){
        var num1 = Math.random() + Math.random() + Math.random();
        var result = results[Math.floor(Math.random() * results.length)]
        console.log(chekObj.teams[0] + ' ' + result + ' ' + chekObj.teams[1]);
    }else if(chekObj instanceof Type2){
        var num1 = Math.floor(Math.random() * 1);
        var num2 = num1 > 0 ? 0 : 1;
        console.log(chekObj.teams[num1] + ' ' + chekObj.teams[num2] + ' ' + chekObj.goals[num1] + ' ' + chekObj.goals[num2] );
    }
}