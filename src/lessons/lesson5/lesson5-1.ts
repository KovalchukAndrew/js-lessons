import React from "react";

console.log('Lesson 5');
// type TTest = {
//     name:string;
//     age: number;
// }
//
// function Test(this: TTest, name:string, age: number) {
//     this.name = name;
//     this.age = age;
// }
//
// let obj = new (Test as any)('Evgen', 33);


// console.log(this);


// function f() {
//     console.log('This in function declaration ', this);
// }
//
// f();


// let obj = {name: 'Evgen'};
//
// function f() {
//     console.log('This in function declaration ', this);
// }
//
// obj.f = f;
// obj.f()


// let obj = {name: 'Evgen'};
// let obj2 = {name: 'Hanna'};
//
// function f() {
//     console.log('This in function declaration ', this);
// }
//
// obj.f = f;
// obj.f();
// obj2.f = obj.f;
// obj2.f();
// f();


// let obj = {
//     name: 'Evgen',
//     f() {
//         function test() {
//             console.log('This in function declaration ', this);
//         }
//         test();
//     },
// };
// let obj2 = {name: 'Hanna'};
//
// obj.f();

// let obj = {
//     name: 'Evgen',
//     f() {
//         function test() {
//             console.log('This in function declaration ', this);
//         }
//         return test;
//     },
// };
// let obj2 = {name: 'Hanna'};
//
// obj2.f = obj.f();
// obj2.f();


// let obj = {
//     name: 'Evgen',
//     f() {
//         function test() {
//             console.log('This in function declaration ', this);
//         }
//         return test;
//     },
// };
// let obj2 = {name: 'Hanna'};
//
// let f = obj.f();
// f();

// let obj = {
//     name: 'Evgen',
// };
// let obj2 = {name: 'Hanna'};
//
// const arrow = () => {
//     console.log('this in arrow ', this);
// };
//
// arrow();

// let obj = {
//     name: 'Evgen',
// };
// let obj2 = {name: 'Hanna'};
//
// const arrow = () => {
//     console.log('this in arrow ', this);
// };
//
// obj.a = arrow;
// obj.a();


// let obj = {
//     name: 'Evgen',
//     a: () => {
//         console.log('this in arrow ', this);
//     },
// };
// let obj2 = {name: 'Hanna'};
//
// obj.a();


// let obj = {
//     name: 'Evgen',
//     a: () => {
//         console.log('this in arrow ', this);
//     },
// };
// let obj2 = {name: 'Hanna'};
//
// obj2.a = obj.a;
// obj2.a();

// let obj = {
//     name: 'Evgen',
//     a: () => {
//         const arrow2 = () => {
//             console.log('this in arrow ', this);
//         }
//         arrow2();
//     },
// };
// let obj2 = {name: 'Hanna'};
//
// obj.a();


// let obj = {
//     name: 'Evgen',
//     a: () => {
//         const arrow2 = () => {
//             console.log('this in arrow ', this);
//         }
//         return arrow2;
//     },
// };
// let obj2 = {name: 'Hanna'};
//
// obj2.a = obj.a();
// obj2.a();


// let obj = {
//     name: 'Evgen',
//     a() {
//         const arrow2 = () => {
//             console.log('this in arrow ', this);
//         }
//         return arrow2;
//     },
// };
// let obj2 = {name: 'Hanna'};
//
// obj2.a = obj.a();
// obj2.a();


// let obj = {
//     name: 'Evgen',
//     a() {
//         const arrow2 = () => {
//             console.log('this in arrow ', this);
//         }
//         return arrow2;
//     },
// };
// let obj2 = {name: 'Hanna'};
//
// const testFunc = obj.a();
// testFunc();

// let obj = {
//     name: 'Evgen',
//     a: () => {
//         function arrow2() {
//             console.log('this in arrow ', this);
//         }
//         return arrow2;
//     },
// };
// let obj2 = {name: 'Hanna'};
//
// const testFunc = obj.a();
// testFunc();


// let obj = {
//     name: 'Evgen',
//     a: () => {
//         function arrow2() {
//             console.log('this in arrow ', this);
//         }
//         return arrow2;
//     },
// };
// let obj2 = {name: 'Hanna'};
//
// obj2.a = obj.a();
// obj2.a();

// let obj = {
//     name: 'Evgen',
//     a: () => {
//         setTimeout(function() {
//             console.log('func ', this);
//         },0);
//         setTimeout(() => {
//             console.log('arrow ', this);
//         },0);
//     },
// };
// let obj2 = {name: 'Hanna'};
//
// obj.a();


// let obj = {
//     name: 'Evgen',
//     a() {
//         setTimeout(function() {
//             console.log('func ', this);
//         },0);
//         setTimeout(() => {
//             console.log('arrow ', this);
//         },0);
//     },
// };
// let obj2 = {name: 'Hanna'};
//
// obj.a();


////// Call, Apply, Bind

/*
let obj = {
    name: 'Evgen',
    sayName(arg: any, arg2: any) {
        //console.log('name - ', this.name, arg, arg2);
        //console.log(arg, arg2);
        return function (arg3: any) {
            //@ts-ignore
            console.log('name - ', this.name, arg, arg2, arg3);
        }
    }
};

let obj2 = { name: 'Vlad' };
let obj3 = {name: 'Hanna'};
*/

//obj.sayName.bind(obj2)();
//let bindedFunc = obj.sayName.bind(obj2, 0, 1, 100500);
//@ts-ignore
//bindedFunc(50);

//obj.sayName.bind(obj2, 0 ).bind(obj3, 50)();

//obj.sayName.call(obj3, 50, 100);
//obj.sayName.apply(obj3, [ 50, 100]);


// obj.sayName.bind(null, 0 ).bind(obj3, 50)();

// obj3.test = obj.sayName.bind(null, 0 );
// //@ts-ignore
// obj3.test(50);

// obj.sayName.bind(obj2, 0 ).call(obj3, 50);

//obj.sayName.call(obj2, 0 ).bind(obj3, 50)();


// let obj = {
//     name: 'Evgen',
//     a() {
//         setTimeout((function() {
//             console.log('func ', this);
//         }).bind(this),0);
//         setTimeout(() => {
//             console.log('arrow ', this);
//         },0);
//     },
// };
// let obj2 = {name: 'Hanna'};
//
// obj.a();