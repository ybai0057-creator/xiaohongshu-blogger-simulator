const BASE_STATS = {
  fans: 120,
  likes: 300,
  saves: 80,
  budget: 500,
  affection: 50,
  business: 20,
  pressure: 30
};

const personas = [
  {
    id: "lifestyle",
    name: "精致生活型",
    icon: "💅",
    desc: "画面感强，种草潜力高，但前期比较烧预算。",
    effects: { affection: 10, budget: -80, business: 5 }
  },
  {
    id: "study",
    name: "学习成长型",
    icon: "📚",
    desc: "内容实用，收藏率高，但容易给自己立太多 flag。",
    effects: { saves: 60, affection: 8, pressure: 5 }
  },
  {
    id: "abroad",
    name: "留学日常型",
    icon: "💻",
    desc: "天然有生活差异感，适合记录，也需要一点生活成本。",
    effects: { fans: 80, affection: 6, budget: -50 }
  },
  {
    id: "funny",
    name: "搞笑真实型",
    icon: "✨",
    desc: "容易让人点进来笑一下，商业调性稍微慢热。",
    effects: { likes: 100, business: -5, affection: 12 }
  },
  {
    id: "commerce",
    name: "带货潜力型",
    icon: "🛍️",
    desc: "很懂转化和选品，前期预算更充足，但要守住真实感。",
    effects: { business: 15, affection: -5, budget: 100 }
  }
];

const dayEvents = [
  {
    day: 1,
    label: "账号启动日",
    theme: "第一篇笔记发什么？",
    story: "你终于下定决心开始做小红书。头像、简介都设置好了，现在要发布第一篇笔记。",
    options: [
      {
        id: "ootd",
        text: "发一篇精致 ootd，标题写“普通留学生的一周穿搭”",
        title: "普通留学生的一周穿搭",
        desc: "穿搭图很出片，封面一眼清爽。大家开始讨论配色和单品，但你也为拍摄花掉了一点预算。",
        effects: { likes: 210, saves: 42, fans: 75, budget: -70, affection: 4, business: 8, pressure: 6 },
        tags: ["ootd", "精致"],
        comments: ["姐妹求链接！", "这个滤镜好好看！", "第一篇就这么会拍，关注了。", "普通留学生但一点也不普通。", "想看包包和鞋子的细节！"]
      },
      {
        id: "study_vlog",
        text: "发一篇真实学习 vlog，标题写“在图书馆坐了一天但效率只有两小时”",
        title: "在图书馆坐了一天但效率只有两小时",
        desc: "真实到让人想笑又想哭。收藏的人不少，评论区出现了很多同款拖延症患者。",
        effects: { likes: 150, saves: 88, fans: 58, budget: -10, affection: 9, business: 2, pressure: 7 },
        tags: ["学习", "真实"],
        comments: ["太真实了，我也是这样。", "收藏了，下次一定照着做。", "救命，这不就是我的留学生活吗？", "两小时已经赢过我了。"]
      },
      {
        id: "funny_start",
        text: "发一篇搞笑自嘲笔记，标题写“新人博主第一天：没人看但我很努力”",
        title: "新人博主第一天：没人看但我很努力",
        desc: "标题很有梗，点进来的人被你的坦诚逗乐。数据不算惊天动地，但好感度涨得很稳。",
        effects: { likes: 185, saves: 28, fans: 64, budget: 0, affection: 11, business: -2, pressure: -2 },
        tags: ["搞笑", "真实"],
        comments: ["标题赢了，点进来发现内容也不错。", "评论区怎么比正文还好笑。", "新人博主不要停更！", "先关注一个，看你能坚持几天。"]
      }
    ]
  },
  {
    day: 2,
    label: "流量焦虑日",
    theme: "第一篇数据一般，你开始焦虑",
    story: "昨天的笔记数据没有爆，你开始反复刷新后台，怀疑是不是标题不够吸引人。",
    options: [
      {
        id: "title_rework",
        text: "研究爆款标题，重新调整封面和标题风格",
        title: "我把第一篇笔记重做了一遍，数据真的会变好吗？",
        desc: "封面更抓眼了，点击率明显变好。你学到了一点流量方法，也开始更在意数据。",
        effects: { likes: 260, saves: 54, fans: 110, budget: -20, affection: 1, business: 7, pressure: 13 },
        tags: ["热点", "流量"],
        comments: ["标题确实更想点了。", "封面变清楚好多！", "这篇可以出教程吗？", "感觉你已经开始懂小红书了。"]
      },
      {
        id: "reply_comments",
        text: "坚持原风格，认真回复每一条评论",
        title: "认真回复评论的一天",
        desc: "你没有急着换赛道，而是把评论都认真看完。互动率变高，粉丝觉得你像一个真实的人。",
        effects: { likes: 120, saves: 35, fans: 70, budget: 0, affection: 13, business: 1, pressure: -3 },
        tags: ["陪伴", "真实"],
        comments: ["博主真的有在回复！", "这种互动感好舒服。", "关注了，感觉你会认真更新。", "不用太焦虑，慢慢来。"]
      },
      {
        id: "emotional_value",
        text: "直接发一篇情绪价值文案：“慢慢来，也是一种成长”",
        title: "慢慢来，也是一种成长",
        desc: "温柔文案戳中了不少人。它没有特别爆，但收藏和好感都悄悄涨了起来。",
        effects: { likes: 165, saves: 82, fans: 62, budget: 0, affection: 10, business: 0, pressure: -7 },
        tags: ["情绪价值"],
        comments: ["今天刚好需要这句话。", "收藏了，低落的时候再看。", "温柔但不鸡汤，好喜欢。", "博主的文字有点治愈。"]
      }
    ]
  },
  {
    day: 3,
    label: "探店机会日",
    theme: "朋友约你去一家很火的 cafe",
    story: "朋友说这家店很适合拍照，但人均不便宜，而且天气看起来要下雨。",
    options: [
      {
        id: "cafe",
        text: "去探店，拍一组精致 cafe 照片",
        title: "这家 cafe 真的值得专门去拍吗？",
        desc: "照片很漂亮，地址和点单建议被疯狂收藏。只是这一顿之后，你的钱包安静了。",
        effects: { likes: 310, saves: 105, fans: 125, budget: -140, affection: 3, business: 10, pressure: 8 },
        tags: ["探店", "精致"],
        comments: ["这家 cafe 真的好拍吗？", "求定位！", "人均多少呀姐妹？", "照片好干净，想周末去。"]
      },
      {
        id: "diet_meal",
        text: "不去，在家做低成本减脂餐内容",
        title: "学生党低成本减脂餐，一顿不到 5 刀",
        desc: "预算守住了，实用度也拉满。很多人默默收藏，觉得你很接地气。",
        effects: { likes: 175, saves: 132, fans: 88, budget: -18, affection: 9, business: 4, pressure: 3 },
        tags: ["减脂餐", "实用"],
        comments: ["收藏了，明天就照着吃。", "这个成本我可以！", "终于不是人均很贵的探店了。", "想看一周菜单。"]
      },
      {
        id: "melbourne_day",
        text: "去 city 顺便拍一篇“墨尔本留学日常”",
        title: "下雨天的墨尔本留学日常",
        desc: "你把天气、街景和碎碎念剪在一起，生活感很强。数据均衡，粉丝好感继续上涨。",
        effects: { likes: 220, saves: 68, fans: 96, budget: -55, affection: 8, business: 5, pressure: 5 },
        tags: ["留学", "真实"],
        comments: ["救命，这不就是我的留学生活吗？", "雨天 city 也太有氛围了。", "想看更多墨尔本日常。", "真实又好看，关注了。"]
      }
    ]
  },
  {
    day: 4,
    label: "评论区热闹日",
    theme: "有一篇笔记突然被更多人看到",
    story: "评论区开始热闹起来，有人夸你，也有人说“感觉有点广”。",
    options: [
      {
        id: "explain",
        text: "认真解释，保持真诚博主人设",
        title: "关于大家问到的合作和真实感",
        desc: "你的解释很克制，也很真诚。部分路人转粉，老粉也更愿意相信你。",
        effects: { likes: 150, saves: 45, fans: 85, budget: 0, affection: 12, business: 3, pressure: 4 },
        tags: ["真实", "陪伴"],
        comments: ["博主好真诚，关注了。", "解释得很舒服，没有攻击性。", "感觉可以继续信任你。", "会说话的人真的加分。"]
      },
      {
        id: "faq",
        text: "顺势发一篇“大家问最多的问题”合集",
        title: "大家问最多的问题，我一次说清楚",
        desc: "你把评论区的问题整理成合集，信息密度很高。收藏上涨，账号看起来更专业了。",
        effects: { likes: 205, saves: 118, fans: 112, budget: 0, affection: 7, business: 8, pressure: 7 },
        tags: ["实用", "专业"],
        comments: ["这种合集太省时间了。", "收藏了，下次慢慢看。", "博主整理能力好强。", "终于有人把重点说清楚了。"]
      },
      {
        id: "emo",
        text: "有点破防，发一篇深夜 emo 小作文",
        title: "做博主之后，我开始害怕被误解",
        desc: "文字很有情绪，确实打动了一些人，但也让账号气氛变得有点沉重。",
        effects: { likes: 135, saves: 62, fans: 44, budget: 0, affection: 6, business: -3, pressure: 10 },
        tags: ["情绪价值"],
        comments: ["抱抱博主，别太累。", "有点心疼，但希望你开心更新。", "互联网真的会放大情绪。", "看完突然也想写日记。"]
      }
    ]
  },
  {
    day: 5,
    label: "品牌合作日",
    theme: "一个小品牌私信你合作",
    story: "你收到第一个品牌合作邀请，但对方预算不高，还希望你写得自然一点。",
    options: [
      {
        id: "honest_review",
        text: "接合作，认真写一篇真实测评",
        title: "第一次合作：我只说真实使用感",
        desc: "你把优点和缺点都写清楚了。品牌方满意，粉丝也觉得这篇没有把大家当外人。",
        effects: { likes: 210, saves: 76, fans: 92, budget: 120, affection: 8, business: 14, pressure: 8 },
        tags: ["带货", "真实"],
        comments: ["这种测评我愿意看。", "有缺点反而可信了。", "姐妹求链接！", "第一次合作写成这样很不错。"]
      },
      {
        id: "reject_brand",
        text: "拒绝合作，坚持账号调性",
        title: "为什么我暂时不急着接合作",
        desc: "你放弃了一笔钱，但账号调性更稳。粉丝好感明显上涨，商业化速度暂时放慢。",
        effects: { likes: 160, saves: 58, fans: 74, budget: 0, affection: 12, business: -2, pressure: -4 },
        tags: ["陪伴", "真实"],
        comments: ["这波好感拉满。", "慢慢来，别被合作绑架。", "感觉你很珍惜账号。", "会继续看你的内容。"]
      },
      {
        id: "hard_sell",
        text: "接合作，但用很明显的带货风格冲转化",
        title: "最近用到离不开的好物，真的建议冲",
        desc: "转化数据很好看，商业价值猛涨。但部分粉丝觉得广告味有点重，评论区开始微妙。",
        effects: { likes: 185, saves: 50, fans: 55, budget: 180, affection: -12, business: 22, pressure: 7 },
        tags: ["带货", "商业"],
        comments: ["感觉有点广，但我还是看完了。", "这篇商业味有点明显。", "链接在哪里？", "还是希望多一点真实使用场景。"]
      }
    ]
  },
  {
    day: 6,
    label: "爆款挑战日",
    theme: "你发现一个正在流行的热门选题",
    story: "很多博主都在发同款话题，你也可以蹭热点，但可能会失去一点个人风格。",
    options: [
      {
        id: "trend_template",
        text: "立刻跟热点，做一篇高完成度爆款模板",
        title: "照着这个模板发，小红书数据真的会变好",
        desc: "你成功吃到热点红利，数据明显起飞。与此同时，你也开始担心下一篇还能不能接住流量。",
        effects: { likes: 520, saves: 128, fans: 260, budget: -30, affection: -1, business: 12, pressure: 18 },
        tags: ["热点", "流量"],
        comments: ["这个选题最近真的好多。", "但你这篇完成度还挺高。", "标题赢了，先收藏。", "感觉要爆了。"]
      },
      {
        id: "own_trend",
        text: "用自己的风格改造热点，做一篇真实分享",
        title: "这个热门选题，我想换一种真实说法",
        desc: "你没有完全复制模板，而是保留了自己的表达。涨粉不错，老粉也没有觉得违和。",
        effects: { likes: 340, saves: 112, fans: 172, budget: -10, affection: 8, business: 9, pressure: 9 },
        tags: ["热点", "真实"],
        comments: ["同题材里这篇最舒服。", "有热点但不像硬蹭。", "博主的表达我喜欢。", "这才是我想看的真实分享。"]
      },
      {
        id: "niche_stable",
        text: "不跟热点，继续做小众但稳定的内容",
        title: "不追热点的一天，也想认真记录",
        desc: "数据没有突然大爆，但收藏和评论都很稳定。你找到了一点长期更新的节奏。",
        effects: { likes: 170, saves: 90, fans: 78, budget: 0, affection: 10, business: 3, pressure: -5 },
        tags: ["小众", "陪伴"],
        comments: ["这种稳定更新也很好。", "小众但很对味。", "不爆也没关系，我爱看。", "像朋友发来的生活碎片。"]
      }
    ]
  },
  {
    day: 7,
    label: "总结复盘日",
    theme: "一周结束，你要决定账号未来方向",
    story: "你的账号已经比第一天更成熟了。现在你要选择未来的运营路线。",
    options: [
      {
        id: "future_commerce",
        text: "走商业化路线，努力接品牌合作",
        title: "下一阶段：认真把账号当成事业经营",
        desc: "你开始规划报价、选品和内容排期。商业价值大幅提高，但也需要更强的精力管理。",
        effects: { likes: 230, saves: 70, fans: 120, budget: 180, affection: -2, business: 20, pressure: 12 },
        tags: ["商业", "带货"],
        comments: ["事业型博主上线了。", "接合作也要保持真实呀。", "期待你的选品！", "感觉账号要进入下一阶段了。"]
      },
      {
        id: "future_trust",
        text: "走真实陪伴路线，慢慢培养粉丝信任",
        title: "下一阶段：我想慢慢养一个真实账号",
        desc: "你把节奏放稳，决定继续认真记录和互动。粉丝好感涨得漂亮，创作压力也降下来一些。",
        effects: { likes: 180, saves: 86, fans: 105, budget: 0, affection: 14, business: 5, pressure: -8 },
        tags: ["陪伴", "真实"],
        comments: ["慢慢养号也很厉害。", "喜欢这种不急不躁的感觉。", "会一直看下去。", "博主像互联网邻居。"]
      },
      {
        id: "future_viral",
        text: "走爆款流量路线，冲粉丝和数据",
        title: "下一阶段：我要认真冲一次爆款",
        desc: "你把选题、标题、封面都推到极致。数据涨得很快，但创作压力也被拉到了很高的位置。",
        effects: { likes: 610, saves: 116, fans: 310, budget: -40, affection: 0, business: 12, pressure: 20 },
        tags: ["流量", "热点"],
        comments: ["这篇真的有爆款相。", "你开始会抓人了。", "数据好猛！", "但也别太累啊。"]
      }
    ]
  }
];

const endingRules = [
  {
    title: "爆红但累疯了",
    score: "S",
    match: (s) => s.fans >= 1100 && s.likes >= 2400 && s.pressure >= 82,
    desc: "你成功冲上流量，但代价是每天都在想下一篇怎么更爆。建议先睡一觉，再决定人生方向。"
  },
  {
    title: "爆款制造机",
    score: "S",
    match: (s) => s.likes >= 2300 && s.fans >= 1050,
    desc: "你像掌握了流量密码，每一篇都很会抓人眼球。你的账号已经开始有爆款博主的味道了。"
  },
  {
    title: "广告感太强博主",
    score: "B",
    match: (s) => s.business >= 80 && s.affection < 55,
    desc: "你确实接到了合作，但粉丝开始觉得你变得有点不真诚。流量和信任之间，还需要重新平衡。"
  },
  {
    title: "带货潜力股",
    score: "A",
    match: (s) => s.business >= 78 && s.affection >= 55,
    desc: "你已经具备商业合作潜力。如果继续保持真实感，也许很快就能接到更好的品牌合作。"
  },
  {
    title: "精致生活方式博主",
    score: "A",
    match: (s) => s.business >= 62 && s.budget <= 260 && s.likes >= 1700,
    desc: "你的页面精致得像杂志，但钱包也在默默承受。好消息是，品牌方已经开始注意你了。"
  },
  {
    title: "收藏夹型学习博主",
    score: "A",
    match: (s) => s.saves >= 760 && s.affection >= 68,
    desc: "你的内容不一定最炸，但非常有用。很多人嘴上不评论，手却很诚实地收藏了。"
  },
  {
    title: "流量焦虑患者",
    score: "B",
    match: (s) => s.pressure >= 80 && s.likes >= 1500,
    desc: "你每天都在看数据、改标题、研究爆款。账号变好了，但你本人也快被后台数据绑架了。"
  },
  {
    title: "评论区比正文火",
    score: "A",
    match: (s, history) => s.likes >= 1350 && s.affection >= 75 && countTags(history, ["搞笑", "真实"]) >= 3,
    desc: "你的内容不错，但评论区更有节目效果。粉丝关注你，一半是为了内容，一半是为了看大家玩梗。"
  },
  {
    title: "真诚陪伴型博主",
    score: "S",
    match: (s) => s.affection >= 84 && s.pressure <= 68,
    desc: "你没有疯狂追热点，但你的内容真实、稳定、有温度。粉丝愿意留下来，是因为喜欢你这个人。"
  },
  {
    title: "留学日常记录者",
    score: "A",
    match: (s, history) => s.affection >= 72 && s.likes >= 1300 && s.saves >= 520 && countTags(history, ["留学", "真实"]) >= 2,
    desc: "你的账号像一个温柔的生活记录本。没有特别夸张的大爆，但很适合长期更新。"
  },
  {
    title: "小众但稳定",
    score: "B",
    match: (s) => s.fans < 850 && s.affection >= 68 && s.saves >= 520,
    desc: "你没有成为大博主，但你吸引到了一群真正喜欢你内容的人。这是一种很健康的开始。"
  },
  {
    title: "重新做人型博主",
    score: "先活着更新",
    match: (s) => s.fans < 620 && s.likes < 1200 && s.saves < 420 && s.pressure >= 62,
    desc: "这一周有点混乱，但没关系，谁做账号第一周不是一边试错一边怀疑人生呢？下周重新规划就好。"
  }
];

const statMeta = {
  fans: { label: "粉丝数", icon: "❤️", color: "#ff9fbd", max: 1600 },
  likes: { label: "点赞量", icon: "✨", color: "#ffc4a8", max: 3200 },
  saves: { label: "收藏量", icon: "🔖", color: "#9bcdf5", max: 1000 },
  budget: { label: "预算", icon: "🧋", color: "#ffe29a", max: 800 },
  affection: { label: "粉丝好感", icon: "🌷", color: "#a9e6ce", max: 100 },
  business: { label: "商业价值", icon: "🛍️", color: "#cab5ff", max: 100 },
  pressure: { label: "创作压力", icon: "📈", color: "#ffb08f", max: 100 }
};

let state = {
  playerName: "新人博主",
  selectedPersona: personas[0].id,
  dayIndex: 0,
  stats: { ...BASE_STATS },
  history: [],
  hasChosenToday: false,
  lastEnding: null
};

const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
  renderPersonas();
  loadLastResult();
  $("#startBtn").addEventListener("click", startGame);
  $("#nextBtn").addEventListener("click", goNextDay);
  $("#restartBtn").addEventListener("click", restartGame);
  $("#copyBtn").addEventListener("click", copyResult);
});

function renderPersonas() {
  const list = $("#personaList");
  list.innerHTML = personas.map((persona) => `
    <button class="persona-card ${persona.id === state.selectedPersona ? "selected" : ""}" data-persona="${persona.id}">
      <strong>${persona.icon} ${persona.name}</strong>
      <span>${persona.desc}</span>
      <span>${formatEffects(persona.effects)}</span>
    </button>
  `).join("");

  list.querySelectorAll(".persona-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.selectedPersona = card.dataset.persona;
      renderPersonas();
    });
  });
}

function startGame() {
  const name = $("#playerName").value.trim();
  const persona = personas.find((item) => item.id === state.selectedPersona) || personas[0];
  state = {
    playerName: name || "新人博主",
    selectedPersona: persona.id,
    dayIndex: 0,
    stats: clampStats(applyEffects({ ...BASE_STATS }, persona.effects)),
    history: [],
    hasChosenToday: false,
    lastEnding: null
  };
  showScreen("game");
  renderDay();
}

function renderDay() {
  const event = dayEvents[state.dayIndex];
  state.hasChosenToday = false;
  $("#dayCount").textContent = `第 ${event.day} 天 / ${event.label}`;
  $("#dayTheme").textContent = event.theme;
  $("#headerName").textContent = state.playerName;
  $("#headerFans").textContent = `${formatNumber(state.stats.fans)} 粉丝`;
  $("#storyTitle").textContent = event.theme;
  $("#storyText").textContent = event.story;
  $("#resultPanel").classList.add("hidden");
  renderOptions(event);
  renderStats();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderOptions(event) {
  const list = $("#optionList");
  list.innerHTML = event.options.map((option, index) => `
    <button class="option-card" data-option="${option.id}">
      <strong>${String.fromCharCode(65 + index)}. ${option.text}</strong>
      <span>${previewEffects(option.effects)}</span>
    </button>
  `).join("");

  list.querySelectorAll(".option-card").forEach((button) => {
    button.addEventListener("click", () => chooseOption(button.dataset.option));
  });
}

function chooseOption(optionId) {
  if (state.hasChosenToday) return;
  const event = dayEvents[state.dayIndex];
  const option = event.options.find((item) => item.id === optionId);
  if (!option) return;

  state.hasChosenToday = true;
  const before = { ...state.stats };
  updateStats(option.effects);
  const after = { ...state.stats };
  state.history.push({
    day: event.day,
    optionId: option.id,
    title: option.title,
    tags: option.tags
  });

  document.querySelectorAll(".option-card").forEach((button) => {
    button.disabled = true;
  });

  renderStats(Object.keys(option.effects));
  showResult(option, before, after);
}

function updateStats(effects) {
  state.stats = clampStats(applyEffects(state.stats, effects));
  $("#headerFans").textContent = `${formatNumber(state.stats.fans)} 粉丝`;
}

function applyEffects(stats, effects) {
  Object.entries(effects).forEach(([key, value]) => {
    stats[key] += value;
  });
  return stats;
}

function clampStats(stats) {
  stats.budget = Math.max(0, stats.budget);
  ["affection", "business", "pressure"].forEach((key) => {
    stats[key] = Math.min(100, Math.max(0, stats[key]));
  });
  ["fans", "likes", "saves"].forEach((key) => {
    stats[key] = Math.max(0, stats[key]);
  });
  return stats;
}

function renderStats(changedKeys = []) {
  $("#statsGrid").innerHTML = Object.entries(statMeta).map(([key, meta]) => {
    const value = state.stats[key];
    const percent = Math.min(100, Math.round((value / meta.max) * 100));
    return `
      <div class="stat-card ${changedKeys.includes(key) ? "bump" : ""}">
        <div class="stat-head">
          <span>${meta.icon} ${meta.label}</span>
          <span class="stat-value">${key === "budget" ? "¥" : ""}${formatNumber(value)}${isPercentStat(key) ? "%" : ""}</span>
        </div>
        <div class="bar"><div class="bar-fill" style="width:${percent}%; background:${meta.color};"></div></div>
      </div>
    `;
  }).join("");
}

function showResult(option, before, after) {
  $("#resultTitle").textContent = `本日发布：${option.title}`;
  $("#resultDesc").textContent = option.desc;
  $("#deltaList").innerHTML = Object.keys(statMeta).map((key) => {
    const diff = after[key] - before[key];
    if (diff === 0) return "";
    const direction = diff > 0 ? "up" : "down";
    const sign = diff > 0 ? "+" : "";
    return `<span class="delta-pill ${direction}">${statMeta[key].label} ${sign}${diff}${key === "budget" ? " 元" : ""}</span>`;
  }).join("");
  generateComments(option.comments);
  $("#nextBtn").textContent = state.dayIndex === dayEvents.length - 1 ? "查看我的结局" : "进入下一天";
  $("#resultPanel").classList.remove("hidden");
  $("#resultPanel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function generateComments(pool) {
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const count = Math.min(pool.length, 3 + Math.floor(Math.random() * 3));
  $("#commentList").innerHTML = shuffled.slice(0, count).map((comment) => `<li>${comment}</li>`).join("");
}

function goNextDay() {
  if (!state.hasChosenToday) return;
  if (state.dayIndex >= dayEvents.length - 1) {
    renderEnding();
    return;
  }
  state.dayIndex += 1;
  renderDay();
}

function calculateEnding() {
  const matched = endingRules.find((ending) => ending.match(state.stats, state.history));
  if (matched) return matched;

  return {
    title: "留学日常记录者",
    score: "B",
    desc: "你的账号像一个温柔的生活记录本。没有特别夸张的大爆，但很适合长期更新。"
  };
}

function renderEnding() {
  const ending = calculateEnding();
  state.lastEnding = ending;
  const shareText = buildShareText(ending);

  $("#endingName").textContent = ending.title;
  $("#endingPlayer").textContent = `${state.playerName} 的 7 天养号结果`;
  $("#endingScore").textContent = `综合评分：${ending.score}`;
  $("#endingDesc").textContent = ending.desc;
  $("#shareText").textContent = shareText;
  $("#endingStats").innerHTML = Object.entries(statMeta).map(([key, meta]) => `
    <div class="ending-stat">
      <span>${meta.icon} ${meta.label}</span>
      <strong>${key === "budget" ? "¥" : ""}${formatNumber(state.stats[key])}${isPercentStat(key) ? "%" : ""}</strong>
    </div>
  `).join("");

  saveLastResult(ending, shareText);
  showScreen("ending");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function restartGame() {
  state.dayIndex = 0;
  state.history = [];
  state.hasChosenToday = false;
  state.stats = { ...BASE_STATS };
  $("#copyHint").classList.add("hidden");
  showScreen("home");
  renderPersonas();
  loadLastResult();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function copyResult() {
  const text = $("#shareText").textContent;
  const hint = $("#copyHint");
  try {
    if (!navigator.clipboard) throw new Error("clipboard unsupported");
    await navigator.clipboard.writeText(text);
    hint.textContent = "复制成功！快发给朋友看看你是什么博主人设。";
  } catch (error) {
    hint.textContent = `当前浏览器不支持自动复制，请手动复制这段文字：${text}`;
  }
  hint.classList.remove("hidden");
}

function saveLastResult(ending, shareText) {
  const payload = {
    title: ending.title,
    score: ending.score,
    playerName: state.playerName,
    fans: state.stats.fans,
    affection: state.stats.affection,
    business: state.stats.business,
    shareText,
    savedAt: new Date().toLocaleString("zh-CN")
  };
  localStorage.setItem("xhsBloggerLastResult", JSON.stringify(payload));
}

function loadLastResult() {
  const box = $("#lastResult");
  const raw = localStorage.getItem("xhsBloggerLastResult");
  if (!raw) {
    box.classList.add("hidden");
    return;
  }
  try {
    const result = JSON.parse(raw);
    box.innerHTML = `<strong>上次结局：${result.title}</strong><br><span>${result.playerName} 获得 ${result.score} 评分，最终 ${formatNumber(result.fans)} 粉丝。${result.savedAt ? `保存于 ${result.savedAt}` : ""}</span>`;
    box.classList.remove("hidden");
  } catch (error) {
    localStorage.removeItem("xhsBloggerLastResult");
    box.classList.add("hidden");
  }
}

function showScreen(name) {
  $("#homeScreen").classList.toggle("hidden", name !== "home");
  $("#gameScreen").classList.toggle("hidden", name !== "game");
  $("#endingScreen").classList.toggle("hidden", name !== "ending");
}

function buildShareText(ending) {
  return `我在《小红书博主模拟器》中获得了【${ending.title}】结局！我的粉丝数是 ${formatNumber(state.stats.fans)}，粉丝好感 ${state.stats.affection}，商业价值 ${state.stats.business}。原来我适合${ending.title.includes("真诚") || ending.title.includes("小众") ? "慢慢养号" : "认真经营账号"}，你也来试试看你是什么博主人设！`;
}

function countTags(history, tags) {
  return history.reduce((sum, item) => {
    return sum + item.tags.filter((tag) => tags.includes(tag)).length;
  }, 0);
}

function formatEffects(effects) {
  return Object.entries(effects).map(([key, value]) => {
    const sign = value > 0 ? "+" : "";
    const unit = key === "budget" ? " 元" : "";
    return `${statMeta[key].label}${sign}${value}${unit}`;
  }).join(" / ");
}

function previewEffects(effects) {
  const important = Object.entries(effects)
    .filter(([, value]) => value !== 0)
    .slice(0, 4)
    .map(([key, value]) => `${statMeta[key].label}${value > 0 ? "↑" : "↓"}`);
  return important.join(" · ");
}

function isPercentStat(key) {
  return ["affection", "business", "pressure"].includes(key);
}

function formatNumber(value) {
  return Number(value).toLocaleString("zh-CN");
}
