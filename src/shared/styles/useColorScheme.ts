import { useColorScheme as rnUseColorScheme } from "react-native";

import { ColorMode } from "@shared/model/general";

export function useColorScheme(): ColorMode {
  const scheme = rnUseColorScheme();
  return scheme === "dark" ? ColorMode.Dark : ColorMode.Light;
}
