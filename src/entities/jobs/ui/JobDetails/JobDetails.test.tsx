import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

import { JobDetails } from "./JobDetails";

jest.mock("react-redux", () => ({
  useSelector: () => "light",
}));

jest.mock("react-native-safe-area-context", () => ({
  useSafeAreaInsets: () => ({ bottom: 0 }),
}));

const job = {
  id: "1",
  jobTitle: { name: "Cook", imageUrl: "http://img" },
  company: {
    name: "Company",
    address: { formattedAddress: "Addr", zoneId: "Z" },
    reportTo: { name: "Boss", phone: "123" },
  },
  wagePerHourInCents: 1500,
  milesToTravel: 5,
  shifts: [
    { startDate: new Date().toISOString(), endDate: new Date().toISOString() },
  ],
  branch: "",
  branchPhoneNumber: "",
  requirements: ["Knife"],
};

describe("JobDetails", () => {
  it("renders job details", () => {
    const { getByTestId } = render(<JobDetails job={job} />);
    expect(getByTestId("job-details-title").props.children).toBe("Cook");
    expect(getByTestId("job-details-company").props.children).toBe("Company");
  });

  it("calls onAccept and onReject", () => {
    const onAccept = jest.fn();
    const onReject = jest.fn();
    const { getByTestId } = render(
      <JobDetails job={job} onAccept={onAccept} onReject={onReject} />
    );
    fireEvent.press(getByTestId("job-details-accept-btn"));
    fireEvent.press(getByTestId("job-details-reject-btn"));
    expect(onAccept).toHaveBeenCalled();
    expect(onReject).toHaveBeenCalled();
  });
});
