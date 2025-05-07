import { useGetJobsQuery } from "@entities/jobs/api/jobsApi";

export function useGetJobs() {
  const {
    data = { ids: [], entities: {} },
    isLoading: isJobsLoading,
    isFetching: isJobsFetching,
    refetch: refetchJobs,
  } = useGetJobsQuery();

  return {
    jobsData: data,
    isJobsLoading,
    refetchJobs,
    isJobsFetching,
  };
}
