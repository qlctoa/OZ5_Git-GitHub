//할일을 입력하고 추가버튼을 누르면, 할일 목록에 입력한 할일 추가되어야함

const todoInput = document.querySelector("#todo-input")
const addbtn = document.querySelector("#add-btn")
const todoList = document.querySelector("#todo-list")

let todos=[];
//이미 저장된 todos가 있는지 확인 
const savedTodos = JSON.parse(localStorage.getItem("todos"))

if (savedTodos) {
    todos = savedTodos
    renderTodos()
}


// 삭제함수

function deleteTodo(index){
    todos.splice(index, 1)
    renderTodos()
}

//최신 todo데이터를 로컬 스토리지에 저장
function saveTodos(){
    localStorage.setItem("todos",JSON.stringify(todos))
}

//최신 todo 데이터를 화면에 렌더링
function renderTodos(todo){
    for(const [index, todo] of todos.entries()){
    const li = document.createElement("li")
    li.className = "list-group-item d-flex justify-content-between align-items-center"
    li.textContent = todo
    todoList.appendChild(li)

    const btn = document.createElement("button")
    btn.className = "btn btn-sm btn-danger"
    btn.textContent = "삭제"

    btn.addEventListener("click",()=>deleteTodo(index))

    li.appendChild(btn)

    todoList.appendChild(li)
}}

function addTodo(){
    const todo = todoInput.value.trim()
    if (todo === "") {
        alert("할 일을 입력하세요.")
        return
    }
    
    todos.push(todo)
    renderTodos()

    //로컬 스토리지에 저장/수정
    saveTodos()
}

//할일 추가
addbtn.addEventListener("click", addTodo)
todoInput.addEventListener("keydown", (event) => {
    if (event.isComposing) {
        return
    }

    if (event.key === "Enter") {
        addTodo()
    }
})

todoInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        AudioDestinationNode()
    }
})