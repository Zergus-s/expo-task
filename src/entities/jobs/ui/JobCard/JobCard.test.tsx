import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

import { ColorMode } from "@shared/model/general";

import { JobCard } from "./JobCard";

const job = {
  id: "1",
  jobTitle: { name: "Cook", imageUrl: "http://img" },
  company: {
    name: "Company",
    address: { formattedAddress: "Addr", zoneId: "Z" },
  },
  wagePerHourInCents: 1500,
  milesToTravel: 5,
  shifts: [],
  branch: "",
  branchPhoneNumber: "",
  requirements: [],
};

describe("JobCard", () => {
  it("renders job info", () => {
    const { getByTestId } = render(
      <JobCard job={job} colorMode={ColorMode.Light} />
    );
    expect(getByTestId("job-card-title").props.children).toBe("Cook");
    expect(getByTestId("job-card-company").props.children).toBe("Company");
    expect(getByTestId("job-card-address").props.children).toBe("Addr");
    expect(getByTestId("job-card-wage").props.children).toContain("15.00");
    expect(getByTestId("job-card-distance").props.children).toContain("5.0");
  });

  it("calls onPress", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <JobCard job={job} colorMode={ColorMode.Light} onPress={onPress} />
    );
    fireEvent.press(getByTestId("job-card-root"));
    expect(onPress).toHaveBeenCalled();
  });
});
