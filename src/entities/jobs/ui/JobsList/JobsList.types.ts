import { JobsApiState } from "@entities/jobs/model/jobsTypes";

export type JobsListProps = {
  data: JobsApiState;
  isLoading?: boolean;
  isFetching?: boolean;
  onRefresh?: () => void;
};
