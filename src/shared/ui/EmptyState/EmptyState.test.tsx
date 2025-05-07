import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

import { EmptyState } from "./EmptyState";

describe("EmptyState", () => {
  it("renders message", () => {
    const { getByTestId } = render(<EmptyState message="No data" />);
    expect(getByTestId("empty-state-message").props.children).toBe("No data");
  });

  it("calls onRefresh when refresh button is pressed", () => {
    const onRefresh = jest.fn();
    const { getByTestId } = render(
      <EmptyState message="No data" onRefresh={onRefresh} />
    );
    fireEvent.press(getByTestId("empty-state-refresh-btn"));
    expect(onRefresh).toHaveBeenCalled();
  });
});
