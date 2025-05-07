import { Alert, Linking, Platform } from "react-native";

import { openInMaps } from "../openInMaps";

jest.mock("react-native", () => ({
  Platform: { OS: "ios" },
  Linking: { openURL: jest.fn(() => Promise.resolve()) },
  Alert: { alert: jest.fn() },
}));

describe("openInMaps", () => {
  const job = {
    company: { address: { formattedAddress: "123 Main St, City" } },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("opens Apple Maps on iOS", () => {
    (Platform as any).OS = "ios";
    openInMaps(job as any);
    expect(Linking.openURL).toHaveBeenCalledWith(
      expect.stringContaining(
        "http://maps.apple.com/?q=123%20Main%20St%2C%20City"
      )
    );
  });

  it("opens geo URI on Android", () => {
    (Platform as any).OS = "android";
    openInMaps(job as any);
    expect(Linking.openURL).toHaveBeenCalledWith(
      expect.stringContaining("geo:0,0?q=123%20Main%20St%2C%20City")
    );
  });

  it("shows alert if openURL fails", async () => {
    (Platform as any).OS = "ios";
    (Linking.openURL as any).mockImplementationOnce(() => Promise.reject());
    await openInMaps(job as any);
    expect(Alert.alert).toHaveBeenCalledWith(
      "Unable to open maps",
      "123 Main St, City"
    );
  });

  it("does nothing if job is falsy", () => {
    openInMaps(undefined as any);
    expect(Linking.openURL).not.toHaveBeenCalled();
  });
});
