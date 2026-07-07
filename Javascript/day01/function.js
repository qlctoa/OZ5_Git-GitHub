/*[함수 function]
1) 입력 -> 처리 -> 출력 구조
2) 코드를 묶어서 이름을 붙이고, 재사용

[특징]
1) 호출 -> 실행
2) 모든 함수는 반드시 return 한다.
    - return문이 없으면 기본값을 반환(py-None, js-undefined)
3) Return의 기능 
    - 결과값을 호출한 곳으로 반환
    - 함수 종료
4) 호출할 때, 적당한 값을 넘겨야함. 

*/
function add(n1, n2){
    /*let result = n1+n2
    return result*/
    return n1 + n2
}


//함수 호출
console.log(add(10,5));
