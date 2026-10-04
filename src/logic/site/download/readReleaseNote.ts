import releaseNotes from '@evtp/data/download/releaseNotes.json';
import type { ReleaseNote } from '@evtp/type/site/download/ReleaseNote';

const notes: Readonly<Record<string, ReleaseNote>> = releaseNotes;

export function readReleaseNote(version: string): ReleaseNote {
  const note = notes[version];
  if (note === undefined) throw new Error(`release note missing: ${version}`);
  return note;
}
