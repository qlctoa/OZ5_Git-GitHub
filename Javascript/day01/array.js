//배열(array) -py list
// 여러 값을 하나로 묶은 자료형 -서로 다른 타입 가능
// 인덱스 배열 안의 값에 접근 가능
// 잘못된 인덱스 선택 시 undefined 에러 아님

let numbers = [10, 20, 30, '40'];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[10]);

console.log(numbers.at(-1));
console.log(numbers.at(-2));

'---------------------'
//배열 순회
for (const n of numbers){
    console.log(n);
}

'---------------------'
//enumerate
for (const [i,n]of numbers.entries()){
    console.log(i, n);
}