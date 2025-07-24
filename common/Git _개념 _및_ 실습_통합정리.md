# 📘 Git 개념 및 실습 통합 정리

---

## 1. 버전 (Version)

- 프로그램을 수정하여 개선한 것
- 버전은 주로 `메이저.마이너.패치` 형식으로 구성됨

예:
```
1.0      → 메이저 1, 마이너 0  
1.1.1    → 메이저 1, 마이너 1, 패치 1
```

- 마이너 버전: 기능 추가 등 작은 변경  
- 패치 버전: 버그 수정 등 사소한 변경

---

## 2. 버전 관리 시스템 (VCS)

- 파일의 변경 내역을 추적 및 복원할 수 있도록 도와주는 시스템
- 예: Git, SVN 등
- Git은 **분산형 버전 관리 시스템**으로 빠르고 안정적임

---

## 3. Git과 GitHub

| 항목     | 설명 |
|----------|------|
| Git      | 로컬에서 사용하는 버전 관리 도구 |
| GitHub   | Git 저장소를 웹에서 관리하고 협업할 수 있도록 도와주는 플랫폼 |

---

## 4. Git 기본 구조

- Working Directory: 내가 작업하는 실제 폴더
- Staging Area: 커밋할 변경 사항을 담는 임시 저장 공간
- Local Repository: 커밋된 파일(버전)이 저장되는 로컬 저장소

파일 상태:
- `untracked`: Git이 관리하지 않는 파일
- `tracked`: Git이 추적 중인 파일 → `unmodified`, `modified`, `staged`

---

## 5. Git 설정 및 설치

```bash
git --version
git config --global user.name "이름"
git config --global user.email "이메일주소"
git config --list
```

---

## 6. Git 기본 명령어

```bash
git init                       # 저장소 초기화
git status                     # 변경 사항 확인
git add 파일명 or .            # 스테이징
git commit -m "메시지"         # 커밋
git log                        # 커밋 내역 보기
git log --pretty=oneline       # 한 줄로 보기
git rm --cached 파일명         # 스테이징 해제
```

---

## 7. 브랜치 (Branch)

```bash
git branch                     # 브랜치 목록
git branch 브랜치명            # 새 브랜치 생성
git switch 브랜치명            # 브랜치 이동 (권장 방식)
git switch -c 브랜치명         # 생성 후 바로 이동
git branch -m old new          # 브랜치 이름 변경
git branch -D 브랜치명         # 브랜치 삭제
```

### 브랜치를 사용하는 이유
- 원본(main)을 보호하면서 독립적인 기능 개발 가능
- 협업 시 역할 분담이 쉬움

---

## 8. 원격 저장소 (Remote Repository)

```bash
git remote add origin [URL]
git remote -v
git push origin main
git pull origin main
git clone [URL]
```

> ⚠️ clone할 때는 `git init` 하지 말 것  
> 히스토리가 다른 두 저장소를 병합할 땐:
```bash
git pull origin main --allow-unrelated-histories
```

---

## 9. 충돌 해결

```bash
# 충돌 파일 수정 후
git add .
git commit -m "충돌 해결"
git push origin main
```

---

## 10. 실습 흐름 요약

```bash
git init
git branch -m master main
git add .
git commit -m "init"
git remote add origin https://github.com/사용자명/저장소명.git
git push -u origin main
```

---

# 🔀 Git Merge vs Rebase (쉬운 설명)

---

## ✅ merge: 브랜치 흔적을 남기며 합치기

### 📌 비유
> 두 갈래의 길이 만나서 하나로 합쳐지는 느낌!  
> 합쳐지는 지점에 "교차로"처럼 병합 커밋이 생김

```bash
git switch main
git merge feature
```

### ✅ 특징 요약
- **기록이 그대로 보존됨**
- 병합 커밋 생성됨
- 협업에서 누가 어떤 브랜치에서 작업했는지 보기 쉬움

---

## ✅ rebase: 히스토리를 깔끔하게 정리해서 합치기

### 📌 비유
> 다른 사람 작업 뒤에 내 작업을 "살짝 덧붙이는" 느낌  
> 갈라진 흔적 없이 깔끔한 **일자형 히스토리**

```bash
git switch feature
git rebase main
```

### ✅ 특징 요약
- 커밋 기록이 한 줄처럼 깔끔해짐
- 병합 커밋 없음
- **혼자 작업한 브랜치를 깔끔하게 정리할 때 유용**

---

## 📊 merge vs rebase 비교표

| 항목              | merge                              | rebase                             |
|-------------------|-------------------------------------|-------------------------------------|
| 히스토리 구조     | 브랜치 갈라짐 + 병합 커밋 생김       | 한 줄로 깔끔하게 정리됨             |
| 병합 커밋         | 있음                                | 없음                                |
| 커밋 ID(SHA)       | 유지됨                              | 새로 작성되어 ID 변경됨              |
| 협업 적합도       | 공동 작업 브랜치에 적합              | 개인 작업 브랜치 정리에 적합         |
| 충돌 시점         | 병합할 때                            | 재배치 도중                          |
| 사용 난이도        | 쉬움                                | 조금 어려움                          |

---

## 💡 언제 어떤 걸 써야 할까?

| 상황                          | 추천 방식  |
|-------------------------------|------------|
| 공동작업 브랜치 통합          | `merge`    |
| 개인 브랜치 정리 후 통합       | `rebase`   |

---

## 🧪 간단 실습 예시

```bash
# 1. feature 브랜치 생성
git switch -c feature

# 2. 작업 후 커밋
echo "기능 추가" >> hello.txt
git add .
git commit -m "기능 추가"

# 3. 최신 main 내용 반영
git switch feature
git rebase main   # 또는 git merge main

# 4. 병합 후 main에 반영
git switch main
git merge feature
```

---

✅ 한 줄 요약  
- **merge**: 기록 남기고 합치기 → 협업에 유리  
- **rebase**: 기록 깔끔하게 정리 → 혼자 작업 정리에 유리

---

# 🛠 Git Push 오류 해결 방법 (fetch first 오류)

## ❗️문제 상황

```bash
$ git push origin main
! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/your-repo.git'
hint: Updates were rejected because the remote contains work that you do not have.
```

---

## ⚠️ 원인

GitHub(원격 저장소)에 **내 로컬에는 없는 커밋**이 있어서  
Git이 덮어쓰는 것을 막기 위해 push를 거절한 것.

---

## ✅ 해결 방법

### 1. 원격 내용을 먼저 가져오기

```bash
git pull origin main
```

- 원격 저장소의 변경 사항을 로컬로 가져오고 자동 병합됨
- 충돌이 발생할 수 있음 (수정 필요)

---

### 2. 병합 후 푸시

```bash
git push origin main
```

---

## ⚠️ 만약 충돌(conflict)이 발생했다면?

- VS Code에서 `<<<`, `===`, `>>>` 표시된 부분을 직접 수정
- 수정 후 아래 명령어 실행:

```bash
git add .
git commit -m "Merge conflict resolved"
git push origin main
```

---

## 🧨 정말로 덮어써도 되는 상황이라면 (위험!)

> 혼자 작업 중이거나, GitHub의 기존 내용을 삭제해도 괜찮은 경우에만 사용하세요.

```bash
git push origin main --force
```

---

## 🧠 요약

| 상황                                | 해결 방법                              |
|-------------------------------------|-----------------------------------------|
| GitHub에 내 로컬에 없는 커밋이 있음 | `git pull origin main` 먼저             |
| 충돌 발생                           | 수동으로 해결 후 `add`, `commit`        |
| 무조건 덮어써야 함                  | `git push origin main --force` (주의!)  |

---

## 🧩 참고

- `fetch first` 오류는 **협업 중**에 자주 발생합니다.
- 항상 다음 순서를 기억하세요:

```txt
pull → merge/resolve → push
```

