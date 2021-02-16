//functiopns are variables
// pass a varibale as a parameter to a function
// pass a function as a parameter to a function
function myfun(param){
    console.log(param);
    console.log(param());
}

// myfun(10);
// myfun("23e2fefee");
// myfun(true);
// myfun([1,2,3,4,5,5]);
myfun(function smallerfn() {
    let a = 10;
    a++;
    console.log("i m a function passed to my fun");
    return a;
})