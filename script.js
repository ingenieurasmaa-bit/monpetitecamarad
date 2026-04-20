// ============= بيانات المناطق والمواقف =============
const locations = [
    // 1. منطقة البيت 🏠
    {
        id: "home",
        name: "البيت",
        icon: "🏠",
        color: "#10b981",
        completed: false,
        unlocked: true,
        score: 0,
        maxScore: 50,
        scenarios: [
            { id: 1, scenario: "طلبت منك أمك مساعدتها في تنظيف المنزل وأنت تلعب. ماذا تفعل؟", correctAnswer: "أوقف اللعب وأساعد أمي", answers: ["أوقف اللعب وأساعد أمي","أكمل اللعب وأتجاهلها", "أقول سأساعدك بعد قليل ولا أساعد", "أغضب وأبكي"], explanation: "مساعدة الأم من أهم الواجبات. الله يحب البارين بوالديهم.", lesson: "بر الوالدين", image: "صور/البيت1.jpg" },
            { id: 2, scenario: "أخوك الصغير يبكي لأنه وقع. ماذا تفعل؟", correctAnswer: "أسارع لمساعدته وأواسيه", answers: ["أتجاهله وأكمل لعبي", "أضحك عليه", "أخبر أمي فقط","أسارع لمساعدته وأواسيه"], explanation: "مساعدة الأخوة هي جزء من صلة  الرحم ", lesson: " صلة الرحم ", image:  "صور/البيت2.jpg" },
            { id: 3, scenario: "والدك متعب بعد يوم عمل طويل . ماذا تفعل؟", correctAnswer: "أسأله ان  كان محتاج لمساعدته في  شيء ", answers: ["أطلب منه أن يلعب معي", "أرفع صوت التلفاز", "أسأله ان  كان محتاج لمساعدته في  شيء ", "أخرج للعب في الشارع"], explanation: "تقدير تعب الوالدين من علامات البر.", lesson: "احسان  الى  الوالدين", image:  "صور/البيت3.jpg" },
            { id: 4, scenario: "جدتك جاءت لزيارتكم. ماذا تفعل؟", correctAnswer: "أرحب بها وأقبل رأسها", answers: ["أستمر في اللعب", "أخرج من الغرفة", "أرحب بها وأقبل رأسها", "أتظاهر بالنوم"], explanation: "احترام الكبار وإكرام الضيف من الأخلاق الحميدة.", lesson: "إكرام الضيف", image:  "صور/البيت4.jpg" },
            { id: 5, scenario: "انتهى وقت الطعام ورأيت أن أمي لم تأكل بعد. ماذا تفعل؟", correctAnswer: "أذكرها بتناول الطعام وأجلس معها", answers: ["أكمل طعامي وأغادر", "أذكرها بتناول الطعام وأجلس معها","أصرخ في وجهها", "آخذ طبقها"], explanation: "الاهتمام بالآخرين من علامات الشخص الطيب.", lesson: "الاهتمام بالآخرين", image: "صور/البيت5.jpg" }
        ]
    },
    // 2. منطقة المدرسة 🏫
    {
        id: "school",
        name: "المدرسة",
        icon: "🏫",
        color: "#3b82f6",
        completed: false,
        unlocked: false,
        score: 0,
        maxScore: 50,
        scenarios: [
            { id: 6, scenario: "زميلك في الفصل يبكي لأنه أضاع قلمه. ماذا تفعل؟", correctAnswer: "أشاركه قلماً من أقلامي", answers: ["أشاركه قلماً من أقلامي","أضحك عليه", "أتجاهله", "أخبر المعلم"], explanation: "المشاركة تساعد الآخرين وتزيد المحبة.", lesson: "فعل الخير ", image: "صور/المدرسة1.jpg" },
            { id: 7, scenario: "المعلم يشرح الدرس وأنت تشعر بالملل. ماذا تفعل؟", correctAnswer: "أنتبه للشرح وأحاول التركيز", answers: ["ألعب مع زميلي", "أنظر من النافذة", "أنام على المكتب","أنتبه للشرح وأحاول التركيز"], explanation: "الانتباه في الدرس احترام للمعلم.", lesson: "احترام المعلم", image: "صور/المدرسة2.jpg" },
            { id: 8, scenario: "رأيت طعاماً وقع من زميلك على الأرض. ماذا تفعل؟", correctAnswer: "أساعده في تنظيف المكان", answers: ["أمر بجانبه", "أساعده في تنظيف المكان", "أقول للمعلم", "أتركه وحده"], explanation: "مساعدة الآخرين في المواقف المحرجة تجعلهم يشعرون بالامتنان.", lesson: "مساعدة الآخرين", image: "صور/المدرسة3.jpg" },
            { id: 9, scenario: "زميل جديد انضم إلى الفصل ويبدو خائفاً. ماذا تفعل؟", correctAnswer: "أجلس بجانبه وأعرفه على الأصدقاء", answers: ["أتجاهله", "أجلس بجانبه وأعرفه على الأصدقاء","أضحك عليه", "أخبره أن يذهب"], explanation: "ترحيبك بالجديد يجعله يشعر بالأمان.", lesson: " الرحمة", image: "صور/المدرسة4.png" },
            { id: 10, scenario: "المعلم يطلب متطوعاً لتنظيف السبورة. ماذا تفعل؟", correctAnswer: "أتطوع بسرعة", answers: ["أنظر بعيداً", "أتظاهر بأني مشغول", "أنتظر أحداً آخر","أتطوع بسرعة" ], explanation: "المبادرة بالمساعدة صفة جميلة.", lesson: "المبادرة", image: "صور/المدرسة5.jpg" }
        ]
    },
    // 3. منطقة الشارع 🛣️
    {
        id: "street",
        name: "الشارع",
        icon: "🛣️",
        color: "#f59e0b",
        completed: false,
        unlocked: false,
        score: 0,
        maxScore: 50,
        scenarios: [
            { id: 11, scenario: "رأيت طفلاً صغيراً يبكي ويبحث عن أمه. ماذا تفعل؟", correctAnswer: "أساعده وأخذه إلى مكان آمن وأسأل الكبار", answers: ["أمر بجانبه", "أبكي معه", "أتركه", "أساعده وأخذه إلى مكان آمن وأسأل الكبار"], explanation: "مساعدة الطفل الضائع واجب إنساني.", lesson: "مساعدة المحتاج", image: "صور/الشارع1.jpg" },
            { id: 12, scenario: "رجل كبير بالسن يحمل أغراضاً ثقيلة. ماذا تفعل؟", correctAnswer: "أعرض عليه المساعدة في الحمل", answers: ["أمر بجانبه","أعرض عليه المساعدة في الحمل","أصوره بالهاتف", "أتظاهر بعدم الرؤية"], explanation: "مساعدة كبار السن من أفضل الأعمال.", lesson: "مساعدة كبار السن", image: "صور/الشارع2.jpg" },
            { id: 13, scenario: "رأيت قطة جائعة في الشارع. ماذا تفعل؟", correctAnswer: "أعطيها بعض الطعام إن أمكن", answers: ["أعطيها بعض الطعام إن أمكن","أمر بجانبها", "أخافها", "أرمي عليها حجراً"], explanation: "الرفق بالحيوان من الإيمان.", lesson: "الرفق", image: "صور/الشارع3.jpg" },
            { id: 14, scenario: "شخص أسقط محفظته دون أن يشعر. ماذا تفعل؟", correctAnswer: "ألتقطها وألحق به لأعيدها", answers: ["آخذها لنفسي","ألتقطها وألحق به لأعيدها", "أتركها مكانها", "أفتحها لأنظر ماذا بداخلها"], explanation: "رد الأمانة من أهم الصفات.", lesson: "الأمانة", image:"صور/الشارع4.jpg" },
            { id: 15, scenario: "شخص يعبر الشارع من مكان غير مخصص. ماذا تفعل؟", correctAnswer: "أنصحه بلطف باستخدام ممر المشاة", answers: ["أنصحه بلطف باستخدام ممر المشاة","أصرخ فيه", "أتجاهله", "أفعل مثله"], explanation: "النصيحة بلطف تنقذ الأرواح.", lesson: "النصيحة", image: "صور/الشارع5.jpg" }
        ]
    },
    // 4. منطقة المسجد 🕌 (جديدة)
    {
        id: "mosque",
        name: "المسجد",
        icon: "🕌",
        color: "#8b5cf6",
        completed: false,
        unlocked: false,
        score: 0,
        maxScore: 90, 
        scenarios: [
            { id: 16, scenario: "حان وقت صلاة الظهر، لكنك منشغل بلعبة الفيديو. ماذا تفعل؟", correctAnswer: "أوقف اللعب وأذهب لصلاة الظهر", answers: ["أكمل اللعب وبعدها أصلي", "أقول سأصلي قضاءً", "أصلي وأنا ألعب","أوقف اللعب وأذهب لصلاة الظهر"], explanation: "الصلاة عمود الدين، ويجب تقديمها على أي شيء.", lesson: "أهمية الصلاة", image: "صور/المسجد1.jpg" },
            { id: 17, scenario: "دخلت المسجد ورأيت أحد المصلين يسرق شيئاً. ماذا تفعل؟", correctAnswer: "أخبر إمام المسجد أو المسؤول", answers: ["أخبر إمام المسجد أو المسؤول","أتظاهر بأني لم أرَ شيئاً", "أصرخ فيه أمام الناس", "أصوره بالفيديو"], explanation: "الأمر بالمعروف والنهي عن المنكر واجب بالحكمة والموعظة الحسنة.", lesson: "الغيرة على حرمات الله", image: "صور/المسجد2.jpg" },
            { id: 18, scenario: "شخص بجانبك في المسجد يلهو ويلعب بالهاتف أثناء الخطبة. ماذا تفعل؟", correctAnswer: "أشير إليه بلطف ليوقف اللعب", answers: ["أصرخ فيه أمام الناس", "أفعل مثله", "أشير إليه بلطف ليوقف اللعب", "أخرج من المسجد"], explanation: "احترام المسجد والاستماع للخطبة من آداب الجمعة.", lesson: "آداب المسجد", image: "صور/المسجد3.jpg" },
            { id: 19, scenario: "رأيت طفلاً صغيراً يلعب في المسجد ويضايق المصلين. ماذا تفعل؟", correctAnswer: "أنبهه بلطف وأخبره أن المسجد للصلاة", answers: ["أتركه وشأنه", "أنبهه بلطف وأخبره أن المسجد للصلاة","أصرخ فيه بعنف", "أضربه"], explanation: "تعليم الأطفال آداب المسجد بالأسلوب اللطيف.", lesson: "تعليم الآخرين", image: "صور/المسجد4.jpg" },
            { id: 20, scenario: "نسيت أن تكون على وضوء ودخلت وقت الصلاة. ماذا تفعل؟", correctAnswer: "أذهب لأتوضأ ثم أصلي", answers: ["أصلي بدون وضوء", "أنتظر حتى أكون في البيت", "أؤخر الصلاة","أذهب لأتوضأ ثم أصلي"], explanation: "الوضوء شرط لصحة الصلاة، لا تصح الصلاة بدونه.", lesson: "أهمية الوضوء", image: "صور/المسجد5.jpg" },
            { id: 21, scenario: "المسجد بعيد قليلاً، هل تذهب ماشياً أم تركض؟", correctAnswer: "أذهب ماشياً بهدوء وسكينة", answers: ["أركض بسرعة", "أذهب ماشياً بهدوء وسكينة", "أذهب بالسيارة ولو لمسافة قصيرة", "لا أذهب"], explanation: "السكينة والوقار من آداب الذهاب إلى المسجد.", lesson: "آداب المشي للمسجد", image: "صور/المسجد6.png" },
            { id: 22, scenario: "دخلت والإمام يصلي، ماذا تفعل؟", correctAnswer: "أكبر مع الإمام وأدخل في الصلاة", answers: ["أنتظر حتى يسلم", "أصلي منفرداً بجانبه", "أكبر مع الإمام وأدخل في الصلاة", "أخرج ولا أصلي"], explanation: "يدرك المسبوق فضل الجماعة ولو أدرك ركعة.", lesson: "فضل صلاة الجماعة", image: "صور/المسجد7.png" },
            { id: 23, scenario: "شخص يأكل ثوماً أو بصلًا ثم يأتي للمسجد. ماذا تفعل؟", correctAnswer: "أنصحه بلطف بعدم فعل ذلك مرة أخرى", answers: ["أبتعد عنه وأتضايق", "أخبر الإمام بصوت عالٍ", "أنصحه بلطف بعدم فعل ذلك مرة أخرى", "أضربه"], explanation: "النهي عن أكل ما يسبب رائحة كريهة عند قصد المسجد.", lesson: "احترام المصلين", image: "صور/المسجد8.png" },
            { id: 24, scenario: "سمعت النداء بالصلاة (الأذان) وأنت في السوق. ماذا تفعل؟", correctAnswer: "أذهب فوراً للمسجد", answers: ["أكمل التسوق", "أذهب بعد قليل", "أذهب فوراً للمسجد", "لا أذهب"], explanation: "الاستجابة للأذان من علامات الإيمان.", lesson: "الاستجابة لله", image: "صور/المسجد9.png" }
        ]
    }
];

// ============= إعدادات الفيديوهات المساعدة =============
// دالة لتحويل رابط يوتيوب العادي إلى رابط embed
function convertToEmbedUrl(youtubeUrl) {
    let videoId = "";
    const patterns = [
        /youtube\.com\/watch\?v=([^&]+)/,
        /youtu\.be\/([^?]+)/,
        /youtube\.com\/embed\/([^?]+)/
    ];
    for (const pattern of patterns) {
        const match = youtubeUrl.match(pattern);
        if (match) {
            videoId = match[1];
            break;
        }
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}` : youtubeUrl;
}

// فيديوهات منطقة البيت
const homeVideos = [
    "https://youtu.be/Zhak9yIZfxY?si=fQ2bK8cM9p9E1_3L",
    "https://youtu.be/AfCnWSbD55Y?si=TvPhWv4Te2iuFmr1",
    "https://youtu.be/pt8bvwTf4JI?si=jW_PrDDbVIB5FNjS",
    "https://youtu.be/8o-Avc2ubnI?si=PASQYNvLQgbQyhws",
    "https://youtu.be/9Df-_ZzPeVw?si=as2nVo5taV4Fjk3r",
    "https://youtu.be/uN20pUBpczc?si=x_HSs6HfBr-W__mg",
    "https://youtu.be/fDG9oTic28g?si=FXJnqiVw2LUuKNq9",
    "https://youtu.be/dJvXqe2h-Os?si=JreUaFEP5a76sZiU",
    "https://youtu.be/YzyZtG8gr2E?si=G-_nGVMEa_IbIMG7",
    "https://youtu.be/BW0QaGr3r6k?si=mDktDoJ4Hjc72K4K"
].map(convertToEmbedUrl);

// فيديوهات منطقة المدرسة والشارع
const schoolStreetVideos = [
    "https://youtu.be/jmVjwR7dIKg?si=M-FGvFKWbsxs3b8E",
    "https://youtu.be/7fGQ56an_mk?si=ZI-vjezBpgWRnAhF",
    "https://youtu.be/Rr4jhMKpzhA?si=XpNldFJGu5CEvmq-",
    "https://youtu.be/Gi1n3au8oMY?si=LcsRhJQGv0VUtWcD",
    "https://youtu.be/HJ0dFgpSWkc?si=SR_ps7zNwG1JTfFs",
    "https://youtu.be/1KvwfkQ4sqA?si=COyMUvzu-WaRpg-l",
    "https://youtu.be/kxcuk7WCpyo?si=PjkGScyJXatyMZ0Y",
    "https://youtu.be/rubM3do6Eko?si=x2MOr4HVLUkPUI7I",
    "https://youtu.be/QgSHYim2zBY?si=WAeHKgtgPdmlkLvh",
    "https://youtu.be/OHhJdeq8Ebo?si=Ilsf48Q3yqAmbGS-"
].map(convertToEmbedUrl);

// فيديوهات منطقة المسجد
const mosqueVideos = [
    "https://youtu.be/3ni4zVT1TsI?si=tv1etonPQyAk5YJK",
    "https://youtu.be/x_wgPzu5MFA?si=sXjbrw10PMUQ_uSV",
    "https://youtu.be/5GtS69nP4gY?si=ht-nl8QUYMsu0l9E",
    "https://youtu.be/eNiX4-LXUUU?si=RLiaA2hm_9thSYI-",
    "https://youtu.be/rZ4-hUfFmh4?si=WT2jJ8iPUi1aIxSX",
    "https://youtu.be/MDgtFMR3-fo?si=dK0NcBIcQ6wC5_Gi",
    "https://youtu.be/yuEY5gWam6Q?si=EosHDlIpFF5NdU65",
    "https://youtu.be/HotCPz0Ms_E?si=kZffT6rBpRGQxOCd",
    "https://youtu.be/zN8z4wt5i6w?si=ShrC48w9VN56WETC"
].map(convertToEmbedUrl);

// دالة لجلب فيديو عشوائي حسب المنطقة
function getRandomVideoForLocation(locationId) {
    let videoList = [];
    if (locationId === "home") {
        videoList = homeVideos;
    } else if (locationId === "mosque") {
        videoList = mosqueVideos;
    } else {
        videoList = schoolStreetVideos;
    }
    
    if (videoList.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * videoList.length);
    return videoList[randomIndex];
}

// ============= متغيرات اللعبة =============
let kidName = "";
let currentLocation = null;
let currentScenarioIndex = 0;
let currentCombo = 0;
let helpUsedInCurrentQuestion = false;
let videoCheckInterval = null;
let videoEnded = false;
let audioContext = null;
let soundEnabled = true;

// أصوات (تم إزالة صوت التهاني)
let clapBuffer = null, wrongBuffer = null;

// ============= دوال الصوت مع أصوات احتياطية (بدون موسيقى) =============

function playFallbackClap() {
    if (!audioContext || !soundEnabled) return;
    try {
        const now = audioContext.currentTime;
        const gainNode = audioContext.createGain();
        gainNode.connect(audioContext.destination);
        gainNode.gain.value = 0.25;
        
        const osc = audioContext.createOscillator();
        osc.type = 'triangle';
        osc.frequency.value = 1200;
        osc.connect(gainNode);
        osc.start();
        osc.stop(now + 0.08);
        
        const bufferSize = 4096;
        const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
        const noise = audioContext.createBufferSource();
        noise.buffer = buffer;
        noise.connect(gainNode);
        noise.start();
        noise.stop(now + 0.12);
        
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
    } catch(e) { console.log("خطأ في الصوت الاحتياطي"); }
}

function playFallbackWrong() {
    if (!audioContext || !soundEnabled) return;
    try {
        const now = audioContext.currentTime;
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.type = 'sawtooth';
        osc.frequency.value = 220;
        osc.connect(gain);
        gain.connect(audioContext.destination);
        gain.gain.value = 0.35;
        osc.start();
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
        osc.stop(now + 0.45);
    } catch(e) {}
}

async function loadSoundFromFile(url, soundName) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const arrayBuffer = await response.arrayBuffer();
        return await audioContext.decodeAudioData(arrayBuffer);
    } catch (error) {
        console.log(`⚠️ فشل تحميل ${soundName}، سيتم استخدام الصوت الاحتياطي`);
        return null;
    }
}

async function initAudio() {
    const statusDiv = document.getElementById('soundStatus');
    if (statusDiv) statusDiv.textContent = "🎵 جاري تجهيز الأصوات...";
    
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // محاولة تحميل الأصوات من ملفات محلية
    const clapFile = await loadSoundFromFile('sounds/clap.wav', 'تصفيق');
    const wrongFile = await loadSoundFromFile('sounds/wrong.wav', 'خطأ');
    
    clapBuffer = clapFile;
    wrongBuffer = wrongFile;
    
    if (statusDiv) {
        if (clapBuffer && wrongBuffer) {
            statusDiv.textContent = "🎵 جميع الأصوات جاهزة!";
        } else {
            statusDiv.textContent = "🎵 سيتم استخدام الأصوات الاحتياطية";
        }
        
        setTimeout(() => {
            statusDiv.style.opacity = '0.5';
            setTimeout(() => statusDiv.style.display = 'none', 2000);
        }, 3000);
    }
}

function playSound(buffer) {
    if (!soundEnabled || !audioContext || !buffer) return false;
    try {
        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.start();
        return true;
    } catch(e) { return false; }
}

function playClapSound() {
    if (!soundEnabled) return;
    if (clapBuffer) {
        playSound(clapBuffer);
    } else {
        playFallbackClap();
    }
}

function playWrongSound() {
    if (!soundEnabled) return;
    if (wrongBuffer) {
        playSound(wrongBuffer);
    } else {
        playFallbackWrong();
    }
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    const btn = document.getElementById('soundToggleBtn');
    if (btn) btn.textContent = soundEnabled ? '🔊' : '🔇';
    if (soundEnabled && audioContext && audioContext.state === 'suspended') {
        audioContext.resume();
    }
}

// ============= دوال المساعدة (باستخدام الفيديوهات الجديدة) =============
function showHelpVideo() {
    if (helpUsedInCurrentQuestion) { 
        alert("لقد استخدمت المساعدة في هذا السؤال بالفعل!"); 
        return; 
    }
    
    // اختيار فيديو مناسب حسب المنطقة الحالية
    const videoUrl = getRandomVideoForLocation(currentLocation.id);
    if (!videoUrl) { 
        alert("الرجاء إضافة روابط الفيديوهات!"); 
        return; 
    }
    
    videoEnded = false;
    if (videoCheckInterval) clearInterval(videoCheckInterval);
    
    const modal = document.getElementById('videoModal');
    const frame = document.getElementById('videoFrame');
    frame.src = videoUrl;
    modal.classList.remove('hidden');
    
    const confirmBtn = document.getElementById('confirmWatchBtn');
    confirmBtn.disabled = true;
    confirmBtn.className = 'watch-btn-disabled px-6 py-2 rounded-full font-bold transition';
    confirmBtn.textContent = '⏳ انتظر انتهاء الفيديو...';
    
    const watchStatus = document.getElementById('watchStatus');
    watchStatus.innerHTML = '⏳ جاري مشاهدة الفيديو... يجب الانتظار حتى النهاية ⏳';
    
    const progressMsg = document.getElementById('videoProgressMsg');
    let elapsedSeconds = 0;
    const ESTIMATED_DURATION = 90; // مدة أطول قليلاً للفيديوهات التعليمية
    
    videoCheckInterval = setInterval(() => {
        elapsedSeconds++;
        progressMsg.textContent = `📺 جاري المشاهدة... ${elapsedSeconds} / ${ESTIMATED_DURATION} ثانية`;
        if (elapsedSeconds >= ESTIMATED_DURATION && !videoEnded) {
            videoEnded = true;
            clearInterval(videoCheckInterval);
            confirmBtn.disabled = false;
            confirmBtn.className = 'watch-btn-enabled px-6 py-2 rounded-full font-bold transition';
            confirmBtn.textContent = '✅ نعم، لقد شاهدت الفيديو - احذف لي إجابة';
            watchStatus.innerHTML = '✅ تم مشاهدة الفيديو! يمكنك الآن حذف إجابة خاطئة ✅';
            progressMsg.textContent = '✨ اكتملت المشاهدة! اضغط على الزر الآن ✨';
        }
    }, 1000);
    
    window.pendingHelpCallback = () => {
        helpUsedInCurrentQuestion = true;
        deleteRandomWrongAnswer();
    };
}

function deleteRandomWrongAnswer() {
    const scenario = currentLocation.scenarios[currentScenarioIndex];
    const correctAnswer = scenario.correctAnswer;
    const buttons = document.querySelectorAll('#answersContainer button');
    
    const wrongAnswers = [];
    for (let i = 0; i < buttons.length; i++) {
        const btn = buttons[i];
        if (!btn.classList.contains('deleted-answer') && btn.textContent !== correctAnswer) {
            wrongAnswers.push(btn);
        }
    }
    if (wrongAnswers.length === 0) { 
        alert("لا توجد إجابات خاطئة للحذف!"); 
        return; 
    }
    
    const randomBtn = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
    randomBtn.disabled = true;
    randomBtn.classList.add('deleted-answer');
    
    const msg = document.createElement('div');
    msg.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-6 py-3 rounded-full text-xl z-50 animate-bounce';
    msg.textContent = '🗑️ تم حذف إجابة خاطئة!';
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 2000);
}

function closeVideoModal(confirmWatched) {
    if (videoCheckInterval) clearInterval(videoCheckInterval);
    document.getElementById('videoModal').classList.add('hidden');
    document.getElementById('videoFrame').src = '';
    if (confirmWatched && videoEnded && window.pendingHelpCallback) {
        window.pendingHelpCallback();
    } else if (confirmWatched && !videoEnded) {
        alert("⚠️ يجب مشاهدة الفيديو حتى النهاية أولاً!");
    }
    window.pendingHelpCallback = null;
}

// ============= دوال اللعبة الرئيسية (بدون تغيير) =============
function showNameScreen() {
    document.getElementById('welcomeScreen').classList.add('hidden');
    document.getElementById('nameScreen').classList.remove('hidden');
}

function saveNameAndStart() {
    kidName = document.getElementById('kidName').value.trim();
    if (!kidName) { alert("من فضلك اكتب اسمك أولاً!"); return; }
    document.getElementById('nameScreen').classList.add('hidden');
    initAudio();
    showMap();
}

function showMap() {
    document.getElementById('mapScreen').classList.remove('hidden');
    document.getElementById('questionArea').classList.add('hidden');
    renderMap();
    updateTotalScoreDisplay();
}

function renderMap() {
    const container = document.getElementById('mapContainer');
    container.innerHTML = '';
    
    locations.forEach((loc) => {
        const div = document.createElement('div');
        div.className = `map-location ${loc.completed ? 'completed' : ''} ${!loc.unlocked ? 'locked' : ''}`;
        if (loc.unlocked && !loc.completed) div.classList.add('active');
        
        const starsCount = Math.floor(loc.score / 10);
        const stars = '⭐'.repeat(starsCount) + '☆'.repeat(5 - starsCount);
        
        div.innerHTML = `
            <div class="location-icon">${loc.icon}</div>
            <div class="location-name">${loc.name}</div>
            <div class="location-stars">${stars}</div>
            <div class="location-progress">${loc.score}/${loc.maxScore} نقطة</div>
            ${loc.completed ? '<div class="text-green-600 text-sm mt-2">✅ مكتمل</div>' : ''}
            ${!loc.unlocked ? '<div class="text-gray-500 text-sm mt-2">🔒 أكمل المنطقة السابقة أولاً</div>' : ''}
        `;
        
        if (loc.unlocked && !loc.completed) {
            div.style.cursor = 'pointer';
            div.onclick = () => startLocation(loc.id);
        } else if (!loc.unlocked) {
            div.style.cursor = 'not-allowed';
        }
        
        container.appendChild(div);
    });
}

function startLocation(locationId) {
    currentLocation = locations.find(l => l.id === locationId);
    currentScenarioIndex = 0;
    currentCombo = 0;
    helpUsedInCurrentQuestion = false;
    document.getElementById('mapScreen').classList.add('hidden');
    document.getElementById('questionArea').classList.remove('hidden');
    
    const locationIcon = document.getElementById('locationIcon');
    const locationName = document.getElementById('locationName');
    locationIcon.textContent = currentLocation.icon;
    locationName.textContent = currentLocation.name;
    updateLocationProgressDisplay();
    
    showQuestion();
}

function updateLocationProgressDisplay() {
    const progressSpan = document.getElementById('locationProgress');
    progressSpan.textContent = `📊 ${currentScenarioIndex + 1}/${currentLocation.scenarios.length}`;
}

function updateTotalScoreDisplay() {
    const totalScore = locations.reduce((sum, loc) => sum + loc.score, 0);
    document.getElementById('totalScore').textContent = totalScore;
    document.getElementById('mapTotalScore').textContent = totalScore;
    
    const percentage = (totalScore / (locations.length * 50)) * 100;
    const badge = document.getElementById('levelBadge');
    if (percentage >= 80) { badge.innerHTML = '🥇 ذهبي'; badge.className = 'level-badge level-gold text-sm px-3 py-1'; }
    else if (percentage >= 50) { badge.innerHTML = '🥈 فضي'; badge.className = 'level-badge level-silver text-sm px-3 py-1'; }
    else { badge.innerHTML = '🥉 برونزي'; badge.className = 'level-badge level-bronze text-sm px-3 py-1'; }
}

function updateComboUI() {
    const comboDiv = document.getElementById('comboCounter');
    const comboCountSpan = document.getElementById('comboCount');
    if (currentCombo >= 2) {
        comboDiv.classList.remove('hidden');
        comboCountSpan.textContent = currentCombo;
    } else {
        comboDiv.classList.add('hidden');
    }
}

function showQuestion() {
    helpUsedInCurrentQuestion = false;
    const scenario = currentLocation.scenarios[currentScenarioIndex];
    const questionContent = document.getElementById('questionContent');
    const answersContainer = document.getElementById('answersContainer');
    updateLocationProgressDisplay();
    
    questionContent.innerHTML = `
        <div class="scenario-layout">
            <div class="flex-shrink-0">
                <img src="${scenario.image}" class="situation-circle" onerror="this.src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'">
            </div>
            <div class="scenario-text-box">
                <div class="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 border-2 border-yellow-300">
                    <p class="text-xl text-gray-700 leading-relaxed">${scenario.scenario}</p>
                </div>
            </div>
        </div>
        <p class="text-lg font-bold text-center text-purple-700 mt-4">🤔 ماذا تفعل في هذا الموقف؟</p>
    `;
    
    answersContainer.innerHTML = '';
    scenario.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-box';
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });
    
    const helpBtn = document.getElementById('helpButton');
    helpBtn.disabled = false;
    helpBtn.style.opacity = '1';
}

function selectAnswer(answerIndex) {
    const scenario = currentLocation.scenarios[currentScenarioIndex];
    const buttons = document.querySelectorAll('#answersContainer button');
    
    if (buttons[answerIndex].classList.contains('deleted-answer')) {
        alert("⚠️ هذه الإجابة تم حذفها! اختر إجابة أخرى.");
        return;
    }
    
    const isCorrect = answerIndex === scenario.answers.indexOf(scenario.correctAnswer);
    buttons.forEach(btn => btn.disabled = true);
    document.getElementById('helpButton').disabled = true;
    
    if (isCorrect) {
        let pointsEarned = 10;
        currentCombo++;
        if (currentCombo >= 2) pointsEarned += Math.min(currentCombo * 2, 10);
        currentLocation.score += pointsEarned;
        if (currentLocation.score > currentLocation.maxScore) currentLocation.score = currentLocation.maxScore;
        buttons[answerIndex].classList.add('correct-answer');
        playClapSound();
        showFeedback(true, scenario.explanation, scenario.lesson, pointsEarned);
        createStarsEffect();
    } else {
        currentCombo = 0;
        buttons[answerIndex].classList.add('wrong-answer');
        buttons[scenario.answers.indexOf(scenario.correctAnswer)].classList.add('correct-answer');
        playWrongSound();
        showFeedback(false, scenario.explanation, scenario.lesson, 0);
        createCloudEffect();
    }
    updateTotalScoreDisplay();
    updateComboUI();
}

function createStarsEffect() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.className = 'floating-emoji';
            star.textContent = '⭐';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            document.body.appendChild(star);
            setTimeout(() => star.remove(), 2000);
        }, i * 50);
    }
}

function createCloudEffect() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const cloud = document.createElement('div');
            cloud.className = 'floating-emoji';
            cloud.textContent = '☁️';
            cloud.style.left = Math.random() * 100 + '%';
            cloud.style.top = Math.random() * 100 + '%';
            document.body.appendChild(cloud);
            setTimeout(() => cloud.remove(), 2000);
        }, i * 50);
    }
}

function showFeedback(isCorrect, explanation, lesson, bonus) {
    const feedbackContent = document.getElementById('feedbackContent');
    const characterDiv = document.getElementById('feedbackCharacter');
    if (isCorrect) {
        characterDiv.innerHTML = '<div class="text-6xl">😄</div>';
        feedbackContent.innerHTML = `<div class="text-center"><h3 class="text-3xl font-bold text-green-600 mb-4">🎉 إجابة ممتازة! 🎉</h3>${bonus > 10 ? `<div class="bg-yellow-100 rounded-xl p-3 mb-4">🔥 مكافأة كومبو! +${bonus} نقطة</div>` : ''}<div class="bg-green-50 rounded-2xl p-6 mb-6"><h4 class="font-bold text-lg mb-3">📖 الشرح:</h4><p class="text-gray-700 text-lg">${explanation}</p></div><div class="bg-purple-50 rounded-2xl p-6"><h4 class="font-bold text-lg mb-3">🎯 ماذا تعلمت؟</h4><p class="text-gray-700 text-lg">${lesson}</p></div></div>`;
    } else {
        characterDiv.innerHTML = '<div class="text-6xl">😢</div>';
        feedbackContent.innerHTML = `<div class="text-center"><h3 class="text-3xl font-bold text-orange-600 mb-4">📚 دعني أساعدك للتعلم</h3><div class="bg-orange-50 rounded-2xl p-6 mb-6"><h4 class="font-bold text-lg mb-3">📖 الشرح:</h4><p class="text-gray-700 text-lg">${explanation}</p></div><div class="bg-purple-50 rounded-2xl p-6"><h4 class="font-bold text-lg mb-3">🎯 ماذا تعلمت؟</h4><p class="text-gray-700 text-lg">${lesson}</p></div></div>`;
    }
    document.getElementById('feedbackModal').classList.remove('hidden');
}

function continueToNext() {
    document.getElementById('feedbackModal').classList.add('hidden');
    currentScenarioIndex++;
    
    if (currentScenarioIndex < currentLocation.scenarios.length) {
        showQuestion();
    } else {
        currentLocation.completed = true;
        const currentIndex = locations.findIndex(l => l.id === currentLocation.id);
        if (currentIndex + 1 < locations.length) {
            locations[currentIndex + 1].unlocked = true;
        }
        
        const allCompleted = locations.every(l => l.completed);
        if (allCompleted) {
            showGameComplete();
        } else {
            showMap();
        }
    }
}

function showGameComplete() {
    // تم إزالة صوت التهاني
    const totalScore = locations.reduce((sum, loc) => sum + loc.score, 0);
    document.getElementById('finalTotalScore').textContent = totalScore;
    document.getElementById('questionArea').classList.add('hidden');
    document.getElementById('mapScreen').classList.add('hidden');
    document.getElementById('gameComplete').classList.remove('hidden');
    
    const percentage = (totalScore / (locations.length * 50)) * 100;
    let levelText = '';
    if (percentage >= 80) levelText = '🥇 مستوى ذهبي';
    else if (percentage >= 50) levelText = '🥈 مستوى فضي';
    else levelText = '🥉 مستوى برونزي';
    document.getElementById('finalLevel').innerHTML = levelText;
    
    // تأثير احتفالي بسيط بدلاً من الصوت
    createStarsEffect();
}

function backToMap() {
    showMap();
}

function showCertificate() {
    const totalScore = locations.reduce((sum, loc) => sum + loc.score, 0);
    const percentage = (totalScore / (locations.length * 50)) * 100;
    let stars = '';
    if (percentage >= 80) stars = '⭐⭐⭐';
    else if (percentage >= 50) stars = '⭐⭐';
    else stars = '⭐';
    document.getElementById('certificateName').textContent = kidName;
    document.getElementById('certificateScore').textContent = totalScore;
    document.getElementById('certificateStars').innerHTML = stars;
    document.getElementById('certificateScreen').classList.remove('hidden');
}

function closeCertificate() { document.getElementById('certificateScreen').classList.add('hidden'); }
function printCertificate() { window.print(); }


// ============= لوحة المتصدرين (Leaderboard) =============
function saveScoreToLeaderboard() {
    const totalScore = locations.reduce((sum, loc) => sum + loc.score, 0);
    if (totalScore === 0) return;
    
    // جلب النتائج السابقة من localStorage
    let leaderboard = JSON.parse(localStorage.getItem('gameLeaderboard') || '[]');
    
    // إضافة النتيجة الجديدة
    leaderboard.push({
        name: kidName,
        score: totalScore,
        date: new Date().toLocaleDateString('ar-EG'),
        completed: locations.every(l => l.completed)
    });
    
    // ترتيب تنازلي وأخذ أفضل 5
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 5);
    
    // حفظ في localStorage
    localStorage.setItem('gameLeaderboard', JSON.stringify(leaderboard));
    
    // تحديث العرض
    displayLeaderboard();
}

function displayLeaderboard() {
    const leaderboardList = document.getElementById('leaderboardList');
    if (!leaderboardList) return;
    
    const leaderboard = JSON.parse(localStorage.getItem('gameLeaderboard') || '[]');
    
    if (leaderboard.length === 0) {
        leaderboardList.innerHTML = '<div class="text-center text-gray-500 py-4">لا توجد نتائج بعد. كن أول من يلعب!</div>';
        return;
    }
    
    leaderboardList.innerHTML = leaderboard.map((entry, index) => {
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '📌';
        return `
            <div class="leaderboard-item">
                <div class="leaderboard-rank">${medal} ${index + 1}</div>
                <div class="leaderboard-name">${entry.name}</div>
                <div class="leaderboard-score">${entry.score} ⭐</div>
            </div>
        `;
    }).join('');
}

// تعديل دالة showGameComplete لتسجيل النتيجة
function showGameComplete() {
    const totalScore = locations.reduce((sum, loc) => sum + loc.score, 0);
    document.getElementById('finalTotalScore').textContent = totalScore;
    document.getElementById('questionArea').classList.add('hidden');
    document.getElementById('mapScreen').classList.add('hidden');
    document.getElementById('gameComplete').classList.remove('hidden');
    
    const percentage = (totalScore / (locations.length * 50)) * 100;
    let levelText = '';
    if (percentage >= 80) levelText = '🥇 مستوى ذهبي';
    else if (percentage >= 50) levelText = '🥈 مستوى فضي';
    else levelText = '🥉 مستوى برونزي';
    document.getElementById('finalLevel').innerHTML = levelText;
    
    // تأثير احتفالي
    createStarsEffect();
    
    // حفظ النتيجة في لوحة المتصدرين
    saveScoreToLeaderboard();
}

// تعديل دالة showMap لتحديث لوحة المتصدرين
function showMap() {
    document.getElementById('mapScreen').classList.remove('hidden');
    document.getElementById('questionArea').classList.add('hidden');
    renderMap();
    updateTotalScoreDisplay();
    displayLeaderboard();  // تحديث لوحة المتصدرين
}

function restartGame() {
    locations.forEach(l => {
        l.completed = false;
        l.unlocked = (l.id === 'home');
        l.score = 0;
    });
    document.getElementById('gameComplete').classList.add('hidden');
    document.getElementById('welcomeScreen').classList.remove('hidden');
    // لا تمسح لوحة المتصدرين حتى تبقى النتائج السابقة
}

// ربط الأحداث
document.getElementById('continueBtn').addEventListener('click', continueToNext);
document.getElementById('confirmWatchBtn').addEventListener('click', () => closeVideoModal(true));
document.getElementById('soundToggleBtn').addEventListener('click', toggleSound);

// بدء اللعبة
document.getElementById('welcomeScreen').classList.remove('hidden');