import { createEntityAdapter } from "@reduxjs/toolkit";
import { createApi } from "@reduxjs/toolkit/query/react";

import {
  TEST_WORKER_ID,
  getAcceptJobUrl,
  getMatchesUrl,
  getRejectJobUrl,
} from "@shared/api/apiConstants";
import { axiosBaseQuery } from "@shared/api/baseQuery";

import { Job, JobDto, JobsApiState } from "../model/jobsTypes";
import { jobDataMapper } from "./jobDataMapper";

export const jobsAdapter = createEntityAdapter({
  selectId: (job: Job) => job.id,
});

export const jobsApi = createApi({
  reducerPath: "jobs",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["JobList"],
  endpoints: (builder) => ({
    getJobs: builder.query<JobsApiState, void>({
      query: () => ({ url: getMatchesUrl(TEST_WORKER_ID), method: "GET" }),
      providesTags: (result) =>
        result && "ids" in result
          ? [
              { type: "JobList", id: "LIST" },
              ...result.ids.map((id) => ({
                type: "JobList" as const,
                id,
              })),
            ]
          : [{ type: "JobList", id: "LIST" }],
      transformResponse: (response: JobDto[]) =>
        jobsAdapter.setAll(
          jobsAdapter.getInitialState(),
          response.map(jobDataMapper)
        ),
    }),
    acceptJob: builder.mutation<
      { success: boolean; message: string },
      { jobId: string; onSuccess: () => void; onError: (error: any) => void }
    >({
      query: ({ jobId }) => ({
        url: getAcceptJobUrl(TEST_WORKER_ID, jobId),
        method: "GET",
      }),
      invalidatesTags: [{ type: "JobList", id: "LIST" }],
      async onQueryStarted(
        { jobId, onSuccess, onError },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          jobsApi.util.updateQueryData("getJobs", undefined, (draft) => {
            draft.ids = draft.ids.filter((id) => id !== jobId);
          })
        );
        try {
          await queryFulfilled;
          onSuccess();
        } catch (error) {
          patchResult.undo();
          onError(error);
        }
      },
    }),
    rejectJob: builder.mutation<
      { success: boolean; message: string },
      { jobId: string; onSuccess: () => void; onError: (error: any) => void }
    >({
      query: ({ jobId }) => ({
        url: getRejectJobUrl(TEST_WORKER_ID, jobId),
        method: "GET",
      }),
      invalidatesTags: [{ type: "JobList", id: "LIST" }],
      async onQueryStarted(
        { jobId, onSuccess, onError },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          jobsApi.util.updateQueryData("getJobs", undefined, (draft) => {
            draft.ids = draft.ids.filter((id) => id !== jobId);
          })
        );
        try {
          await queryFulfilled;
          onSuccess();
        } catch (error) {
          patchResult.undo();
          onError(error);
        }
      },
    }),
  }),
});

export const { useGetJobsQuery, useAcceptJobMutation, useRejectJobMutation } =
  jobsApi;

export const jobsSelectors = jobsAdapter.getSelectors<{
  jobs: JobsApiState;
}>((state) => state.jobs || jobsAdapter.getInitialState());
