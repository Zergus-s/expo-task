const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

const colorPalettes = {
  light: {
    text: "#3b3b3b",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    accept: "#4CAF50",
    reject: "#F44336",
    profileCardBackground: "#f0f0f0",
  },
  dark: {
    text: "#b0afaf",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    accept: "#81C784",
    reject: "#E57373",
    profileCardBackground: "#424242",
  },
};

export const getColors = (mode: "light" | "dark") => colorPalettes[mode];

export default colorPalettes;
