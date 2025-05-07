import { useCallback } from "react";

import { showJobRejectErrorToast, showJobRejectToast } from "@shared/lib/toast";

import { useRejectJobMutation } from "@entities/jobs/api/jobsApi";
import { useGetJobsQuery } from "@entities/jobs/api/jobsApi";

export function useRejectJob() {
  const [
    rejectJob,
    { isLoading, isSuccess, isError, error, data /*, jobDetails*/ },
  ] = useRejectJobMutation();

  const { refetch } = useGetJobsQuery();

  const handleRejectJob = useCallback(
    async (jobId: string) => {
      await rejectJob({
        jobId,
        onSuccess: showJobRejectToast,
        onError: showJobRejectErrorToast,
      }).unwrap();
      refetch();
    },
    [rejectJob, refetch]
  );

  return {
    rejectJob: handleRejectJob,
    isLoading,
    isSuccess,
    isError,
    error,
    data,
  };
}
