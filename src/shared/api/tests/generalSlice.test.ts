import { ColorMode } from "../../model/general";
import reducer, { setColorMode, toggleColorMode } from "../generalSlice";

describe("generalSlice", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "@@INIT" })).toEqual({
      colorMode: ColorMode.Light,
    });
  });

  it("should handle setColorMode", () => {
    const prevState = { colorMode: ColorMode.Light };
    expect(reducer(prevState, setColorMode(ColorMode.Dark))).toEqual({
      colorMode: ColorMode.Dark,
    });
  });

  it("should handle toggleColorMode from Light to Dark", () => {
    const prevState = { colorMode: ColorMode.Light };
    expect(reducer(prevState, toggleColorMode())).toEqual({
      colorMode: ColorMode.Dark,
    });
  });

  it("should handle toggleColorMode from Dark to Light", () => {
    const prevState = { colorMode: ColorMode.Dark };
    expect(reducer(prevState, toggleColorMode())).toEqual({
      colorMode: ColorMode.Light,
    });
  });
});
