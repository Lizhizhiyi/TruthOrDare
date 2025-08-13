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

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function displayContent(content, mode) {
    // 移除之前的模式类
    contentDisplay.classList.remove('truth-mode', 'dare-mode');
    
    // 添加新的模式类
    contentDisplay.classList.add(mode);
    
    // 清空内容并添加新内容
    contentDisplay.innerHTML = `<p class="content-text">${content}</p>`;
}

truthTitle.addEventListener('click', () => {
    const question = getRandomItem(truthQuestions);
    displayContent(question, 'truth-mode');
});

dareTitle.addEventListener('click', () => {
    const challenge = getRandomItem(dareChallenges);
    displayContent(challenge, 'dare-mode');
});

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