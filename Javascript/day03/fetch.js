//GET 요청
fetch("https://jsonplaceholder.typicode.com/posts") // 요청 주소
    .then(response => response.json())  // 응답 메세지에서 json 데이터 추출
    .then(data => console.log(data))    // 콘솔에 입력
    
/* 동기방식일 때
const response = fetch()
const data= response.json()
...*/


//post 요청
fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST", 
    header: {"Content-Type": "application/json"}, // 헤더에 데이터 형식(Content-type) 명시
    body: JSON.stringify({title: "Python", body:"Hello, Python"}) //JSON 분자열로 변환해서 요청 본문에 넣어줌
})
    .then(response => response.json())
    .then(data => console.log(data))

