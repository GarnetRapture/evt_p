import type { SoulRosterEntry } from '@evtp/type/soul/roster/SoulRosterEntry';

export function distributeSoulColumns(
  roster: readonly SoulRosterEntry[],
  columnCount: number,
  cardsPerColumn: number,
): readonly (readonly SoulRosterEntry[])[] {
  const wanted = Math.min(roster.length, columnCount * cardsPerColumn);
  const stride = roster.length / wanted;
  return Array.from({ length: columnCount }, (_, column) => {
    const entries: SoulRosterEntry[] = [];
    for (let index = column; index < wanted; index += columnCount) entries.push(roster[Math.floor(index * stride)]);
    return entries;
  });
}
