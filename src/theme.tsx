import { createTheme } from "@mui/material";
declare module "@mui/material/styles" {
  interface TypographyVariants {
    title1: {
      fontSize: string;
      fontWeight: number;
    };
  }

  // Allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title1?: {
      fontSize: string;
      fontWeight: number;
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title1: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      light: "rgba(213, 198, 255, 0.3)",
      main: "#7A1CAC",
      contrastText: "#fff",
      dark: "#454A5F" // Color para iconos
    },
    text: {
      primary: "#1E202C",
      secondary: "#2E073F",
    },
    background: {
      paper: "#C1C7DE",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 400,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 400,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 400,
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: 400,
    },
    h5: {
      fontSize: "1.4375rem",
      fontWeight: 400,
    },
    title1: {
      fontSize: "1.18rem",
      fontWeight: 400,
    },
    title2: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    caption: {
      fontSize: "0.6875rem",
      fontWeight: 400,
    },
  },
});

export { theme };
