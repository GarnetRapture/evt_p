<div align="center">

<img src="docs/bg.png" alt="Another" width="880" />

# Another

[한국어](README.md#ko) · [English](README.en.md) · **简体中文**

</div>

---

<a id="zh-cn"></a>
## 简体中文

救世主您好，我是 Mephistopheles。V0.0.1 是我们在开发初期如实公开的第一个版本。您可以在大厅与精灵见面，也可以在练习场尝试她们的技能；地图和地下城尚未开放。我们已根据大家的反馈发布 V0.0.2。

### 游戏介绍

欢迎来到 **Another**。您将与精灵组成队伍，一同踏上穿行伊甸的旅程。每位精灵都有自己的技能与动作，也会为战斗带来不同的体验。`evt` 项目正在制作这些相遇、大厅、战斗以及今后的地下城。

目前可下载的 V0.0.1 中，您可以在大厅近距离认识精灵、观察她们的反应，并在练习场试用技能。地图、地下城和与敌人的完整战斗仍在准备中。下文将首次公开版本与正在开发的内容分开说明。

在介绍页面中，初始形态的 Mephistopheles 会在覆盖整个浏览器的 three.js 图层上随章节移动并提供指引。您可以拖动角色或用方向键移动，轻触角色会触发反应。打开 `+` 按钮，可以听原版韩语语音并阅读台词。无损压缩容器会还原原始 GLB，光照与后期处理由 three.js 呈现。

### V0.0.1 首次公开版本

发布于 2026-09-29，仍可在[发布页面](https://github.com/GarnetRapture/evt_p/releases)下载。这个最初版本只能在 Windows 10 或 11（64 位）上运行，需要 DirectX 12 和 NVIDIA 显卡；Linux 与 macOS 暂不支持。

### 开始游戏

1. 下载 V0.0.2 压缩包（[Windows](https://github.com/GarnetRapture/evt_p/releases/download/V0.0.2/Another-V0.0.2-windows-x64.zip) · [Linux](https://github.com/GarnetRapture/evt_p/releases/download/V0.0.2/Another-V0.0.2-linux-x64.tar.gz)）并解压。
2. 在解压后的文件夹中运行启动器：Windows 为 `ev_launcher.exe`，Linux 为 `./ev_launcher`。Linux 需要 `libSDL3.so.0` 和 `libcurl.so.4`，在 Ubuntu 26.04 上可用 `sudo apt install libsdl3-0 libcurl4t64` 安装。
3. 首次运行时，请点击 **설치（安装）** 按钮，下载约 4.4 GB 的游戏数据包。启动器只下载需要的包并显示进度。
4. 安装完成后，点击 **게임 시작（开始游戏）**。可以在设置中选择独占全屏、无边框或窗口模式。

### V0.0.2 所需配置

| 项目 | 要求 |
| --- | --- |
| 操作系统 | Windows 10 1709（版本号 16299）至 Windows 11（64 位），以及 Linux x86-64（glibc 2.43 以上与 GCC 15 的 libstdc++，例如 Ubuntu 26.04） |
| 显卡 | Windows：支持 Direct3D 12（功能级别 11_0 以上）或 Direct3D 11（功能级别 10_0 以上）；两者都不可用时使用 CPU（three.js）渲染。Linux：使用 CPU（three.js）渲染 |
| 驱动 | 显卡厂商的最新驱动 |
| 存储空间 | Windows 约 4.5 GB，Linux 约 4.8 GB，其中游戏数据包约 4.4 GB |
| 网络 | 首次安装时需要下载游戏数据包 |

可能需要 [DirectX 12](https://support.microsoft.com/help/179113)、[NVIDIA 显卡驱动](https://www.nvidia.com/Download/index.aspx)、[Microsoft Edge WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/consumer/) 和 [Visual C++ 可再发行组件（x64）](https://aka.ms/vc14/vc_redist.x64.exe)。DirectX 12 已包含在 Windows 中，Visual C++ 组件也随发布压缩包提供。缺少哪一项，再从官方页面获取即可。Linux 压缩包已包含 CEF，并需要系统库 `libSDL3.so.0` 和 `libcurl.so.4`。

### V0.0.2 更新说明

2026-10-08 Windows 热修复调整了窗口关闭或 WebView2 失败后的输入与消息处理生命周期，并补充首次失败诊断。同时修正了 Vulkan、OpenGL 的原生设置与着色器连接。现有网页画面、游戏数据及 Linux 版本保持不变；实际 Radeon 和 GPU 运行结果由此版本的测试反馈确认。

V0.0.2 包含根据首个公开版本测试反馈完成的启动、画面和音乐修正，以及开发方向公告的实现。以下改动已包含在 V0.0.2 Windows 与 Linux 版本中。

- AMD 显卡不再启动仅供 NVIDIA 使用的计算路径。启动时崩溃的确切原因仍在调查中。（T-A1）
- 如果第一种画面方式不可用，游戏可以尝试另一种方式。仍需在无法启动的设备上确认。（T-B1）
- 默认使用显示器当前的画面尺寸，并将可用尺寸接入设置。仍需在反馈设备上确认。（T-C1）
- 离开大厅时会停止大厅音乐，其他场景的音乐由独立路径播放。实际切换效果仍需试听。（T-C2）
- 已拥有的精灵会在领地中走动。您可以靠近交谈或选择出游；对话选择会保存为好感度与每日记录。（V0.0.2）
- 支持 Windows 10 1709（版本号 16299）至 Windows 11，渲染会按 Direct3D 12 → Direct3D 11 → CPU（three.js）的顺序根据设备选择。（公告 01、03）
- 游戏记录保存在 sqlite3 游戏数据库中，游戏数据拆分为 19 个地图包（.evtm）和 12 个数据包（.evtp），只下载需要的包。（公告 04、05）
- 已实现 Mephistopheles、Beleth、Lilith 的原版召唤演出、地图与精灵的原版表现、终极技与主技能演出校正，以及使用技能时的移动。（公告 06 至 09）
- 已实现领地的昼夜、晴天·下雪·下雨天气，以及靠近时带方向感的领地声音。（公告 12）
- 同时发布 Linux x86-64 版本。启动器和游戏画面由 CEF 承载，并以 CPU（three.js）渲染显示场景；启动器和游戏窗口图标与 Windows 相同。Linux 版 Vulkan、OpenGL 渲染尚未实现。
- 热修复：GTX 10 系列等不支持 DirectX 12 Ultimate（功能级别 12_2）的旧款显卡会自动使用 Direct3D 11 运行。修复了在旧版 NVIDIA 驱动上启动后立即退出的问题，以及选择 Direct3D 11 时因画面缓冲区错误无法启动的问题。
- 热修复：修复了地下城、领地和训练场中镜头晃动的问题。镜头改为跟随角色位置而不是身体动画，下楼梯时镜头不再反复拉近拉远，战斗目标切换更平滑，血条和伤害数字与场景使用同一镜头显示。
- 热修复：启动器设置中的选择列表会在字段下方展开，文字清晰可见，并可滚动到所有选项。

> **DEV 公告** · 正式的战斗机制、精灵养成方向和整体游戏内容仍在设计准备中。目前我们优先如实还原原版游戏的功能。

### 开发安排与当前阶段

[着陆页的开发安排](https://evt.everlib.pro/#roadmap)区分 V0.0.2 的发布前验证范围与后续开发方向，也可以展开查看首个公开版本的详细反馈记录。

V0.0.2 完成验证并发布后，如发现新问题，请在 [GitHub Issues 继续反馈](https://github.com/GarnetRapture/evt_p/issues)。

[着陆页的开发安排](https://evt.everlib.pro/#roadmap)也会列出 GitHub 上公开的问题。问题新建、更新或关闭后，页面部署流程会刷新列表。
