import * as toast from "../toast";

jest.mock("react-native-toast-message", () => ({
  show: jest.fn(),
}));

jest.mock("../i18n", () => ({
  __esModule: true,
  default: {
    t: (key: string) => key,
  },
}));

const Toast = require("react-native-toast-message");

describe("toast functions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("showJobAcceptToast shows success toast", () => {
    toast.showJobAcceptToast();
    expect(Toast.show).toHaveBeenCalledWith(
      expect.objectContaining({ type: "success", text1: "toast.jobAccepted" })
    );
  });

  it("showJobRejectToast shows info toast", () => {
    toast.showJobRejectToast();
    expect(Toast.show).toHaveBeenCalledWith(
      expect.objectContaining({ type: "info", text1: "toast.jobRejected" })
    );
  });

  it("showJobAcceptErrorToast shows error toast with error message", () => {
    toast.showJobAcceptErrorToast({ data: { message: "fail" } });
    expect(Toast.show).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "error",
        text1: "toast.acceptJobFailed",
        text2: "fail",
      })
    );
  });

  it("showJobAcceptErrorToast shows error toast with fallback", () => {
    toast.showJobAcceptErrorToast({});
    expect(Toast.show).toHaveBeenCalledWith(
      expect.objectContaining({ type: "error", text2: "toast.unknownError" })
    );
  });

  it("showJobRejectErrorToast shows error toast with error message", () => {
    toast.showJobRejectErrorToast({ message: "fail2" });
    expect(Toast.show).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "error",
        text1: "toast.rejectJobFailed",
        text2: "fail2",
      })
    );
  });
});
