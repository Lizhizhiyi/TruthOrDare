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

const card = document.getElementById('card');
const truthBtn = document.getElementById('truthBtn');
const dareBtn = document.getElementById('dareBtn');
const cardContent = document.querySelector('.card-content p');

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function flipCard(content) {
    card.classList.add('flipped');
    setTimeout(() => {
        cardContent.textContent = content;
        card.classList.remove('flipped');
    }, 300);
}

truthBtn.addEventListener('click', () => {
    const question = getRandomItem(truthQuestions);
    flipCard(question);
});

dareBtn.addEventListener('click', () => {
    const challenge = getRandomItem(dareChallenges);
    flipCard(challenge);
}); 