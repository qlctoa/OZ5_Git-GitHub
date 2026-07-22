from fastapi import FastAPI

app= FastAPI()

@app.get("/hello")
def hello_handler():
    return {"msg": "hello"}

@app.get("/hi")
def hello_handler():
    return {"msg": "hi"}