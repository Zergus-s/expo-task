import { configureStore } from "@reduxjs/toolkit";
import { renderHook } from "@testing-library/react-hooks";
import MockAdapter from "axios-mock-adapter";
import React from "react";
import { Provider } from "react-redux";

import {
  TEST_WORKER_ID,
  getAcceptJobUrl,
  getMatchesUrl,
  getRejectJobUrl,
} from "@shared/api/apiConstants";
import axiosInstance from "@shared/api/axiosInstance";

import {
  jobsApi,
  useAcceptJobMutation,
  useGetJobsQuery,
  useRejectJobMutation,
} from "../jobsApi";
import { getFakeJobDto, getFakeJobsApiState } from "./doubles/Jobs.doubles";

function setupApiStore() {
  const store = configureStore({
    reducer: {
      [jobsApi.reducerPath]: jobsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(jobsApi.middleware),
  });
  return store;
}

describe("jobsApi integration", () => {
  const mock = new MockAdapter(axiosInstance);

  afterEach(() => {
    mock.reset();
  });

  it("fetches and maps jobs data", async () => {
    mock.onGet(getMatchesUrl(TEST_WORKER_ID)).reply(200, [getFakeJobDto()]);

    const store = setupApiStore();

    const wrapper = (props: { children: React.ReactNode }) =>
      React.createElement(Provider, { store, children: props.children });

    const { result, waitForNextUpdate } = renderHook(() => useGetJobsQuery(), {
      wrapper,
    });

    await waitForNextUpdate();

    expect(result.current.isSuccess).toBe(true);
    expect(result.current.data).toBeDefined();
    if (result.current.data) {
      expect(result.current.data.ids).toEqual(["job-1"]);
      expect(result.current.data.entities["job-1"]).toMatchObject(
        getFakeJobsApiState().entities["job-1"]
      );
    }
  });

  it("handles API error", async () => {
    mock.onGet(getMatchesUrl(TEST_WORKER_ID)).reply(500, { message: "fail" });

    const store = setupApiStore();

    const wrapper = (props: { children: React.ReactNode }) =>
      React.createElement(Provider, { store, children: props.children });

    const { result, waitForNextUpdate } = renderHook(() => useGetJobsQuery(), {
      wrapper,
    });

    await waitForNextUpdate();

    expect(result.current.isError).toBe(true);
    expect(result.current.error).toBeDefined();
  });

  it("accepts a job", async () => {
    mock
      .onGet(getAcceptJobUrl(TEST_WORKER_ID, "job-1"))
      .reply(200, { success: true, message: "accepted" });

    const store = setupApiStore();

    const wrapper = (props: { children: React.ReactNode }) =>
      React.createElement(Provider, { store, children: props.children });

    const { result, waitForNextUpdate } = renderHook(
      () => useAcceptJobMutation(),
      { wrapper }
    );

    const [acceptJob] = result.current;
    const promise = acceptJob({
      jobId: "job-1",
      onSuccess: jest.fn(),
      onError: jest.fn(),
    });

    await expect(promise.unwrap()).resolves.toEqual({
      success: true,
      message: "accepted",
    });
  });

  it("rejects a job", async () => {
    mock
      .onGet(getRejectJobUrl(TEST_WORKER_ID, "job-1"))
      .reply(200, { success: true, message: "rejected" });

    const store = setupApiStore();

    const wrapper = (props: { children: React.ReactNode }) =>
      React.createElement(Provider, { store, children: props.children });

    const { result, waitForNextUpdate } = renderHook(
      () => useRejectJobMutation(),
      { wrapper }
    );

    const [rejectJob] = result.current;
    const promise = rejectJob({
      jobId: "job-1",
      onSuccess: jest.fn(),
      onError: jest.fn(),
    });

    await expect(promise.unwrap()).resolves.toEqual({
      success: true,
      message: "rejected",
    });
  });
});
