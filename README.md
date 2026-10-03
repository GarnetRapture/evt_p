<div align="center">

<img src="docs/bg.png" alt="Another" width="880" />

# Another

*구원자와 정령이 함께하는 파티 던전 게임*

[![version](https://img.shields.io/badge/download-V0.0.1-863bff?style=flat-square)](https://github.com/GarnetRapture/evt_p/releases/tag/V0.0.1)
[![platform](https://img.shields.io/badge/platform-Windows%2010%20%7C%2011-0078D4?style=flat-square)](#ko-requirements)
[![page](https://img.shields.io/badge/page-evt.everlib.pro-47bfff?style=flat-square)](https://evt.everlib.pro)

**[안내 페이지](https://evt.everlib.pro)** · **[V0.0.1 내려받기](https://github.com/GarnetRapture/evt_p/releases/download/V0.0.1/Release.zip)**

[한국어](#ko) · [English](README.en.md) · [简体中文](README.zh.md)

</div>

---

<a id="ko"></a>
## 한국어

구원자님, 메피스토펠레스입니다. V0.0.1은 개발 초기의 모습을 그대로 공개한 첫 버전이에요. 로비에서 정령을 만나고 연습장에서 기술을 써 보실 수 있지만, 맵과 던전은 아직 열리지 않았습니다. 보내주신 의견을 바탕으로 V0.0.2를 준비하고 있습니다.

### 게임 소개

구원자님과 정령들이 함께 파티를 꾸려 에덴을 걸어가는 게임, **Another**에 오신 것을 환영합니다. 정령마다 가진 기술과 움직임이 달라서, 누구와 함께하느냐에 따라 전투의 모습도 달라집니다. `evt` 프로젝트는 이 만남과 전투, 로비와 앞으로 이어질 던전의 여정을 만들고 있습니다.

지금 공개된 V0.0.1에서는 로비에서 정령의 모습을 가까이 보고 반응을 살펴볼 수 있습니다. 연습장에서는 정령의 기술을 직접 써 보실 수 있어요. 맵과 던전, 적과의 본격적인 전투는 아직 준비 중입니다. 처음 공개한 모습과 지금 개발하는 내용을 혼동하지 않도록 아래에 각각 적어 두었습니다. 제가 차례로 안내해 드릴게요.

안내 페이지에서는 기본형 메피스토펠레스가 브라우저 전체 화면의 three.js 레이어에서 구역마다 자리를 옮기며 안내합니다. 캐릭터를 드래그하거나 방향키로 옮기고, 짧게 터치해 반응을 볼 수 있어요. `+` 버튼을 열면 원본 한국어 음성과 대사를 들을 수 있습니다. 모델은 원본 GLB를 그대로 복원하는 무손실 압축본이며, 화면 색감과 빛 표현은 three.js 후처리로 표시합니다.

### V0.0.1 첫 공개본

2026-09-29에 공개했습니다. 지금 내려받을 수 있는 버전은 **V0.0.1**입니다. Windows 10·11(64비트)에서 실행되며, 이 첫 배포본은 DirectX 12와 NVIDIA 그래픽카드가 필요합니다. Linux와 macOS에서는 실행되지 않습니다.

### 시작 안내

1. [V0.0.1 압축 파일](https://github.com/GarnetRapture/evt_p/releases/download/V0.0.1/Release.zip)을 받아 압축을 풀어 주세요.
2. 폴더 안의 `ev_launcher.exe`를 실행해 주세요.
3. 처음에는 빨간 **설치** 버튼을 눌러 게임 자료(약 4.2 GB)를 받아 주세요. 진행 상황은 런처에서 볼 수 있습니다.
4. 설치가 끝나면 **게임 시작**을 눌러 주세요. 게임은 전체화면으로 열립니다.

<a id="ko-requirements"></a>
### 첫 공개본의 필요 사양

| 항목 | 내용 |
| --- | --- |
| 운영체제 | Windows 10·11 (64비트) |
| 그래픽 | DirectX 12(셰이더 모델 6.6) 지원 NVIDIA GeForce GTX 16·RTX 20 시리즈 이상 |
| 드라이버 | 최신 NVIDIA 그래픽 드라이버 |
| 저장 공간 | 약 4.3 GB (게임 자료 약 4.2 GB 포함) |
| 인터넷 | 처음 설치할 때 게임 자료를 받는 데 필요 |

필요한 구성 요소는 [DirectX 12](https://support.microsoft.com/help/179113), [NVIDIA 그래픽 드라이버](https://www.nvidia.com/Download/index.aspx), [Microsoft Edge WebView2 런타임](https://developer.microsoft.com/microsoft-edge/webview2/consumer/), [Visual C++ 재배포 패키지 (x64)](https://aka.ms/vc14/vc_redist.x64.exe)입니다. DirectX 12는 Windows에 포함되며, Visual C++ 구성 요소는 배포 파일에도 들어 있습니다. 없는 항목만 공식 안내에서 받아 주세요.

### V0.0.2 패치노트 초안

다른 기기에서 받은 제보 일곱 건을 코드와 대조했습니다. 아래 네 변화는 코드에서 확인했지만, 제보받은 기기에서 해결됐다는 뜻은 아닙니다.

- AMD 그래픽카드에서 NVIDIA 전용 계산을 시작하지 않도록 경로를 분리했습니다. 시작 직후 종료되는 원인은 아직 확인 중입니다. (T-A1)
- 첫 화면 방식이 맞지 않으면 다른 방식을 살피는 경로를 연결했습니다. 실행 불가 기기에서 확인이 필요합니다. (T-B1)
- 모니터의 현재 화면 크기를 기본으로 읽고 선택할 수 있는 크기를 설정에 연결했습니다. 제보받은 모니터에서 확인이 필요합니다. (T-C1)
- 로비를 떠날 때 음악을 멈추고 장소별 음악을 따로 재생하도록 연결했습니다. 실제 전환 소리는 확인이 필요합니다. (T-C2)

### 개발 일정과 진행 단계

[랜딩 페이지의 노드형 개발 일정](https://evt.everlib.pro/#roadmap)은 제보 일곱 건을 원인 확인 중(T-A1·T-C3·T-C5), 실제 기기·소리 확인 대기(T-B1·T-C1·T-C2), 기능 연결 전(T-C4)으로 구분합니다. 확정된 완료 날짜는 없습니다. 원인이나 실제 기기 결과를 확인하기 전에는 해결됐다고 표시하지 않겠습니다.

새로운 문제를 발견하셨다면 [GitHub Issues에서 신고해 주세요](https://github.com/GarnetRapture/evt_p/issues).

[랜딩 페이지의 개발 일정](https://evt.everlib.pro/#roadmap)에는 GitHub에 공개된 미해결 이슈도 함께 표시됩니다. 이슈가 열리거나 수정·종료되면 페이지 배포 작업이 목록을 새로 반영합니다.

---

<a id="en"></a>
## English

Savior, I am Mephistopheles. V0.0.1 was our first release, shared as it stood in early development. You can meet the Souls in the lobby and try their skills in the practice arena. Maps and dungeons are not open yet. We are preparing V0.0.2 from the reports you sent us.

### About the game

Welcome to **Another**, where you and the Souls form a party and journey through Eden. Each Soul brings her own skills and movements into battle. The `evt` project is building those encounters, the lobby, combat, and the dungeons ahead.

In the available V0.0.1 release, you can meet the Souls up close in the lobby, see their reactions, and try their skills in the practice arena. Maps, dungeons, and full battles against enemies are still being prepared. The first public build and the work in progress are described separately below.

On the guide page, the base Mephistopheles model moves between section positions on a full-viewport three.js layer. Drag her or use the arrow keys to move her, and tap briefly for a reaction. Open the `+` button to hear her original Korean voice with translated text. The lossless compressed container restores the original GLB, while three.js renders the lighting and postprocessing.

### V0.0.1 first release

Released on 2026-09-29. **V0.0.1** is the version available to download. This first release runs on Windows 10 or 11 (64-bit) and requires DirectX 12 and an NVIDIA graphics card. It does not run on Linux or macOS.

### Getting started

1. [Download the V0.0.1 archive](https://github.com/GarnetRapture/evt_p/releases/download/V0.0.1/Release.zip) and unzip it.
2. Run `ev_launcher.exe` from the unzipped folder.
3. On your first run, press the red **Install** button to download about 4.2 GB of game data. The launcher shows the progress.
4. When installation finishes, press **Start Game**. The game opens fullscreen.

### Requirements for the first release

| Item | Requirement |
| --- | --- |
| Operating system | Windows 10 or 11 (64-bit) |
| Graphics | NVIDIA GeForce GTX 16 or RTX 20 series or newer with DirectX 12 (Shader Model 6.6) |
| Driver | Latest NVIDIA graphics driver |
| Storage | About 4.3 GB, including about 4.2 GB of game data |
| Internet | Needed to download game data on the first run |

You may need [DirectX 12](https://support.microsoft.com/help/179113), an [NVIDIA graphics driver](https://www.nvidia.com/Download/index.aspx), the [Microsoft Edge WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/consumer/), and the [Visual C++ Redistributable (x64)](https://aka.ms/vc14/vc_redist.x64.exe). DirectX 12 is included in Windows, and the Visual C++ component is also included in the release archive. Please use the official links for anything you are missing.

### V0.0.2 patch notes draft

We compared seven reports from other devices with the code. The four changes below are present in the code, but they have not been proven to resolve the reports on those devices.

- AMD graphics cards no longer start the NVIDIA calculation path. The cause of the startup crash is still under review. (T-A1)
- The game can try another way to draw the screen if the first is unavailable. The device that could not open the game still needs checking. (T-B1)
- The monitor's current size is the default, and available sizes are connected to settings. The reported monitor still needs checking. (T-C1)
- Lobby music stops when you leave, while music for another place plays separately. The actual transition still needs a listening check. (T-C2)

### Roadmap and current stages

The [node timeline on the landing page](https://evt.everlib.pro/?lang=en#roadmap) groups all seven reports by their current step: cause under review (T-A1, T-C3, T-C5), device or sound check needed (T-B1, T-C1, T-C2), and feature not connected yet (T-C4). No completion dates have been set. I will not mark them resolved before their causes and device results are checked.

If you find a new problem, [report it on GitHub Issues](https://github.com/GarnetRapture/evt_p/issues).

The [landing page roadmap](https://evt.everlib.pro/?lang=en#roadmap) also lists open public GitHub issues. The Pages deployment refreshes that list when an issue is opened, changed, or closed.

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
