const timeInput = document.querySelector("#time-input")
const startbtn = document.querySelector("#start-timer")
const stopbtn = document.querySelector("#stop-timer")
const display = document.querySelector("#timer-display")


//남은 시간
let remainingSeconds = 0 

//현재 동작 중인 타이머 id
let timerId = null;

//남은 시간을 보여주는 함수
function updateDisplay(){
    // 59s => 59/60 = 0.983 ->
    //60s = > 60/601 => 1
    // 61s => 61/60 => 1.0167 -> 1
    //100s => 100/60 = 1.xx -> 1 

    //60으로 나눈 몫
    const min = Math.floor(remainingSeconds / 60)

    //60으로 나눈 나머지 
    const sec = remainingSeconds % 60

    // 한자리수 일때 앞에 0으로 채워줌 : zeropadding
    const timeToDisplay = String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0")

    display.textContent = timeToDisplay
}
//타이머 시작
startbtn.addEventListener("click", ()=>{
    const minute = Number(timeInput.value)
        if (Number.isNaN(minute)|| minute <=0) {
            alert ("올바른 시간(분)을 입력해주세요")
        }
    

    remainingSeconds = minute * 60
    updateDisplay()

    //초 단위 countdown 시작
    timerId = setInterval(
        ()=>{
            remainingSeconds --

            if (remainingSeconds<=0) {
                clearInterval(timerId)
                alert("타이머 종료!")
            }

            updateDisplay()
        },
        1000
    )

})

stopbtn.addEventListener("click", ()=>{
    //타이머 멈추기 
    clearInterval(timerId);
})