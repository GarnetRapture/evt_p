export type RoadmapStageId = 'current' | 'platform' | 'combat' | 'world';
export type IssueStageId = 'updated' | 'feedback' | 'developing';

export interface RoadmapStage {
  id: RoadmapStageId;
  title: string;
  description: string;
  status: string;
}

export interface RoadmapNoticeEntry {
  index: string;
  title: string;
  body: string;
  status: string;
}

export interface UpdatePatchEntry {
  id: string;
  title: string;
  body: string;
}

export interface UpdateEntry {
  id: string;
  title: string;
  status: string;
  body: string;
  stage: IssueStageId;
  patchNote?: string;
}
