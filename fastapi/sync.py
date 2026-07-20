import time
def sync_a():
    print("A 시작")
    time.sleep(2)
    print("끝")

def sync_b():
    print("B 시작")
    time.sleep(2)
    print("끝")

start = time.time()
sync_a()
sync_b()
end = time.time()
print(f'실행 시간: {end - start:.2f}초')

''' 터미널 파이썬 실행
~/desktop/OZ5_git/fastapi | main ?3  python async.py                             ok | 29m 38s | fastapi py | 11:18:02 
A 시작
끝
B 시작
끝
실행 시간: 4.01초

'''