import { configureStore } from "@reduxjs/toolkit";
import { renderHook } from "@testing-library/react-hooks";
import MockAdapter from "axios-mock-adapter";
import React from "react";
import { Provider } from "react-redux";

import { TEST_WORKER_ID, getProfileUrl } from "@shared/api/apiConstants";
import axiosInstance from "@shared/api/axiosInstance";

import { profileApi, useGetProfileQuery } from "../profileApi";
import { getFakeProfile, getFakeProfileDto } from "./doubles/Profile.doubles";

function setupApiStore() {
  const store = configureStore({
    reducer: {
      [profileApi.reducerPath]: profileApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(profileApi.middleware),
  });
  return store;
}

describe("profileApi integration", () => {
  const mock = new MockAdapter(axiosInstance);

  afterEach(() => {
    mock.reset();
  });

  it("fetches and maps profile data", async () => {
    mock.onGet(getProfileUrl(TEST_WORKER_ID)).reply(200, getFakeProfileDto());

    const store = setupApiStore();

    const wrapper = (props: { children: React.ReactNode }) =>
      React.createElement(Provider, { store, children: props.children });

    const { result, waitForNextUpdate } = renderHook(
      () => useGetProfileQuery(),
      { wrapper }
    );

    await waitForNextUpdate();

    expect(result.current.isSuccess).toBe(true);
    expect(result.current.data).toEqual(getFakeProfile());
  });

  it("handles API error", async () => {
    mock.onGet(getProfileUrl(TEST_WORKER_ID)).reply(500, { message: "fail" });

    const store = setupApiStore();

    const wrapper = (props: { children: React.ReactNode }) =>
      React.createElement(Provider, { store, children: props.children });

    const { result, waitForNextUpdate } = renderHook(
      () => useGetProfileQuery(),
      { wrapper }
    );

    await waitForNextUpdate();

    expect(result.current.isError).toBe(true);
    expect(result.current.error).toBeDefined();
  });
});
