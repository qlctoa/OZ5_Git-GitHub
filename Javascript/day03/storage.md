Storage API
브라우저가 제공하는 클라이언트 측 저장소
key, value(py-딕셔너리) 형태로 데이터 저장 \ 페이지 



1) local storate
별도 삭제하지 않는 이상 영구적으로 유지함

localStorage.setItem("name", "alex")
->undefined

localStorage.getItem("name")
->'alex'

localStorage.getItem("age")
->null






2) sessionstorage
한 세션에서만 존재함(민감한 데이터)

sessionStorage.setItem("name","bob")
->undefined
sessionStorage.getItem("name")
->'bob'
