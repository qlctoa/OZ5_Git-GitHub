// Time API

// 1) setTimeout : 일정 시간 지난 뒤에 특정 함수를 한번 호출하는 기능

// setTimeout(
//     () => console.log("3초 경과"),
//     3 * 1000 // 3000ms = 3s
// )
// setTimeout(
//     () => console.log("3초 경과"),
//     3000 // 3000ms = 3s
// )

// 2) setInterval : 일정한 시간마다 특정함수를 반복 실행하는 기능   ctrl+c로 중지
let counter = 1
const timerId = setInterval (
    ()=> {

        if (counter > 3) {
            clearInterval(timerId)
        }
        console.log("2초 경과")
        counter++

    },
    2000
)