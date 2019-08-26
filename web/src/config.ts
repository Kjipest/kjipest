import { darken } from "polished";

export const colors = {
    light: { value: "#fff", comp: "#333", border: darken(0.1, "#fff") },
    stableLight: {
        value: "#eef1f3",
        comp: "#555",
        border: darken(0.2, "#F9F9F9"),
    },
    stable: { value: "#eee", comp: "#333", border: darken(0.2, "#eee") },
    stableDark: {
        value: "#DADADA",
        comp: "#333",
        border: darken(0.2, "#DADADA"),
    },
    lightDark: {
        value: "#888",
        comp: "#FFF",
        border: darken(0.2, "#555"),
    },
    primary: { value: "#3C6FE9", comp: "#fff", border: darken(0.2, "#3C6FE9") },
    secondary: {
        value: "#31B096",
        comp: "#fff",
        border: darken(0.2, "#31B096"),
    },
    action: { value: "#ffd37a", comp: "#333" },
    warning: { value: "#ff9476", comp: "#fff" },
    decline: { value: "#eb4d4b", comp: "#fff" },
    accept: { value: "#27ae60", comp: "#fff", border: darken(0.2, "#27ae60") },
    dark: { value: "#18243f", comp: "#fff" },
    black: { value: "#000", comp: "#fff" },
    textLight: { value: "#787878", comp: "#fff" },
    lightRed: { value: "#e74c3c", comp: "#fff" },
    lightYellow: { value: "#fc9c12", comp: "#fff" },
    dodgerBlue: { value: "#1E90FF", comp: "fff" },
    deepSkyBlue: { value: "#00BFFF", comp: "fff" },
};
