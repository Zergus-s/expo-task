import MockAdapter from "axios-mock-adapter";

import { API_BASE_URL } from "../apiConstants";
import axiosInstance from "../axiosInstance";

describe("axiosInstance", () => {
  it("should have the correct baseURL and headers", () => {
    expect(axiosInstance.defaults.baseURL).toBe(API_BASE_URL);
    expect(axiosInstance.defaults.headers["Content-Type"]).toBe(
      "application/json"
    );
  });

  it("should pass through requests and responses", async () => {
    const mock = new MockAdapter(axiosInstance);
    mock.onGet("/test").reply(200, { success: true });

    const response = await axiosInstance.get("/test");
    expect(response.status).toBe(200);
    expect(response.data).toEqual({ success: true });

    mock.restore();
  });

  it("should log error and reject on response error", async () => {
    const mock = new MockAdapter(axiosInstance);
    mock.onGet("/fail").reply(500, { error: "fail" });

    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    await expect(axiosInstance.get("/fail")).rejects.toBeTruthy();
    expect(consoleSpy).toHaveBeenCalledWith("API Error:", { error: "fail" });
    consoleSpy.mockRestore();
    mock.restore();
  });
});
