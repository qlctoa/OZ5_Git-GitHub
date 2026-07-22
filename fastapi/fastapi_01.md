fastpai에서 api 구현 방법

1. 함수 정의

2. 함수 호출 조건 데코레이터로 정의
- 클라이언트가 http 요청을 보냈을 때 fastapi가 알아서 함수 호출
```
@app.get("hello") => 함수 호출 조건을 데코레이터로
def hello(): => 함수 구현
    return "hello"
```

3. 특정 경로값이 바귀는 경우, pathparameter로 처리 

    ex) /users/{user_id}

	a)함수에 pathparameter 값을 전달

     ```def get_user(user_id):```

	b) pathparameter 값에 타입 제한 -> type hints

	```def get_user(user_id: int):```

	c) 타입이 잘못 된 경우, 422 에러