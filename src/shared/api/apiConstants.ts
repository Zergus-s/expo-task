export const API_BASE_URL = "https://test.swipejobs.com/api";
export const TEST_WORKER_ID = "7f90df6e-b832-44e2-b624-3143d428001f";
export const getProfileUrl = (workerId: string): string =>
  `/worker/${workerId}/profile`;
export const getMatchesUrl = (workerId: string): string =>
  `/worker/${workerId}/matches`;
export const getAcceptJobUrl = (workerId: string, jobId: string): string =>
  `/worker/${workerId}/job/${jobId}/accept`;
export const getRejectJobUrl = (workerId: string, jobId: string): string =>
  `/worker/${workerId}/job/${jobId}/reject`;
