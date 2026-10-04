export type GameFeatureStage = 'release' | 'current';

export interface GameFeatureEntry {
  index: string;
  title: string;
  stage: GameFeatureStage;
  body: string;
  items: readonly string[];
}
