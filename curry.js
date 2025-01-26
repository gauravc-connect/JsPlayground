// task1, task2, task3

// function task1(parm1){
//     return function task2(parm2){
//         return function task3(parm3){
//             console.log(`Combined Value ${parm1} :${parm2} : ${parm3}`);
//         }
//     }
// }

//const task1 = (param1) => (param2) => (param3) => console.log(`Combined Value ${param1} :${param2} : ${param3}`);

//task1(101)(202)(303);
// Above is function currying using clouser

// Below is same using bind

function task1(param1, param2, param3){
    console.log(`Combined Value ${param1} :${param2} : ${param3}`);
}

const task2 = task1.bind(null, 101);
const task3 = task2.bind(null, 202);

task3(303);