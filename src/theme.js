import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
  900: "#310817",
  800: "#62102d",
  700: "#931944",
  600: "#c4215a",
  500: "#f52971",
  400: "#f7548d",
  300: "#f97faa",
  200: "#fba9c6",
  100: "#fdd4e3",
        },
        primary: {
  900: "#0d001a",
  800: "#1b0034",
  700: "#28004e",
  600: "#360068",
  500: "#130420",
  400: "#200538",
  300: "#8e66b4",
  200: "#b499cd",
  100: "#d9cce6",
        },
        greenAccent: {
          900: "#2c1c01",
          800: "#583903",
          700: "#835504",
          600: "#af7206",
          500: "#db8e07",
          400: "#e2a539",
          300: "#e9bb6a",
          200: "#f1d29c",
          100: "#f8e8cd",
        },
        redAccent: {
          900: "#2c100f",
          800: "#58201e",
          700: "#832f2c",
          600: "#af3f3b",
          500: "#db4f4a",
          400: "#e2726e",
          300: "#e99592",
          200: "#f1b9b7",
          100: "#f8dcdb",
        },
        blueAccent: {
  900: "#2a2226",
  800: "#54444c",
  700: "#7f6571",
  600: "#a98797",
  500: "#d3a9bd",
  400: "#dcbaca",
  300: "#e5cbd7",
  200: "#eddde5",
  100: "#f6eef2",
        },
      }
    : {
        grey: {
          100: "#310817",
          200: "#62102d",
          300: "#931944",
          400: "#c4215a",
          500: "#f52971",
          600: "#f7548d",
          700: "#f97faa",
          800: "#fba9c6",
          900: "#fdd4e3",
        },
        primary: {
          100: "#0d001a",
          200: "#1b0034",
          300: "#28004e",
          400: "#f2f0f0", 
          500: "#430082",
          600: "#69339b",
          700: "#8e66b4",
          800: "#b499cd",
          900: "#d9cce6",
        },
        greenAccent: {
          100: "#2c1c01",
          200: "#583903",
          300: "#835504",
          400: "#af7206",
          500: "#db8e07",
          600: "#e2a539",
          700: "#e9bb6a",
          800: "#f1d29c",
          900: "#f8e8cd",
        },
        redAccent: {
  100: "#2c100f",
  200: "#58201e",
  300: "#832f2c",
  400: "#af3f3b",
  500: "#db4f4a",
  600: "#e2726e",
  700: "#e99592",
  800: "#f1b9b7",
  900: "#f8dcdb",
        },
        blueAccent: {
          100: "#2a2226",
          200: "#54444c",
          300: "#7f6571",
          400: "#a98797",
          500: "#d3a9bd",
          600: "#dcbaca",
          700: "#e5cbd7",
          800: "#eddde5",
          900: "#f6eef2",
        },
      }),
});

// export const tokens = (mode) => ({
//   ...(mode === "dark"
//     ? {
//         grey: {
//           100: "#e0e0e0",
//           200: "#c2c2c2",
//           300: "#a3a3a3",
//           400: "#858585",
//           500: "#666666",
//           600: "#525252",
//           700: "#3d3d3d",
//           800: "#292929",
//           900: "#141414",
//         },
//         primary: {
//           100: "#d0d1d5",
//           200: "#a1a4ab",
//           300: "#727681",
//           400: "#434957",
//           500: "#141b2d",
//           600: "#101624",
//           700: "#0c101b",
//           800: "#080b12",
//           900: "#040509",
//         },
//         greenAccent: {
//           100: "#dbf5ee",
//           200: "#b7ebde",
//           300: "#94e2cd",
//           400: "#70d8bd",
//           500: "#4cceac",
//           600: "#3da58a",
//           700: "#2e7c67",
//           800: "#1e5245",
//           900: "#0f2922",
//         },
//         redAccent: {
//           100: "#f8dcdb",
//           200: "#f1b9b7",
//           300: "#e99592",
//           400: "#e2726e",
//           500: "#db4f4a",
//           600: "#af3f3b",
//           700: "#832f2c",
//           800: "#58201e",
//           900: "#2c100f",
//         },
//         blueAccent: {
//           100: "#e1e2fe",
//           200: "#c3c6fd",
//           300: "#a4a9fc",
//           400: "#868dfb",
//           500: "#6870fa",
//           600: "#535ac8",
//           700: "#3e4396",
//           800: "#2a2d64",
//           900: "#151632",
//         },
//       }
//     : {
//         grey: {
//           100: "#141414",
//           200: "#292929",
//           300: "#3d3d3d",
//           400: "#525252",
//           500: "#666666",
//           600: "#858585",
//           700: "#a3a3a3",
//           800: "#c2c2c2",
//           900: "#e0e0e0",
//         },
//         primary: {
//           100: "#040509",
//           200: "#080b12",
//           300: "#0c101b",
//           400: "#f2f0f0",
//           500: "#141b2d",
//           600: "#434957",
//           700: "#727681",
//           800: "#a1a4ab",
//           900: "#d0d1d5",
//         },
//         greenAccent: {
//           100: "#0f2922",
//           200: "#1e5245",
//           300: "#2e7c67",
//           400: "#3da58a",
//           500: "#4cceac",
//           600: "#70d8bd",
//           700: "#94e2cd",
//           800: "#b7ebde",
//           900: "#dbf5ee",
//         },
//         redAccent: {
//           100: "#2c100f",
//           200: "#58201e",
//           300: "#832f2c",
//           400: "#af3f3b",
//           500: "#db4f4a",
//           600: "#e2726e",
//           700: "#e99592",
//           800: "#f1b9b7",
//           900: "#f8dcdb",
//         },
//         blueAccent: {
//           100: "#151632",
//           200: "#2a2d64",
//           300: "#3e4396",
//           400: "#535ac8",
//           500: "#6870fa",
//           600: "#868dfb",
//           700: "#a4a9fc",
//           800: "#c3c6fd",
//           900: "#e1e2fe",
//         },
//       }),
// });

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Sorce Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Sorce Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Sorce Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Sorce Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Sorce Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Sorce Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Sorce Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
