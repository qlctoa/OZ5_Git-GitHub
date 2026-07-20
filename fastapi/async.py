import asyncio
import time

async def async_a():
    print("A 시작")
    await asyncio.sleep(2)
    print("끝")

async def async_b():
    print("B 시작")
    await asyncio.sleep(2)
    print("끝")

async def main():
    c1=async_a()
    c2=async_b()
    await asyncio.gather(c1, c2)

start = time.time()
asyncio.run(main())
end = time.time()
print(f'실행 시간: {end - start:.2f}초')

'''터미널 파이썬 실행
~/desktop/OZ5_git/fastapi | main ?4  python async.py                                    1 err | fastapi py | 11:19:50 
A 시작
B 시작
끝
끝
실행 시간: 2.00초'''