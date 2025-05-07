import axiosInstance from "../axiosInstance";
import { axiosBaseQuery } from "../baseQuery";

jest.mock("../axiosInstance");

const mockedAxios = axiosInstance as jest.MockedFunction<typeof axiosInstance>;

// Dummy api and extraOptions for tests
const dummyApi = {} as any;
const dummyExtraOptions = {};

describe("axiosBaseQuery", () => {
  const baseUrl = "https://api.example.com";
  const baseQuery = axiosBaseQuery({ baseUrl });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return data on success", async () => {
    mockedAxios.mockResolvedValueOnce({ data: { foo: "bar" } });

    const result = await baseQuery(
      {
        url: "/test",
        method: "GET",
      },
      dummyApi,
      dummyExtraOptions
    );

    expect(mockedAxios).toHaveBeenCalledWith({
      url: "https://api.example.com/test",
      method: "GET",
      data: undefined,
      params: undefined,
      headers: undefined,
    });
    expect(result).toEqual({ data: { foo: "bar" } });
  });

  it("should return error on failure", async () => {
    mockedAxios.mockRejectedValueOnce({
      response: { status: 404, data: { message: "Not found" } },
      message: "Request failed",
    });

    const result = await baseQuery(
      {
        url: "/notfound",
        method: "GET",
      },
      dummyApi,
      dummyExtraOptions
    );

    expect(result).toEqual({
      error: {
        status: 404,
        data: { message: "Not found" },
      },
    });
  });

  it("should handle error without response", async () => {
    mockedAxios.mockRejectedValueOnce({
      response: undefined,
      message: "Network Error",
    });

    const result = await baseQuery(
      {
        url: "/error",
        method: "GET",
      },
      dummyApi,
      dummyExtraOptions
    );

    expect(result).toEqual({
      error: {
        status: undefined,
        data: "Network Error",
      },
    });
  });
});
