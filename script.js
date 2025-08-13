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
const lightning = document.getElementById('lightning');

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
});

dareTitle.addEventListener('click', () => {
    const challenge = getRandomItem(dareChallenges);
    displayContent(challenge, 'dare-mode');
});

// Lightning random flash effect
function triggerLightning() {
    if (!lightning) return;
    // 随机改变径向中心，制造不同位置的闪光
    const x = Math.floor(Math.random() * 80) + 10; // 10% ~ 90%
    const y = Math.floor(Math.random() * 60) + 5;  // 5% ~ 65%
    lightning.style.background = `radial-gradient(1000px circle at ${x}% ${y}%, rgba(255,255,255,0.26) 0%, rgba(255,255,255,0.14) 28%, rgba(255,255,255,0) 62%), linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0))`;
    lightning.style.animation = 'none';
    // 触发重排以重启动画
    void lightning.offsetWidth;
    lightning.style.animation = 'lightningFlash 600ms ease-out';
}

function scheduleLightning() {
    const next = Math.random() * 3000 + 1500; // 1.5s ~ 4.5s 更频繁
    setTimeout(() => {
        triggerLightning();
        scheduleLightning();
    }, next);
}

scheduleLightning();

// 在特定位置触发一次闪电（百分比坐标，可指定时长）
function triggerLightningAt(px, py, durationMs = 600) {
    if (!lightning) return;
    lightning.style.background = `radial-gradient(900px circle at ${px}% ${py}%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.15) 26%, rgba(255,255,255,0) 60%), linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0))`;
    lightning.style.animation = 'none';
    void lightning.offsetWidth;
    lightning.style.animation = `lightningFlash ${durationMs}ms ease-out`;
}

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