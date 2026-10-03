<div align="center">

<img src="docs/bg.png" alt="Another" width="880" />

# Another

[한국어](README.md#ko) · [English](README.en.md) · **简体中文**

</div>

---

<a id="zh-cn"></a>
## 简体中文

救世主您好，我是 Mephistopheles。V0.0.1 是我们在开发初期如实公开的第一个版本。您可以在大厅与精灵见面，也可以在练习场尝试她们的技能；地图和地下城尚未开放。我们正在根据大家的反馈准备 V0.0.2。

### 游戏介绍

欢迎来到 **Another**。您将与精灵组成队伍，一同踏上穿行伊甸的旅程。每位精灵都有自己的技能与动作，也会为战斗带来不同的体验。`evt` 项目正在制作这些相遇、大厅、战斗以及今后的地下城。

目前可下载的 V0.0.1 中，您可以在大厅近距离认识精灵、观察她们的反应，并在练习场试用技能。地图、地下城和与敌人的完整战斗仍在准备中。下文将首次公开版本与正在开发的内容分开说明。

在介绍页面中，初始形态的 Mephistopheles 会在覆盖整个浏览器的 three.js 图层上随章节移动并提供指引。您可以拖动角色或用方向键移动，轻触角色会触发反应。打开 `+` 按钮，可以听原版韩语语音并阅读台词。无损压缩容器会还原原始 GLB，光照与后期处理由 three.js 呈现。

### V0.0.1 首次公开版本

发布于 2026-09-29。目前可下载的版本是 **V0.0.1**。这个最初版本只能在 Windows 10 或 11（64 位）上运行，需要 DirectX 12 和 NVIDIA 显卡；Linux 与 macOS 暂不支持。

### 开始游戏

1. [下载 V0.0.1 压缩包](https://github.com/GarnetRapture/evt_p/releases/download/V0.0.1/Release.zip)并解压。
2. 在解压后的文件夹中运行 `ev_launcher.exe`。
3. 首次运行时，请点击红色的 **설치（安装）** 按钮，下载约 4.2 GB 的游戏资料。启动器会显示进度。
4. 安装完成后，点击 **게임 시작（开始游戏）**。游戏将以全屏方式打开。

### 首次公开版本所需配置

| 项目 | 要求 |
| --- | --- |
| 操作系统 | Windows 10 或 11（64 位） |
| 显卡 | 支持 DirectX 12（着色器模型 6.6）的 NVIDIA GeForce GTX 16 或 RTX 20 系列及更新型号 |
| 驱动 | 最新的 NVIDIA 显卡驱动 |
| 存储空间 | 约 4.3 GB，其中游戏资料约 4.2 GB |
| 网络 | 首次安装时需要下载游戏资料 |

可能需要 [DirectX 12](https://support.microsoft.com/help/179113)、[NVIDIA 显卡驱动](https://www.nvidia.com/Download/index.aspx)、[Microsoft Edge WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/consumer/) 和 [Visual C++ 可再发行组件（x64）](https://aka.ms/vc14/vc_redist.x64.exe)。DirectX 12 已包含在 Windows 中，Visual C++ 组件也随发布压缩包提供。缺少哪一项，再从官方页面获取即可。

### V0.0.2 更新说明草案

我们对照代码查看了来自其他设备的七项反馈。以下四项变化已经体现在代码中，但尚未在反馈设备上证明问题已经解决。

- AMD 显卡不再启动仅供 NVIDIA 使用的计算路径。启动时崩溃的确切原因仍在调查中。（T-A1）
- 如果第一种画面方式不可用，游戏可以尝试另一种方式。仍需在无法启动的设备上确认。（T-B1）
- 默认使用显示器当前的画面尺寸，并将可用尺寸接入设置。仍需在反馈设备上确认。（T-C1）
- 离开大厅时会停止大厅音乐，其他场景的音乐由独立路径播放。实际切换效果仍需试听。（T-C2）

### 开发安排与当前阶段

[着陆页的节点时间线](https://evt.everlib.pro/#roadmap)按当前阶段展示全部七项反馈：调查原因中（T-A1、T-C3、T-C5）、等待设备或声音验证（T-B1、T-C1、T-C2）、功能尚未接通（T-C4）。目前没有确定的完成日期。在查明原因并确认设备上的结果前，我不会把它们标记为已解决。

如果发现新问题，请前往 [GitHub Issues 提交反馈](https://github.com/GarnetRapture/evt_p/issues)。

[着陆页的开发安排](https://evt.everlib.pro/#roadmap)也会列出 GitHub 上公开且尚未关闭的问题。问题新建、更新或关闭后，页面部署流程会刷新列表。
