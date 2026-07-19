from llama_cpp import Llama

llm = Llama(
    model_path = "/Users/bitsaem/Desktop/OZ5_git/fastapi/models/Llama-3.2-1B-Instruct-Q4_K_M.gguf",
    n_ctx=4096,
    n_threads=2,
    verbose=False,
    chat_format="llama-3"
)

user_input = input("질문을 입력해주세요 : ")

response = llm.create_chat_completion(
    messages=[
        {"role":"system", "content":"SYSTEM_PROMPT"},
        {"role":"user","content": user_input},
    ],
    max_tokens=256,
    temperature=0.7, # 답변의 자유도 / 변동성
)

answer = response["choices"][0]["message"]["content"]
print(answer)

SYSTEM_PROMPT = (
    "You are a concise assistant. "
    "Always reply in the same language as the user's input. "
    "Do not change the language. "
    "Do not mix languages."
)