import { render } from "@testing-library/react-native";

import { JobsList } from "./JobsList";

jest.mock("react-redux", () => ({
  useSelector: () => "light",
}));

jest.mock("expo-router", () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

const jobsData = {
  ids: ["1"],
  entities: {
    "1": {
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
    },
  },
};

describe("JobsList", () => {
  it("renders loading", () => {
    const { getByTestId } = render(
      <JobsList data={{ ids: [], entities: {} }} isLoading />
    );
    expect(getByTestId("jobs-list-loading")).toBeTruthy();
  });

  it("renders fetching", () => {
    const { getByTestId } = render(
      <JobsList data={{ ids: [], entities: {} }} isFetching />
    );
    expect(getByTestId("jobs-list-fetching")).toBeTruthy();
  });

  it("renders list", () => {
    const { getByTestId } = render(<JobsList data={jobsData} />);
    expect(getByTestId("jobs-list-root")).toBeTruthy();
  });
});
