const story = {
    // ==========================================
    // АКТ 1: НАЧАЛО И ОСМОТР
    // ==========================================
    start: {
        bg: "assets/bg/classroom_day.png",
        bgm: "audio/bgm/daily.mp3",
        speaker: "ГГ",
        sprite: null,
        text: "Звонок с последнего урока прозвенел десять минут назад. Учитель отлучился за журналом, приказав мне закончить уборку. Но когда я подошел к его столу, чтобы вытереть пыль... конверт с завтрашним переводным экзаменом уже был вскрыт.",
        choices: [
            { text: "Осмотреть учительский стол и доску", next: "inspect_desk" },
            { text: "Сразу подойти к Ае на задней парте", next: "aya_start" },
            { text: "Сразу подойти к Рэй у окна", next: "rei_start" }
        ]
    },

    inspect_desk: {
        bg: "assets/bg/classroom_day.png",
        speaker: "ГГ",
        sprite: null,
        text: "Конверт надорван сбоку. Пропал главный вкладыш с ответами. Когда я полоскал тряпку у доски, я случайно плеснул мутной меловой водой на правый угол первой парты — прямо под учительским столом там лужица. Дверь закрыта изнутри. В классе только мы втроем.",
        choices: [
            { text: "Подойти к Ае (спросить про обстановку)", next: "aya_start" },
            { text: "Подойти к Рэй (спросить про тест)", next: "rei_start" }
        ]
    },

    // ==========================================
    // ВЕТКА АИ
    // ==========================================
    aya_start: {
        bg: "assets/bg/classroom_dusk.jpg",
        speaker: "Ая",
        sprite: "assets/characters/aya_smug.png",
        text: "Ну и что тебе нужно? я просто жду пока давка на выходе из школы закончится и я смогу спокойно пойти домой, не мешай мне.",
        choices: [
            { text: "«Ая, со стола украли ответы. Это была ты?»", next: "aya_accused" },
            { text: "«Ая, ты видела что-то странное за последние 10 минут?»", next: "aya_talk_calm" },
            { text: "«Покажи свои руки и парту.»", next: "aya_inspect_hands" }
        ]
    },

    aya_accused: {
        bg: "assets/bg/classroom_dusk.jpg",
        speaker: "Ая",
        sprite: "assets/characters/aya_angry.png",
        text: "Ты совсем?! Да я даже учебник в этом семестре не открывала! Завалила бы завтра — ушла в колледж на веб-разработчика. Ты лучше глянь на Рэй: она весь урок нервнячила!",
        choices: [
            { text: "«Ладно, покажи хотя бы руки.»", next: "aya_inspect_hands" },
            { text: "Пойти к Рэй и проверить слова Аи", next: "rei_start" }
        ]
    },

    aya_talk_calm: {
        bg: "assets/bg/classroom_dusk.jpg",
        speaker: "Ая",
        sprite: "assets/characters/aya_serious.png",
        text: "Хм... Раз так спокойно спрашиваешь — ладно. Минут пять назад Рэй уронила свой любимый карандаш. Он укатился прямо под стол учителя. Она полезла его доставать и копошилась там подозрительно долго.",
        choices: [
            { text: "«Спасибо за наводку. Теперь осмотрю твои руки для порядка.»", next: "aya_inspect_hands" },
            { text: "Пойти к Рэй с этим фактом", next: "rei_confront_pencil" }
        ]
    },

    aya_inspect_hands: {
        bg: "assets/bg/classroom_dusk.jpg",
        speaker: "ГГ",
        sprite: "assets/characters/aya_surprised.png",
        text: "(Ая неохотно протягивает руки. Рукава закатаны до локтей, ладони абсолютно сухие, пахнут яблочным кремом. На парте ни капли мела.)",
        choices: [
            { text: "«У тебя чисто, тогда пойду к Рэй.»", next: "rei_start" }
        ]
    },

    // ==========================================
    // ВЕТКА РЭЙ
    // ==========================================
    rei_start: {
        bg: "assets/bg/classroom_dusk.jpg",
        speaker: "Рэй",
        sprite: "assets/characters/rei_calm.png",
        text: "Какая бессмысленная трата времени. У меня завтра решающий экзамен за полугодие. Если у тебя пропали документы — обратись к завучу и не мешай мне повторять химию.",
        choices: [
            { text: "«Ты видела, чтобы Ая подходила к столу учителя?»", next: "rei_deflect_to_aya" },
            { text: "«Ты сама вставала из-за парты, пока я мыл доску?»", next: "rei_deny_movement" },
            { text: "«Хватит строить из себя правильную, отдавай ответы!» (с негативом)", next: "rei_bluff_fail" }
        ]
    },

    rei_deflect_to_aya: {
        bg: "assets/bg/classroom_dusk.jpg",
        speaker: "Рэй",
        sprite: "assets/characters/rei_nervous.png",
        text: "Я... была занята формулами. Но перед звонком Ая демонстративно ходила по кабинету. Кому еще нужны ответы, кроме двоечницы которую вот вот и отчислят?",
        choices: [
            { text: "Вернуться к Ае и обсудить с ней это", next: "aya_confront_alibi" },
            { text: "Внимательно присмотреться к поведению Рэй", next: "rei_inspect_cuff" }
        ]
    },

    rei_deny_movement: {
        bg: "assets/bg/classroom_dusk.jpg",
        speaker: "Рэй",
        sprite: "assets/characters/rei_calm.png",
        text: "Я? За кого ты меня принимаешь? Я иду на красный атестат. Я сидела за третьей партой у окна и даже на метр не приближалась к учительскому столу.",
        choices: [
            { text: "Осмотреть одежду и руки Рэй", next: "rei_inspect_cuff" }
        ]
    },

    rei_bluff_fail: {
        bg: "assets/bg/classroom_dusk.jpg",
        speaker: "Рэй",
        sprite: "assets/characters/rei_smug.png",
        text: "Ого, какие громкие обвинения на пустом месте. У тебя есть хоть одно доказательство? Если нет — заткнись. Когда придет завуч, я скажу, что ты запер нас и занимался самоуправством.",
        choices: [
            { text: "Отойти и срочно искать доказательства", next: "tension_no_clues" }
        ]
    },

    // ==========================================
    // ПЕРЕКРЕСТНЫЙ ДОПРОС И УЛИКИ
    // ==========================================
    aya_confront_alibi: {
        bg: "assets/bg/classroom_dusk.jpg",
        speaker: "Ая",
        sprite: "assets/characters/aya_laugh.png",
        text: "Ха-ха-ха! Серьезно?! Рэй сказала, что я бродила по классу? Я последние пол часа сидела на своём месте и досматривала сериал!",
        choices: [
            { text: "«А что делала сама Рэй?»", next: "aya_talk_calm" }
        ]
    },

    rei_confront_pencil: {
        bg: "assets/bg/classroom_dusk.jpg",
        sfx: "shock.mp3",
        speaker: "ГГ",
        sprite: "assets/characters/rei_nervous.png",
        text: "Рэй, Ая видела, как ты полезла под учительский стол якобы за упавшим карандашом. Ты сидела там на корточках слишком долго.",
        choices: [
            { text: "«Покажи свой правый рукав, Рэй.»", next: "rei_inspect_cuff" }
        ]
    },

    rei_inspect_cuff: {
        bg: "assets/bg/classroom_dusk.jpg",
        speaker: "ГГ",
        sprite: "assets/characters/rei_nervous.png",
        text: "(Я перевожу взгляд на ее блузку. Правый манжет аккуратной формы насквозь сырой, а на ткани расплылось серо-белое пятно от мела. Она только что оперлась им о залитый угол парты.)",
        choices: [
            { text: "Время вышло. Начать решающий разговор.", next: "tension_ready" }
        ]
    },

    // ==========================================
    // КУЛЬМИНАЦИЯ (ЗАКАТ И САСПЕНС)
    // ==========================================
    tension_ready: {
        bg: "assets/bg/classroom_sunset.png",
        bgm: "audio/bgm/mystery.mp3",
        speaker: "ГГ",
        sprite: null,
        text: "На лестнице тяжелые шаги — завуч и учитель подходят к кабинету. Все улики на руках. Пора выносить вердикт.",
        choices: [
            { text: "Обвинить Рэй: «Твой рукав пропитан меловой водой с первой парты!»", next: "rei_breakdown_scene" },
            { text: "Обвинить Аю: «Двойки в четверти — железный мотив!»", next: "bad_end_1" },
            { text: "Растеряться и молчать", next: "tension_no_clues" }
        ]
    },

    tension_no_clues: {
        bg: "assets/bg/classroom_sunset.png",
        bgm: "audio/bgm/mystery.mp3",
        speaker: "ГГ",
        sprite: null,
        text: "За дверью слышен звон ключей. У меня нет четких улик, только догадки. Что делать?!",
        choices: [
            { text: "Попробовать наугад обвинить Аю", next: "bad_end_1" },
            { text: "Попробовать наугад обвинить Рэй", next: "bad_end_teamup" }
        ]
    },

    // ==========================================
    // СРЫВ РЭЙ
    // ==========================================
    rei_breakdown_scene: {
        bg: "assets/bg/classroom_sunset.png",
        sfx: "shock.mp3",
        speaker: "ГГ",
        sprite: "assets/characters/rei_shock.png",
        text: "Когда я мыл доску, я плеснул грязной водой прямо на угол первой парты — в паре сантиметров от конверта. У Аи руки сухие. А твой манжет насквозь в меловой жиже. Ты оперлась о парту, когда воровала ответы!",
        choices: [
            { text: "«Лучше просто верни лист с ответами.»", next: "rei_confession" }
        ]
    },

    rei_confession: {
        bg: "assets/bg/classroom_sunset.png",
        speaker: "Рэй",
        sprite: "assets/characters/rei_crying.png",
        text: "Замолчи... пожалуйста, замолчи! Если я получу хотя бы четверку, отец выгонит меня из дома! Я вчера увидела пробник и поняла, что не решу! Я просто хотела сфотографировать формулы и всё!",
        choices: [
            { text: "«Верни лист обратно в конверт, я ничего не скажу учителю»", next: "ending_true" },
            { text: "«Я обязан рассказать обо всём учителю!»", next: "ending_strict" }
        ]
    },

    // ==========================================
    // 4 ФИНАЛА
    // ==========================================
    bad_end_1: {
        bg: "assets/bg/classroom_sunset.png",
        sfx: "shock.mp3",
        speaker: "Ая",
        sprite: "assets/characters/aya_angry.png",
        text: "Да пошел ты! Обыщи меня, придурок! (Ая со злости опрокидывает рюкзак — там только косметика и наушники. Дверь распахивается, входит учитель. Нас всех ждёт строгий выговор. ФИНАЛ: ЛОЖНЫЙ СЛЕД)",
        choices: [
            { text: "Сыграть заново", next: "start" },
            { text: "В главное меню", next: "menu" }
        ]
    },

    bad_end_teamup: {
        bg: "assets/bg/classroom_sunset.png",
        speaker: "Рэй",
        sprite: "assets/characters/rei_smug.png",
        text: "Ты путаешься в словах и бросаешься обвинениями. (Рэй переглядывается с Аей. Ая усмехается. Дверь открывается, заходит учитель, и обе девушки хором заявляют, что видели, как конверт вскрыл сам дежурный. ФИНАЛ: ПОДСТАВА)",
        choices: [
            { text: "Сыграть заново", next: "start" },
            { text: "В главное меню", next: "menu" }
        ]
    },

    ending_strict: {
        bg: "assets/bg/classroom_sunset.png",
        speaker: "Ая",
        sprite: "assets/characters/aya_disappointed.png",
        text: "Ну ты и стукач, дежурный. (Заходит учитель. Рэй в слезах признается во всем. Экзамен отменяют, Рэй с позором отчисляют. Ты чист, но класс тебя не любит. ФИНАЛ: ФУ ТАКИМ БЫТЬ)",
        choices: [
            { text: "Сыграть заново", next: "start" },
            { text: "В главное меню", next: "menu" }
        ]
    },

    ending_true: {
        bg: "assets/bg/classroom_night.png",
        bgm: "audio/bgm/daily.mp3",
        speaker: "Рэй",
        sprite: "assets/characters/rei_blush.png",
        text: "Спасибо... спасибо вам огромное... Я никогда этого не забуду! (Рэй дрожащими руками аккуратно возвращает лист на место и прижимает надрыв тяжелым словарем.)",
        choices: [
            { text: "Посмотреть на реакцию Аи", next: "ending_true_aya" }
        ]
    },

    ending_true_aya: {
        bg: "assets/bg/classroom_night.png",
        speaker: "Ая",
        sprite: "assets/characters/aya_laugh.png",
        text: "Хах! Довольно неплохо получилось. А с отличницы мы ещё стрясём что-нибудь вкусное! (Дверь открывается, заходит учитель. Всё спокойно. ИСТИННЫЙ ФИНАЛ: ХОРОШАЯ КОНЦОВКА)",
        choices: [
            { text: "Сыграть заново", next: "start" },
            { text: "В главное меню", next: "menu" }
        ]
    }
};

// ==========================================
// ДВИЖОК НОВЕЛЛЫ
// ==========================================
let currentStep = "start";
let isTyping = false;
let typeInterval;
let fullText = "";
let textSpeed = 25;
let currentBgmPath = "";

// DOM Элементы
const mainMenu = document.getElementById("main-menu");
const uiLayer = document.getElementById("ui-layer");
const bgLayer = document.getElementById("bg-layer");
const charSprite = document.getElementById("character-sprite");
const speakerName = document.getElementById("speaker-name");
const nameBox = document.getElementById("name-box");
const dialogueText = document.getElementById("dialogue-text");
const choicesContainer = document.getElementById("choices-container");
const dialogueBox = document.getElementById("dialogue-box");
const bgm = document.getElementById("bgm");
const toast = document.getElementById("toast");

// Меню и модалки
const btnNewGame = document.getElementById("btn-new-game");
const btnContinue = document.getElementById("btn-continue");
const btnMenuSettings = document.getElementById("btn-menu-settings");
const btnCredits = document.getElementById("btn-credits");
const settingsModal = document.getElementById("settings-modal");
const creditsModal = document.getElementById("credits-modal");
const btnCloseSettings = document.getElementById("btn-close-settings");
const btnCloseCredits = document.getElementById("btn-close-credits");
const btnToMainMenu = document.getElementById("btn-to-main-menu");

// Управление звуком и скоростью
const muteToggleBtn = document.getElementById("mute-toggle-btn");
const volumeSlider = document.getElementById("volume-slider");
const speedSlider = document.getElementById("speed-slider");

// Иконки панели интерфейса
const btnSave = document.getElementById("btn-save");
const btnLoad = document.getElementById("btn-load");
const btnGameSettings = document.getElementById("btn-game-settings");
const btnSkip = document.getElementById("btn-skip");
const btnNext = document.getElementById("btn-next");

// Одиночный инстанс для блипа
const blipAudio = new Audio("audio/sfx/blip.mp3");

// Воспроизведение звуковых эффектов
function playSFX(fileName) {
    if (bgm.muted) return;
    const sfx = new Audio(`audio/sfx/${fileName}`);
    sfx.volume = volumeSlider.value;
    sfx.play().catch(() => {});
}

// Плавная смена музыки
function switchBGM(trackPath) {
    if (!trackPath || currentBgmPath === trackPath) return;
    currentBgmPath = trackPath;
    bgm.src = trackPath;
    bgm.volume = bgm.muted ? 0 : volumeSlider.value;
    bgm.play().catch(() => {});
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1500);
}

function checkSaveState() {
    const saved = localStorage.getItem("novel_save_node");
    btnContinue.disabled = !saved;
}
checkSaveState();

// Возврат в главное меню
function goToMainMenu() {
    settingsModal.style.display = "none";
    uiLayer.style.display = "none";
    bgLayer.style.display = "none";
    charSprite.style.display = "none";
    mainMenu.style.display = "flex";
    
    switchBGM("audio/bgm/daily.mp3");
    clearInterval(typeInterval);
    checkSaveState();
}

// Звуковые контролы
muteToggleBtn.addEventListener("click", () => {
    bgm.muted = !bgm.muted;
    muteToggleBtn.textContent = bgm.muted ? "🔇" : "🔊";
});

volumeSlider.addEventListener("input", (e) => {
    const val = parseFloat(e.target.value);
    bgm.volume = val;
    blipAudio.volume = val;
    if (val === 0) {
        bgm.muted = true;
        muteToggleBtn.textContent = "🔇";
    } else {
        bgm.muted = false;
        muteToggleBtn.textContent = "🔊";
    }
});

speedSlider.addEventListener("input", (e) => {
    textSpeed = parseInt(e.target.value);
});

// Запуск музыки при первом клике по меню
window.addEventListener("click", () => {
    if (mainMenu.style.display !== "none" && !currentBgmPath) {
        switchBGM("audio/bgm/daily.mp3");
    }
}, { once: true });

// Кнопки меню
btnNewGame.addEventListener("click", () => {
    playSFX("click.mp3");
    mainMenu.style.display = "none";
    bgLayer.style.display = "block";
    uiLayer.style.display = "flex";
    
    switchBGM("audio/bgm/daily.mp3");
    renderNode("start");
});

btnContinue.addEventListener("click", () => {
    playSFX("click.mp3");
    const savedNode = localStorage.getItem("novel_save_node");
    if (savedNode && story[savedNode]) {
        mainMenu.style.display = "none";
        bgLayer.style.display = "block";
        uiLayer.style.display = "flex";
        
        switchBGM("audio/bgm/daily.mp3");
        renderNode(savedNode);
        showToast("Игра загружена!");
    }
});

btnMenuSettings.addEventListener("click", () => {
    playSFX("click.mp3");
    btnToMainMenu.style.display = "none";
    settingsModal.style.display = "flex";
});

btnCredits.addEventListener("click", () => {
    playSFX("click.mp3");
    creditsModal.style.display = "flex";
});

btnCloseSettings.addEventListener("click", () => {
    playSFX("click.mp3");
    settingsModal.style.display = "none";
});

btnCloseCredits.addEventListener("click", () => {
    playSFX("click.mp3");
    creditsModal.style.display = "none";
});

btnToMainMenu.addEventListener("click", () => {
    playSFX("click.mp3");
    goToMainMenu();
});

// Сохранение и загрузка
btnSave.addEventListener("click", (e) => {
    e.stopPropagation();
    localStorage.setItem("novel_save_node", currentStep);
    playSFX("save.mp3");
    showToast("Игра сохранена!");
    checkSaveState();
});

btnLoad.addEventListener("click", (e) => {
    e.stopPropagation();
    playSFX("click.mp3");
    const savedNode = localStorage.getItem("novel_save_node");
    if (savedNode && story[savedNode]) {
        renderNode(savedNode);
        showToast("Игра загружена!");
    } else {
        showToast("Нет сохранений!");
    }
});

btnGameSettings.addEventListener("click", (e) => {
    e.stopPropagation();
    playSFX("click.mp3");
    btnToMainMenu.style.display = "inline-block";
    settingsModal.style.display = "flex";
});

btnSkip.addEventListener("click", (e) => {
    e.stopPropagation();
    playSFX("click.mp3");
    if (isTyping) {
        finishTyping(story[currentStep].choices);
    }
});

btnNext.addEventListener("click", (e) => {
    e.stopPropagation();
    if (isTyping) {
        playSFX("click.mp3");
        finishTyping(story[currentStep].choices);
    } else if (story[currentStep].choices && story[currentStep].choices.length === 1) {
        playSFX("click.mp3");
        renderNode(story[currentStep].choices[0].next);
    }
});

// Отрисовка сцены
function renderNode(nodeKey) {
    const node = story[nodeKey];
    currentStep = nodeKey;
    fullText = node.text;

    bgLayer.src = node.bg;

    if (node.bgm) {
        switchBGM(node.bgm);
    }

    if (node.sfx) {
        playSFX(node.sfx);
    }

    if (node.sprite) {
        charSprite.src = node.sprite;
        charSprite.style.display = "block";
    } else {
        charSprite.style.display = "none";
    }

    if (node.speaker) {
        speakerName.textContent = node.speaker;
        nameBox.style.display = "flex";
    } else {
        nameBox.style.display = "none";
    }

    dialogueText.textContent = "";
    choicesContainer.innerHTML = "";
    
    startTypewriter(node.choices);
}

function startTypewriter(choices) {
    isTyping = true;
    let i = 0;
    clearInterval(typeInterval);

    typeInterval = setInterval(() => {
        dialogueText.textContent += fullText.charAt(i);

        if (i % 3 === 0 && fullText.charAt(i) !== " " && !bgm.muted) {
            blipAudio.currentTime = 0;
            blipAudio.volume = volumeSlider.value;
            blipAudio.play().catch(() => {});
        }

        i++;
        if (i >= fullText.length) {
            finishTyping(choices);
        }
    }, textSpeed);
}

function finishTyping(choices) {
    clearInterval(typeInterval);
    dialogueText.textContent = fullText;
    isTyping = false;

    if (choices) {
        choices.forEach(choice => {
            const btn = document.createElement("button");
            btn.className = "choice-btn";
            btn.textContent = choice.text;
            
            btn.onclick = () => {
                playSFX("click.mp3");
                if (choice.next === "menu") {
                    goToMainMenu();
                } else if (choice.next === "start") {
                    renderNode("start");
                } else {
                    renderNode(choice.next);
                }
            };
            choicesContainer.appendChild(btn);
        });
    }
}

dialogueBox.addEventListener("click", (e) => {
    if (e.target.classList.contains("ui-icon")) return;
    if (isTyping) {
        playSFX("click.mp3");
        finishTyping(story[currentStep].choices);
    }
});