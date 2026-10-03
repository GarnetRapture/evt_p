export type RoadmapStageId = 'investigating' | 'verifying' | 'connecting';

export interface RoadmapStage {
  id: RoadmapStageId;
  title: string;
  description: string;
}

export interface UpdateEntry {
  id: string;
  title: string;
  status: string;
  body: string;
  stage: RoadmapStageId;
  patchNote?: string;
}
