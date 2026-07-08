// function sayHello(){
//     console.log('hello');
// }

// //함수 호출
// let result = sayHello
// console.log(result);

function run(fn){
    fn()
}
function sayHello(){
        console.log('hello');

}
run(sayHello)