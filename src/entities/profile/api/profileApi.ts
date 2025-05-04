import { createApi } from "@reduxjs/toolkit/query/react";

import { TEST_WORKER_ID, getProfileUrl } from "@shared/api/apiConstants";
import { axiosBaseQuery } from "@shared/api/baseQuery";

import { Profile, ProfileDto } from "../model/profile";
import { profileDataMapper } from "./profileMapper";

export const profileApi = createApi({
  reducerPath: "profile",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    getProfile: builder.query<Profile, void>({
      query: () => ({ url: getProfileUrl(TEST_WORKER_ID), method: "GET" }),
      providesTags: ["Profile"],
      transformResponse: (response: ProfileDto) => profileDataMapper(response),
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;
