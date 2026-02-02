export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  source: string;
  url: string;
  date: string;
};

export type NasaImageItem = {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  dateCreated?: string;
};

export type DonkiEventType =
  | "ALL"
  | "CME"
  | "FLR"
  | "GST"
  | "SEP"
  | "IPS"
  | "MPC";

export type DonkiEvent = {
  id: string;
  type: Exclude<DonkiEventType, "ALL">;
  startTime: string;
  summary?: string;
  speed?: number;
  classification?: string;
  sourceLink?: string;
};
