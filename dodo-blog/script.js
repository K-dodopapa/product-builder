// ===========================
// 게시글 데이터
// ===========================
const posts = [
    {
        id: 1,
        title: "베이킹소다 화산 폭발 대작전 (feat. 주방 초토화)",
        category: "주말연구소",
        date: "2026.04.05",
        emoji: "🌋",
        summary: "유튜브에서 본 화산 실험, 직접 해봤더니 생각보다 훨씬 대참사였다. 그래도 그날 밤 이산화탄소를 배웠다.",
        content: {
            situation: {
                title: "🏠 상황: 토요일 아침의 폭탄선언",
                text: `토요일 아침 8시. 나는 커피를 겨우 한 모금 마셨을 뿐인데, 도도(7세)가 아이패드를 들고 달려왔다.\n\n"아빠! 이거 우리도 해보자!"\n\n유튜브에서 본 베이킹소다+식초 화산 실험 영상이었다. 5살 미미도 어느새 옆에 와서 "나도! 나도!" 를 외치고 있었다. 거절할 수 없는 분위기였다.`
            },
            conflict: {
                title: "💥 갈등: 준비부터가 이미 실험이었다",
                text: `"아빠, 베이킹소다가 어딨어요?"\n\n주방 서랍을 뒤지기 시작했다. 도도가 베이킹소다를 찾았는데, 뚜껑을 여는 순간 절반이 쏟아졌다. 흰 가루가 주방 바닥에 퍼졌다. 미미는 그게 재밌다고 손으로 문질렀다. 이제 바닥이 미끄럽다.\n\n식초는 어디서 꺼냈는지 식탁 위에 놓더니, 흔들다가 조금 엎질렀다. 이미 주방에서 식초 냄새가 진동했다.`
            },
            solution: {
                title: "🧪 해결: 욕조로 전략적 후퇴",
                text: `결단을 내렸다. "욕조에서 하자."\n\n욕조 안에 큰 대야를 놓고, 점토로 화산 모양을 만들었다. 도도가 꼭대기에 구멍을 뚫었다. 미미는 물감으로 화산에 색을 칠했다 — 분홍색 화산이 탄생했다.\n\n베이킹소다 3스푼을 구멍에 넣고, 빨간 물감 몇 방울 떨어뜨린 뒤, 식초를 천천히 부었다.\n\n치직— 거품이 솟구쳤다. 두 녀석이 동시에 소리를 질렀다. 분홍빛 거품이 욕조 바닥으로 흘러내렸다. 성공이었다.\n\n물론 욕조 청소는 내 몫이었다.`
            },
            insight: "아이들이 '왜 거품이 나요?'를 물어왔을 때, 나는 제대로 대답을 못했다. 그날 밤, 같이 검색했다. 베이킹소다(탄산수소나트륨)와 식초(산)가 만나면 이산화탄소가 발생한다는 걸 — 도도가 먼저 읽고 나한테 설명해줬다. 실험보다 그 순간이 더 기억에 남는다. 아이가 아빠에게 뭔가를 가르쳐주는 그 표정."
        }
    },
    {
        id: 2,
        title: "형제 싸움 심판 보다가 내가 틀렸다는 걸 깨달았다",
        category: "육아인사이트",
        date: "2026.04.01",
        emoji: "⚖️",
        summary: "레고 블록 하나로 시작된 전쟁. 나는 당연히 형 편을 들었다. 근데 들어보니 미미 말도 맞았다.",
        content: {
            situation: {
                title: "🏠 상황: 레고 블록 하나가 전쟁의 씨앗",
                text: `일요일 오후. 도도와 미미가 각자 놀다가 갑자기 소리가 들렸다.\n\n"내 거야!"\n"형이 안 쓰고 있잖아!"\n\n레고 블록 하나를 두고 싸움이 시작됐다. 도도가 먼저 쓰고 있었는데, 미미가 가져간 모양이었다. 도도가 울면서 나한테 달려왔다.`
            },
            conflict: {
                title: "💥 갈등: 나는 너무 빨리 판결을 내렸다",
                text: `나는 반사적으로 말했다.\n\n"미미야, 형 거 돌려줘. 형이 먼저 쓰고 있었잖아."\n\n그런데 미미가 눈물이 글썽글썽한 채로 말했다.\n\n"형이 10분 넘게 옆에 두고 딴 짓 하고 있었어요. 나 쓰려고 기다렸는데."\n\n멈췄다. 사실인지 도도한테 물었다. 도도가 대답을 못 했다. 실제로 블록 옆에서 그냥 앉아서 딴 것 보고 있었던 것이다.`
            },
            solution: {
                title: "🧪 해결: 규칙을 함께 만들었다",
                text: `심판을 철회했다.\n\n셋이 같이 앉아서 규칙을 만들었다. "5분 이상 안 쓰고 있으면, 다른 사람이 써도 돼. 단, 빌리기 전에 말은 해야 해."\n\n도도가 처음엔 불만스러워했다. 그런데 내가 물었다. "도도야, 네가 미미 자리 점령하고 있으면 어때?" 잠깐 생각하더니 고개를 끄덕였다.\n\n그날 이후로 이 규칙을 꽤 잘 지키고 있다.`
            },
            insight: "나는 먼저 달려온 아이 편을 들고 있었다. 먼저 말하는 사람이 피해자처럼 보이기 때문에. 아이들 싸움에서 빠른 판결보다 '먼저 둘 다 듣기'가 훨씬 중요하다는 걸 배웠다. 어른들 세계에서도 마찬가지겠지만 — 육아가 나한테도 꽤 많은 걸 가르쳐주고 있다."
        }
    },
    {
        id: 3,
        title: "7살 도도의 첫 혼자 심부름 — 편의점까지 200미터",
        category: "도도형제일상",
        date: "2026.03.28",
        emoji: "🏃",
        summary: "도도가 혼자 편의점 가겠다고 선언했다. 나는 2천원을 줬고, 몰래 뒤를 따라갔다. 둘 중 누가 더 떨었냐면...",
        content: {
            situation: {
                title: "🏠 상황: '나 혼자 갈 수 있어!'",
                text: `도도가 한 달째 주장하고 있었다. "아빠, 나 혼자 편의점 갈 수 있어." 집에서 200미터 거리에 편의점이 있다. 아파트 단지 안이라 차는 없지만, 그래도 혼자라는 게 마음에 걸렸다.\n\n아내와 나는 의견이 달랐다. 아내는 "요즘 세상에..." 였고, 나는 "근데 과보호도 문제잖아..." 였다.`
            },
            conflict: {
                title: "💥 갈등: 보내야 하나, 말아야 하나",
                text: `솔직히 고민이 많았다. 7살이면 가능한 나이라는 건 알겠는데, 막상 보내려니 온갖 상상이 다 됐다. 길을 잃으면? 낯선 사람이 말 걸면? 차가 갑자기 나타나면?\n\n근데 그러다보니 스스로 물었다. 나는 몇 살에 혼자 심부름 다녔더라. 기억을 더듬어보니 6살쯤이었다. 그 시절엔 당연했던 것들이 지금은 왜 이렇게 무섭지.`
            },
            solution: {
                title: "🧪 해결: 보냈다. 그리고 몰래 따라갔다",
                text: `결국 보내기로 했다. 2천원을 손에 쥐여줬다. "음료수 하나 사와. 거스름돈 가져와야 해."\n\n도도는 당당하게 나갔다. 나는 30초 있다가 몰래 따라나갔다. 충분한 거리를 두고 뒤에서 지켜봤다.\n\n도도는 씩씩하게 걸어갔다. 편의점 문을 밀고 들어갔다. 2분쯤 지나서 나왔다. 음료수를 들고, 잔돈 200원이 든 손을 꼭 쥔 채로. 집을 향해 걸어오는데, 혼자 뭔가 흥얼거리고 있었다.`
            },
            insight: "집에 들어온 도도가 잔돈을 내밀며 말했다. '아빠, 계산도 혼자 했어.' 내가 더 떨었다. 아이는 이미 준비가 돼 있었는데, 부모가 기회를 못 주고 있었던 것 같다. 독립심은 갑자기 생기는 게 아니라, 조금씩 경험하면서 쌓이는 거라는 걸 — 도도가 200미터로 가르쳐줬다."
        }
    },
    {
        id: 4,
        title: "ChatGPT로 도도 맞춤 동화책 만들었더니 반응이...",
        category: "AI육아",
        date: "2026.03.22",
        emoji: "🤖",
        summary: "서점 동화책은 안 읽던 도도가, 자기 이름이 들어간 AI 동화는 두 번 읽었다. AI 육아 도구의 가능성을 발견한 날.",
        content: {
            situation: {
                title: "🏠 상황: 책은 싫고 유튜브는 좋아",
                text: `도도는 공룡을 엄청 좋아한다. 공룡 이름도 줄줄 외우고, 공룡 관련 유튜브는 몇 시간이고 본다. 그런데 서점에서 공룡 동화책을 사줘도 한 번 훑어보고 끝이다.\n\n이유를 물어봤다. "재미없어. 내 이야기가 아니잖아." 7살의 솔직한 피드백이었다.`
            },
            conflict: {
                title: "💥 갈등: 내 이야기가 아니면 재미없다",
                text: `책을 사줄 때마다 돈이 나갔다. 그리고 책장에 꽂혔다. 그게 반복됐다. 어떻게 하면 도도가 책을 좋아하게 될까 — 이걸 고민하다가 문득 생각했다.\n\n도도가 주인공인 책은 어디에도 없으니까, 내가 만들면 어떨까?`
            },
            solution: {
                title: "🧪 해결: AI로 직접 만든 '도도와 공룡왕국'",
                text: `ChatGPT에 프롬프트를 입력했다.\n\n"7살 남자아이를 위한 동화를 써줘. 주인공 이름은 '도도'이고, 공룡을 무서워하지 않는 용감한 아이야. 공룡 왕국에 초대받아 공룡들과 친구가 되는 이야기로 써줘. 500자 정도로."\n\n2분도 안 돼서 동화가 나왔다. 도도라는 이름이 스물 번쯤 나왔다. 출력해서 손으로 그림을 그려 옆에 붙였다.\n\n저녁에 도도한테 줬다. 첫 문장 읽더니 눈이 커졌다. "이거 나잖아?"라고 했다. 그날 두 번 읽었다. 미미한테도 읽어줬다.`
            },
            insight: "책이 재미없는 게 아니었다. '나의 이야기'가 아니라서 재미없었던 것이다. AI는 맞춤형 콘텐츠를 5분 만에 만들어준다. 아이 이름, 좋아하는 것, 성격을 넣으면 세상에 하나뿐인 동화가 나온다. 완성도가 중요한 게 아니라, 아이가 주인공이라는 것 — 그게 핵심이다. 다음엔 미미 버전도 만들어볼 생각이다."
        }
    },
    {
        id: 5,
        title: "종이컵 전화기, 실제로 소리가 들립니까?",
        category: "주말연구소",
        date: "2026.03.15",
        emoji: "📞",
        summary: "과학책에서 본 종이컵 전화기를 직접 만들었다. 3번 실패하고 4번째에 성공. 실패 2번이 성공 1번보다 더 많이 가르쳐줬다.",
        content: {
            situation: {
                title: "🏠 상황: 과학책 속 실험을 현실로",
                text: `도도의 과학책에 종이컵 전화기 만들기가 나왔다. 실이 팽팽해야 소리가 전달된다는 설명이 있었다.\n\n"아빠, 이거 진짜 돼요?"\n\n나도 사실 반신반의였다. 어릴 때 만들어본 기억은 있는데, 제대로 된 기억은 없었다. 같이 해보기로 했다.`
            },
            conflict: {
                title: "💥 갈등: 왜 안 들리는 거야",
                text: `첫 번째 시도. 실이 너무 짧아서 두 컵이 붙어버렸다. 실패.\n\n두 번째 시도. 실을 길게 했는데, 이번엔 실이 느슨해서 소리가 전달이 안 됐다. 도도가 아무리 크게 말해도 미미 쪽에서는 아무것도 안 들렸다.\n\n도도가 짜증을 냈다. "이거 가짜 아니에요?"\n\n미미는 그냥 종이컵으로 물 마시기 시작했다.`
            },
            solution: {
                title: "🧪 해결: 팽팽함이 핵심이었다",
                text: `세 번째 시도 전에 책을 다시 읽었다. '실은 항상 팽팽하게 유지해야 한다'는 조건이 있었다. 두 사람이 반대 방향으로 당기면서 실을 팽팽하게 유지해야 했다.\n\n방법을 바꿨다. 도도는 방 한쪽에, 미미는 반대쪽에 서게 했다. 실이 팽팽하게 유지되도록 줄을 당기게 했다.\n\n내가 도도 쪽 컵에 입을 가까이 대고 속삭였다.\n\n"미미야, 아빠 목소리 들려?"\n\n미미가 눈이 동그래지면서 "들려요!"라고 소리쳤다. 세 명이 동시에 폭발했다. 이후 10미터 버전에도 도전해서 성공했다.`
            },
            insight: "실패 두 번이 있었기에 세 번째에 '팽팽함'의 중요성을 정확히 이해했다. 처음에 바로 성공했다면 그냥 '신기하다'로 끝났을 거다. 왜 안 됐는지를 고민하는 과정이 진짜 학습이었다. 아이한테 '왜 안 됐을까'를 같이 생각하는 시간이, 정답을 알려주는 것보다 훨씬 가치 있다는 걸 다시 느꼈다."
        }
    },
    {
        id: 6,
        title: "5살 미미가 형을 처음 이긴 날 — 윷놀이 대역전극",
        category: "도도형제일상",
        date: "2026.03.10",
        emoji: "🎉",
        summary: "항상 형한테 지던 미미. 이번 윷놀이만큼은 달랐다. 마지막 모 하나가 모든 걸 바꿨다.",
        content: {
            situation: {
                title: "🏠 상황: 가족 윷놀이, 미미의 연패",
                text: `주말 저녁, 가족 네 명이 윷놀이를 했다. 사실 우리 집 윷놀이는 항상 비슷하게 끝난다. 도도가 이기거나, 아내가 이기거나.\n\n미미는 아직 전략이 없다. 말을 어디로 보낼지 모르고, 잡힐 것 같아도 그냥 간다. 그래서 항상 지고, 항상 운다.`
            },
            conflict: {
                title: "💥 갈등: 포기 직전의 미미",
                text: `중반까지 도도가 압도적으로 앞서 있었다. 미미 말은 두 번이나 잡혀서 출발점으로 돌아갔다.\n\n미미가 입이 나오기 시작했다. "재미없어. 나 안 해." 아내가 달래고, 나도 달랬다. 계속 하게 만들었는데, 미미는 시큰둥하게 윷을 던졌다.`
            },
            solution: {
                title: "🧪 해결: 모 하나가 뒤집었다",
                text: `마지막 차례였다. 도도는 말 하나를 집에 넣으면 끝나는 상황. 미미는 말 두 개가 아직 밖에 있었다.\n\n미미가 윷을 던졌다. 모!\n\n윷 네 개가 전부 뒤집혔다. 한 번 더 던질 수 있었다. 다시 던졌다. 도!\n\n미미 말이 도도 말을 잡았다. 도도 말이 다시 시작점으로 갔다. 분위기가 뒤집혔다. 이후 미미가 연달아 좋은 괘를 뽑았고, 도도보다 먼저 모든 말을 집에 넣었다.\n\n미미가 울었다. 기뻐서.`
            },
            insight: "도도는 졌는데도 꽤 깨끗하게 받아들였다. 평소 같으면 울었을 텐데, 이번엔 미미한테 '잘했어'라고 했다. 그 한마디가 더 기억에 남는다. 아이들의 승부욕과 감정이 이렇게 순수할 수 있다는 게, 가끔 어른인 나를 부끄럽게 만든다."
        }
    },
    {
        id: 7,
        title: "일요일 밤 9시, 유치원 숙제 전쟁",
        category: "도도형제일상",
        date: "2026.04.06",
        emoji: "📝",
        summary: "도현이 숙제 하나 끝내는 데 한 시간. 도원이 방해, 도현이 집중 못하기, 아빠 버럭. 이 반복이 육아다.",
        content: {
            situation: {
                title: "🏠 상황: 지친 일요일 저녁, 숙제가 기다리고 있었다",
                text: `7세, 5세 남자아이들. 제일 예쁠 때이자 제일 힘든 때다.\n\n주말 내내 육아에 시달리다 지칠 대로 지친 일요일 저녁, 도현이의 유치원 숙제가 남아 있었다.\n\n숙제는 세 가지였다. 주말에 있었던 일을 발표하기, 영어 공부 영상 1개 보기, 대여해준 책 읽고 제목 적기. 10시엔 자야 했기에 나는 9시부터 책상 앞에서 기다렸다.`
            },
            conflict: {
                title: "💥 갈등: 도현이는 집중 못하고, 도원이는 방해하고",
                text: `빨리 오라고도 하고, 언제 오냐고 물어보기도 하고, 협박도 했다가 소리도 질렀다가. 참을 인자를 계속 새겼다.\n\n도현이는 도원이와 기차놀이를 하다가, 기차가 부서졌다고 잡기놀이를 하다가, 내 옆에 왔다가, 북치는 장난감을 치다가, 급기야 내 방에서 스마트워치까지 만지길래 버럭 화를 냈다.\n\n겨우 집중하려 하니 이번엔 도원이가 형 옆에서 방해를 했다. 도원이한테도 소리를 질렀다. 바로 미안해서 "형 숙제할 동안만 혼자 놀고 있어"라고 타일렀다.\n\n연필로 테이블을 치다가 연필심을 부러뜨리고, 몇 번의 실랑이 끝에 거의 10시가 다 되어서야 숙제 하나를 겨우 끝냈다.`
            },
            solution: {
                title: "🧪 해결: 완벽하진 않았지만, 오늘은 여기까지",
                text: `세 번째 숙제는 내일 해도 되는 것이어서 결국 두 가지만 하고 잠자리에 들었다.\n\n2살 차이지만 7살과 5살은 수준 차이가 크다. 도현이 숙제를 하려 하면 도원이가 옆에서 놀아달라 징징거리고, 신기한지 같이 하려 달려든다. 그림 그리기, 미로 찾기로 흥미를 유도해봤지만 잘 되지 않았다.\n\n이번 주엔 화 안 내야지 했는데, 오늘도 버럭 냈다. 낮에도 짜요짜요 두 개째 먹으려는 도현이에게 폭발했다. 하루에 한 개 약속이었지만, 사실 그 전부터 말을 안 들었던 것들이 쌓여 터진 것이었다.`
            },
            insight: "화를 내고, 이유를 설명하고, 미안해하고 — 이 과정의 반복이다. 지난 3월보다는 훨씬 나아졌지만 화가 안 날 수는 없는 것 같다. 완벽한 아빠가 되려는 게 오히려 더 힘들게 만드는 건 아닐까. 오늘도 부족했지만, 내일 또 해보는 수밖에."
        }
    }
];

// ===========================
// 상태 관리
// ===========================
let currentFilter = '전체';
let currentSearch = '';
let currentPostId = null;

// ===========================
// 초기화
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('total-count').textContent = posts.length;
    renderFeatured();
    renderPosts();
});

// ===========================
// 추천 글 렌더링
// ===========================
function renderFeatured() {
    const latest = posts[0];
    const container = document.getElementById('featured-card');
    container.innerHTML = `
        <div class="featured-card" onclick="showDetail(${latest.id})">
            <div class="featured-emoji">${latest.emoji}</div>
            <div class="featured-body">
                <span class="category-tag tag-${latest.category}">${getCategoryIcon(latest.category)} ${latest.category}</span>
                <h2>${latest.title}</h2>
                <p class="post-summary">${latest.summary}</p>
                <span class="post-date">${latest.date}</span>
            </div>
        </div>
    `;
}

// ===========================
// 글 목록 렌더링
// ===========================
function renderPosts() {
    const grid = document.getElementById('posts-grid');
    const emptyState = document.getElementById('empty-state');
    const postsTitle = document.getElementById('posts-title');
    const featuredSection = document.getElementById('featured-section');

    let filtered = posts.filter(post => {
        const matchCategory = currentFilter === '전체' || post.category === currentFilter;
        const matchSearch = currentSearch === '' ||
            post.title.includes(currentSearch) ||
            post.summary.includes(currentSearch) ||
            post.category.includes(currentSearch);
        return matchCategory && matchSearch;
    });

    // 추천 섹션은 전체 + 검색 없을 때만 표시
    featuredSection.style.display = (currentFilter === '전체' && currentSearch === '') ? 'block' : 'none';

    // 제목 업데이트
    postsTitle.textContent = currentFilter === '전체'
        ? `📋 전체 글 (${filtered.length})`
        : `${getCategoryIcon(currentFilter)} ${currentFilter} (${filtered.length})`;

    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';
    grid.innerHTML = filtered.map((post, idx) => `
        <div class="post-card" onclick="showDetail(${post.id})" style="animation-delay:${idx * 0.07}s">
            <div class="card-emoji">${post.emoji}</div>
            <span class="category-tag tag-${post.category}">${getCategoryIcon(post.category)} ${post.category}</span>
            <h3>${post.title}</h3>
            <p class="post-summary">${post.summary}</p>
            <div class="card-footer">
                <span class="post-date">${post.date}</span>
                <span class="read-more">읽기 →</span>
            </div>
        </div>
    `).join('');
}

// ===========================
// 카테고리 필터
// ===========================
function filterPosts(category) {
    currentFilter = category;
    currentSearch = '';
    document.getElementById('searchInput').value = '';

    // 버튼 active 상태
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });

    renderPosts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===========================
// 검색
// ===========================
function searchPosts(value) {
    currentSearch = value.trim();
    if (currentSearch !== '') currentFilter = '전체';
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === '전체');
    });
    renderPosts();
}

// ===========================
// 상세 페이지 표시
// ===========================
function showDetail(id) {
    const post = posts.find(p => p.id === id);
    if (!post) return;

    currentPostId = id;

    const content = `
        <div class="detail-cover">${post.emoji}</div>
        <div class="detail-meta">
            <span class="category-tag tag-${post.category}">${getCategoryIcon(post.category)} ${post.category}</span>
        </div>
        <h1 class="detail-title">${post.title}</h1>
        <span class="detail-date">${post.date}</span>
        <p class="detail-lead">${post.summary}</p>
        <div class="detail-body">
            <div class="section-block">
                <h3>${post.content.situation.title}</h3>
                ${post.content.situation.text.split('\n').map(line => line.trim() ? `<p>${line}</p>` : '').join('')}
            </div>
            <div class="section-block">
                <h3>${post.content.conflict.title}</h3>
                ${post.content.conflict.text.split('\n').map(line => line.trim() ? `<p>${line}</p>` : '').join('')}
            </div>
            <div class="section-block">
                <h3>${post.content.solution.title}</h3>
                ${post.content.solution.text.split('\n').map(line => line.trim() ? `<p>${line}</p>` : '').join('')}
            </div>
            <div class="insight-box">
                <h3>💬 도도파파의 한 줄 인사이트</h3>
                <p>${post.content.insight}</p>
            </div>
        </div>
    `;

    document.getElementById('detail-content').innerHTML = content;

    // 연관 글 (같은 카테고리 or 다른 글 최대 3개)
    const related = posts.filter(p => p.id !== id).slice(0, 3);
    document.getElementById('related-grid').innerHTML = related.map(p => `
        <div class="related-card" onclick="showDetail(${p.id})">
            <span class="category-tag tag-${p.category}">${getCategoryIcon(p.category)} ${p.category}</span>
            <h4>${p.title}</h4>
        </div>
    `).join('');

    // 뷰 전환
    document.getElementById('list-view').style.display = 'none';
    document.getElementById('detail-view').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===========================
// 목록으로 돌아가기
// ===========================
function backToList() {
    document.getElementById('detail-view').style.display = 'none';
    document.getElementById('list-view').style.display = 'block';
    currentPostId = null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===========================
// 모바일 메뉴 토글
// ===========================
function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
}

// ===========================
// 카테고리 아이콘
// ===========================
function getCategoryIcon(category) {
    const icons = {
        '주말연구소': '🧪',
        '육아인사이트': '💡',
        '도도형제일상': '👦',
        'AI육아': '🤖'
    };
    return icons[category] || '';
}
