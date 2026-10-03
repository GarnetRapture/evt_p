import { createSignal, onMount } from 'solid-js';
import lobbyMusicUrl from '@evtp/asset/bgm/BGM_Lobby_02.ogg?url';
import type { SiteText } from '@evtp/type/site/text/SiteText';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';

export function SiteMusicPlayer(props: { text: SiteText }) {
  const [playing, setPlaying] = createSignal(false);
  const [muted, setMuted] = createSignal(false);
  const [position, setPosition] = createSignal(0);
  const [duration, setDuration] = createSignal(0);
  const [unavailable, setUnavailable] = createSignal(false);
  let audio: HTMLAudioElement | undefined;

  onMount(() => {
    if (!audio) return;
    audio.volume = 0.25;
    void audio.play().catch(() => setPlaying(false));
  });

  const togglePlayback = async (): Promise<void> => {
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
        setUnavailable(false);
      } catch {
        setUnavailable(true);
      }
    } else {
      audio.pause();
    }
  };

  const seek = (value: string): void => {
    if (!audio || !Number.isFinite(audio.duration)) return;
    audio.currentTime = Number(value);
    setPosition(audio.currentTime);
  };

  return (
    <div class={SITE_CLASS_NAME.musicPlayer} data-playing={playing()}>
      <audio
        ref={(element) => { audio = element; }}
        src={lobbyMusicUrl}
        loop
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={() => setPosition(audio?.currentTime ?? 0)}
        onLoadedMetadata={() => setDuration(audio?.duration ?? 0)}
        onError={() => { setUnavailable(true); setPlaying(false); }}
      />
      <button
        class={SITE_CLASS_NAME.musicToggle}
        type="button"
        aria-label={playing() ? props.text.musicPause : props.text.musicPlay}
        aria-pressed={playing()}
        title={unavailable() ? props.text.musicUnavailable : undefined}
        onClick={() => void togglePlayback()}
      >
        <span class={SITE_CLASS_NAME.musicIcon} aria-hidden="true"><i /><i /><i /><i /></span>
        <span aria-hidden="true">{playing() ? 'Ⅱ' : '▶'}</span>
      </button>
      <div class={SITE_CLASS_NAME.musicBody}>
        <span class={SITE_CLASS_NAME.musicTitle}>{props.text.musicTitle}</span>
        <span class={SITE_CLASS_NAME.musicTrack}>{props.text.musicTrack}</span>
        <input
          class={SITE_CLASS_NAME.musicProgress}
          type="range"
          min="0"
          max={duration() || 1}
          value={position()}
          step="0.1"
          aria-label={props.text.musicSeek}
          disabled={!duration()}
          style={{ '--music-progress': `${duration() ? position() / duration() * 100 : 0}%` }}
          onInput={(event) => seek(event.currentTarget.value)}
        />
      </div>
      <button
        class={SITE_CLASS_NAME.musicVolume}
        type="button"
        aria-label={muted() ? props.text.musicUnmute : props.text.musicMute}
        aria-pressed={muted()}
        onClick={() => { if (audio) { audio.muted = !audio.muted; setMuted(audio.muted); } }}
      >{muted() ? '×' : '♪'}</button>
    </div>
  );
}
