// Async

"use strict";



//async functions works like js

console.log(`\n ======= PROMISE FUNCTION ======== \n`);

function resolverFnc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolve'); //third
        }, 2000)
    })
}

function rejectedFnc() {
    return new Promise((resolve, reject) => {
        setTimeout(reject, 1000, 'error');
    })
}


async function asyncCall()
{
    console.log('call'); //first
    const result = await resolverFnc();
    console.log(result);
}

await asyncCall();
console.log('after calling'); //second without 



console.log(`\n ======= PROMISE ALL FUNCTION ======== \n`);

const promise2 = Promise.resolve(3);
const promise3 = Promise.resolve('a');

let res = await Promise.all([resolverFnc(), promise2, promise3]); //works with all correct values, otherwise, it's break
console.log(res);

console.log(`\n ======= PROMISE ALL FUNCTION BREAKS ======== \n`);

await Promise.all([rejectedFnc(), promise2, promise3]).catch(err => console.log(err));



// to get all values if promise rejected, use allSettled

console.log(`\n ======= PROMISE ALLSEATTLED FUNCTION ======== \n`);

res = await Promise.allSettled([rejectedFnc(), promise2, promise3]);
console.log(res.map(el => el.status == 'rejected' ? el.reason : el.value));

// to get only the fulfilled values use any

console.log(`\n ======= PROMISE ANY FUNCTION ======== \n`);

res = await Promise.any([rejectedFnc(), promise2, promise3]);
console.log(res);

console.log(`\n =============== \n`);

//TODO ASYNC HOOKS NODE