import type { SiteMephistoReactionId } from '@evtp/type/site/mephisto/SiteMephistoReaction';
import greetingVoice from '@evtp/asset/soul/voice/V_Mephisto_Greeting_KR.mp3';
import touchVoice from '@evtp/asset/soul/voice/V_Mephisto_LobbyTouch1_KR.mp3';
import touchSpecialVoice from '@evtp/asset/soul/voice/V_Mephisto_LobbyTouchsp_KR.mp3';
import touchSpecialSecondVoice from '@evtp/asset/soul/voice/V_Mephisto_LobbyTouchsp2_KR.mp3';

export const SITE_MEPHISTO_REACTIONS: Readonly<Record<SiteMephistoReactionId, { clip: string; voice: string }>> = {
  greeting: { clip: 'Mephisto_Greeting', voice: greetingVoice },
  touch: { clip: 'Mephisto_Touch', voice: touchVoice },
  touchsp: { clip: 'Mephisto_Touchsp', voice: touchSpecialVoice },
  touchsp02: { clip: 'Mephisto_Touchsp02', voice: touchSpecialSecondVoice },
};

export const SITE_MEPHISTO_REACTION_ORDER: readonly SiteMephistoReactionId[] = ['greeting', 'touch', 'touchsp', 'touchsp02'];
