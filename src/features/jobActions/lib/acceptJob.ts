import { useCallback } from "react";

import { showJobAcceptErrorToast, showJobAcceptToast } from "@shared/lib/toast";

import { useAcceptJobMutation } from "@entities/jobs/api/jobsApi";
import { useGetJobsQuery } from "@entities/jobs/api/jobsApi";

export function useAcceptJob() {
  const [acceptJob, { isLoading, isSuccess, isError, error, data }] =
    useAcceptJobMutation();
  const { refetch } = useGetJobsQuery();

  const handleAcceptJob = useCallback(
    async (jobId: string) => {
      await acceptJob({
        jobId,
        onSuccess: showJobAcceptToast,
        onError: showJobAcceptErrorToast,
      }).unwrap();
      refetch();
    },
    [acceptJob, refetch]
  );

  return {
    acceptJob: handleAcceptJob,
    isLoading,
    isSuccess,
    isError,
    error,
    data,
  };
}
