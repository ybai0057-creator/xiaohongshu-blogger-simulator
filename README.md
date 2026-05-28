# 小红书博主模拟器

一个适合手机和电脑浏览器游玩的中文网页小游戏。玩家扮演刚开始做小红书的新人博主，连续经营 7 天账号，每天选择不同内容策略，最后根据粉丝数、点赞量、收藏量、预算、粉丝好感、商业价值和创作压力获得专属结局。

## 游戏玩法

1. 打开 `index.html` 或 GitHub Pages 链接。
2. 输入博主昵称；不输入时默认使用“新人博主”。
3. 选择一个博主人设。
4. 连续 7 天选择每天要发布的内容策略。
5. 每天查看数据变化、发布反馈和虚拟评论区。
6. 第 7 天结束后生成“小红书账号成长报告”，可以复制分享文案。

## 文件结构

```text
.
├── index.html   # 页面结构
├── style.css    # 可爱简洁风格与响应式样式
├── script.js    # 游戏数据、状态管理、结局判断与复制功能
└── README.md    # 项目说明
```

## 本地运行方法

这个项目是纯静态网页，不需要后端、数据库或复杂构建工具。

方法一：直接双击 `index.html`，用浏览器打开。

方法二：在项目目录启动一个本地静态服务：

```bash
python3 -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## GitHub Pages 部署步骤

1. 登录 GitHub。
2. 新建仓库，推荐仓库名：`xiaohongshu-blogger-simulator`。
3. 把 `index.html`、`style.css`、`script.js`、`README.md` 上传到仓库根目录。
4. 提交到 `main` 分支。
5. 进入仓库页面的 `Settings`。
6. 点击左侧 `Pages`。
7. 在 `Build and deployment` 中选择 `Deploy from a branch`。
8. `Branch` 选择 `main`，文件夹选择 `/root`。
9. 保存后等待 GitHub Pages 部署完成。
10. 最终链接通常是：

```text
https://你的用户名.github.io/xiaohongshu-blogger-simulator/
```

## 如何修改游戏事件

游戏事件都在 `script.js` 的 `dayEvents` 数组中。每一天包含：

- `day`：第几天
- `label`：日期标签
- `theme`：当天主题
- `story`：剧情描述
- `options`：三个可选策略

每个选项可以修改：

- `text`：按钮文案
- `title`：发布内容标题
- `desc`：选择后的结果描述
- `effects`：属性变化
- `tags`：路线标签，用于部分结局判断
- `comments`：虚拟评论区文案池

示例：

```js
effects: { likes: 210, saves: 42, fans: 75, budget: -70, affection: 4, business: 8, pressure: 6 }
```

## 如何修改结局规则

结局规则在 `script.js` 的 `endingRules` 数组中。系统会从上到下匹配第一个符合条件的结局，所以更特殊的结局应该放在更前面。

每个结局包含：

- `title`：结局称号
- `score`：评分
- `match`：判断函数
- `desc`：结局描述

示例：

```js
{
  title: "真诚陪伴型博主",
  score: "S",
  match: (s) => s.affection >= 84 && s.pressure <= 68,
  desc: "你没有疯狂追热点，但你的内容真实、稳定、有温度。粉丝愿意留下来，是因为喜欢你这个人。"
}
```

## 技术栈

- HTML
- CSS
- JavaScript
- localStorage
- GitHub Pages

## 注意事项

- 项目不使用后端服务器。
- 项目不使用数据库。
- 项目不依赖联网字体或外部资源。
- 刷新页面后会回到首页，但最近一次结局会保存在浏览器 localStorage 中。
- 预算最低为 0；粉丝好感、商业价值、创作压力会限制在 0 到 100。
- 适合 GitHub Pages 静态部署。
