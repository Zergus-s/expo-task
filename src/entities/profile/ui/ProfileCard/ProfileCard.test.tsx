import { render } from "@testing-library/react-native";
import React from "react";

import { ProfileCard } from "./ProfileCard";

jest.mock("react-redux", () => ({
  useSelector: () => "light",
}));

const profile = {
  address: { formattedAddress: "123 Main St", zoneId: "Z1" },
  email: "john@example.com",
  firstName: "John",
  lastName: "Doe",
  maxJobDistance: 10,
  phoneNumber: "1234567890",
  workerId: "1",
};

describe("ProfileCard", () => {
  it("renders profile info", () => {
    const { getByTestId } = render(<ProfileCard profile={profile} />);
    const nameText = getByTestId("profile-card-name").props.children.join(" ");
    expect(nameText.replace(/\s+/g, " ").trim()).toContain("John Doe");
    expect(getByTestId("profile-card-email").props.children).toBe(
      "john@example.com"
    );
    expect(getByTestId("profile-card-phone").props.children).toBe("1234567890");
    expect(getByTestId("profile-card-address").props.children).toBe(
      "123 Main St"
    );
    expect(
      getByTestId("profile-card-distance").props.children.join(" ")
    ).toContain("10");
  });
});
