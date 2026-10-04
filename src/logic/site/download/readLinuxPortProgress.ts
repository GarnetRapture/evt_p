import { LINUX_PORT_PROGRESS } from '@evtp/constant/site/download/LINUX_PORT_PROGRESS';

export function readLinuxPortProgress(): Readonly<Record<'linuxProgress' | 'linuxDone' | 'linuxTotal', string>> {
  const { done, total } = LINUX_PORT_PROGRESS;
  return {
    linuxProgress: `${Math.floor((done * 100) / total)}%`,
    linuxDone: String(done),
    linuxTotal: String(total),
  };
}
