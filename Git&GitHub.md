GitHub / 원격저장소 : Git 저장소를 인터넷에 올려두는 서비스
- GitHUB에서 Repository를 만들면 원격저장소 URL이 생기고, 로컬 저장소와 연결할 수 있음.
- 원격 저장소는 코드 공유, 백업, 협업의 기준점 역할

**code**
- git remote add origin 원격 주소 : 원격 주소로 저장소 연결
- git remote -v : 저장소 확인
- git remote set-url origin : 저장소 주소 변경
------

원격 저장소 동기화

**code**
- git push -u origin main : 로컬 커밋을 git hub에 올림
- git pull : gitbub의 변경사항을 로컬로 가져옴

---
Clone : 원격 저장소를 내 컴퓨터로 복사 (push권한 있을 때)
Fork : 다른 사람의 저장소를 내 GitHUB 계정으로 복사
- 오픈 소스 (push 권한 없을 때)

Pull Request(PR) : 내가 변경한 내용을 원본 저장소에 반영 요청
 - 변경 내용 설명, 리뷰 요청, 병합 전 검증단계

Code Review : 코드를 main 브랜치에 병합하기 전에 확인하는 과정
 - 버그 예방, 코드 품질 유지, 팀 규칙 공유

Issue: 할 일, 버그 리포트, 기능 요청 등 관리. PR과 연결해 작업 흐름 관리

---
**Fork 기반 협업 흐름**
1. Issue 생성
2. 내 GitHub 계정으로 Fork
3. 내 Fork 저장소르 Clone ; git clone 내_포크_저장소_URL 
4. 원본 저장소를 upstream으로 연결 ; git remote add upstream 원본_저장소_URL
5. 최신 코드 받기 ; git pull upstream main
6. 새 브랜치 생성 ; git switch -c feature/add-my-name

---
**Collaborator 방식 협업**
: 저장소에 collaborator로 등록된 사람이 직접 원본 저장소를 clone 하고 새 브랜치를 만든 뒤 push하여 PR 생성
1. Repository collaborator 등록
2. Branch protection rules 추가 ; Require a pull request before merging
3. Clone으로 코드 가져오기 ; git clone 원본_저장소_URL
4. 새로운 브랜치 생성 & 커밋 ; git switch -c feature/mybranch & git commit -m “message”
5. 원격 브랜치에 push ; git push origin feature/mybranch
6. Pull Request 생성 ; GitHub에서 feature/mybranch → main PR 생성

---
**자주 사용하는 git 명령어 **
- git show: 특정 커밋 하나를 자세하게 확인할 때
- got diff; 두 상태 사이의 차이를 비교
- git blame: 파일 각 줄을 누가, 언제, 어떤 커밋을 수정했는지 확인
- git stach: 현재 작업중인 변경사항을 임시 저장
- git reset: 브랜치 기준을 과거 커밋으로 이동
- git revert: 특정 커밋을 취소하는 새 커밋 생성
- git commit --amend: 마지막 커밋 수정