import { render } from "@testing-library/react-native";
import React from "react";

import { AppHeader } from "./AppHeader";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (k: string) => k }),
}));

jest.mock("react-native-safe-area-context", () => ({
  useSafeAreaInsets: () => ({ top: 0 }),
}));

describe("AppHeader", () => {
  it("renders profile name", () => {
    const { getByTestId } = render(<AppHeader profileName="John Doe" />);
    expect(getByTestId("app-header-profile-name").props.children).toBe(
      "John Doe"
    );
  });
});
