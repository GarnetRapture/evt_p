<div align="center">

<img src="docs/bg.png" alt="Another" width="880" />

# Another

*구원자와 정령이 함께하는 파티 던전 게임*

[![version](https://img.shields.io/badge/download-V0.0.2-863bff?style=flat-square)](https://github.com/GarnetRapture/evt_p/releases/tag/V0.0.2)
[![platform](https://img.shields.io/badge/platform-Windows%2010%20%7C%2011-0078D4?style=flat-square)](#ko-requirements)
[![page](https://img.shields.io/badge/page-evt.everlib.pro-47bfff?style=flat-square)](https://evt.everlib.pro)

**[안내 페이지](https://evt.everlib.pro)** · **[V0.0.2 내려받기(Windows)](https://github.com/GarnetRapture/evt_p/releases/download/V0.0.2/Another-V0.0.2-windows-x64.zip)** · **[V0.0.2 내려받기(Linux)](https://github.com/GarnetRapture/evt_p/releases/download/V0.0.2/Another-V0.0.2-linux-x64.tar.gz)**

[한국어](#ko) · [English](README.en.md) · [简体中文](README.zh.md)

</div>

---

<a id="ko"></a>
## 한국어

구원자님, 메피스토펠레스입니다. V0.0.1은 개발 초기의 모습을 그대로 공개한 첫 버전이에요. 로비에서 정령을 만나고 연습장에서 기술을 써 보실 수 있지만, 맵과 던전은 아직 열리지 않았습니다. 보내주신 의견을 바탕으로 V0.0.2를 공개했습니다.

### 게임 소개

구원자님과 정령들이 함께 파티를 꾸려 에덴을 걸어가는 게임, **Another**에 오신 것을 환영합니다. 정령마다 가진 기술과 움직임이 달라서, 누구와 함께하느냐에 따라 전투의 모습도 달라집니다. `evt` 프로젝트는 이 만남과 전투, 로비와 앞으로 이어질 던전의 여정을 만들고 있습니다.

지금 공개된 V0.0.1에서는 로비에서 정령의 모습을 가까이 보고 반응을 살펴볼 수 있습니다. 연습장에서는 정령의 기술을 직접 써 보실 수 있어요. 맵과 던전, 적과의 본격적인 전투는 아직 준비 중입니다. 처음 공개한 모습과 지금 개발하는 내용을 혼동하지 않도록 아래에 각각 적어 두었습니다. 제가 차례로 안내해 드릴게요.

안내 페이지에서는 기본형 메피스토펠레스가 브라우저 전체 화면의 three.js 레이어에서 구역마다 자리를 옮기며 안내합니다. 캐릭터를 드래그하거나 방향키로 옮기고, 짧게 터치해 반응을 볼 수 있어요. `+` 버튼을 열면 원본 한국어 음성과 대사를 들을 수 있습니다. 모델은 원본 GLB를 그대로 복원하는 무손실 압축본이며, 화면 색감과 빛 표현은 three.js 후처리로 표시합니다.

### V0.0.1 첫 공개본

2026-09-29에 공개했고 지금도 [릴리즈 페이지](https://github.com/GarnetRapture/evt_p/releases)에서 받을 수 있습니다. Windows 10·11(64비트)에서 실행되며, 이 첫 배포본은 DirectX 12와 NVIDIA 그래픽카드가 필요합니다. Linux와 macOS에서는 실행되지 않습니다.

### 시작 안내

1. V0.0.2 압축 파일([Windows](https://github.com/GarnetRapture/evt_p/releases/download/V0.0.2/Another-V0.0.2-windows-x64.zip) · [Linux](https://github.com/GarnetRapture/evt_p/releases/download/V0.0.2/Another-V0.0.2-linux-x64.tar.gz))을 받아 압축을 풀어 주세요.
2. 폴더 안의 런처를 실행해 주세요. Windows는 `ev_launcher.exe`, Linux는 `./ev_launcher`입니다. Linux에서는 `libSDL3.so.0`과 `libcurl.so.4`가 필요하며, Ubuntu 26.04라면 `sudo apt install libsdl3-0 libcurl4t64`로 준비할 수 있습니다.
3. 처음에는 **설치** 버튼을 눌러 게임 데이터 팩(약 4.4 GB)을 받아 주세요. 런처가 필요한 팩만 받으며 진행 상황을 보여 줍니다.
4. 설치가 끝나면 **게임 시작**을 눌러 주세요. 화면 모드(전용 전체화면·테두리 없음·창 모드)는 환경설정에서 고를 수 있습니다.

<a id="ko-requirements"></a>
### V0.0.2 필요 사양

| 항목 | 내용 |
| --- | --- |
| 운영체제 | Windows 10 1709(빌드 16299)부터 Windows 11까지 (64비트), Linux x86-64(glibc 2.43 이상과 GCC 15의 libstdc++, 예: Ubuntu 26.04) |
| 그래픽 | Windows: Direct3D 12(기능 수준 11_0 이상) 또는 Direct3D 11(기능 수준 10_0 이상). 둘 다 쓸 수 없으면 CPU(three.js) 렌더로 실행. Linux: CPU(three.js) 렌더로 실행 |
| 드라이버 | 그래픽카드 제조사의 최신 드라이버 |
| 저장 공간 | Windows 약 4.5 GB, Linux 약 4.8 GB (게임 데이터 팩 약 4.4 GB 포함) |
| 인터넷 | 처음 설치할 때 게임 데이터 팩을 받는 데 필요 |

필요한 구성 요소는 [DirectX 12](https://support.microsoft.com/help/179113), [NVIDIA 그래픽 드라이버](https://www.nvidia.com/Download/index.aspx), [Microsoft Edge WebView2 런타임](https://developer.microsoft.com/microsoft-edge/webview2/consumer/), [Visual C++ 재배포 패키지 (x64)](https://aka.ms/vc14/vc_redist.x64.exe)입니다. DirectX 12는 Windows에 포함되며, Visual C++ 구성 요소는 배포 파일에도 들어 있습니다. 없는 항목만 공식 안내에서 받아 주세요. Linux 배포 파일에는 CEF가 들어 있으며, 시스템 라이브러리 `libSDL3.so.0`과 `libcurl.so.4`가 있어야 합니다.

### V0.0.2 패치노트

V0.0.2에는 첫 공개본의 테스터 제보에 따른 실행·화면·음악 수정과 일반 사용자 개발 방향 공지의 구현이 담겼습니다. 아래 변경은 V0.0.2 Windows·Linux 배포본에 들어 있습니다.

- AMD 그래픽카드에서 NVIDIA 전용 계산을 시작하지 않도록 경로를 분리했습니다. 시작 직후 종료되는 원인은 아직 확인 중입니다. (T-A1)
- 첫 화면 방식이 맞지 않으면 다른 방식을 살피는 경로를 연결했습니다. 실행 불가 기기에서 확인이 필요합니다. (T-B1)
- 모니터의 현재 화면 크기를 기본으로 읽고 선택할 수 있는 크기를 설정에 연결했습니다. 제보받은 모니터에서 확인이 필요합니다. (T-C1)
- 로비를 떠날 때 음악을 멈추고 장소별 음악을 따로 재생하도록 연결했습니다. 실제 전환 소리는 확인이 필요합니다. (T-C2)
- 영지에서는 보유한 정령이 돌아다니고, 가까이에서 대화하거나 나들이를 선택할 수 있습니다. 장소와 대화 결과는 호감도와 일일 기록에 저장됩니다. (V0.0.2)
- Windows 10 1709(빌드 16299)부터 Windows 11까지 지원하고, 렌더는 Direct3D 12 → Direct3D 11 → CPU(three.js) 순서로 기기에 맞게 고릅니다. (공지 01·03)
- 게임 기록을 sqlite3 게임 데이터베이스에 저장하고, 게임 데이터를 맵 팩 19개(.evtm)와 일반 데이터 팩 12개(.evtp)로 나눠 필요한 팩만 받습니다. (공지 04·05)
- 메피스토펠레스·벨레스·릴리스의 원본 소환 연출, 맵과 정령의 원본 표현, 얼티밋·메인 스킬 교정, 스킬 중 이동을 구현했습니다. (공지 06·07·08·09)
- 영지의 낮·밤과 맑음·눈·비 날씨, 가까이 가면 방향감 있게 들리는 영지 소리를 구현했습니다. (공지 12)
- Linux x86-64 버전도 함께 공개했습니다. 런처와 게임 화면은 CEF로 띄우고 CPU(three.js) 렌더로 장면을 보여 주며, 런처와 게임 창 아이콘도 Windows와 같습니다. Linux용 Vulkan·OpenGL 렌더는 아직 구현하지 않았습니다.
- 핫픽스: GTX 10 계열처럼 DirectX 12 Ultimate(기능 수준 12_2)를 지원하지 않는 구세대 그래픽카드는 자동으로 Direct3D 11로 실행합니다. 구형 NVIDIA 드라이버에서 시작 직후 꺼지던 문제와, Direct3D 11을 고르면 화면 버퍼 오류로 시작하지 못하던 문제를 고쳤습니다.
- 핫픽스: 던전·영지·훈련장의 카메라 흔들림을 고쳤습니다. 카메라가 몸 동작 대신 캐릭터 위치를 따라가고, 계단을 내려갈 때 카메라가 당겨졌다 풀리지 않으며, 전투 대상 전환이 부드러워졌고, 체력바와 피해 숫자가 장면과 같은 카메라로 표시됩니다.
- 핫픽스: 런처 설정의 선택 목록이 필드 아래로 펼쳐지고, 글자가 잘 보이며 아래 항목까지 스크롤할 수 있습니다.

> **DEV 공지** · 본격적인 전투 메커니즘·정령 육성 방향·게임 콘텐츠 전반은 아직 설계를 준비하고 있습니다. 지금은 원본 게임의 기능을 그대로 재현하는 일을 가장 먼저 하고 있습니다.

### 개발 일정과 진행 단계

[랜딩 페이지의 개발 일정](https://evt.everlib.pro/#roadmap)에서는 V0.0.2의 출시 전 검증 범위와 이후 개발 방향을 구분해 볼 수 있습니다. 첫 공개본의 상세 제보 기록도 펼쳐 볼 수 있습니다.

V0.0.2의 동작을 검증해 공개한 뒤에도 새로운 문제를 발견하셨다면 [GitHub Issues에 추가 제보를 남겨 주세요](https://github.com/GarnetRapture/evt_p/issues).

[랜딩 페이지의 개발 일정](https://evt.everlib.pro/#roadmap)에는 GitHub에 공개된 이슈 목록도 표시됩니다. 이슈가 열리거나 수정·종료되면 페이지 배포 작업이 목록을 새로 반영합니다.

---

<a id="en"></a>
## English

Savior, I am Mephistopheles. V0.0.1 was our first release, shared as it stood in early development. You can meet the Souls in the lobby and try their skills in the practice arena. Maps and dungeons are not open yet. V0.0.2 is now released, shaped by the reports you sent us.

### About the game

Welcome to **Another**, where you and the Souls form a party and journey through Eden. Each Soul brings her own skills and movements into battle. The `evt` project is building those encounters, the lobby, combat, and the dungeons ahead.

In the available V0.0.1 release, you can meet the Souls up close in the lobby, see their reactions, and try their skills in the practice arena. Maps, dungeons, and full battles against enemies are still being prepared. The first public build and the work in progress are described separately below.

On the guide page, the base Mephistopheles model moves between section positions on a full-viewport three.js layer. Drag her or use the arrow keys to move her, and tap briefly for a reaction. Open the `+` button to hear her original Korean voice with translated text. The lossless compressed container restores the original GLB, while three.js renders the lighting and postprocessing.

### V0.0.1 first release

Released on 2026-09-29 and still available on the [releases page](https://github.com/GarnetRapture/evt_p/releases). This first release runs on Windows 10 or 11 (64-bit) and requires DirectX 12 and an NVIDIA graphics card. It does not run on Linux or macOS.

### Getting started

1. Download the V0.0.2 archive ([Windows](https://github.com/GarnetRapture/evt_p/releases/download/V0.0.2/Another-V0.0.2-windows-x64.zip) · [Linux](https://github.com/GarnetRapture/evt_p/releases/download/V0.0.2/Another-V0.0.2-linux-x64.tar.gz)) and unpack it.
2. Run the launcher from the unpacked folder: `ev_launcher.exe` on Windows, `./ev_launcher` on Linux. Linux needs `libSDL3.so.0` and `libcurl.so.4`; on Ubuntu 26.04 you can get them with `sudo apt install libsdl3-0 libcurl4t64`.
3. On your first run, press **Install** to download about 4.4 GB of game data packs. The launcher downloads only the packs you need and shows the progress.
4. When installation finishes, press **Start Game**. Choose exclusive fullscreen, borderless or windowed mode in Settings.

### V0.0.2 requirements

| Item | Requirement |
| --- | --- |
| Operating system | Windows 10 1709 (build 16299) through Windows 11 (64-bit), and Linux x86-64 (glibc 2.43 or later with the GCC 15 libstdc++, for example Ubuntu 26.04) |
| Graphics | Windows: Direct3D 12 (feature level 11_0 or higher) or Direct3D 11 (feature level 10_0 or higher); without either, CPU (three.js) rendering. Linux: CPU (three.js) rendering |
| Driver | Latest driver from your graphics card maker |
| Storage | About 4.5 GB on Windows and 4.8 GB on Linux, including about 4.4 GB of game data packs |
| Internet | Needed to download the game data packs on the first run |

You may need [DirectX 12](https://support.microsoft.com/help/179113), an [NVIDIA graphics driver](https://www.nvidia.com/Download/index.aspx), the [Microsoft Edge WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/consumer/), and the [Visual C++ Redistributable (x64)](https://aka.ms/vc14/vc_redist.x64.exe). DirectX 12 is included in Windows, and the Visual C++ component is also included in the release archive. Please use the official links for anything you are missing. The Linux archive includes CEF and needs the system libraries `libSDL3.so.0` and `libcurl.so.4`.

### V0.0.2 patch notes

V0.0.2 brings the startup, display and music fixes shaped by first-release tester reports and the implementation of the development notices. These changes ship in the V0.0.2 Windows and Linux releases.

- AMD graphics cards no longer start the NVIDIA calculation path. The cause of the startup crash is still under review. (T-A1)
- The game can try another way to draw the screen if the first is unavailable. The device that could not open the game still needs checking. (T-B1)
- The monitor's current size is the default, and available sizes are connected to settings. The reported monitor still needs checking. (T-C1)
- Lobby music stops when you leave, while music for another place plays separately. The actual transition still needs a listening check. (T-C2)
- Owned Souls wander the town. You can talk to them nearby or choose an outing; your choices are saved to affection and the daily record. (V0.0.2)
- Windows 10 1709 (build 16299) through Windows 11 is supported, and rendering is chosen per device in the order Direct3D 12 → Direct3D 11 → CPU (three.js). (Notices 01 and 03)
- Game records are saved in the sqlite3 game database, and game data is split into 19 map packs (.evtm) and 12 data packs (.evtp) so only the needed packs are downloaded. (Notices 04 and 05)
- The original summon direction of Mephistopheles, Beleth and Lilith, original world and Soul visuals, ultimate and main skill correction, and moving while using skills are implemented. (Notices 06 to 09)
- Town day and night, sunny, snowy and rainy weather, and town sounds heard with a sense of direction are implemented. (Notice 12)
- The Linux x86-64 version is released alongside. The launcher and game screens are hosted by CEF and rendered with CPU (three.js) rendering, and the launcher and game windows use the same icon as on Windows. Vulkan and OpenGL rendering for Linux are not implemented yet.

> **DEV notice** · Full combat mechanics, Soul growth and the overall game content are still being designed. Right now our first priority is reproducing the original game’s features as they are.

### Roadmap and current stages

The [landing page roadmap](https://evt.everlib.pro/?lang=en#roadmap) separates the V0.0.2 verification scope from later development directions. You can also expand the detailed record of first-release reports.

After V0.0.2 has been verified and released, please [send us another report on GitHub Issues](https://github.com/GarnetRapture/evt_p/issues) if you find a new problem.

The [landing page roadmap](https://evt.everlib.pro/?lang=en#roadmap) also lists public GitHub issues. The Pages deployment refreshes that list when an issue is opened, changed, or closed.

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

> **DEV 公告** · 正式的战斗机制、精灵养成方向和整体游戏内容仍在设计准备中。目前我们优先如实还原原版游戏的功能。

### 开发安排与当前阶段

[着陆页的开发安排](https://evt.everlib.pro/#roadmap)区分 V0.0.2 的发布前验证范围与后续开发方向，也可以展开查看首个公开版本的详细反馈记录。

V0.0.2 完成验证并发布后，如发现新问题，请在 [GitHub Issues 继续反馈](https://github.com/GarnetRapture/evt_p/issues)。

[着陆页的开发安排](https://evt.everlib.pro/#roadmap)也会列出 GitHub 上公开的问题。问题新建、更新或关闭后，页面部署流程会刷新列表。
