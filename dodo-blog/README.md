# 🔬 도도파파의 연구소

도도(7세) + 미미(5세) 형제와 함께 성장 중인 아빠의 육아 블로그입니다.

---

## 📁 파일 구조

```
dodo-blog/
├── index.html   ← 페이지 구조 (HTML)
├── style.css    ← 디자인 (CSS)
├── script.js    ← 기능 + 게시글 데이터 (JavaScript)
└── README.md    ← 이 파일
```

---

## 🚀 실행 방법

### 방법 1: 그냥 열기 (가장 간단)
`index.html` 파일을 더블클릭하면 브라우저에서 바로 열립니다.

### 방법 2: VS Code Live Server (권장)
1. VS Code에서 `dodo-blog` 폴더 열기
2. 확장 프로그램 **Live Server** 설치
3. `index.html` 우클릭 → **Open with Live Server**
4. 브라우저에서 자동으로 열림

---

## ✨ 주요 기능

| 기능 | 설명 |
|------|------|
| 카테고리 필터 | 주말연구소 / 육아인사이트 / 도도형제일상 / AI육아 |
| 검색 | 제목·내용 실시간 검색 |
| 상세 페이지 | 글 클릭 시 전체 내용 표시 |
| 추천 글 | 메인 상단에 최신 글 강조 표시 |
| 연관 글 | 상세 페이지 하단에 다른 글 추천 |
| 다크/라이트 | 따뜻한 베이지 톤 고정 |
| 모바일 최적화 | 햄버거 메뉴 + 반응형 레이아웃 |

---

## 📝 게시글 추가하는 방법

`script.js` 파일의 `posts` 배열에 아래 형식으로 추가하면 됩니다.

```javascript
{
    id: 7,                          // 고유 번호 (기존 번호와 겹치지 않게)
    title: "글 제목",
    category: "주말연구소",          // 아래 4가지 중 하나
                                    // 주말연구소 / 육아인사이트 / 도도형제일상 / AI육아
    date: "2026.04.10",
    emoji: "🎈",                    // 대표 이모지
    summary: "목록에 표시될 한 줄 요약",
    content: {
        situation: {
            title: "🏠 상황: 제목",
            text: "내용..."
        },
        conflict: {
            title: "💥 갈등: 제목",
            text: "내용..."
        },
        solution: {
            title: "🧪 해결: 제목",
            text: "내용..."
        },
        insight: "도도파파의 한 줄 인사이트 내용"
    }
}
```

---

## 🎨 디자인 커스터마이징

`style.css` 상단의 `:root` 변수를 수정하면 색상을 바꿀 수 있습니다.

```css
:root {
    --primary: #F4845F;   /* 메인 컬러 (주황) */
    --yellow:  #FFD166;   /* 포인트 컬러 (노랑) */
    --bg:      #FFF8F2;   /* 배경색 */
}
```

---

## 📦 Cloudflare Pages 배포

1. GitHub에 `dodo-blog` 폴더 push
2. Cloudflare Pages → 새 프로젝트 연결
3. 빌드 설정 없음 (정적 HTML이므로 그대로 배포)
4. 배포 완료!
