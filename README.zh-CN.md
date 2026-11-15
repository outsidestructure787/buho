<p align="center"><img src="icons/icon-192.png" width="96" alt="Búho"></p>

<h1 align="center">Búho</h1>

<p align="center">
宝宝日志：睡眠、喂奶和尿布<br>
<b>离线可用</b>
</p>

<p align="center">
<a href="README.md">Español</a> ·
<a href="README.en.md">English</a> ·
<b>简体中文</b> ·
<a href="README.hi.md">हिन्दी</a> ·
<a href="README.pt.md">Português</a> ·
<a href="README.ja.md">日本語</a> ·
<a href="README.de.md">Deutsch</a> ·
<a href="README.id.md">Bahasa Indonesia</a> ·
<a href="README.ru.md">Русский</a> ·
<a href="README.fr.md">Français</a> ·
<a href="README.it.md">Italiano</a>
</p>

<p align="center"><b>▶ App: <a href="https://outsidestructure787.github.io/buho/">outsidestructure787.github.io/buho</a></b> · 版本 0.5.1</p>

---

## Búho 是什么
Búho（西班牙语"猫头鹰"）是一款一键记录宝宝日常的应用：什么时候睡着、什么时候醒来，喂奶（母乳亲喂、奶瓶或吸奶器），换尿布，以及体重、体温、用药等。它是为凌晨 3 点半睡半醒时使用而设计的：大按钮、深色模式、单手操作。

没有网络也能用：每条记录都会立即保存在手机上。如果两个人各用自己的手机记录，可以把它连接到一个 Google 表格，有信号时两部手机会自动同步。支持 Android、iPhone 和电脑，不需要应用商店，完全免费。

数据属于你自己。Búho 没有自己的服务器：记录保存在你的手机上；如果开启同步，还会保存在你自己 Google 账号里的一个表格中。

> 应用界面目前有英语、西班牙语、法语、葡萄牙语、意大利语、德语和加泰罗尼亚语，暂无中文。在中文手机上会显示英文界面，所以下文中应用里的按钮名称都用英文标出。

## 你需要准备什么
- **只用一部手机：** 只需要手机，约 2 分钟（第 1 步）。
- **两部或更多手机：** 一个 Google 账号（Gmail 即可），以及一台电脑，一次性操作约 15 分钟（第 2 步）。用手机也能做，但 Google 的脚本编辑器在小屏幕上不方便。
- **查看就诊预约、接收用药提醒：** 在第 2 步的基础上再加一个 Google 日历，多花约 5 分钟（第 3 步）。

不需要会编程。只要复制粘贴一段文字、点几个按钮，下面每一步都有说明。

> 注意：同步功能依赖 Google 服务（表格、Apps Script、日历）。如果你所在的网络无法访问 Google，第 2、3 步将无法使用，但第 1 步的单机记录功能不受影响。

## 第 1 步：在手机上安装
1. 在手机上打开 **https://outsidestructure787.github.io/buho/**。Android 请用 Chrome，iPhone 请用 Safari。
2. 添加到主屏幕：
   - **Android（Chrome）：** 点右上角的三个点（⋮），选择"安装应用"或"添加到主屏幕"，确认。
   - **iPhone（Safari）：** 点底部的分享按钮（带向上箭头的方框），向下滑动，选择"添加到主屏幕"，再点"添加"。
3. 关闭浏览器，从主屏幕上的图标（绿色的眼睛）打开 Búho。以后都从这里打开：它会全屏运行，像普通应用一样，没有网络也能用。
4. 点右上角的齿轮（*Settings*），在 *Baby details* 中填写宝宝的名字、出生日期和性别。在 *General* 中写上这部手机的使用者（例如"妈妈"或"爸爸"）。点 *Save*。

完成。如果只有一个人用，不需要再做别的。

## 第 2 步（可选）：在多部手机之间共享记录
Búho 把数据存放在你自己创建的 Google 表格里。每部手机把自己的记录发送过去，并取回其他手机的记录。为了让表格和应用互相识别，需要把本仓库里的一小段程序（"脚本"）粘贴到表格中。只需做一次。

### 2.1 创建表格
在电脑上用你的 Google 账号打开 [sheets.new](https://sheets.new)，会打开一个空白表格。左上角写着"无标题电子表格"，点击它，改名为例如 *Búho*。

表格里不用填写任何内容。存放记录的工作表会在第一次同步时自动创建。

### 2.2 粘贴脚本
1. 在另一个标签页打开 [纯文本格式的脚本](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Code.gs)。页面上全是代码。按 `Ctrl + A`（Mac 上是 `Cmd + A`）全选，再按 `Ctrl + C`（`Cmd + C`）复制。
2. 回到表格。在顶部菜单点"扩展程序"（Extensions），再点"Apps Script"。Google 的脚本编辑器会在新标签页打开。
3. 编辑器里有一个名为 `Code.gs`（中文界面可能显示为"代码.gs"）的文件，里面有几行示例代码（`function myFunction() { }`）。点进去，全选（`Ctrl + A`）并删除，直到文件为空。
4. 粘贴刚才复制的代码（`Ctrl + V`）。第一行以 `/**` 开头，最后一行是一个右花括号 `}`。
5. 左上角写着"无标题项目"，可以改名为 *Búho*。
6. 点软盘图标或按 `Ctrl + S` 保存。

如果"扩展程序"菜单里没有"Apps Script"，可能是你用的工作或学校账号禁用了它。请改用个人 Gmail 账号。

### 2.3 创建密钥
密钥就像一个只有你们的手机知道的密码。没有它，其他人无法读取或写入这个表格。它放在单独的文件里，这样以后更新脚本时不会丢失。

1. 在编辑器左侧"文件"旁边点 **+**，选择"脚本"。输入 `Config` 并按回车。
2. 删除新文件里的内容，粘贴 [`Config.gs`](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Config.gs) 的内容（只有几行）。
3. 找到 `const CLAVE = 'CAMBIA-ESTA-CLAVE';` 这一行，只把 `CAMBIA-ESTA-CLAVE` 这几个字替换成你自己想的一串较长的密钥。最简单的方法是用连字符连接四个随机英文单词，例如 `panda-monday-toast-cloud`。不要删掉引号和分号。
4. 保存（`Ctrl + S`）。左侧应能看到两个文件：`Code.gs` 和 `Config.gs`。

把密钥记下来，手机上会用到。

### 2.4 发布脚本
发布后，脚本会获得一个网址，手机会把数据发送到这个网址。

1. 点右上角的蓝色按钮"部署"（Deploy），选择"新建部署"（New deployment）。
2. "选择类型"旁边有一个齿轮图标，点它，选择"Web 应用"（Web app）。
3. 按如下填写：
   - "说明"：随意，例如"Búho"。
   - "执行身份"（Execute as）：**我**（会显示你的邮箱）。
   - "谁有权访问"（Who has access）：**任何人**（Anyone）。这样手机无需登录 Google 也能连接。上一步的密钥会阻止其他人访问。
4. 点"部署"。Google 会请求授权：
   1. 点"授权访问"，选择你的账号。
   2. 会出现一个页面，提示 Google 尚未验证此应用。这是正常的：脚本是你自己粘贴的，没有经过 Google 审核。点"高级"，再点"转至 Búho（不安全）"。
   3. 查看权限（查看和编辑你的电子表格和日历），点"允许"。脚本以你的账号运行，只做 Búho 需要的事：把记录保存到这个表格，以及（如果你开启）读取和创建日历事件。
5. 页面会显示"Web 应用网址"，一个以 `https://script.google.com/macros/s/` 开头、以 `/exec` 结尾的长网址。点"复制"并保存好，然后点"完成"。

把网址和密钥发给自己（邮件或聊天工具），在手机上就能直接复制粘贴。

### 2.5 连接第一部手机
1. 在 Búho 中点齿轮，打开 *General*。
2. 在 *Sync with Google Sheets* 里，把网址粘贴到第一个输入框，把密钥填入 *Access key*。
3. 点 *Save and test connection*。如果一切正常，会显示 "Connection OK"，标题旁边会显示 "Synced"。

回到电脑上的 Google 表格，会看到一个新的工作表，里面是你已有的记录。

### 2.6 连接其他手机
在已经连好的手机上，进入 *Settings → General*，点 *Share setup with another phone*，通过微信、WhatsApp、Telegram 或邮件把链接发给对方。这个链接包含网址和密钥，只发给需要记录的人。

- **对方是 Android：** 先安装 Búho（第 1 步），再打开链接，应用会自动连接。
- **对方是 iPhone：** 先安装 Búho（第 1 步），复制链接，粘贴到 *Settings → General* 中的 *…or paste a setup link here* 输入框，然后点 *Save and test connection*。iPhone 必须这样做，因为安装后的应用和 Safari 不共享数据。

每个人都在 *Who uses this phone?* 里填上自己的名字，这样记录中能看到每条是谁写的。

### 表格的样子
每条记录是 `eventos` 工作表中的一行：日期、开始和结束时间、时长（睡眠和亲喂）、类型、详情、备注和记录人。你可以像普通表格一样筛选、排序或制作图表。末尾的灰色列由应用使用，请不要手动修改。在应用中删除某条记录时，这一行不会消失，而是在 *borrado*（已删除）列中被标记。

## 第 3 步（可选）：日历预约和用药提醒
同步正常后，Búho 可以显示 Google 日历中即将到来的预约（儿科、助产士、疫苗），添加新预约，并为下一次用药创建带提醒的日历事件。

1. **选择日历。** 可以用你的主日历，也可以创建一个专门给宝宝用的共享日历（两个人用时最方便）。创建方法：在 [Google 日历](https://calendar.google.com) 左侧"其他日历"旁点 **+** → "创建新日历"。如果两人都要看，就共享给对方。
2. **复制日历 ID**（用主日历则不需要）。在 Google 日历中，把鼠标移到该日历上，点三个点 →"设置和共享"，向下滚动到"集成日历"。"日历 ID"是一串以 `@group.calendar.google.com` 结尾的长文本。
3. **在 Búho 中开启：** *Settings → Calendar*。
   - 勾选 *Show upcoming appointments from Google Calendar*。
   - 在 *Calendar* 中，主日历保留 `primary`，否则粘贴日历 ID。
   - *Only show events containing* 可用来过滤，避免显示你的全部私人日程，例如填写 `儿科, 疫苗, 体检`。留空则显示所有事件。
   - 点 *Save*。主屏幕上会出现 *Upcoming appointments* 卡片，点开可查看完整列表或添加预约。
4. **用药提醒：** 在 *Settings → Medication* 中添加药品（名称、剂量、每隔几小时一次，可选疗程天数），开启 *Show medication on the main screen*，并勾选 *Create a Google Calendar reminder for the next dose*。每次点 *Given*，日历中就会在下一次用药时间创建一个带提醒的"💊 药品名"事件。要让提醒响起，需要在手机的 Google 日历应用中为该日历开启通知。

脚本使用表格所属的 Google 账号读取日历。如果用的是别人的日历，必须共享给这个账号。如果你是在 0.3.0 版之前设置的同步，请先更新脚本（见下文），然后在编辑器顶部的函数下拉菜单中选择 `autorizar`，点"运行"，接受日历权限，最后发布一个新版本。

## 遇到问题时
- **"The key does not match the sheet."** 手机上的密钥和 `Config.gs` 中的不完全一致。区分大小写，多一个空格也不行。
- **"Could not connect."** 没有网络，或网址复制错了。网址必须以 `/exec` 结尾。
- **"Update the Google script to use the calendar."** 应用请求日历，但已发布的脚本是旧版本。请按下文"更新 Google 脚本"操作。
- **"Falta autorizar el calendario"**（脚本返回的西班牙语提示：日历未授权）。在脚本编辑器的函数菜单中选择 `autorizar`，点"运行"并接受，然后发布新版本。
- **"No encuentro el calendario"**（同样来自脚本：找不到日历）。日历 ID 复制错误，或该日历没有共享给表格所属的账号。
- **应用没有更新。** 联网打开应用，等几秒，它会自动刷新。如果没有，彻底关闭（从最近使用的应用中划掉）再打开。也可以在 Settings 底部版本号旁点 *Check for updates*。
- **在 iPhone 上，设置链接在 Safari 中打开，而不是在应用中。** 这是正常的。复制链接，粘贴到已安装应用的 *Settings → General* 中。

## 更新 Google 脚本
应用会自动更新，但表格里的脚本不会。只有当新版本在[更新记录](../../commits/main)中说明需要，或应用提示时才需要更新。

1. 在表格中：扩展程序 → Apps Script。
2. 打开 `Code.gs`，删除全部内容，粘贴新的 [`Code.gs`](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Code.gs)，保存。不要动 `Config.gs`，你的密钥在那里。
3. 部署 → 管理部署。点铅笔图标，在"版本"中选择"新版本"，点"部署"。

`/exec` 网址保持不变，手机上不需要改任何设置。如果新版本给表格增加了列，下次同步时会自动出现。

## 常见问题
**没有网络会怎样？** 照常记录。屏幕顶部会显示还有多少条未发送，恢复信号后会自动发送。

**两个人同时离线记录怎么办？** 恢复信号后，两个人的记录会合并。如果两人修改了同一条记录，以最后一次修改为准。

**安全吗？** 表格是私密的，存放在你的 Google 账号中。脚本只有收到正确的密钥才会响应。任何拿到设置链接（或网址加密钥）的人都能读写记录，并看到通过过滤的日历事件，所以只分享给需要记录的人。

**数据存在哪里？** 存在手机上；如果开启同步，还存在你的 Google 表格里。如果不开同步，清除浏览器数据或换手机后数据会丢失。这种情况下，请定期在 *Settings → Export CSV* 中导出 CSV。

**要花钱吗？** 不用。GitHub Pages、Google 表格、Apps Script 和 Google 日历在这种用途下都是免费的。

## 使用你自己的副本
如果你想拥有自己的版本，可以 fork 本仓库，并开启 *Settings → Pages → Deploy from a branch → main / (root)*。全部是静态文件，无需构建、没有依赖：`index.html`、`i18n.js`、`sw.js`、`manifest.webmanifest` 和 `icons/`。如果想为应用添加中文界面，可以在 `i18n.js` 中复制一个语言块进行翻译，欢迎提交 Pull Request。

## 关于这个项目
我即将成为父亲，想找一款记录喂奶、睡眠和尿布的应用，满足我们家的需求：没有信号也能用，我们俩能在不同手机上使用，数据属于我们自己。试了好几款都不合适，于是决定自己做一个。

我不是程序员。Búho 是在 AI（[Claude](https://claude.ai)）的帮助下完成的，所以先向专业开发者们致歉，冒昧闯入了你们的领域。如果你发现哪里做得不好或可以改进，欢迎提交 [issue](../../issues)。我会非常感激，也一定能学到东西。

---

<p align="center"><sub>MIT 许可证 · 见 <a href="LICENSE">LICENSE</a></sub></p>
