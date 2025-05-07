import type { ReactNode } from "react";

import type { Job } from "../../model/jobsTypes";

export type JobDetailsSectionProps = {
  icon: ReactNode;
  children: ReactNode;
  style?: any;
};

export type JobDetailsProps = {
  job: Job;
  onAccept?: () => void;
  onReject?: () => void;
};
