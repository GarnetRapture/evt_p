<div align="center">

<img src="docs/bg.png" alt="Another" width="880" />

# Another

[한국어](README.md#ko) · **English** · [简体中文](README.zh.md)

</div>

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

The 2026-10-08 Windows hotfix corrects input and message lifetimes after window closure or WebView2 failure and adds first-failure diagnostics. It also corrects native settings and shader connections for Vulkan and OpenGL. Existing web screens, game data and the Linux release are preserved; Radeon and GPU execution results require tester feedback from this build.

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
- Hotfix: older graphics cards without DirectX 12 Ultimate (feature level 12_2), such as the GTX 10 series, now start with Direct3D 11 automatically. The game no longer closes right after starting on older NVIDIA drivers, and choosing Direct3D 11 no longer fails with a screen buffer error.
- Hotfix: the camera no longer shakes in dungeons, the town and the training ground. It follows the character position instead of body animation, no longer pulls in and out going down stairs, switches combat focus smoothly, and health bars and damage numbers use the same camera as the scene.
- Hotfix: launcher setting lists open below the field, show readable text and scroll down to every item.

> **DEV notice** · Full combat mechanics, Soul growth and the overall game content are still being designed. Right now our first priority is reproducing the original game’s features as they are.

### Roadmap and current stages

The [landing page roadmap](https://evt.everlib.pro/?lang=en#roadmap) separates the V0.0.2 verification scope from later development directions. You can also expand the detailed record of first-release reports.

After V0.0.2 has been verified and released, please [send us another report on GitHub Issues](https://github.com/GarnetRapture/evt_p/issues) if you find a new problem.

The [landing page roadmap](https://evt.everlib.pro/?lang=en#roadmap) also lists public GitHub issues. The Pages deployment refreshes that list when an issue is opened, changed, or closed.
