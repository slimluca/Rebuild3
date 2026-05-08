export type LiveModel = {
  id: string;
  username?: string;
  displayName?: string;
  imageUrl?: string;
  profileUrl?: string;
  tags?: string[];
};

export type ModelFeedResult = {
  models: LiveModel[];
  configured: boolean;
  error?: string;
};
