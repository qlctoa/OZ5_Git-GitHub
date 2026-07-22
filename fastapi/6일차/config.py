from pydantic_settings import BaseSettings, SettingsConfigDict


# 설정값의 형식 정의
class Setttings(BaseSettings):
    openai_api_key: str
    
    model_config = SettingsConfigDict(
        env_file = ".env" # .env 파일에서 값 읽기
    )



settings = Setttings()
