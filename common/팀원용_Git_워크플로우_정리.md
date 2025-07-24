# 📌 Git 브랜치 이름 변경 및 기본 워크플로우 정리

안녕하세요 팀원 여러분!  
Git 사용 중 자주 마주치는 흐름들을 간단하게 정리했습니다.  
작업하실 때 참고해주세요 😊

---

## ✅ 1. 브랜치 이름 변경: `master → main`

지금 당장은 사용하지 않더라도, Git을 쓰다 보면 아래 명령어를 마주칠 수 있어요:

```bash
git branch -m master main
```

> 이 명령어는 로컬 브랜치 이름을 `master`에서 `main`으로 바꾸는 명령어입니다.

### 🔎 왜 바꾸나요?

1. **기본 브랜치가 바뀌었기 때문이에요**
   - 예전 Git은 기본 브랜치 이름이 `master`였어요.
   - GitHub, GitLab 등은 이제 기본 브랜치로 `main`을 사용해요.
   - 이름이 다르면 push/pull 시 충돌이 생길 수 있습니다.

2. **협업 시 호환성 문제 예방**
   - 로컬에서 `git init`으로 생성하면 `master`로 시작할 수 있어요.
   - GitHub에 올릴 때는 기본이 `main`이라 오류가 발생할 수 있습니다.
   - 그래서 이름을 미리 `main`으로 바꿔주는 게 안전합니다.

---

## ✅ 2. Git 저장소 초기화 → GitHub 연결 → Push 전체 흐름

새 프로젝트를 GitHub에 올리고 관리할 때 사용하는 전체 과정입니다:

```bash
# 1. Git 저장소 초기화
git init

# 2. 브랜치 이름 변경 (선택)
git branch -m master main

# 3. GitHub 원격 저장소 연결
git remote add origin https://github.com/사용자이름/저장소이름.git

# 4. 파일 등록 및 커밋
git add .
git commit -m "init"

# 5. GitHub에 push
git push origin main

## 참고
git push -u origin main
```

> `-u` 옵션은 이후에 `git push`만 써도 자동으로 origin main에 푸시되도록 연결합니다.

---

## ✅ 3. git clone → 수정 → push 흐름

이미 있는 GitHub 저장소를 복제해서 수정하고 다시 올릴 때의 기본 흐름입니다:

```bash
# 1. GitHub 저장소 클론
git clone https://github.com/사용자이름/저장소이름.git

# 2. 해당 디렉터리로 이동
cd 저장소이름

# 3. 코드 수정

# 4. 변경사항 등록 및 커밋
git add .
git commit -m "변경 내용 메시지"

# 5. GitHub에 push
git push origin main
```

> 꼭 클론한 폴더 내부에서 작업해야 Git 명령어가 작동합니다.

---

## ✅ 💡 자주 사용하는 Git 명령어 정리

| 명령어 | 설명 |
|--------|------|
| `git status` | 현재 변경된 파일 확인 |
| `git log` | 커밋 히스토리 확인 |
| `git pull origin main` | GitHub의 최신 내용 받아오기 |
| `git push origin main` | 변경사항 GitHub에 업로드 |
| `git remote -v` | 연결된 원격 저장소 목록 확인 |
| `git branch -m master main` | 브랜치 이름 변경 |

---

## 📎 예시 전체 흐름 요약

### 📁 새 프로젝트를 GitHub에 올릴 때

```bash
git init
git branch -m master main
git remote add origin https://github.com/사용자이름/저장소이름.git
git add .
git commit -m "init"
git push origin main
```

### 🌐 GitHub 저장소를 받아서 작업할 때

```bash
git clone https://github.com/사용자이름/저장소이름.git
cd 저장소이름
# 코드 수정
git add .
git commit -m "작업 내용"
git push origin main
```
