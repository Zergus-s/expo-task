import { ColorMode } from "@shared/model/general";

import { Job } from "@entities/jobs/model/jobsTypes";

export type JobCardProps = {
  job: Job;
  colorMode: ColorMode;
  onPress?: () => void;
};
