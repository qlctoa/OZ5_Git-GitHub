GitHub / 원격저장소 : Git 저장소를 인터넷에 올려두는 서비스
- GitHUB에서 Repository를 만들면 원격저장소 URL이 생기고, 로컬 저장소와 연결할 수 있음.
- 원격 저장소는 코드 공유, 백업, 협업의 기준점 역할

## code 
git remote add origin 원격 주소 : 원격 주소로 저장소 연결
git remote -v : 저장소 확인
git remote set-url origin : 저장소 주소 변경
------


원격 저장소 동기화
## code
git push -u origin main : 로컬 커밋을 git hub에 올림
git pull : gitbub의 변경사항을 로컬로 가져옴