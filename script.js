const truthQuestions = [
    "你最近一次说谎是什么时候？",
    "你最尴尬的一次经历是什么？",
    "你暗恋过谁？",
    "你做过最疯狂的事情是什么？",
    "你最大的秘密是什么？",
    "你最后悔的一件事是什么？",
    "你最喜欢的异性类型是什么？",
    "你做过最浪漫的事情是什么？",
    "你最大的梦想是什么？",
    "你最喜欢的电影是什么？为什么？"
];

const dareChallenges = [
    "模仿一个动物叫声",
    "跳一段舞蹈",
    "唱一首歌",
    "做一个鬼脸",
    "说一个绕口令",
    "做一个俯卧撑",
    "模仿一个名人",
    "讲一个笑话",
    "做一个瑜伽动作",
    "表演一个魔术"
];

const contentDisplay = document.getElementById('contentDisplay');
const truthTitle = document.getElementById('truthTitle');
const dareTitle = document.getElementById('dareTitle');
const orTitle = document.getElementById('orTitle');
// 移除背景闪电

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function displayContent(content, mode) {
    // 移除之前的模式类
    contentDisplay.classList.remove('truth-mode', 'dare-mode');
    
    // 添加新的模式类
    contentDisplay.classList.add(mode);
    
    // 先清空
    contentDisplay.innerHTML = '';

    // 将文本拆成字符，分别做“闪电”式亮灭
    const p = document.createElement('p');
    p.className = 'content-text lightning-text';
    const chars = content.split('');
    chars.forEach((ch, i) => {
        const span = document.createElement('span');
        span.className = 'bolt';
        span.textContent = ch;
        // 随机抖动延迟，造成不规则电流效果
        const delay = 30 * i + Math.floor(Math.random() * 60);
        span.style.animationDelay = `${delay}ms`;
        p.appendChild(span);
    });
    contentDisplay.appendChild(p);
}

truthTitle.addEventListener('click', () => {
    const question = getRandomItem(truthQuestions);
    displayContent(question, 'truth-mode');
    flickerTitle(truthTitle);
});

dareTitle.addEventListener('click', () => {
    const challenge = getRandomItem(dareChallenges);
    displayContent(challenge, 'dare-mode');
    flickerTitle(dareTitle);
});

// 背景闪电相关逻辑已移除

orTitle.addEventListener('click', () => {
    const isTruth = Math.random() < 0.5;
    if (isTruth) {
        const question = getRandomItem(truthQuestions);
        displayContent(question, 'truth-mode');
    } else {
        const challenge = getRandomItem(dareChallenges);
        displayContent(challenge, 'dare-mode');
    }
}); 

// 让标题偶发闪动
function flickerTitle(el) {
    if (!el) return;
    el.classList.remove('title-flicker');
    void el.offsetWidth; // 重新触发动画
    el.classList.add('title-flicker');
}

// 间歇性随机闪动（不影响点击）
function autoFlickerAll() {
    [truthTitle, orTitle, dareTitle].forEach((el) => flickerTitle(el));
    const next = Math.random() * 2000 + 3000; // 3s ~ 5s
    setTimeout(autoFlickerAll, next);
}
setTimeout(autoFlickerAll, 2000);