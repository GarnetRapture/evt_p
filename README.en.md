<div align="center">

<img src="docs/bg.png" alt="Another" width="880" />

# Another

[한국어](README.md#ko) · **English** · [简体中文](README.zh.md)

</div>

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

V0.0.2 includes startup, display and music fixes shaped by first-release tester reports, along with Soul life and outings in town. These changes are connected in the development code and will be verified in play before release.

- AMD graphics cards no longer start the NVIDIA calculation path. The cause of the startup crash is still under review. (T-A1)
- The game can try another way to draw the screen if the first is unavailable. The device that could not open the game still needs checking. (T-B1)
- The monitor's current size is the default, and available sizes are connected to settings. The reported monitor still needs checking. (T-C1)
- Lobby music stops when you leave, while music for another place plays separately. The actual transition still needs a listening check. (T-C2)
- Owned Souls wander the town. You can talk to them nearby or choose an outing; your choices are saved to affection and the daily record. (V0.0.2)
- Windows 10 1709 (build 16299) through Windows 11 is supported, and rendering is chosen per device in the order Direct3D 12 → Direct3D 11 → CPU (three.js). (Notices 01 and 03)
- Game records are saved in the sqlite3 game database, and game data is split into 19 map packs (.evtm) and 12 data packs (.evtp) so only the needed packs are downloaded. (Notices 04 and 05)
- The original summon direction of Mephistopheles, Beleth and Lilith, original world and Soul visuals, ultimate and main skill correction, and moving while using skills are implemented. (Notices 06 to 09)
- Town day and night, sunny, snowy and rainy weather, and town sounds heard with a sense of direction are implemented. (Notice 12)
- The Linux x86-64 port is in progress (16 of 26 release-lane items written, 61%).

> **DEV notice** · Full combat mechanics, Soul growth and the overall game content are still being designed. Right now our first priority is reproducing the original game’s features as they are.

### Roadmap and current stages

The [landing page roadmap](https://evt.everlib.pro/?lang=en#roadmap) separates the V0.0.2 verification scope from later development directions. You can also expand the detailed record of first-release reports.

After V0.0.2 has been verified and released, please [send us another report on GitHub Issues](https://github.com/GarnetRapture/evt_p/issues) if you find a new problem.

The [landing page roadmap](https://evt.everlib.pro/?lang=en#roadmap) also lists public GitHub issues. The Pages deployment refreshes that list when an issue is opened, changed, or closed.
