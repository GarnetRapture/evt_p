<div align="center">

<img src="docs/bg.png" alt="Another" width="880" />

# Another

*구원자와 정령이 함께하는 파티 던전 게임*

[![version](https://img.shields.io/badge/version-V0.0.1-863bff?style=flat-square)](https://github.com/GarnetRapture/evt_p/releases/tag/V0.0.1)
[![platform](https://img.shields.io/badge/platform-Windows%2010%20%7C%2011-0078D4?style=flat-square)](#필요-사양)
[![page](https://img.shields.io/badge/page-evt.everlib.pro-47bfff?style=flat-square)](https://evt.everlib.pro)

**[안내 페이지](https://evt.everlib.pro)** · **[V0.0.1 내려받기](https://github.com/GarnetRapture/evt_p/releases/download/V0.0.1/Release.zip)**

</div>

---

## V0.0.1 알파 테스트

2026-09-29 · 첫 알파 테스트 빌드입니다.

| 구분 | 내용 |
| --- | --- |
| 런처 | 게임 데이터를 확인하고, 없으면 설치 버튼으로 내려받아 설치합니다. 설치 중에는 버튼 게이지와 현황 표시로 진행을 보여 줍니다 |
| 캐릭터 감상 | 로비에서 정령을 3D로 둘러보고 터치에 반응하는 모습을 볼 수 있습니다 |
| 연습장 | 정령의 스킬을 직접 써 보며 확인할 수 있습니다 |
| 맵과 던전 | 아직 작업 중입니다 |
| 그래픽 처리 | 화면은 DirectX 12(Direct3D 12)로 그리고, 캐릭터 움직임과 파티클 계산은 NVIDIA 그래픽카드의 CUDA로 처리합니다 |
| 지원 환경 | Windows 10·11(64비트)에서만 실행됩니다. Linux와 macOS는 지원하지 않습니다 |

## 설치

1. [V0.0.1 내려받기](https://github.com/GarnetRapture/evt_p/releases/download/V0.0.1/Release.zip)에서 `Release.zip`을 받아 압축을 풉니다.
2. `ev_launcher.exe`를 실행합니다.
3. 처음 실행하면 빨간 **설치** 버튼이 나옵니다. 누르면 게임 데이터(약 4.2 GB)를 내려받아 설치합니다.
4. 설치가 끝나면 **게임 시작**을 누릅니다. 게임은 전체화면으로 실행됩니다.

## 필요 사양

| 항목 | 사양 |
| --- | --- |
| 운영체제 | Windows 10·11 (64비트) |
| 그래픽 | DirectX 12(셰이더 모델 6.6) 지원 NVIDIA GeForce GTX 16·RTX 20 시리즈 이상 |
| 드라이버 | 최신 NVIDIA 그래픽 드라이버 |
| 저장 공간 | 약 4.3 GB (게임 데이터 약 4.2 GB 포함) |
| 인터넷 | 처음 설치할 때 게임 데이터를 내려받는 데 필요 |

## 필요한 구성 요소

| 구성 요소 | 안내 |
| --- | --- |
| [DirectX 12](https://support.microsoft.com/help/179113) | Windows 10·11에 포함되어 있어 따로 설치하는 파일이 없습니다. Windows 업데이트를 최신으로 유지해 주십시오 |
| [NVIDIA 그래픽 드라이버](https://www.nvidia.com/Download/index.aspx) | 최신 드라이버를 설치해 주십시오 |
| [Microsoft Edge WebView2 런타임](https://developer.microsoft.com/microsoft-edge/webview2/consumer/) | 게임 화면과 메뉴를 표시하는 데 필요합니다. Windows 11에는 기본으로 들어 있습니다 |
| [Visual C++ 재배포 패키지 (x64)](https://aka.ms/vc14/vc_redist.x64.exe) | 배포 파일에 함께 들어 있어 보통은 설치하지 않아도 됩니다 |
