import Toast from "react-native-toast-message";

import i18n from "@shared/lib/i18n";

export function showJobAcceptToast() {
  console.log("showJobAcceptToast");
  Toast.show({
    type: "success",
    text1: i18n.t("toast.jobAccepted"),
    position: "bottom",
  });
}

export function showJobRejectToast() {
  Toast.show({
    type: "info",
    text1: i18n.t("toast.jobRejected"),
    position: "bottom",
  });
}

export function showJobAcceptErrorToast(error: any) {
  Toast.show({
    type: "error",
    text1: i18n.t("toast.acceptJobFailed"),
    text2:
      error?.data?.message || error?.message || i18n.t("toast.unknownError"),
    position: "bottom",
  });
}

export function showJobRejectErrorToast(error: any) {
  Toast.show({
    type: "error",
    text1: i18n.t("toast.rejectJobFailed"),
    text2:
      error?.data?.message || error?.message || i18n.t("toast.unknownError"),
    position: "bottom",
  });
}
