from fastapi import FastAPI

#인스턴스(객채) 생성
app = FastAPI()

# python decorator : 실행 전 후로 기능을 감싸주는 디자인 패턴 > 함수를 꾸며주는 기능
# @pretty_print #
# def hello():
# ...


# 1) Action(행위) -> HTTP Method (GET, POST, PUT/PATCH, DELETE)
# 2) Resourse(대상) -> URL(Unifirm Resource Lactor)
# HTTP Method + URL(Resource)
# 어떤 메소드로, 어떤 경로에 요청할지
@app.get("/hello") # 데코레이터 # 서버에 get메세지로 hello가 들어오면 아래 함수 실행 
def hello():
    return {"msg" : "hello"}
# http://127.0.0.1:8000/hello 해도 호출 됨
'''
# # [실습 1] GET 요청으로 /hi 로 GET 요청했을 때 "hi"가 출력되게끔
# @app.get("/hi")
# def hi():
#     return "hi"

# #[실습 2] GET 요청으로 /hi/world 로 GET 요청했을 때 "hi, world"가 출력되게끔
# @app.get("/hi/world")
# def hi():
#     return "hi, world"

# #[실습 3] GET /users/10 요청했을 때 {"id": 10, "name":"david"} 응답
# @app.get("/users/10")
# def users():
#     return {"id": 10, "name": "david"}

# id를 일일히 관리 할 수 없음 
# @app.get("/users/9")
# def users():
#     return {"id": 9, "name": "chris"}
# 그러므로 변수로 받아서 사용함

@app.get("/users/{user_id}")
def get_users(user_id):
    return {"user_id": user_id}
# http://127.0.0.1:8000/users/1000 입력 시 {"user_id":"1000"} 출력
# http://127.0.0.1:8000/users/alex 입력 시 {"user_id":"alex"} 출력
# http://127.0.0.1:8000/users/-1 입력 시 {"user_id":"-1"} 출력
# 문자열로 출력됨

'''
'''
# 숫자로 출력 :
@app.get("/users/{user_id}")
                    # 타입 힌트
def get_users(user_id: int):
    return {"user_id": user_id}
#int가 아닌 경우 error
# 상태코드로 구분함(개발자 도구 network에 200:성공, 4xx번대: 실패)

@app.get("/users/search")
def search_user():
    return "ok"
int parsing erro 남 -> 동적 api 정의를 고정 api 정의 보다 아래에 둬야함
'''


@app.get("/users/search")
def search_user():
    return "ok"

@app.get("/users/{user_id}")
                    # 타입 힌트
def get_users(user_id: int):
    return {"user_id": user_id}